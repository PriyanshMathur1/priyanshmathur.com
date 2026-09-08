python3 build4.py && python3 - <<'PY'
import pathlib
s=pathlib.Path('dist4/preview.html').read_text()
F='../../node_modules/@fontsource/'
ff='<style>'+''.join([
 '@font-face{font-family:"Barlow Condensed";font-weight:700;font-style:normal;src:url(%sbarlow-condensed/files/barlow-condensed-latin-700-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow Condensed";font-weight:900;font-style:italic;src:url(%sbarlow-condensed/files/barlow-condensed-latin-900-italic.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:400;src:url(%sbarlow/files/barlow-latin-400-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:500;src:url(%sbarlow/files/barlow-latin-500-normal.woff2)}'%F,
 '@font-face{font-family:"Barlow";font-weight:600;src:url(%sbarlow/files/barlow-latin-600-normal.woff2)}'%F])+'</style>'
s=s.replace('<style>',ff+'<style>',1).replace('<link rel="stylesheet" href="https://fonts.googleapis.com','<link rel="stylesheet" data-off href="x://fonts.googleapis.com')
pathlib.Path('dist4/test.html').write_text(s)
PY
