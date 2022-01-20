echo "Don't forget to run this before using this terminal window:"
echo "source /PATH/TO/emsdk_env.sh --build=Release"
echo
echo "You might need to run this using sudo as well."

em++ \
./main.cpp \
./Superpowered/superpowered.bc \
-I./Superpowered \
-DJSWASM="" \
-flto \
-s WASM=1 \
-s MODULARIZE=1 \
-s SINGLE_FILE=1 \
-s EXPORT_NAME="'SPModule'" \
-s EXPORT_ALL=1 \
-s ASSERTIONS=1 \
-s ENVIRONMENT="shell" \
-s BINARYEN_ASYNC_COMPILATION=0 \
-s ALLOW_MEMORY_GROWTH=1 \
-s INITIAL_MEMORY="32MB" \
-O1 -g0 \
-o spmodule.js

# EXPORT_ES6 option does not work as described at
# https://github.com/kripken/emscripten/issues/6284, so we have to
# manually add this by '--post-js' setting when the Emscripten compilation.
# echo "export default SPModule;" >> ./spmodule.js

./build_js.sh
