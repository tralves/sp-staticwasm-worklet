class SPProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    // current sample-frame and time at the moment of instantiation
    // to see values change, you can put these two lines in process method
    console.log(currentFrame);
    console.log(currentTime);
    console.log(options);

    this.mode = options.processorOptions.mode;
    this.samplerate = options.processorOptions.samplerate;

    this.id = Math.floor(Math.random() * Date.now());
    this.linearMemory = null;
    this.__lastObject__ = null;
    this.__classUnderConstruction__ = null;
    this.__functions__ = {};
    this.__classes__ = {};
    this.__exportsToWasm__ = {};
    this.__views__ = new Set();

    this.module = null;

    this.afterWASMLoaded = null;

    this.port.onmessage = (event) => this.onMessageFromMainScope(event.data);

    let glue = this;

    this.Uint8Buffer = class {
      constructor(length) {
        return glue.createViewFromType(1, glue.malloc(length), length);
      }
    };
    this.Int8Buffer = class {
      constructor(length) {
        return glue.createViewFromType(2, glue.malloc(length), length);
      }
    };
    this.Uint16Buffer = class {
      constructor(length) {
        return glue.createViewFromType(3, glue.malloc(length * 2), length);
      }
    };
    this.Int16Buffer = class {
      constructor(length) {
        return glue.createViewFromType(4, glue.malloc(length * 2), length);
      }
    };
    this.Uint32Buffer = class {
      constructor(length) {
        return glue.createViewFromType(5, glue.malloc(length * 4), length);
      }
    };
    this.Int32Buffer = class {
      constructor(length) {
        return glue.createViewFromType(6, glue.malloc(length * 4), length);
      }
    };
    this.BigUint64Buffer = class {
      constructor(length) {
        return glue.createViewFromType(7, glue.malloc(length * 8), length);
      }
    };
    this.BigInt64Buffer = class {
      constructor(length) {
        return glue.createViewFromType(8, glue.malloc(length * 8), length);
      }
    };
    this.Float32Buffer = class {
      constructor(length) {
        return glue.createViewFromType(9, glue.malloc(length * 4), length);
      }
    };
    this.Float64Buffer = class {
      constructor(length) {
        return glue.createViewFromType(10, glue.malloc(length * 8), length);
      }
    };

    SPModule({
      postRun: (module) => {
        console.log("here!!!");
        this.module = module;

        this.module._emscripten_run_script = function(ptr) {
          const code = UTF8ToString(ptr);
          console.log(code);
          eval(code);
        }

        this.wasmInstance = module.asm;

        this.__functions__ = this.wasmInstance;
        this.linearMemory = this.wasmInstance.memory.buffer;
        this.__memorygrowpointer__ = this.__functions__.__malloc__(16);
        this.__memorygrowview__ = new Uint8Array(this.linearMemory, this.__memorygrowpointer__, 16);
        this.__functionsWithNamespace__ = {};

        let outputBuffer = this.__functions__.__malloc__(1024);
        let stringview = new Uint8Array(this.linearMemory, this.__functions__.__malloc__(1024), 1024);
        for (let f in this.__functions__) {
          if (f != "__demangle__") {
            let length = this.__functions__.__demangle__(this.toWASMString(f, stringview), outputBuffer);
            if (length > 0) {
              let name = this.toString(outputBuffer, length);
              let par = name.indexOf("(");
              if (par > 0) name = name.substring(0, par);

              let namespace = name.lastIndexOf("::");
              if (namespace > 0) {
                namespace = name.lastIndexOf("::", namespace - 1);
                if (namespace > 0) name = name.substr(namespace + 2);
              }

              // class members have namespaces removed from this point, but functions not
              let split = name.split("::", 2);
              if (split.length == 2) {
                if (!this.__functionsWithNamespace__[split[0]]) this.__functionsWithNamespace__[split[0]] = {};
                this.__functionsWithNamespace__[split[0]][split[1]] = this.__functions__[f];
              }

              this[name] = this.__functions__[f];
            } else this[f] = this.__functions__[f];
          }
        }
        this.free(outputBuffer);
        this.free(stringview.byteOffset);

        this.__functions__.__initialize__();
        delete this.__functionsWithNamespace__;
        this.logMemory();
        this.__classUnderConstruction__ = null;

        if (typeof this.afterWASMLoaded === "function") afterWASMLoaded();

        this.inputBuffer = new this.Float32Buffer(512 * 2);
        this.outputBuffer = new this.Float32Buffer(512 * 2);

        this.wasmInitialized = true;
        this.samplesLoaded = this.mode === 'sample' ? false : true;

        this.initialize(this.samplerate);

        this.port.postMessage({type: 'ready'});
      },
    });
  }

  onMessageFromMainScope(message) {
    console.log(message);
    switch (message.type) {
      case 'setSamples':
          const a = this.setSamples(
            this.arrayBufferToWASM(message.samples.A2), message.samples.A2.byteLength,
            this.arrayBufferToWASM(message.samples.gong_1), message.samples.gong_1.byteLength,
            this.arrayBufferToWASM(message.samples.hiHat_sample, message.samples.hiHat_sample.byteLength,)
          );
          console.log(a);
          this.samplesLoaded = true;
        break;
    
      default:
        break;
    }
  }

  process(inputs, outputs, parameters) {
    if (!this.wasmInitialized || !this.samplesLoaded) return true;

    if (inputs[0].length > 1) this.bufferToWASM(this.inputBuffer, inputs);

    const frameSize = 256;

    switch (this.mode) {
      case 'feedback':
        this.processFeedback(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'reverb':
        this.processReverb(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'sample':
        this.processSample(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'sampleperf':
        this.processSamplePerformance(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'pink-noise':
        this.processWhiteNoise(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'pink-noise-sp':
        this.processWhiteNoiseSP(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
      case 'sound':
        this.processSound(this.inputBuffer.pointer, this.outputBuffer.pointer, frameSize);
      break;
    
      default:
        break;
    }
    
    if (outputs[0].length > 1) this.bufferToJS(this.outputBuffer, outputs);

    return true;
  }

  updateBuffer(buffer, arraybuffer) {
    buffer.__arraybuffer__ = arraybuffer;
    switch (buffer.__type__) {
      case 1:
        buffer.array = new Uint8Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? buffer.__arraybuffer__.byteLength - buffer.pointer : buffer.length
        );
        break;
      case 2:
        buffer.array = new Int8Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? buffer.__arraybuffer__.byteLength - buffer.pointer : buffer.length
        );
        break;
      case 3:
        buffer.array = new Uint16Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 2 : buffer.length
        );
        break;
      case 4:
        buffer.array = new Int16Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 2 : buffer.length
        );
        break;
      case 5:
        buffer.array = new Uint32Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 4 : buffer.length
        );
        break;
      case 6:
        buffer.array = new Int32Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 4 : buffer.length
        );
        break;
      case 7:
        buffer.array = new BigUint64Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 8 : buffer.length
        );
        break;
      case 8:
        buffer.array = new BigInt64Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 8 : buffer.length
        );
        break;
      case 9:
        buffer.array = new Float32Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 4 : buffer.length
        );
        break;
      case 10:
        buffer.array = new Float64Array(
          buffer.__arraybuffer__,
          buffer.pointer,
          buffer.length < 0 ? (buffer.__arraybuffer__.byteLength - buffer.pointer) / 8 : buffer.length
        );
        break;
    }
  }

  createViewFromType(type, pointer, length) {
    let buffer = {
      pointer: pointer,
      length: length,
      __arraybuffer__: this.linearMemory,
      __type__: type,
      __glue__: this,
      free() {
        this.__glue__.free(this.pointer);
        let obj = this;
        Object.getOwnPropertyNames(obj).forEach(function (property) {
          delete obj[property];
        });
        Object.setPrototypeOf(obj, null);
      },
    };
    this.updateBuffer(buffer, this.linearMemory);
    this.__views__.add(buffer);
    return buffer;
  }

  toString(pointer, strlen = 0) {
    let view = null;
    if (strlen < 1) {
      let viewLength = this.linearMemory.byteLength - pointer;
      if (viewLength > 16384) viewLength = 16384;
      view = new Uint8Array(this.linearMemory, pointer, viewLength);
      for (strlen = 0; strlen < viewLength; strlen++) if (view[strlen] == 0) break;
    } else view = new Uint8Array(this.linearMemory, pointer, strlen);

    let str = "",
      i = 0,
      octet,
      bytesNeeded,
      codePoint,
      k;
    while (i < strlen) {
      octet = view[i];
      bytesNeeded = codePoint = 0;

      if (octet <= 0x7f) {
        bytesNeeded = 0;
        codePoint = octet & 0xff;
      } else if (octet <= 0xdf) {
        bytesNeeded = 1;
        codePoint = octet & 0x1f;
      } else if (octet <= 0xef) {
        bytesNeeded = 2;
        codePoint = octet & 0x0f;
      } else if (octet <= 0xf4) {
        bytesNeeded = 3;
        codePoint = octet & 0x07;
      }

      if (strlen - i - bytesNeeded > 0) {
        k = 0;
        while (k < bytesNeeded) {
          octet = view[i + k + 1];
          codePoint = (codePoint << 6) | (octet & 0x3f);
          k += 1;
        }
      } else {
        codePoint = 0xfffd;
        bytesNeeded = strlen - i;
      }

      str += String.fromCodePoint(codePoint);
      i += bytesNeeded + 1;
    }
    return str;
  }

  toWASMString(str, view = null) {
    let length = str.length,
      i = 0,
      codePoint,
      c,
      bits,
      destination = 0,
      maxBytes = length * 4 + 1;
    if (view == null) view = new Uint8Array(this.linearMemory, this.malloc(maxBytes), maxBytes);
    while (i < length) {
      codePoint = str.codePointAt(i);
      c = bits = 0;

      if (codePoint <= 0x0000007f) {
        c = 0;
        bits = 0x00;
      } else if (codePoint <= 0x000007ff) {
        c = 6;
        bits = 0xc0;
      } else if (codePoint <= 0x0000ffff) {
        c = 12;
        bits = 0xe0;
      } else if (codePoint <= 0x001fffff) {
        c = 18;
        bits = 0xf0;
      }

      view[destination++] = bits | (codePoint >> c);
      c -= 6;
      while (c >= 0) {
        view[destination++] = 0x80 | ((codePoint >> c) & 0x3f);
        c -= 6;
      }
      i += codePoint >= 0x10000 ? 2 : 1;
    }

    view[destination] = 0;
    return view.byteOffset;
  }

  bufferToWASM(buffer, input) {
    let inBufferL = null;
    let inBufferR = null;
    if (typeof input.getChannelData === "function") {
      inBufferL = input.getChannelData(0);
      inBufferR = input.getChannelData(1);
    } else {
      inBufferL = input[0][0];
      inBufferR = input[0][1];
    }
    for (let n = 0, i = 0; n < buffer.array.length; n++, i++) {
      buffer.array[n++] = inBufferL[i];
      buffer.array[n] = inBufferR[i];
    }
  }

  bufferToJS(buffer, output) {
    let outBufferL = null;
    let outBufferR = null;
    if (typeof output.getChannelData === "function") {
      outBufferL = output.getChannelData(0);
      outBufferR = output.getChannelData(1);
    } else {
      outBufferL = output[0][0];
      outBufferR = output[0][1];
    }
    for (let n = 0, i = 0; n < buffer.array.length; n++, i++) {
      outBufferL[i] = buffer.array[n++];
      outBufferR[i] = buffer.array[n];
    }
  }

  arrayBufferToWASM(arrayBuffer, offset = 0) {
    let pointer = this.malloc(arrayBuffer.byteLength + offset);
    new Uint8Array(this.linearMemory).set(new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength), pointer + offset);
    return pointer;
  }

  logMemory() {
    console.log(
      "WASM memory " +
        this.id +
        ": " +
        this.niceSize(this.__functions__.__stacksize__()) +
        " stack, " +
        this.niceSize(this.linearMemory.byteLength - this.__functions__.__heapbase__()) +
        " heap, " +
        this.niceSize(this.linearMemory.byteLength) +
        " total."
    );
  }

  niceSize(bytes) {
    if (bytes == 0) return "0 byte";
    else if (bytes == 1) return "1 byte";
    const postfix = [" bytes", " kb", " mb", " gb", " tb"];
    let n = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, n), 2) + postfix[n];
  }

  malloc(bytes) {
    let pointer = this.__functions__.__malloc__(bytes);
    if (this.__memorygrowview__.buffer.byteLength < 1) this.updateMemoryViews();
    return pointer;
  }

  updateMemoryViews() {
    for (let buffer of this.__views__) this.updateBuffer(buffer, this.linearMemory);
    this.__memorygrowview__ = new Uint8Array(this.linearMemory, this.__memorygrowpointer__, 16);
  }

  free(pointer) {
    this.__functions__.__free__(pointer);
  }
}

registerProcessor("sp-processor", SPProcessor);
