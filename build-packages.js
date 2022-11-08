import cssnano from 'cssnano';
import fs from 'fs';
import postcss from 'postcss';
import sass from 'sass';

// compile sass to css

async function compileCss() {
  const result = sass.compile('src/sass/index.scss');

  // minify output

  const output = await postcss([cssnano]).process(result.css);

  return output;
}

const output = await compileCss();

try {
  fs.writeFileSync('theme/package/css/theme.css', output.css);
} catch (err) {
  console.error(err);
  process.exit(1);
}

process.exit(0);
