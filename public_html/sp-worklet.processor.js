
var SPModule = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(SPModule) {
  SPModule = SPModule || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof SPModule !== 'undefined' ? SPModule : {};

// See https://caniuse.com/mdn-javascript_builtins_object_assign
var objAssign = Object.assign;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
        Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z10initializej')) {
        Object.defineProperty(Module['ready'], '__Z10initializej', { configurable: true, get: function() { abort('You are getting __Z10initializej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z10initializej', { configurable: true, set: function() { abort('You are setting __Z10initializej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10InitializeEPKcbbbbbbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10InitializeEPKcbbbbbbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10InitializeEPKcbbbbbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10InitializeEPKcbbbbbbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10InitializeEPKcbbbbbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6ReverbC1Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbC1Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6ReverbC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbC1Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6ReverbC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7VersionEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7VersionEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7VersionEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7VersionEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7VersionEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z15processFeedbackPfS_i')) {
        Object.defineProperty(Module['ready'], '__Z15processFeedbackPfS_i', { configurable: true, get: function() { abort('You are getting __Z15processFeedbackPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z15processFeedbackPfS_i', { configurable: true, set: function() { abort('You are setting __Z15processFeedbackPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z13processReverbPfS_i')) {
        Object.defineProperty(Module['ready'], '__Z13processReverbPfS_i', { configurable: true, get: function() { abort('You are getting __Z13processReverbPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z13processReverbPfS_i', { configurable: true, set: function() { abort('You are setting __Z13processReverbPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z13processSamplePfS_i')) {
        Object.defineProperty(Module['ready'], '__Z13processSamplePfS_i', { configurable: true, get: function() { abort('You are getting __Z13processSamplePfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z13processSamplePfS_i', { configurable: true, set: function() { abort('You are setting __Z13processSamplePfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z19processWhiteNoiseSPPfS_i')) {
        Object.defineProperty(Module['ready'], '__Z19processWhiteNoiseSPPfS_i', { configurable: true, get: function() { abort('You are getting __Z19processWhiteNoiseSPPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z19processWhiteNoiseSPPfS_i', { configurable: true, set: function() { abort('You are setting __Z19processWhiteNoiseSPPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Generator8generateEPfj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator8generateEPfj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Generator8generateEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator8generateEPfj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Generator8generateEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z17processWhiteNoisePfS_i')) {
        Object.defineProperty(Module['ready'], '__Z17processWhiteNoisePfS_i', { configurable: true, get: function() { abort('You are getting __Z17processWhiteNoisePfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z17processWhiteNoisePfS_i', { configurable: true, set: function() { abort('You are setting __Z17processWhiteNoisePfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z12processSoundPfS_i')) {
        Object.defineProperty(Module['ready'], '__Z12processSoundPfS_i', { configurable: true, get: function() { abort('You are getting __Z12processSoundPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z12processSoundPfS_i', { configurable: true, set: function() { abort('You are setting __Z12processSoundPfS_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z10setSamplesPcjS_jS_j')) {
        Object.defineProperty(Module['ready'], '__Z10setSamplesPcjS_jS_j', { configurable: true, get: function() { abort('You are getting __Z10setSamplesPcjS_jS_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z10setSamplesPcjS_jS_j', { configurable: true, set: function() { abort('You are setting __Z10setSamplesPcjS_jS_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory7getSizeEPv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7getSizeEPv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory7getSizeEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7getSizeEPv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory7getSizeEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory13getSamplerateEPv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory13getSamplerateEPv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory13getSamplerateEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory13getSamplerateEPv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory13getSamplerateEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4playEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4playEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer4playEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4playEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer4playEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__Z11randomNoisev')) {
        Object.defineProperty(Module['ready'], '__Z11randomNoisev', { configurable: true, get: function() { abort('You are getting __Z11randomNoisev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__Z11randomNoisev', { configurable: true, set: function() { abort('You are setting __Z11randomNoisev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___malloc__')) {
        Object.defineProperty(Module['ready'], '___malloc__', { configurable: true, get: function() { abort('You are getting ___malloc__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___malloc__', { configurable: true, set: function() { abort('You are setting ___malloc__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___demangle__')) {
        Object.defineProperty(Module['ready'], '___demangle__', { configurable: true, get: function() { abort('You are getting ___demangle__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___demangle__', { configurable: true, set: function() { abort('You are setting ___demangle__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___heapbase__')) {
        Object.defineProperty(Module['ready'], '___heapbase__', { configurable: true, get: function() { abort('You are getting ___heapbase__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___heapbase__', { configurable: true, set: function() { abort('You are setting ___heapbase__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___setint64__')) {
        Object.defineProperty(Module['ready'], '___setint64__', { configurable: true, get: function() { abort('You are getting ___setint64__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___setint64__', { configurable: true, set: function() { abort('You are setting ___setint64__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___stacksize__')) {
        Object.defineProperty(Module['ready'], '___stacksize__', { configurable: true, get: function() { abort('You are getting ___stacksize__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___stacksize__', { configurable: true, set: function() { abort('You are setting ___stacksize__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___initialize__')) {
        Object.defineProperty(Module['ready'], '___initialize__', { configurable: true, get: function() { abort('You are getting ___initialize__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___initialize__', { configurable: true, set: function() { abort('You are setting ___initialize__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___lastarraylength__')) {
        Object.defineProperty(Module['ready'], '___lastarraylength__', { configurable: true, get: function() { abort('You are getting ___lastarraylength__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___lastarraylength__', { configurable: true, set: function() { abort('You are setting ___lastarraylength__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___free__')) {
        Object.defineProperty(Module['ready'], '___free__', { configurable: true, get: function() { abort('You are getting ___free__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___free__', { configurable: true, set: function() { abort('You are setting ___free__ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory19createSelfContainedEjjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory19createSelfContainedEjjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory19createSelfContainedEjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory19createSelfContainedEjjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory19createSelfContainedEjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory6appendEPvS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6appendEPvS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory6appendEPvS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6appendEPvS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory6appendEPvS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory6createEjjjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6createEjjjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory6createEjjjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6createEjjjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory6createEjjjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory6retainEPv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6retainEPv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory6retainEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory6retainEPv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory6retainEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory7releaseEPv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7releaseEPv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory7releaseEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7releaseEPv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory7releaseEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory7setSizeEPvj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7setSizeEPvj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory7setSizeEPvj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory7setSizeEPvj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory7setSizeEPvj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13AudioInMemory8completeEPv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory8completeEPv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13AudioInMemory8completeEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13AudioInMemory8completeEPv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13AudioInMemory8completeEPv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder10openMemoryEPvb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder10openMemoryEPvb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder10openMemoryEPvb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder10openMemoryEPvb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder10openMemoryEPvb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder11decodeAudioEPsj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder11decodeAudioEPsj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder11decodeAudioEPsj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder11decodeAudioEPsj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder11decodeAudioEPsj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder13getSamplerateEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder13getSamplerateEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder13getSamplerateEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder13getSamplerateEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder13getSamplerateEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder13getTrackIndexEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder13getTrackIndexEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder13getTrackIndexEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder13getTrackIndexEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder13getTrackIndexEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameDataEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameDataEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder15getID3FrameDataEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameDataEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder15getID3FrameDataEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameNameEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameNameEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder15getID3FrameNameEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder15getID3FrameNameEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder15getID3FrameNameEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder16getAudioEndFrameEji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16getAudioEndFrameEji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder16getAudioEndFrameEji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16getAudioEndFrameEji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder16getAudioEndFrameEji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder16readNextID3FrameEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16readNextID3FrameEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder16readNextID3FrameEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16readNextID3FrameEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder16readNextID3FrameEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder16setPositionQuickEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16setPositionQuickEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder16setPositionQuickEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder16setPositionQuickEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder16setPositionQuickEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder17getDurationFramesEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getDurationFramesEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder17getDurationFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getDurationFramesEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder17getDurationFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder17getFramesPerChunkEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getFramesPerChunkEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder17getFramesPerChunkEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getFramesPerChunkEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder17getFramesPerChunkEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder17getImageSizeBytesEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getImageSizeBytesEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder17getImageSizeBytesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getImageSizeBytesEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder17getImageSizeBytesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder17getPositionFramesEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getPositionFramesEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder17getPositionFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17getPositionFramesEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder17getPositionFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder17parseAllID3FramesEbj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17parseAllID3FramesEbj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder17parseAllID3FramesEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder17parseAllID3FramesEbj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder17parseAllID3FramesEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder18getAudioStartFrameEji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18getAudioStartFrameEji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder18getAudioStartFrameEji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18getAudioStartFrameEji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder18getAudioStartFrameEji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder18getDurationSecondsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18getDurationSecondsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder18getDurationSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18getDurationSecondsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder18getDurationSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder18setPositionPreciseEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18setPositionPreciseEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder18setPositionPreciseEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18setPositionPreciseEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder18setPositionPreciseEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder18statusCodeToStringEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18statusCodeToStringEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder18statusCodeToStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder18statusCodeToStringEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder18statusCodeToStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder19getID3FrameAsStringEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder19getID3FrameAsStringEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder19getID3FrameAsStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder19getID3FrameAsStringEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder19getID3FrameAsStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder21startParsingID3FramesEbj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21startParsingID3FramesEbj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder21startParsingID3FramesEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder21startParsingID3FramesEbj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder21startParsingID3FramesEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder6getBPMEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder6getBPMEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder6getBPMEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder6getBPMEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder6getBPMEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder8getAlbumEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getAlbumEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder8getAlbumEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getAlbumEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder8getAlbumEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder8getImageEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getImageEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder8getImageEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getImageEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder8getImageEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder8getTitleEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getTitleEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder8getTitleEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder8getTitleEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder8getTitleEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder9getArtistEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder9getArtistEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder9getArtistEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder9getArtistEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder9getArtistEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Decoder9getFormatEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder9getFormatEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Decoder9getFormatEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Decoder9getFormatEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Decoder9getFormatEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7DecoderC2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderC2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7DecoderC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderC2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7DecoderC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7DecoderD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7DecoderD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7DecoderD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Generator10generateFMEPfjS1_f')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator10generateFMEPfjS1_f', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Generator10generateFMEPfjS1_f on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator10generateFMEPfjS1_f', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Generator10generateFMEPfjS1_f on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Generator20generateSynchronizedEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator20generateSynchronizedEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Generator20generateSynchronizedEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator20generateSynchronizedEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Generator20generateSynchronizedEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Generator5resetEf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator5resetEf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Generator5resetEf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Generator5resetEf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Generator5resetEf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9GeneratorD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9GeneratorD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9GeneratorD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10endScratchEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10endScratchEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer10endScratchEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10endScratchEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer10endScratchEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4seekEd')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4seekEd', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer4seekEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer4seekEd', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer4seekEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer5pauseEfj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer5pauseEfj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer5pauseEfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer5pauseEfj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer5pauseEfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7isStemsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7isStemsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer7isStemsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7isStemsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer7isStemsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7scratchEdf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7scratchEdf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer7scratchEdf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer7scratchEdf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer7scratchEdf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isReverseEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isReverseEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer9isReverseEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9isReverseEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer9isReverseEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer11makeResultsEffffbfbbb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer11makeResultsEffffbfbbb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer11makeResultsEffffbfbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer11makeResultsEffffbfbbb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer11makeResultsEffffbfbbb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer14getLowWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer14getLowWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer14getLowWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer14getLowWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer14getLowWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer14getMidWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer14getMidWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer14getMidWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer14getMidWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer14getMidWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer15getHighWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer15getHighWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer15getHighWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer15getHighWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer15getHighWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer15getPeakWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer15getPeakWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer15getPeakWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer15getPeakWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer15getPeakWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer18getAverageWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer18getAverageWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer18getAverageWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer18getAverageWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer18getAverageWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer19getOverviewWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer19getOverviewWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer19getOverviewWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer19getOverviewWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer19getOverviewWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer7processEPfji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer7processEPfji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer7processEPfji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Analyzer8getNotesEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer8getNotesEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Analyzer8getNotesEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Analyzer8getNotesEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Analyzer8getNotesEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8AnalyzerC2Eji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerC2Eji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8AnalyzerC2Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerC2Eji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8AnalyzerC2Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8AnalyzerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8AnalyzerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8AnalyzerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Waveform10makeResultEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform10makeResultEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Waveform10makeResultEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform10makeResultEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Waveform10makeResultEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Waveform15getPeakWaveformEb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform15getPeakWaveformEb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Waveform15getPeakWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform15getPeakWaveformEb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Waveform15getPeakWaveformEb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8Waveform7processEPfji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform7processEPfji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8Waveform7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8Waveform7processEPfji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8Waveform7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8WaveformC2Eji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformC2Eji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8WaveformC2Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformC2Eji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8WaveformC2Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8WaveformD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8WaveformD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8WaveformD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank10resetBandsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank10resetBandsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank10resetBandsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank10resetBandsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank10resetBandsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12getSumVolumeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12getSumVolumeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank12getSumVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12getSumVolumeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank12getSumVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12processNoAddEPfji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12processNoAddEPfji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank12processNoAddEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank12processNoAddEPfji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank12processNoAddEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank7processEPfji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank7processEPfji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank7processEPfji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank7processEPfji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbank8getBandsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank8getBandsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbank8getBandsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbank8getBandsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbank8getBandsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbankD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbankD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10FFTComplexEPfS0_ib')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10FFTComplexEPfS0_ib', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10FFTComplexEPfS0_ib on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10FFTComplexEPfS0_ib', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10FFTComplexEPfS0_ib on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FFTRealEPfS0_ib')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FFTRealEPfS0_ib', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FFTRealEPfS0_ib on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FFTRealEPfS0_ib', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FFTRealEPfS0_ib on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8PolarFFTEPfS0_ibf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8PolarFFTEPfS0_ibf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8PolarFFTEPfS0_ibf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8PolarFFTEPfS0_ibf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8PolarFFTEPfS0_ibf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQ7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQ7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQ7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQ7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQ7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10Bitcrusher7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Bitcrusher7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10Bitcrusher7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Bitcrusher7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10Bitcrusher7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10BitcrusherD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10BitcrusherD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10BitcrusherD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10BitcrusherD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10BitcrusherD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10BitcrusherD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10BitcrusherC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10BitcrusherC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10BitcrusherC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Clipper7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Clipper7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Clipper7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Clipper7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Clipper7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7ClipperC2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperC2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7ClipperC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperC2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7ClipperC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7ClipperD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7ClipperD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7ClipperD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10Compressor7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Compressor7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10Compressor7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Compressor7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10Compressor7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10CompressorD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10CompressorD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10CompressorD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10CompressorD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10CompressorD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10CompressorD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor27processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor27processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor27processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor27processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor27processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor2D2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor2D2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor2D2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor2D0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor2D0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor2D0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10Compressor18getGainReductionDbEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Compressor18getGainReductionDbEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10Compressor18getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10Compressor18getGainReductionDbEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10Compressor18getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10CompressorC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10CompressorC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10CompressorC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor218getGainReductionDbEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor218getGainReductionDbEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor218getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor218getGainReductionDbEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor218getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor2C2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2C2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor2C2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2C2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor2C2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Echo7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Echo7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Echo7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4EchoD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4EchoD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4EchoD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4EchoD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4EchoD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4EchoD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Echo6setMixEf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo6setMixEf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Echo6setMixEf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Echo6setMixEf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Echo6setMixEf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4EchoC2Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoC2Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4EchoC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoC2Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4EchoC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered5Delay7processEPfiPNS_2FXE')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5Delay7processEPfiPNS_2FXE', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered5Delay7processEPfiPNS_2FXE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5Delay7processEPfiPNS_2FXE', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered5Delay7processEPfiPNS_2FXE on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered5DelayC2Ejjjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayC2Ejjjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered5DelayC2Ejjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayC2Ejjjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered5DelayC2Ejjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered5DelayD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered5DelayD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered5DelayD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6Filter7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6Filter7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6Filter7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6FilterD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6FilterD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6FilterD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6FilterD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6FilterD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6FilterD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6Filter11processMonoEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter11processMonoEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6Filter11processMonoEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter11processMonoEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6Filter11processMonoEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6Filter21setCustomCoefficientsEfffff')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter21setCustomCoefficientsEfffff', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6Filter21setCustomCoefficientsEfffff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Filter21setCustomCoefficientsEfffff', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6Filter21setCustomCoefficientsEfffff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6FilterC2ENS0_10FilterTypeEj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterC2ENS0_10FilterTypeEj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6FilterC2ENS0_10FilterTypeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterC2ENS0_10FilterTypeEj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6FilterC2ENS0_10FilterTypeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Flanger7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Flanger7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Flanger7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Flanger7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Flanger7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FlangerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FlangerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FlangerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FlangerD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FlangerD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FlangerD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Flanger10getDepthMsEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Flanger10getDepthMsEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Flanger10getDepthMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Flanger10getDepthMsEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Flanger10getDepthMsEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FlangerC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FlangerC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FlangerC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortion7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortion7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortion7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortion7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortion7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortionD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortionD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortionD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortionD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortionD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortionD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortionC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortionC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortionC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Gate7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Gate7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Gate7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Gate7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Gate7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4GateD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4GateD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4GateD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4GateD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4GateD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4GateD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4GateC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4GateC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4GateC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Limiter7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Limiter7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Limiter7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Limiter7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Limiter7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7LimiterD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7LimiterD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7LimiterD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7LimiterD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7LimiterD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7LimiterD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7Limiter18getGainReductionDbEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Limiter18getGainReductionDbEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7Limiter18getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7Limiter18getGainReductionDbEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7Limiter18getGainReductionDbEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7LimiterC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7LimiterC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7LimiterC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6Reverb7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Reverb7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6Reverb7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Reverb7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6Reverb7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6ReverbD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6ReverbD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6ReverbD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6ReverbD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6ReverbD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6ReverbD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6ReverbC2Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbC2Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6ReverbC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbC2Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6ReverbC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Roll7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Roll7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Roll7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Roll7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Roll7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4RollD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4RollD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4RollD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4RollD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4RollD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4RollD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4RollC2Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollC2Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4RollC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollC2Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4RollC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6Whoosh7processEPfS1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Whoosh7processEPfS1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6Whoosh7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6Whoosh7processEPfS1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6Whoosh7processEPfS1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6WhooshD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6WhooshD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6WhooshD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6WhooshD0Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD0Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6WhooshD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD0Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6WhooshD0Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6WhooshC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6WhooshC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6WhooshC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10DotProductEPfS0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10DotProductEPfS0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10DotProductEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10DotProductEPfS0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10DotProductEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10FloatToIntEPfPijj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10FloatToIntEPfPijj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10FloatToIntEPfPijj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10FloatToIntEPfPijj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10FloatToIntEPfPijj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10IntToFloatEPiPfjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10IntToFloatEPiPfjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10IntToFloatEPiPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10IntToFloatEPiPfjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10IntToFloatEPiPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10InterleaveEPfS0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10InterleaveEPfS0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10InterleaveEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10InterleaveEPfS0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10InterleaveEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11CharToFloatEPaPfjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11CharToFloatEPaPfjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11CharToFloatEPaPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11CharToFloatEPaPfjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11CharToFloatEPaPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11CrossStereoEPfS0_S0_ffffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11CrossStereoEPfS0_S0_ffffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11CrossStereoEPfS0_S0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11CrossStereoEPfS0_S0_ffffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11CrossStereoEPfS0_S0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11FloatToCharEPfPajj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11FloatToCharEPfPajj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11FloatToCharEPfPajj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11FloatToCharEPfPajj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11FloatToCharEPfPajj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11StereoMixerC2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerC2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11StereoMixerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerC2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11StereoMixerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11StereoMixerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11StereoMixerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11StereoMixerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12Bit24ToFloatEPvPfjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12Bit24ToFloatEPvPfjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12Bit24ToFloatEPvPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12Bit24ToFloatEPvPfjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12Bit24ToFloatEPvPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12ChangeVolumeEPfS0_ffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12ChangeVolumeEPfS0_ffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12ChangeVolumeEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12ChangeVolumeEPfS0_ffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12ChangeVolumeEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12DeInterleaveEPfS0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12DeInterleaveEPfS0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12DeInterleaveEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12DeInterleaveEPfS0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12DeInterleaveEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12FloatTo24bitEPfPvjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12FloatTo24bitEPfPvjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12FloatTo24bitEPfPvjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12FloatTo24bitEPfPvjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12FloatTo24bitEPfPvjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12HasNonFiniteEPfj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12HasNonFiniteEPfj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12HasNonFiniteEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12HasNonFiniteEPfj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12HasNonFiniteEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered12StereoToMonoEPfS0_ffffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12StereoToMonoEPfS0_ffffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered12StereoToMonoEPfS0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered12StereoToMonoEPfS0_ffffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered12StereoToMonoEPfS0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered13InterleaveAddEPfS0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13InterleaveAddEPfS0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered13InterleaveAddEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered13InterleaveAddEPfS0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered13InterleaveAddEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15ChangeVolumeAddEPfS0_ffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15ChangeVolumeAddEPfS0_ffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15ChangeVolumeAddEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15ChangeVolumeAddEPfS0_ffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15ChangeVolumeAddEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15DeInterleaveAddEPfS0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15DeInterleaveAddEPfS0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15DeInterleaveAddEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15DeInterleaveAddEPfS0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15DeInterleaveAddEPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FloatToShortIntEPfPsjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FloatToShortIntEPfPsjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FloatToShortIntEPfPsjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FloatToShortIntEPfPsjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FloatToShortIntEPfPsjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15MidSideToStereoEPfS0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15MidSideToStereoEPfS0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15MidSideToStereoEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15MidSideToStereoEPfS0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15MidSideToStereoEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15ShortIntToFloatEPsPfjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15ShortIntToFloatEPsPfjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15ShortIntToFloatEPsPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15ShortIntToFloatEPsPfjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15ShortIntToFloatEPsPfjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15StereoToMidSideEPfS0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15StereoToMidSideEPfS0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15StereoToMidSideEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15StereoToMidSideEPfS0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15StereoToMidSideEPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15frequencyOfNoteEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15frequencyOfNoteEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15frequencyOfNoteEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15frequencyOfNoteEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15frequencyOfNoteEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_ on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Add1EPfS0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add1EPfS0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Add1EPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add1EPfS0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Add1EPfS0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Add2EPfS0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add2EPfS0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Add2EPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add2EPfS0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Add2EPfS0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4Add4EPfS0_S0_S0_S0_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add4EPfS0_S0_S0_S0_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4Add4EPfS0_S0_S0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4Add4EPfS0_S0_S0_S0_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4Add4EPfS0_S0_S0_S0_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4PeakEPfj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4PeakEPfj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4PeakEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4PeakEPfj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4PeakEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6VolumeEPfS0_ffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6VolumeEPfS0_ffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6VolumeEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6VolumeEPfS0_ffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6VolumeEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9CrossMonoEPfS0_S0_ffffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9CrossMonoEPfS0_S0_ffffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9CrossMonoEPfS0_S0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9CrossMonoEPfS0_S0_ffffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9CrossMonoEPfS0_S0_ffffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9MonoMixerC2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerC2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9MonoMixerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerC2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9MonoMixerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9MonoMixerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9MonoMixerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9MonoMixerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9VolumeAddEPfS0_ffj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9VolumeAddEPfS0_ffj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9VolumeAddEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9VolumeAddEPfS0_ffj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9VolumeAddEPfS0_ffj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain14setStereoPairsEjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain14setStereoPairsEjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain14setStereoPairsEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain14setStereoPairsEjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain14setStereoPairsEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain5resetEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain5resetEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain5resetEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain7advanceEi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain7advanceEi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain7advanceEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain7advanceEi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain7advanceEi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomain8addInputEPfi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain8addInputEPfi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomain8addInputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomain8addInputEPfi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomain8addInputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomainC2Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainC2Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomainC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainC2Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomainC2Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomainD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomainD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomainD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Resampler5resetEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler5resetEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Resampler5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler5resetEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Resampler5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Resampler7processEPsPfibbf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler7processEPsPfibbf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Resampler7processEPsPfibbf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler7processEPsPfibbf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Resampler7processEPsPfibbf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9Resampler9process16EPsPfS1_ibbf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler9process16EPsPfS1_ibbf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9Resampler9process16EPsPfS1_ibbf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9Resampler9process16EPsPfS1_ibbf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9Resampler9process16EPsPfS1_ibbf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9ResamplerC2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerC2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9ResamplerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerC2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9ResamplerC2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9ResamplerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9ResamplerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9ResamplerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Spatializer13reverbProcessEPfj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Spatializer13reverbProcessEPfj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Spatializer13reverbProcessEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Spatializer13reverbProcessEPfj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Spatializer13reverbProcessEPfj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11SpatializerC2Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerC2Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11SpatializerC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerC2Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11SpatializerC2Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11SpatializerD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11SpatializerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11SpatializerD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching14setStereoPairsEjb')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching14setStereoPairsEjb', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching14setStereoPairsEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching14setStereoPairsEjb', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching14setStereoPairsEjb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching21getOutputLengthFramesEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching21getOutputLengthFramesEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching21getOutputLengthFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching21getOutputLengthFramesEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching21getOutputLengthFramesEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching5resetEv')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching5resetEv', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching5resetEv', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching5resetEv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching8addInputEPfi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching8addInputEPfi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching8addInputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching8addInputEPfi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching8addInputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretching9getOutputEPfi')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching9getOutputEPfi', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretching9getOutputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretching9getOutputEPfi', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretching9getOutputEPfi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretchingC2Ejf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingC2Ejf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretchingC2Ejf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingC2Ejf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretchingC2Ejf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretchingD2Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingD2Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretchingD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingD2Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretchingD2Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7DecoderC1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderC1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7DecoderC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderC1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7DecoderC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7DecoderD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7DecoderD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7DecoderD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7DecoderD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9GeneratorD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9GeneratorD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9GeneratorD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9GeneratorD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered19AdvancedAudioPlayerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered19AdvancedAudioPlayerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered19AdvancedAudioPlayerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8AnalyzerC1Eji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerC1Eji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8AnalyzerC1Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerC1Eji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8AnalyzerC1Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8AnalyzerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8AnalyzerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8AnalyzerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8AnalyzerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8WaveformC1Eji')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformC1Eji', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8WaveformC1Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformC1Eji', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8WaveformC1Eji on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered8WaveformD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered8WaveformD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered8WaveformD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered8WaveformD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered18BandpassFilterbankD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered18BandpassFilterbankD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered18BandpassFilterbankD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11ThreeBandEQD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11ThreeBandEQD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11ThreeBandEQD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11ThreeBandEQD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10BitcrusherC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10BitcrusherC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10BitcrusherC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10BitcrusherD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10BitcrusherD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10BitcrusherD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10BitcrusherD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7ClipperC1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperC1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7ClipperC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperC1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7ClipperC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7ClipperD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7ClipperD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7ClipperD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7ClipperD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10CompressorC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10CompressorC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10CompressorC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered10CompressorD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered10CompressorD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered10CompressorD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered10CompressorD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor2C1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2C1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor2C1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2C1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor2C1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11Compressor2D1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11Compressor2D1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11Compressor2D1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11Compressor2D1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4EchoC1Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoC1Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4EchoC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoC1Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4EchoC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4EchoD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4EchoD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4EchoD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4EchoD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered5DelayC1Ejjjj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayC1Ejjjj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered5DelayC1Ejjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayC1Ejjjj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered5DelayC1Ejjjj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered5DelayD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered5DelayD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered5DelayD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered5DelayD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6FilterC1ENS0_10FilterTypeEj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterC1ENS0_10FilterTypeEj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6FilterC1ENS0_10FilterTypeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterC1ENS0_10FilterTypeEj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6FilterC1ENS0_10FilterTypeEj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6FilterD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6FilterD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6FilterD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6FilterD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FlangerC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FlangerC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FlangerC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7FlangerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7FlangerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7FlangerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7FlangerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortionC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortionC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortionC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered16GuitarDistortionD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered16GuitarDistortionD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered16GuitarDistortionD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered16GuitarDistortionD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4GateC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4GateC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4GateC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4GateD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4GateD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4GateD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4GateD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7LimiterC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7LimiterC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7LimiterC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered7LimiterD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered7LimiterD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered7LimiterD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered7LimiterD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6ReverbD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6ReverbD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6ReverbD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6ReverbD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4RollC1Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollC1Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4RollC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollC1Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4RollC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered4RollD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered4RollD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered4RollD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered4RollD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6WhooshC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6WhooshC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6WhooshC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered6WhooshD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered6WhooshD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered6WhooshD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered6WhooshD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11StereoMixerC1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerC1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11StereoMixerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerC1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11StereoMixerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11StereoMixerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11StereoMixerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11StereoMixerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11StereoMixerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9MonoMixerC1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerC1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9MonoMixerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerC1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9MonoMixerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9MonoMixerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9MonoMixerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9MonoMixerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9MonoMixerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomainC1Ejj')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainC1Ejj', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomainC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainC1Ejj', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomainC1Ejj on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered15FrequencyDomainD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered15FrequencyDomainD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered15FrequencyDomainD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered15FrequencyDomainD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9ResamplerC1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerC1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9ResamplerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerC1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9ResamplerC1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered9ResamplerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered9ResamplerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered9ResamplerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered9ResamplerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11SpatializerC1Ej')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerC1Ej', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11SpatializerC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerC1Ej', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11SpatializerC1Ej on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered11SpatializerD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered11SpatializerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered11SpatializerD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered11SpatializerD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretchingC1Ejf')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingC1Ejf', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretchingC1Ejf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingC1Ejf', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretchingC1Ejf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZN12Superpowered14TimeStretchingD1Ev')) {
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingD1Ev', { configurable: true, get: function() { abort('You are getting __ZN12Superpowered14TimeStretchingD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZN12Superpowered14TimeStretchingD1Ev', { configurable: true, set: function() { abort('You are setting __ZN12Superpowered14TimeStretchingD1Ev on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = objAssign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = true;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  if (e && typeof e === 'object' && e.stack) {
    toLog = [e, e.stack];
  }
  err('exiting due to exception: ' + toLog);
}

if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process === 'object' && typeof require === 'function') || typeof window === 'object' || typeof importScripts === 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      const data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    let data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(() => onload(readBinary(f)), 0);
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = (status, toThrow) => {
      logExceptionOnExit(toThrow);
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
objAssign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';
function alignMemory() { abort('`alignMemory` is now a library function and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line'); }

assert(!ENVIRONMENT_IS_WEB, "web environment detected but not enabled at build time.  Add 'web' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");




var STACK_ALIGN = 16;
var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return POINTER_SIZE;
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

function updateTableMap(offset, count) {
  for (var i = offset; i < offset + count; i++) {
    var item = getWasmTableEntry(i);
    // Ignore null values.
    if (item) {
      functionsInTableMap.set(item, i);
    }
  }
}

// Add a function to the table.
// 'sig' parameter is required if the function being added is a JS function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    updateTableMap(0, wasmTable.length);
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    setWasmTableEntry(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    setWasmTableEntry(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(getWasmTableEntry(index));
  freeTableIndexes.push(index);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return Number(HEAPF64[((ptr)>>3)]);
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  ;
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 33554432;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 33554432, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAP32[((max + 4)>>2)] = 0x2135467;
  HEAP32[((max + 8)>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[((max + 4)>>2)];
  var cookie2 = HEAPU32[((max + 8)>>2)];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' 0x' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.includes('imported Memory') ||
        str.includes('memory import')) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 33554432);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193,
  // the above line no longer optimizes out down to the following line.
  // When the regression is fixed, we can remove this if/else.
  receiveInstance(result[0]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            getWasmTableEntry(func)();
          } else {
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }
  Module["callRuntimeCallbacks"] = callRuntimeCallbacks;

  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  Module["withStackSave"] = withStackSave;
  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }
  Module["demangle"] = demangle;

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }
  Module["demangleAll"] = demangleAll;

  var wasmTableMirror = [];
  Module["wasmTableMirror"] = wasmTableMirror;
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    }
  Module["getWasmTableEntry"] = getWasmTableEntry;

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
  Module["handleException"] = handleException;

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }
  Module["jsStackTrace"] = jsStackTrace;

  function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func);
      wasmTableMirror[idx] = func;
    }
  Module["setWasmTableEntry"] = setWasmTableEntry;

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }
  Module["stackTrace"] = stackTrace;

  function _abort() {
      abort('native code called abort()');
    }
  Module["_abort"] = _abort;

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
  Module["_emscripten_memcpy_big"] = _emscripten_memcpy_big;

  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        err('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  Module["emscripten_realloc_buffer"] = emscripten_realloc_buffer;
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      // In CAN_ADDRESS_2GB mode, stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate full 4GB Wasm memories, the size will wrap
      // back to 0 bytes in Wasm side for any code that deals with heap sizes, which would require special casing all heap size related code to treat
      // 0 specially.
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }
  Module["_emscripten_resize_heap"] = _emscripten_resize_heap;

  function _emscripten_run_script(ptr) {
      var c = UTF8ToString(ptr); if (!c.startsWith("setInterval")) eval(c); 
    }
  Module["_emscripten_run_script"] = _emscripten_run_script;

  var SYSCALLS = {mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        assert(buffer);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  Module["SYSCALLS"] = SYSCALLS;
  function _fd_close(fd) {
      abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
      return 0;
    }
  Module["_fd_close"] = _fd_close;

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  }
  Module["_fd_seek"] = _fd_seek;

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  Module["flush_NO_FILESYSTEM"] = flush_NO_FILESYSTEM;
  function _fd_write(fd, iov, iovcnt, pnum) {
      ;
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[((iov)>>2)];
        var len = HEAP32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)] = num;
      return 0;
    }
  Module["_fd_write"] = _fd_write;

  function _setTempRet0(val) {
      setTempRet0(val);
    }
  Module["_setTempRet0"] = _setTempRet0;

  function _time(ptr) {
      ;
      var ret = (Date.now()/1000)|0;
      if (ptr) {
        HEAP32[((ptr)>>2)] = ret;
      }
      return ret;
    }
  Module["_time"] = _time;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmLibraryArg = {
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "emscripten_run_script": _emscripten_run_script,
  "fd_close": _fd_close,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0,
  "time": _time
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors", asm);

/** @type {function(...*):?} */
var __Z10initializej = Module["__Z10initializej"] = createExportWrapper("_Z10initializej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10InitializeEPKcbbbbbbb = Module["__ZN12Superpowered10InitializeEPKcbbbbbbb"] = createExportWrapper("_ZN12Superpowered10InitializeEPKcbbbbbbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6ReverbC1Ejj = Module["__ZN12Superpowered6ReverbC1Ejj"] = createExportWrapper("_ZN12Superpowered6ReverbC1Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE = Module["__ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE"] = createExportWrapper("_ZN12Superpowered9GeneratorC1EjNS0_14GeneratorShapeE", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7VersionEv = Module["__ZN12Superpowered7VersionEv"] = createExportWrapper("_ZN12Superpowered7VersionEv", asm);

/** @type {function(...*):?} */
var __Z15processFeedbackPfS_i = Module["__Z15processFeedbackPfS_i"] = createExportWrapper("_Z15processFeedbackPfS_i", asm);

/** @type {function(...*):?} */
var __Z13processReverbPfS_i = Module["__Z13processReverbPfS_i"] = createExportWrapper("_Z13processReverbPfS_i", asm);

/** @type {function(...*):?} */
var __Z13processSamplePfS_i = Module["__Z13processSamplePfS_i"] = createExportWrapper("_Z13processSamplePfS_i", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf = Module["__ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13processStereoEPfbjf", asm);

/** @type {function(...*):?} */
var __Z19processWhiteNoiseSPPfS_i = Module["__Z19processWhiteNoiseSPPfS_i"] = createExportWrapper("_Z19processWhiteNoiseSPPfS_i", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Generator8generateEPfj = Module["__ZN12Superpowered9Generator8generateEPfj"] = createExportWrapper("_ZN12Superpowered9Generator8generateEPfj", asm);

/** @type {function(...*):?} */
var __Z17processWhiteNoisePfS_i = Module["__Z17processWhiteNoisePfS_i"] = createExportWrapper("_Z17processWhiteNoisePfS_i", asm);

/** @type {function(...*):?} */
var __Z12processSoundPfS_i = Module["__Z12processSoundPfS_i"] = createExportWrapper("_Z12processSoundPfS_i", asm);

/** @type {function(...*):?} */
var __Z10setSamplesPcjS_jS_j = Module["__Z10setSamplesPcjS_jS_j"] = createExportWrapper("_Z10setSamplesPcjS_jS_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj = Module["__ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj"] = createExportWrapper("_ZN12Superpowered7Decoder21decodeToAudioInMemoryEPvj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory7getSizeEPv = Module["__ZN12Superpowered13AudioInMemory7getSizeEPv"] = createExportWrapper("_ZN12Superpowered13AudioInMemory7getSizeEPv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory13getSamplerateEPv = Module["__ZN12Superpowered13AudioInMemory13getSamplerateEPv"] = createExportWrapper("_ZN12Superpowered13AudioInMemory13getSamplerateEPv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb = Module["__ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayerC1Ejhjjffb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb = Module["__ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer10openMemoryEPvbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer4playEv = Module["__ZN12Superpowered19AdvancedAudioPlayer4playEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer4playEv", asm);

/** @type {function(...*):?} */
var __Z11randomNoisev = Module["__Z11randomNoisev"] = createExportWrapper("_Z11randomNoisev", asm);

/** @type {function(...*):?} */
var ___malloc__ = Module["___malloc__"] = createExportWrapper("__malloc__", asm);

/** @type {function(...*):?} */
var ___demangle__ = Module["___demangle__"] = createExportWrapper("__demangle__", asm);

/** @type {function(...*):?} */
var ___heapbase__ = Module["___heapbase__"] = createExportWrapper("__heapbase__", asm);

/** @type {function(...*):?} */
var ___setint64__ = Module["___setint64__"] = createExportWrapper("__setint64__", asm);

/** @type {function(...*):?} */
var ___stacksize__ = Module["___stacksize__"] = createExportWrapper("__stacksize__", asm);

/** @type {function(...*):?} */
var ___initialize__ = Module["___initialize__"] = createExportWrapper("__initialize__", asm);

/** @type {function(...*):?} */
var ___lastarraylength__ = Module["___lastarraylength__"] = createExportWrapper("__lastarraylength__", asm);

/** @type {function(...*):?} */
var ___free__ = Module["___free__"] = createExportWrapper("__free__", asm);

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free", asm);

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory19createSelfContainedEjjj = Module["__ZN12Superpowered13AudioInMemory19createSelfContainedEjjj"] = createExportWrapper("_ZN12Superpowered13AudioInMemory19createSelfContainedEjjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory6appendEPvS1_j = Module["__ZN12Superpowered13AudioInMemory6appendEPvS1_j"] = createExportWrapper("_ZN12Superpowered13AudioInMemory6appendEPvS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory6createEjjjb = Module["__ZN12Superpowered13AudioInMemory6createEjjjb"] = createExportWrapper("_ZN12Superpowered13AudioInMemory6createEjjjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory6retainEPv = Module["__ZN12Superpowered13AudioInMemory6retainEPv"] = createExportWrapper("_ZN12Superpowered13AudioInMemory6retainEPv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory7releaseEPv = Module["__ZN12Superpowered13AudioInMemory7releaseEPv"] = createExportWrapper("_ZN12Superpowered13AudioInMemory7releaseEPv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory7setSizeEPvj = Module["__ZN12Superpowered13AudioInMemory7setSizeEPvj"] = createExportWrapper("_ZN12Superpowered13AudioInMemory7setSizeEPvj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13AudioInMemory8completeEPv = Module["__ZN12Superpowered13AudioInMemory8completeEPv"] = createExportWrapper("_ZN12Superpowered13AudioInMemory8completeEPv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder10openMemoryEPvb = Module["__ZN12Superpowered7Decoder10openMemoryEPvb"] = createExportWrapper("_ZN12Superpowered7Decoder10openMemoryEPvb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder11decodeAudioEPsj = Module["__ZN12Superpowered7Decoder11decodeAudioEPsj"] = createExportWrapper("_ZN12Superpowered7Decoder11decodeAudioEPsj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder13getSamplerateEv = Module["__ZN12Superpowered7Decoder13getSamplerateEv"] = createExportWrapper("_ZN12Superpowered7Decoder13getSamplerateEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder13getTrackIndexEv = Module["__ZN12Superpowered7Decoder13getTrackIndexEv"] = createExportWrapper("_ZN12Superpowered7Decoder13getTrackIndexEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder15getID3FrameDataEv = Module["__ZN12Superpowered7Decoder15getID3FrameDataEv"] = createExportWrapper("_ZN12Superpowered7Decoder15getID3FrameDataEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder15getID3FrameNameEv = Module["__ZN12Superpowered7Decoder15getID3FrameNameEv"] = createExportWrapper("_ZN12Superpowered7Decoder15getID3FrameNameEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder16getAudioEndFrameEji = Module["__ZN12Superpowered7Decoder16getAudioEndFrameEji"] = createExportWrapper("_ZN12Superpowered7Decoder16getAudioEndFrameEji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder16readNextID3FrameEv = Module["__ZN12Superpowered7Decoder16readNextID3FrameEv"] = createExportWrapper("_ZN12Superpowered7Decoder16readNextID3FrameEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder16setPositionQuickEi = Module["__ZN12Superpowered7Decoder16setPositionQuickEi"] = createExportWrapper("_ZN12Superpowered7Decoder16setPositionQuickEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder17getDurationFramesEv = Module["__ZN12Superpowered7Decoder17getDurationFramesEv"] = createExportWrapper("_ZN12Superpowered7Decoder17getDurationFramesEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder17getFramesPerChunkEv = Module["__ZN12Superpowered7Decoder17getFramesPerChunkEv"] = createExportWrapper("_ZN12Superpowered7Decoder17getFramesPerChunkEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder17getImageSizeBytesEv = Module["__ZN12Superpowered7Decoder17getImageSizeBytesEv"] = createExportWrapper("_ZN12Superpowered7Decoder17getImageSizeBytesEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder17getPositionFramesEv = Module["__ZN12Superpowered7Decoder17getPositionFramesEv"] = createExportWrapper("_ZN12Superpowered7Decoder17getPositionFramesEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder17parseAllID3FramesEbj = Module["__ZN12Superpowered7Decoder17parseAllID3FramesEbj"] = createExportWrapper("_ZN12Superpowered7Decoder17parseAllID3FramesEbj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder18getAudioStartFrameEji = Module["__ZN12Superpowered7Decoder18getAudioStartFrameEji"] = createExportWrapper("_ZN12Superpowered7Decoder18getAudioStartFrameEji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder18getDurationSecondsEv = Module["__ZN12Superpowered7Decoder18getDurationSecondsEv"] = createExportWrapper("_ZN12Superpowered7Decoder18getDurationSecondsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder18setPositionPreciseEi = Module["__ZN12Superpowered7Decoder18setPositionPreciseEi"] = createExportWrapper("_ZN12Superpowered7Decoder18setPositionPreciseEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder18statusCodeToStringEi = Module["__ZN12Superpowered7Decoder18statusCodeToStringEi"] = createExportWrapper("_ZN12Superpowered7Decoder18statusCodeToStringEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder19getID3FrameAsStringEi = Module["__ZN12Superpowered7Decoder19getID3FrameAsStringEi"] = createExportWrapper("_ZN12Superpowered7Decoder19getID3FrameAsStringEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb = Module["__ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb"] = createExportWrapper("_ZN12Superpowered7Decoder21openAudioFileInMemoryEPvjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder21startParsingID3FramesEbj = Module["__ZN12Superpowered7Decoder21startParsingID3FramesEbj"] = createExportWrapper("_ZN12Superpowered7Decoder21startParsingID3FramesEbj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv = Module["__ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv"] = createExportWrapper("_ZN12Superpowered7Decoder26getID3FrameDataLengthBytesEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder6getBPMEv = Module["__ZN12Superpowered7Decoder6getBPMEv"] = createExportWrapper("_ZN12Superpowered7Decoder6getBPMEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder8getAlbumEb = Module["__ZN12Superpowered7Decoder8getAlbumEb"] = createExportWrapper("_ZN12Superpowered7Decoder8getAlbumEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder8getImageEb = Module["__ZN12Superpowered7Decoder8getImageEb"] = createExportWrapper("_ZN12Superpowered7Decoder8getImageEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder8getTitleEb = Module["__ZN12Superpowered7Decoder8getTitleEb"] = createExportWrapper("_ZN12Superpowered7Decoder8getTitleEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder9getArtistEb = Module["__ZN12Superpowered7Decoder9getArtistEb"] = createExportWrapper("_ZN12Superpowered7Decoder9getArtistEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Decoder9getFormatEv = Module["__ZN12Superpowered7Decoder9getFormatEv"] = createExportWrapper("_ZN12Superpowered7Decoder9getFormatEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7DecoderC2Ev = Module["__ZN12Superpowered7DecoderC2Ev"] = createExportWrapper("_ZN12Superpowered7DecoderC2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7DecoderD2Ev = Module["__ZN12Superpowered7DecoderD2Ev"] = createExportWrapper("_ZN12Superpowered7DecoderD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Generator10generateFMEPfjS1_f = Module["__ZN12Superpowered9Generator10generateFMEPfjS1_f"] = createExportWrapper("_ZN12Superpowered9Generator10generateFMEPfjS1_f", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Generator20generateSynchronizedEPfS1_j = Module["__ZN12Superpowered9Generator20generateSynchronizedEPfS1_j"] = createExportWrapper("_ZN12Superpowered9Generator20generateSynchronizedEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j = Module["__ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j"] = createExportWrapper("_ZN12Superpowered9Generator21generateAndCreateSyncEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Generator5resetEf = Module["__ZN12Superpowered9Generator5resetEf"] = createExportWrapper("_ZN12Superpowered9Generator5resetEf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE = Module["__ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE"] = createExportWrapper("_ZN12Superpowered9GeneratorC2EjNS0_14GeneratorShapeE", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9GeneratorD2Ev = Module["__ZN12Superpowered9GeneratorD2Ev"] = createExportWrapper("_ZN12Superpowered9GeneratorD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer10endScratchEb = Module["__ZN12Superpowered19AdvancedAudioPlayer10endScratchEb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer10endScratchEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv = Module["__ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer10getQuantumEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj = Module["__ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer10setReverseEbj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv = Module["__ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer11eofRecentlyEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh = Module["__ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer11getStemNameEh", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb = Module["__ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer11jogTouchEndEfb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb = Module["__ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer11loopBetweenEddbhbjbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb = Module["__ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer11setPositionEdbbbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv = Module["__ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer12getBeatIndexEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh = Module["__ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer12getStemColorEh", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv = Module["__ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer12isScratchingEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb = Module["__ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer12startScratchEjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh = Module["__ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13cachePositionEdh", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh = Module["__ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13closestBeatMsEdh", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13getAudioEndMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv = Module["__ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13getCurrentBpmEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13getDurationMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13getPositionMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj = Module["__ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer13jogTouchBeginEiNS0_7JogModeEj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv = Module["__ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer14getLatestEventEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv = Module["__ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer14togglePlaybackEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer15getAudioStartMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer15getBendOffsetMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv = Module["__ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer15getJogParameterEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd = Module["__ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer15getMsDifferenceEdd", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd = Module["__ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer16closestBeatIndexEd", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv = Module["__ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer16getOpenErrorCodeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv = Module["__ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer16isPerformingSlipEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv = Module["__ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer16playSynchronizedEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff = Module["__ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer16process8ChannelsEPfS1_S1_S1_bjffff", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv = Module["__ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer17resetBendMsOffsetEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer18getDurationSecondsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf = Module["__ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer18processSTEMSMasterEPfS1_jf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi = Module["__ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer18statusCodeToStringEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer20getDisplayPositionMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv = Module["__ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer21isWaitingForBufferingEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv = Module["__ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer22endContinuousPitchBendEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb = Module["__ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer22openPCM16AudioInMemoryEPvjjbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv = Module["__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionPercentEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer25getDisplayPositionSecondsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv = Module["__ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer25getMsElapsedSinceLastBeatEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv = Module["__ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer25getMsRemainingToSyncEventEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd = Module["__ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer26playSynchronizedToPositionEd", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb = Module["__ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer4loopEddbhbjbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer4seekEd = Module["__ZN12Superpowered19AdvancedAudioPlayer4seekEd"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer4seekEd", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer5pauseEfj = Module["__ZN12Superpowered19AdvancedAudioPlayer5pauseEfj"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer5pauseEfj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer7isStemsEv = Module["__ZN12Superpowered19AdvancedAudioPlayer7isStemsEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer7isStemsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb = Module["__ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer7jogTickEibfjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer7scratchEdf = Module["__ZN12Superpowered19AdvancedAudioPlayer7scratchEdf"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer7scratchEdf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb = Module["__ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer8exitLoopEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv = Module["__ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer8getPhaseEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd = Module["__ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer8msInLoopEd", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv = Module["__ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer9isLoopingEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv = Module["__ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer9isPlayingEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer9isReverseEv = Module["__ZN12Superpowered19AdvancedAudioPlayer9isReverseEv"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer9isReverseEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj = Module["__ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayer9pitchBendEfbbj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb = Module["__ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayerC2Ejhjjffb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayerD2Ev = Module["__ZN12Superpowered19AdvancedAudioPlayerD2Ev"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer11makeResultsEffffbfbbb = Module["__ZN12Superpowered8Analyzer11makeResultsEffffbfbbb"] = createExportWrapper("_ZN12Superpowered8Analyzer11makeResultsEffffbfbbb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer14getLowWaveformEb = Module["__ZN12Superpowered8Analyzer14getLowWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer14getLowWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer14getMidWaveformEb = Module["__ZN12Superpowered8Analyzer14getMidWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer14getMidWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer15getHighWaveformEb = Module["__ZN12Superpowered8Analyzer15getHighWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer15getHighWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer15getPeakWaveformEb = Module["__ZN12Superpowered8Analyzer15getPeakWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer15getPeakWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer18getAverageWaveformEb = Module["__ZN12Superpowered8Analyzer18getAverageWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer18getAverageWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer19getOverviewWaveformEb = Module["__ZN12Superpowered8Analyzer19getOverviewWaveformEb"] = createExportWrapper("_ZN12Superpowered8Analyzer19getOverviewWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer7processEPfji = Module["__ZN12Superpowered8Analyzer7processEPfji"] = createExportWrapper("_ZN12Superpowered8Analyzer7processEPfji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Analyzer8getNotesEb = Module["__ZN12Superpowered8Analyzer8getNotesEb"] = createExportWrapper("_ZN12Superpowered8Analyzer8getNotesEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8AnalyzerC2Eji = Module["__ZN12Superpowered8AnalyzerC2Eji"] = createExportWrapper("_ZN12Superpowered8AnalyzerC2Eji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8AnalyzerD2Ev = Module["__ZN12Superpowered8AnalyzerD2Ev"] = createExportWrapper("_ZN12Superpowered8AnalyzerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Waveform10makeResultEv = Module["__ZN12Superpowered8Waveform10makeResultEv"] = createExportWrapper("_ZN12Superpowered8Waveform10makeResultEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Waveform15getPeakWaveformEb = Module["__ZN12Superpowered8Waveform15getPeakWaveformEb"] = createExportWrapper("_ZN12Superpowered8Waveform15getPeakWaveformEb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8Waveform7processEPfji = Module["__ZN12Superpowered8Waveform7processEPfji"] = createExportWrapper("_ZN12Superpowered8Waveform7processEPfji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8WaveformC2Eji = Module["__ZN12Superpowered8WaveformC2Eji"] = createExportWrapper("_ZN12Superpowered8WaveformC2Eji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8WaveformD2Ev = Module["__ZN12Superpowered8WaveformD2Ev"] = createExportWrapper("_ZN12Superpowered8WaveformD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank10resetBandsEv = Module["__ZN12Superpowered18BandpassFilterbank10resetBandsEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank10resetBandsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank12getSumVolumeEv = Module["__ZN12Superpowered18BandpassFilterbank12getSumVolumeEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank12getSumVolumeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank12processNoAddEPfji = Module["__ZN12Superpowered18BandpassFilterbank12processNoAddEPfji"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank12processNoAddEPfji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv = Module["__ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank13getPeakVolumeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv = Module["__ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank15resetPeakVolumeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv = Module["__ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank16getAverageVolumeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv = Module["__ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank24resetSumAndAverageVolumeEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank7processEPfji = Module["__ZN12Superpowered18BandpassFilterbank7processEPfji"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank7processEPfji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbank8getBandsEv = Module["__ZN12Superpowered18BandpassFilterbank8getBandsEv"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbank8getBandsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj = Module["__ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbankC2EjPfS1_jj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbankD2Ev = Module["__ZN12Superpowered18BandpassFilterbankD2Ev"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbankD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10FFTComplexEPfS0_ib = Module["__ZN12Superpowered10FFTComplexEPfS0_ib"] = createExportWrapper("_ZN12Superpowered10FFTComplexEPfS0_ib", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FFTRealEPfS0_ib = Module["__ZN12Superpowered7FFTRealEPfS0_ib"] = createExportWrapper("_ZN12Superpowered7FFTRealEPfS0_ib", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8PolarFFTEPfS0_ibf = Module["__ZN12Superpowered8PolarFFTEPfS0_ibf"] = createExportWrapper("_ZN12Superpowered8PolarFFTEPfS0_ibf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQ7processEPfS1_j = Module["__ZN12Superpowered11ThreeBandEQ7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQ7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQD2Ev = Module["__ZN12Superpowered11ThreeBandEQD2Ev"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQD0Ev = Module["__ZN12Superpowered11ThreeBandEQD0Ev"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQC2Ej = Module["__ZN12Superpowered11ThreeBandEQC2Ej"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10Bitcrusher7processEPfS1_j = Module["__ZN12Superpowered10Bitcrusher7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered10Bitcrusher7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10BitcrusherD2Ev = Module["__ZN12Superpowered10BitcrusherD2Ev"] = createExportWrapper("_ZN12Superpowered10BitcrusherD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10BitcrusherD0Ev = Module["__ZN12Superpowered10BitcrusherD0Ev"] = createExportWrapper("_ZN12Superpowered10BitcrusherD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10BitcrusherC2Ej = Module["__ZN12Superpowered10BitcrusherC2Ej"] = createExportWrapper("_ZN12Superpowered10BitcrusherC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Clipper7processEPfS1_j = Module["__ZN12Superpowered7Clipper7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered7Clipper7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7ClipperC2Ev = Module["__ZN12Superpowered7ClipperC2Ev"] = createExportWrapper("_ZN12Superpowered7ClipperC2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7ClipperD2Ev = Module["__ZN12Superpowered7ClipperD2Ev"] = createExportWrapper("_ZN12Superpowered7ClipperD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10Compressor7processEPfS1_j = Module["__ZN12Superpowered10Compressor7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered10Compressor7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10CompressorD2Ev = Module["__ZN12Superpowered10CompressorD2Ev"] = createExportWrapper("_ZN12Superpowered10CompressorD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10CompressorD0Ev = Module["__ZN12Superpowered10CompressorD0Ev"] = createExportWrapper("_ZN12Superpowered10CompressorD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor27processEPfS1_j = Module["__ZN12Superpowered11Compressor27processEPfS1_j"] = createExportWrapper("_ZN12Superpowered11Compressor27processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor2D2Ev = Module["__ZN12Superpowered11Compressor2D2Ev"] = createExportWrapper("_ZN12Superpowered11Compressor2D2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor2D0Ev = Module["__ZN12Superpowered11Compressor2D0Ev"] = createExportWrapper("_ZN12Superpowered11Compressor2D0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10Compressor18getGainReductionDbEv = Module["__ZN12Superpowered10Compressor18getGainReductionDbEv"] = createExportWrapper("_ZN12Superpowered10Compressor18getGainReductionDbEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10CompressorC2Ej = Module["__ZN12Superpowered10CompressorC2Ej"] = createExportWrapper("_ZN12Superpowered10CompressorC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor218getGainReductionDbEv = Module["__ZN12Superpowered11Compressor218getGainReductionDbEv"] = createExportWrapper("_ZN12Superpowered11Compressor218getGainReductionDbEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j = Module["__ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j"] = createExportWrapper("_ZN12Superpowered11Compressor220processWithSidechainEPfS1_S1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor2C2Ej = Module["__ZN12Superpowered11Compressor2C2Ej"] = createExportWrapper("_ZN12Superpowered11Compressor2C2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Echo7processEPfS1_j = Module["__ZN12Superpowered4Echo7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered4Echo7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4EchoD2Ev = Module["__ZN12Superpowered4EchoD2Ev"] = createExportWrapper("_ZN12Superpowered4EchoD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4EchoD0Ev = Module["__ZN12Superpowered4EchoD0Ev"] = createExportWrapper("_ZN12Superpowered4EchoD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE = Module["__ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE"] = createExportWrapper("_ZN12Superpowered4Echo13processWithFxEPfS1_jPNS_2FXE", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Echo6setMixEf = Module["__ZN12Superpowered4Echo6setMixEf"] = createExportWrapper("_ZN12Superpowered4Echo6setMixEf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4EchoC2Ejj = Module["__ZN12Superpowered4EchoC2Ejj"] = createExportWrapper("_ZN12Superpowered4EchoC2Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered5Delay7processEPfiPNS_2FXE = Module["__ZN12Superpowered5Delay7processEPfiPNS_2FXE"] = createExportWrapper("_ZN12Superpowered5Delay7processEPfiPNS_2FXE", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered5DelayC2Ejjjj = Module["__ZN12Superpowered5DelayC2Ejjjj"] = createExportWrapper("_ZN12Superpowered5DelayC2Ejjjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered5DelayD2Ev = Module["__ZN12Superpowered5DelayD2Ev"] = createExportWrapper("_ZN12Superpowered5DelayD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6Filter7processEPfS1_j = Module["__ZN12Superpowered6Filter7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered6Filter7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6FilterD2Ev = Module["__ZN12Superpowered6FilterD2Ev"] = createExportWrapper("_ZN12Superpowered6FilterD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6FilterD0Ev = Module["__ZN12Superpowered6FilterD0Ev"] = createExportWrapper("_ZN12Superpowered6FilterD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6Filter11processMonoEPfS1_j = Module["__ZN12Superpowered6Filter11processMonoEPfS1_j"] = createExportWrapper("_ZN12Superpowered6Filter11processMonoEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6Filter21setCustomCoefficientsEfffff = Module["__ZN12Superpowered6Filter21setCustomCoefficientsEfffff"] = createExportWrapper("_ZN12Superpowered6Filter21setCustomCoefficientsEfffff", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6FilterC2ENS0_10FilterTypeEj = Module["__ZN12Superpowered6FilterC2ENS0_10FilterTypeEj"] = createExportWrapper("_ZN12Superpowered6FilterC2ENS0_10FilterTypeEj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Flanger7processEPfS1_j = Module["__ZN12Superpowered7Flanger7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered7Flanger7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FlangerD2Ev = Module["__ZN12Superpowered7FlangerD2Ev"] = createExportWrapper("_ZN12Superpowered7FlangerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FlangerD0Ev = Module["__ZN12Superpowered7FlangerD0Ev"] = createExportWrapper("_ZN12Superpowered7FlangerD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Flanger10getDepthMsEv = Module["__ZN12Superpowered7Flanger10getDepthMsEv"] = createExportWrapper("_ZN12Superpowered7Flanger10getDepthMsEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FlangerC2Ej = Module["__ZN12Superpowered7FlangerC2Ej"] = createExportWrapper("_ZN12Superpowered7FlangerC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortion7processEPfS1_j = Module["__ZN12Superpowered16GuitarDistortion7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered16GuitarDistortion7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortionD2Ev = Module["__ZN12Superpowered16GuitarDistortionD2Ev"] = createExportWrapper("_ZN12Superpowered16GuitarDistortionD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortionD0Ev = Module["__ZN12Superpowered16GuitarDistortionD0Ev"] = createExportWrapper("_ZN12Superpowered16GuitarDistortionD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortionC2Ej = Module["__ZN12Superpowered16GuitarDistortionC2Ej"] = createExportWrapper("_ZN12Superpowered16GuitarDistortionC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Gate7processEPfS1_j = Module["__ZN12Superpowered4Gate7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered4Gate7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4GateD2Ev = Module["__ZN12Superpowered4GateD2Ev"] = createExportWrapper("_ZN12Superpowered4GateD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4GateD0Ev = Module["__ZN12Superpowered4GateD0Ev"] = createExportWrapper("_ZN12Superpowered4GateD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4GateC2Ej = Module["__ZN12Superpowered4GateC2Ej"] = createExportWrapper("_ZN12Superpowered4GateC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Limiter7processEPfS1_j = Module["__ZN12Superpowered7Limiter7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered7Limiter7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7LimiterD2Ev = Module["__ZN12Superpowered7LimiterD2Ev"] = createExportWrapper("_ZN12Superpowered7LimiterD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7LimiterD0Ev = Module["__ZN12Superpowered7LimiterD0Ev"] = createExportWrapper("_ZN12Superpowered7LimiterD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7Limiter18getGainReductionDbEv = Module["__ZN12Superpowered7Limiter18getGainReductionDbEv"] = createExportWrapper("_ZN12Superpowered7Limiter18getGainReductionDbEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7LimiterC2Ej = Module["__ZN12Superpowered7LimiterC2Ej"] = createExportWrapper("_ZN12Superpowered7LimiterC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6Reverb7processEPfS1_j = Module["__ZN12Superpowered6Reverb7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered6Reverb7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6ReverbD2Ev = Module["__ZN12Superpowered6ReverbD2Ev"] = createExportWrapper("_ZN12Superpowered6ReverbD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6ReverbD0Ev = Module["__ZN12Superpowered6ReverbD0Ev"] = createExportWrapper("_ZN12Superpowered6ReverbD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6ReverbC2Ejj = Module["__ZN12Superpowered6ReverbC2Ejj"] = createExportWrapper("_ZN12Superpowered6ReverbC2Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Roll7processEPfS1_j = Module["__ZN12Superpowered4Roll7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered4Roll7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4RollD2Ev = Module["__ZN12Superpowered4RollD2Ev"] = createExportWrapper("_ZN12Superpowered4RollD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4RollD0Ev = Module["__ZN12Superpowered4RollD0Ev"] = createExportWrapper("_ZN12Superpowered4RollD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4RollC2Ejj = Module["__ZN12Superpowered4RollC2Ejj"] = createExportWrapper("_ZN12Superpowered4RollC2Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6Whoosh7processEPfS1_j = Module["__ZN12Superpowered6Whoosh7processEPfS1_j"] = createExportWrapper("_ZN12Superpowered6Whoosh7processEPfS1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6WhooshD2Ev = Module["__ZN12Superpowered6WhooshD2Ev"] = createExportWrapper("_ZN12Superpowered6WhooshD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6WhooshD0Ev = Module["__ZN12Superpowered6WhooshD0Ev"] = createExportWrapper("_ZN12Superpowered6WhooshD0Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6WhooshC2Ej = Module["__ZN12Superpowered6WhooshC2Ej"] = createExportWrapper("_ZN12Superpowered6WhooshC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10DotProductEPfS0_j = Module["__ZN12Superpowered10DotProductEPfS0_j"] = createExportWrapper("_ZN12Superpowered10DotProductEPfS0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10FloatToIntEPfPijj = Module["__ZN12Superpowered10FloatToIntEPfPijj"] = createExportWrapper("_ZN12Superpowered10FloatToIntEPfPijj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10IntToFloatEPiPfjj = Module["__ZN12Superpowered10IntToFloatEPiPfjj"] = createExportWrapper("_ZN12Superpowered10IntToFloatEPiPfjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10InterleaveEPfS0_S0_j = Module["__ZN12Superpowered10InterleaveEPfS0_S0_j"] = createExportWrapper("_ZN12Superpowered10InterleaveEPfS0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11CharToFloatEPaPfjj = Module["__ZN12Superpowered11CharToFloatEPaPfjj"] = createExportWrapper("_ZN12Superpowered11CharToFloatEPaPfjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11CrossStereoEPfS0_S0_ffffj = Module["__ZN12Superpowered11CrossStereoEPfS0_S0_ffffj"] = createExportWrapper("_ZN12Superpowered11CrossStereoEPfS0_S0_ffffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11FloatToCharEPfPajj = Module["__ZN12Superpowered11FloatToCharEPfPajj"] = createExportWrapper("_ZN12Superpowered11FloatToCharEPfPajj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j = Module["__ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j"] = createExportWrapper("_ZN12Superpowered11StereoMixer7processEPfS1_S1_S1_S1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11StereoMixerC2Ev = Module["__ZN12Superpowered11StereoMixerC2Ev"] = createExportWrapper("_ZN12Superpowered11StereoMixerC2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11StereoMixerD2Ev = Module["__ZN12Superpowered11StereoMixerD2Ev"] = createExportWrapper("_ZN12Superpowered11StereoMixerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12Bit24ToFloatEPvPfjj = Module["__ZN12Superpowered12Bit24ToFloatEPvPfjj"] = createExportWrapper("_ZN12Superpowered12Bit24ToFloatEPvPfjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12ChangeVolumeEPfS0_ffj = Module["__ZN12Superpowered12ChangeVolumeEPfS0_ffj"] = createExportWrapper("_ZN12Superpowered12ChangeVolumeEPfS0_ffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12DeInterleaveEPfS0_S0_j = Module["__ZN12Superpowered12DeInterleaveEPfS0_S0_j"] = createExportWrapper("_ZN12Superpowered12DeInterleaveEPfS0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12FloatTo24bitEPfPvjj = Module["__ZN12Superpowered12FloatTo24bitEPfPvjj"] = createExportWrapper("_ZN12Superpowered12FloatTo24bitEPfPvjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12HasNonFiniteEPfj = Module["__ZN12Superpowered12HasNonFiniteEPfj"] = createExportWrapper("_ZN12Superpowered12HasNonFiniteEPfj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered12StereoToMonoEPfS0_ffffj = Module["__ZN12Superpowered12StereoToMonoEPfS0_ffffj"] = createExportWrapper("_ZN12Superpowered12StereoToMonoEPfS0_ffffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered13InterleaveAddEPfS0_S0_j = Module["__ZN12Superpowered13InterleaveAddEPfS0_S0_j"] = createExportWrapper("_ZN12Superpowered13InterleaveAddEPfS0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15ChangeVolumeAddEPfS0_ffj = Module["__ZN12Superpowered15ChangeVolumeAddEPfS0_ffj"] = createExportWrapper("_ZN12Superpowered15ChangeVolumeAddEPfS0_ffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15DeInterleaveAddEPfS0_S0_j = Module["__ZN12Superpowered15DeInterleaveAddEPfS0_S0_j"] = createExportWrapper("_ZN12Superpowered15DeInterleaveAddEPfS0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FloatToShortIntEPfPsjj = Module["__ZN12Superpowered15FloatToShortIntEPfPsjj"] = createExportWrapper("_ZN12Superpowered15FloatToShortIntEPfPsjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15MidSideToStereoEPfS0_j = Module["__ZN12Superpowered15MidSideToStereoEPfS0_j"] = createExportWrapper("_ZN12Superpowered15MidSideToStereoEPfS0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15ShortIntToFloatEPsPfjj = Module["__ZN12Superpowered15ShortIntToFloatEPsPfjj"] = createExportWrapper("_ZN12Superpowered15ShortIntToFloatEPsPfjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15StereoToMidSideEPfS0_j = Module["__ZN12Superpowered15StereoToMidSideEPfS0_j"] = createExportWrapper("_ZN12Superpowered15StereoToMidSideEPfS0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15frequencyOfNoteEi = Module["__ZN12Superpowered15frequencyOfNoteEi"] = createExportWrapper("_ZN12Superpowered15frequencyOfNoteEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf = Module["__ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf"] = createExportWrapper("_ZN12Superpowered20DeInterleaveMultiplyEPfS0_S0_jf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_ = Module["__ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_"] = createExportWrapper("_ZN12Superpowered21InterleaveAndGetPeaksEPfS0_S0_jS0_", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf = Module["__ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf"] = createExportWrapper("_ZN12Superpowered23DeInterleaveMultiplyAddEPfS0_S0_jf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_ = Module["__ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_"] = createExportWrapper("_ZN12Superpowered23ShortIntToFloatGetPeaksEPsPfjS1_", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj = Module["__ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj"] = createExportWrapper("_ZN12Superpowered25FloatToShortIntInterleaveEPfS0_Psj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Add1EPfS0_j = Module["__ZN12Superpowered4Add1EPfS0_j"] = createExportWrapper("_ZN12Superpowered4Add1EPfS0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Add2EPfS0_S0_j = Module["__ZN12Superpowered4Add2EPfS0_S0_j"] = createExportWrapper("_ZN12Superpowered4Add2EPfS0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4Add4EPfS0_S0_S0_S0_j = Module["__ZN12Superpowered4Add4EPfS0_S0_S0_S0_j"] = createExportWrapper("_ZN12Superpowered4Add4EPfS0_S0_S0_S0_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4PeakEPfj = Module["__ZN12Superpowered4PeakEPfj"] = createExportWrapper("_ZN12Superpowered4PeakEPfj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6VolumeEPfS0_ffj = Module["__ZN12Superpowered6VolumeEPfS0_ffj"] = createExportWrapper("_ZN12Superpowered6VolumeEPfS0_ffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9CrossMonoEPfS0_S0_ffffj = Module["__ZN12Superpowered9CrossMonoEPfS0_S0_ffffj"] = createExportWrapper("_ZN12Superpowered9CrossMonoEPfS0_S0_ffffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j = Module["__ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j"] = createExportWrapper("_ZN12Superpowered9MonoMixer7processEPfS1_S1_S1_S1_j", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9MonoMixerC2Ev = Module["__ZN12Superpowered9MonoMixerC2Ev"] = createExportWrapper("_ZN12Superpowered9MonoMixerC2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9MonoMixerD2Ev = Module["__ZN12Superpowered9MonoMixerD2Ev"] = createExportWrapper("_ZN12Superpowered9MonoMixerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9VolumeAddEPfS0_ffj = Module["__ZN12Superpowered9VolumeAddEPfS0_ffj"] = createExportWrapper("_ZN12Superpowered9VolumeAddEPfS0_ffj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain14setStereoPairsEjb = Module["__ZN12Superpowered15FrequencyDomain14setStereoPairsEjb"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain14setStereoPairsEjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi = Module["__ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain27frequencyDomainToTimeDomainEPfS1_S1_S1_S1_fibi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi = Module["__ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain27timeDomainToFrequencyDomainEPfS1_S1_S1_fbi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv = Module["__ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain28getNumberOfInputFramesNeededEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb = Module["__ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain31timeDomainToFrequencyDomainMonoEPfS1_fb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain5resetEv = Module["__ZN12Superpowered15FrequencyDomain5resetEv"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain5resetEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain7advanceEi = Module["__ZN12Superpowered15FrequencyDomain7advanceEi"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain7advanceEi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomain8addInputEPfi = Module["__ZN12Superpowered15FrequencyDomain8addInputEPfi"] = createExportWrapper("_ZN12Superpowered15FrequencyDomain8addInputEPfi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomainC2Ejj = Module["__ZN12Superpowered15FrequencyDomainC2Ejj"] = createExportWrapper("_ZN12Superpowered15FrequencyDomainC2Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomainD2Ev = Module["__ZN12Superpowered15FrequencyDomainD2Ev"] = createExportWrapper("_ZN12Superpowered15FrequencyDomainD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Resampler5resetEv = Module["__ZN12Superpowered9Resampler5resetEv"] = createExportWrapper("_ZN12Superpowered9Resampler5resetEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Resampler7processEPsPfibbf = Module["__ZN12Superpowered9Resampler7processEPsPfibbf"] = createExportWrapper("_ZN12Superpowered9Resampler7processEPsPfibbf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9Resampler9process16EPsPfS1_ibbf = Module["__ZN12Superpowered9Resampler9process16EPsPfS1_ibbf"] = createExportWrapper("_ZN12Superpowered9Resampler9process16EPsPfS1_ibbf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9ResamplerC2Ev = Module["__ZN12Superpowered9ResamplerC2Ev"] = createExportWrapper("_ZN12Superpowered9ResamplerC2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9ResamplerD2Ev = Module["__ZN12Superpowered9ResamplerD2Ev"] = createExportWrapper("_ZN12Superpowered9ResamplerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Spatializer13reverbProcessEPfj = Module["__ZN12Superpowered11Spatializer13reverbProcessEPfj"] = createExportWrapper("_ZN12Superpowered11Spatializer13reverbProcessEPfj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb = Module["__ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb"] = createExportWrapper("_ZN12Superpowered11Spatializer7processEPfS1_S1_S1_jb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11SpatializerC2Ej = Module["__ZN12Superpowered11SpatializerC2Ej"] = createExportWrapper("_ZN12Superpowered11SpatializerC2Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11SpatializerD2Ev = Module["__ZN12Superpowered11SpatializerD2Ev"] = createExportWrapper("_ZN12Superpowered11SpatializerD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching14setStereoPairsEjb = Module["__ZN12Superpowered14TimeStretching14setStereoPairsEjb"] = createExportWrapper("_ZN12Superpowered14TimeStretching14setStereoPairsEjb", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching21getOutputLengthFramesEv = Module["__ZN12Superpowered14TimeStretching21getOutputLengthFramesEv"] = createExportWrapper("_ZN12Superpowered14TimeStretching21getOutputLengthFramesEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv = Module["__ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv"] = createExportWrapper("_ZN12Superpowered14TimeStretching28getNumberOfInputFramesNeededEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj = Module["__ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj"] = createExportWrapper("_ZN12Superpowered14TimeStretching31removeFramesFromInputBuffersEndEj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching5resetEv = Module["__ZN12Superpowered14TimeStretching5resetEv"] = createExportWrapper("_ZN12Superpowered14TimeStretching5resetEv", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching8addInputEPfi = Module["__ZN12Superpowered14TimeStretching8addInputEPfi"] = createExportWrapper("_ZN12Superpowered14TimeStretching8addInputEPfi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretching9getOutputEPfi = Module["__ZN12Superpowered14TimeStretching9getOutputEPfi"] = createExportWrapper("_ZN12Superpowered14TimeStretching9getOutputEPfi", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretchingC2Ejf = Module["__ZN12Superpowered14TimeStretchingC2Ejf"] = createExportWrapper("_ZN12Superpowered14TimeStretchingC2Ejf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretchingD2Ev = Module["__ZN12Superpowered14TimeStretchingD2Ev"] = createExportWrapper("_ZN12Superpowered14TimeStretchingD2Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7DecoderC1Ev = Module["__ZN12Superpowered7DecoderC1Ev"] = createExportWrapper("_ZN12Superpowered7DecoderC1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7DecoderD1Ev = Module["__ZN12Superpowered7DecoderD1Ev"] = createExportWrapper("_ZN12Superpowered7DecoderD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9GeneratorD1Ev = Module["__ZN12Superpowered9GeneratorD1Ev"] = createExportWrapper("_ZN12Superpowered9GeneratorD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered19AdvancedAudioPlayerD1Ev = Module["__ZN12Superpowered19AdvancedAudioPlayerD1Ev"] = createExportWrapper("_ZN12Superpowered19AdvancedAudioPlayerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8AnalyzerC1Eji = Module["__ZN12Superpowered8AnalyzerC1Eji"] = createExportWrapper("_ZN12Superpowered8AnalyzerC1Eji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8AnalyzerD1Ev = Module["__ZN12Superpowered8AnalyzerD1Ev"] = createExportWrapper("_ZN12Superpowered8AnalyzerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8WaveformC1Eji = Module["__ZN12Superpowered8WaveformC1Eji"] = createExportWrapper("_ZN12Superpowered8WaveformC1Eji", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered8WaveformD1Ev = Module["__ZN12Superpowered8WaveformD1Ev"] = createExportWrapper("_ZN12Superpowered8WaveformD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj = Module["__ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbankC1EjPfS1_jj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered18BandpassFilterbankD1Ev = Module["__ZN12Superpowered18BandpassFilterbankD1Ev"] = createExportWrapper("_ZN12Superpowered18BandpassFilterbankD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQC1Ej = Module["__ZN12Superpowered11ThreeBandEQC1Ej"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11ThreeBandEQD1Ev = Module["__ZN12Superpowered11ThreeBandEQD1Ev"] = createExportWrapper("_ZN12Superpowered11ThreeBandEQD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10BitcrusherC1Ej = Module["__ZN12Superpowered10BitcrusherC1Ej"] = createExportWrapper("_ZN12Superpowered10BitcrusherC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10BitcrusherD1Ev = Module["__ZN12Superpowered10BitcrusherD1Ev"] = createExportWrapper("_ZN12Superpowered10BitcrusherD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7ClipperC1Ev = Module["__ZN12Superpowered7ClipperC1Ev"] = createExportWrapper("_ZN12Superpowered7ClipperC1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7ClipperD1Ev = Module["__ZN12Superpowered7ClipperD1Ev"] = createExportWrapper("_ZN12Superpowered7ClipperD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10CompressorC1Ej = Module["__ZN12Superpowered10CompressorC1Ej"] = createExportWrapper("_ZN12Superpowered10CompressorC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered10CompressorD1Ev = Module["__ZN12Superpowered10CompressorD1Ev"] = createExportWrapper("_ZN12Superpowered10CompressorD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor2C1Ej = Module["__ZN12Superpowered11Compressor2C1Ej"] = createExportWrapper("_ZN12Superpowered11Compressor2C1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11Compressor2D1Ev = Module["__ZN12Superpowered11Compressor2D1Ev"] = createExportWrapper("_ZN12Superpowered11Compressor2D1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4EchoC1Ejj = Module["__ZN12Superpowered4EchoC1Ejj"] = createExportWrapper("_ZN12Superpowered4EchoC1Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4EchoD1Ev = Module["__ZN12Superpowered4EchoD1Ev"] = createExportWrapper("_ZN12Superpowered4EchoD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered5DelayC1Ejjjj = Module["__ZN12Superpowered5DelayC1Ejjjj"] = createExportWrapper("_ZN12Superpowered5DelayC1Ejjjj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered5DelayD1Ev = Module["__ZN12Superpowered5DelayD1Ev"] = createExportWrapper("_ZN12Superpowered5DelayD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6FilterC1ENS0_10FilterTypeEj = Module["__ZN12Superpowered6FilterC1ENS0_10FilterTypeEj"] = createExportWrapper("_ZN12Superpowered6FilterC1ENS0_10FilterTypeEj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6FilterD1Ev = Module["__ZN12Superpowered6FilterD1Ev"] = createExportWrapper("_ZN12Superpowered6FilterD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FlangerC1Ej = Module["__ZN12Superpowered7FlangerC1Ej"] = createExportWrapper("_ZN12Superpowered7FlangerC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7FlangerD1Ev = Module["__ZN12Superpowered7FlangerD1Ev"] = createExportWrapper("_ZN12Superpowered7FlangerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortionC1Ej = Module["__ZN12Superpowered16GuitarDistortionC1Ej"] = createExportWrapper("_ZN12Superpowered16GuitarDistortionC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered16GuitarDistortionD1Ev = Module["__ZN12Superpowered16GuitarDistortionD1Ev"] = createExportWrapper("_ZN12Superpowered16GuitarDistortionD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4GateC1Ej = Module["__ZN12Superpowered4GateC1Ej"] = createExportWrapper("_ZN12Superpowered4GateC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4GateD1Ev = Module["__ZN12Superpowered4GateD1Ev"] = createExportWrapper("_ZN12Superpowered4GateD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7LimiterC1Ej = Module["__ZN12Superpowered7LimiterC1Ej"] = createExportWrapper("_ZN12Superpowered7LimiterC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered7LimiterD1Ev = Module["__ZN12Superpowered7LimiterD1Ev"] = createExportWrapper("_ZN12Superpowered7LimiterD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6ReverbD1Ev = Module["__ZN12Superpowered6ReverbD1Ev"] = createExportWrapper("_ZN12Superpowered6ReverbD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4RollC1Ejj = Module["__ZN12Superpowered4RollC1Ejj"] = createExportWrapper("_ZN12Superpowered4RollC1Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered4RollD1Ev = Module["__ZN12Superpowered4RollD1Ev"] = createExportWrapper("_ZN12Superpowered4RollD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6WhooshC1Ej = Module["__ZN12Superpowered6WhooshC1Ej"] = createExportWrapper("_ZN12Superpowered6WhooshC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered6WhooshD1Ev = Module["__ZN12Superpowered6WhooshD1Ev"] = createExportWrapper("_ZN12Superpowered6WhooshD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11StereoMixerC1Ev = Module["__ZN12Superpowered11StereoMixerC1Ev"] = createExportWrapper("_ZN12Superpowered11StereoMixerC1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11StereoMixerD1Ev = Module["__ZN12Superpowered11StereoMixerD1Ev"] = createExportWrapper("_ZN12Superpowered11StereoMixerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9MonoMixerC1Ev = Module["__ZN12Superpowered9MonoMixerC1Ev"] = createExportWrapper("_ZN12Superpowered9MonoMixerC1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9MonoMixerD1Ev = Module["__ZN12Superpowered9MonoMixerD1Ev"] = createExportWrapper("_ZN12Superpowered9MonoMixerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomainC1Ejj = Module["__ZN12Superpowered15FrequencyDomainC1Ejj"] = createExportWrapper("_ZN12Superpowered15FrequencyDomainC1Ejj", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered15FrequencyDomainD1Ev = Module["__ZN12Superpowered15FrequencyDomainD1Ev"] = createExportWrapper("_ZN12Superpowered15FrequencyDomainD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9ResamplerC1Ev = Module["__ZN12Superpowered9ResamplerC1Ev"] = createExportWrapper("_ZN12Superpowered9ResamplerC1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered9ResamplerD1Ev = Module["__ZN12Superpowered9ResamplerD1Ev"] = createExportWrapper("_ZN12Superpowered9ResamplerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11SpatializerC1Ej = Module["__ZN12Superpowered11SpatializerC1Ej"] = createExportWrapper("_ZN12Superpowered11SpatializerC1Ej", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered11SpatializerD1Ev = Module["__ZN12Superpowered11SpatializerD1Ev"] = createExportWrapper("_ZN12Superpowered11SpatializerD1Ev", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretchingC1Ejf = Module["__ZN12Superpowered14TimeStretchingC1Ejf"] = createExportWrapper("_ZN12Superpowered14TimeStretchingC1Ejf", asm);

/** @type {function(...*):?} */
var __ZN12Superpowered14TimeStretchingD1Ev = Module["__ZN12Superpowered14TimeStretchingD1Ev"] = createExportWrapper("_ZN12Superpowered14TimeStretchingD1Ev", asm);

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location", asm);

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush", asm);

/** @type {function(...*):?} */
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls", asm);

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = asm["emscripten_stack_init"]

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = asm["emscripten_stack_get_free"]

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = asm["emscripten_stack_get_end"]

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave", asm);

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore", asm);

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc", asm);

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji", asm);





// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() { abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withStackSave")) Module["withStackSave"] = function() { abort("'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertFrameToPC")) Module["convertFrameToPC"] = function() { abort("'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "saveInUnwindCache")) Module["saveInUnwindCache"] = function() { abort("'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertPCtoSourceLocation")) Module["convertPCtoSourceLocation"] = function() { abort("'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "wasmTableMirror")) Module["wasmTableMirror"] = function() { abort("'wasmTableMirror' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setWasmTableEntry")) Module["setWasmTableEntry"] = function() { abort("'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getWasmTableEntry")) Module["getWasmTableEntry"] = function() { abort("'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() { abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() { abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() { abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() { abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped")) Module["setImmediateWrapped"] = function() { abort("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped")) Module["clearImmediateWrapped"] = function() { abort("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() { abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = flush_NO_FILESYSTEM;
    if (flush) flush();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  if (keepRuntimeAlive()) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();







  return SPModule
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = SPModule;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return SPModule; });
else if (typeof exports === 'object')
  exports["SPModule"] = SPModule;
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
    const output = outputs[0];
    output.forEach((channel) => {
      if (inputs[0].length > 1) this.bufferToWASM(this.inputBuffer, inputs);
      // this.processAudio(this.inputBuffer, this.outputBuffer, this.inputBuffer.array.length / 2, parameters);
      switch (this.mode) {
        case 'feedback':
          this.processFeedback(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
        case 'reverb':
          this.processReverb(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
        case 'sample':
          this.processSample(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
        case 'pink-noise':
          this.processWhiteNoise(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
        case 'pink-noise-sp':
          this.processWhiteNoiseSP(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
        case 'sound':
          this.processSound(this.inputBuffer.pointer, this.outputBuffer.pointer, channel.length * 2);
        break;
      
        default:
          break;
      }
      
      // for (let i = 0; i < this.inputBuffer.array.length; i++) {
      //   this.outputBuffer.array[i] = this.inputBuffer.array[i];

      // }
      if (outputs[0].length > 1) this.bufferToJS(this.outputBuffer, outputs);
      // for (let i = 0; i < channel.length; i++) {
      //   channel[i] = this.module?.randomNoise() ?? 0;
      // }
    });
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