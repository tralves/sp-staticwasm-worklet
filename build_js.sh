cat ./spmodule.js > ./public_html/sp-worklet.processor.js
sed -i '' 's/eval(UTF8ToString(ptr));/var c = UTF8ToString(ptr); if (!c.startsWith("setInterval")) eval(c); /g' ./public_html/sp-worklet.processor.js
cat ./sp-processor.js >> ./public_html/sp-worklet.processor.js
