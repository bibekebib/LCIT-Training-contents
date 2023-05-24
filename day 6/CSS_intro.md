  
1. Intro to styling with CSS  

<!-- For Inline CSS -->
style="color:blue;text-align:center;"


<!-- For Internal CSS -->

    <style>
body {
  font-family: Arial, Verdana, sans-serif;}
h2 {
  color: #af0946;}
p{
color: #d9720b;}
    </style>



2. Selectors

* -> universal Selectors
h1  -> Heading 1 selector
i -> Italic Selector
b -> Bold Selector
p b -> Bold followed by p
p -> Paragraph
# -> Id
. -> Class

*{
font-family: Arial, Verdana, sans-serif;}
h1 {
  font-family: "Courier New", monospace;}
i{
color: green;}
i{
color: red;}
b{
color: pink;}
p b {
color: blue !important;}
p b {
color: violet;}
p#intro {
  font-size: 100%;}
p{
font-size: 75%;}