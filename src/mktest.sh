python3 build.py && python3 - <<'PY'
import pathlib
s=pathlib.Path('dist/preview.html').read_text()
F='../../node_modules/@fontsource/'
ff='<style>'+''.join([
 '@font-face{font-family:"Anton";font-weight:400;src:url(%santon/files/anton-latin-400-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow Condensed";font-weight:700;src:url(%sbarlow-condensed/files/barlow-condensed-latin-700-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:400;src:url(%sbarlow/files/barlow-latin-400-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:500;src:url(%sbarlow/files/barlow-latin-500-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:600;src:url(%sbarlow/files/barlow-latin-600-normal.woff2)}'%F])+'</style>'
s=s.replace('<style>',ff+'<style>',1).replace('<link rel="stylesheet" href="https://fonts.googleapis.com','<link rel="stylesheet" data-off href="x://fonts.googleapis.com')
pathlib.Path('dist/test.html').write_text(s)
PY
