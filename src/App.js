import React, { useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import plugin from 'grapesjs-component-code-editor';
import 'grapesjs/dist/css/grapes.min.css';
import gsCustome from 'grapesjs-custom-code';
import 'grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css';


function App() {

  const [editor, setEditor] = useState(null)
  
  useEffect(() => {
  const editor = grapesjs.init({
  container: "#editor",
  plugins: [gjsPresetWebpage, gsCustome],
  // pageManager: {
  //   pages: [
  //     {
  //       id: 'testingcom',
  //       styles: `.my-class { color: red }`, // or a JSON of styles
  //       component : '<div><img src="https://path/image" /><span title="foo">Hello world!!!</span> </div>', // or a JSON of components
  //     }
  //  ]
  // },
  });
  const component = editor.addComponents
  (`
  
  <style>
  * {
box-sizing: border-box;
}
#home-banner-2
{
  position: relative;
}
body {
margin: 0;
}
.navbar{
background-color:rgb(34, 34, 34);
color:rgb(221, 221, 221);
min-height:50px;
width:100%;
position:relative;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
padding-top:0.5rem;
padding-right:1rem;
padding-bottom:0.5rem;
padding-left:1rem;
}
.navbar-brand{
vertical-align:top;
display:inline-block;
padding-top:0.3125rem;
padding-right:5px;
padding-bottom:0.3125rem;
padding-left:5px;
min-height:50px;
min-width:50px;
color:inherit;
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
margin-right:1rem;
font-size:1.25rem;
line-height:inherit;
white-space:nowrap;
}
*{
box-sizing:border-box;
}
body{
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size:1rem;
font-weight:400;
line-height:1.5;
color:rgb(33, 37, 41);
text-align:left;
background-color:rgb(255, 255, 255);
}
.logo{
background-color:rgb(45, 48, 56);
border-top-left-radius:5px;
border-top-right-radius:5px;
border-bottom-right-radius:5px;
border-bottom-left-radius:5px;
width:130px;
padding-top:9px;
padding-right:25px;
padding-bottom:10px;
padding-left:15px;
min-height:30px;
text-align:center;
line-height:30px;
color:rgb(77, 17, 79);
font-size:23px;
height:76px;
margin-right:0px;
}
.button{
width:100%;
margin-top:15px;
margin-right:0px;
margin-bottom:15px;
margin-left:0px;
border-top-width:initial;
border-right-width:initial;
border-bottom-width:initial;
border-left-width:initial;
border-top-style:none;
border-right-style:none;
border-bottom-style:none;
border-left-style:none;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
color:rgb(255, 255, 255);
border-top-left-radius:2px;
border-top-right-radius:2px;
border-bottom-right-radius:2px;
border-bottom-left-radius:2px;
padding-top:7px;
padding-right:10px;
padding-bottom:7px;
padding-left:10px;
font-size:1em;
cursor:pointer;
}
:root{
--blue:#007bff;
--indigo:#6610f2;
--purple:#6f42c1;
--pink:#e83e8c;
--red:#dc3545;
--orange:#fd7e14;
--yellow:#ffc107;
--green:#28a745;
--teal:#20c997;
--cyan:#17a2b8;
--white:#fff;
--gray:#6c757d;
--gray-dark:#343a40;
--primary:#007bff;
--secondary:#6c757d;
--success:#28a745;
--info:#17a2b8;
--warning:#ffc107;
--danger:#dc3545;
--light:#f8f9fa;
--dark:#343a40;
--breakpoint-xs:0;
--breakpoint-sm:576px;
--breakpoint-md:768px;
--breakpoint-lg:992px;
--breakpoint-xl:1200px;
--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
*, ::after, ::before{
box-sizing:border-box;
}
html{
font-family:sans-serif;
line-height:1.15;
text-size-adjust:100%;
-webkit-tap-highlight-color:transparent;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section{
display:block;
}
[tabindex="-1"]:focus{
outline-color:initial !important;
outline-style:initial !important;
outline-width:0px !important;
}
hr{
box-sizing:content-box;
height:0px;
overflow-x:visible;
overflow-y:visible;
margin-top:1rem;
margin-bottom:1rem;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
border-top-width:1px;
border-top-style:solid;
border-top-color:rgba(0, 0, 0, 0.1);
}
h1, h2, h3, h4, h5, h6{
margin-top:10px;
margin-bottom:10px;
font-family:Montserrat, sans-serif;
font-weight:700;
color:rgb(45, 48, 56);
}
p{
margin-top:0px;
margin-bottom:1rem;
}
abbr[data-original-title], abbr[title]{
text-decoration-line:underline;
text-decoration-thickness:initial;
text-decoration-style:dotted;
text-decoration-color:initial;
cursor:help;
border-bottom-width:0px;
border-bottom-style:initial;
border-bottom-color:initial;
}
address{
margin-bottom:1rem;
font-style:normal;
line-height:inherit;
}
dl, ol, ul{
margin-top:0px;
margin-bottom:1rem;
}
ol ol, ol ul, ul ol, ul ul{
margin-bottom:0px;
}
dt{
font-weight:700;
}
dd{
margin-bottom:0.5rem;
margin-left:0px;
}
blockquote{
margin-top:0px;
margin-right:0px;
margin-bottom:1rem;
margin-left:0px;
}
dfn{
font-style:italic;
}
b, strong{
font-weight:bolder;
}
small{
font-size:80%;
}
sub, sup{
position:relative;
font-size:75%;
line-height:0;
vertical-align:baseline;
}
sub{
bottom:-0.25em;
}
sup{
top:-0.5em;
}
a{
color:rgb(45, 48, 56);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:transparent;
}
a:hover{
color:rgb(0, 174, 239);
text-decoration-line:underline;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
a:not([href]):not([tabindex]){
color:inherit;
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover{
color:inherit;
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
a:not([href]):not([tabindex]):focus{
outline-color:initial;
outline-style:initial;
outline-width:0px;
}
code, kbd, pre, samp{
font-family:SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
font-size:1em;
}
pre{
margin-top:0px;
margin-bottom:1rem;
overflow-x:auto;
overflow-y:auto;
display:block;
font-size:87.5%;
color:rgb(33, 37, 41);
}
figure{
margin-top:0px;
margin-right:0px;
margin-bottom:1rem;
margin-left:0px;
}
img{
vertical-align:middle;
border-top-style:none;
border-right-style:none;
border-bottom-style:none;
border-left-style:none;
}
svg{
overflow-x:hidden;
overflow-y:hidden;
vertical-align:middle;
}
table{
border-collapse:collapse;
}
caption{
padding-top:0.75rem;
padding-bottom:0.75rem;
color:rgb(108, 117, 125);
text-align:left;
caption-side:bottom;
}
th{
text-align:inherit;
}
label{
display:inline-block;
margin-bottom:0.5rem;
}
button{
border-top-left-radius:0px;
border-top-right-radius:0px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
button:focus{
outline-color:-webkit-focus-ring-color;
outline-style:auto;
outline-width:5px;
}
button, input, optgroup, select, textarea{
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
font-family:inherit;
font-size:inherit;
line-height:inherit;
}
button, input{
overflow-x:visible;
overflow-y:visible;
}
button, select{
text-transform:none;
}
[type="reset"], [type="submit"], button, html [type="button"]{
appearance:button;
}
input[type="checkbox"], input[type="radio"]{
box-sizing:border-box;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}
input[type="date"], input[type="datetime-local"], input[type="month"], input[type="time"]{
appearance:listbox;
}
textarea{
overflow-x:auto;
overflow-y:auto;
resize:vertical;
}
fieldset{
min-width:0px;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
legend{
display:block;
width:100%;
max-width:100%;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
margin-bottom:0.5rem;
font-size:1.5rem;
line-height:inherit;
color:inherit;
white-space:normal;
}
progress{
vertical-align:baseline;
}
[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button{
height:auto;
}
[type="search"]{
outline-offset:-2px;
appearance:none;
}
[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration{
appearance:none;
}
::-webkit-file-upload-button{
font-style:inherit;
font-variant-ligatures:inherit;
font-variant-caps:inherit;
font-variant-numeric:inherit;
font-variant-east-asian:inherit;
font-weight:inherit;
font-stretch:inherit;
font-size:inherit;
line-height:inherit;
font-family:inherit;
appearance:button;
}
output{
display:inline-block;
}
summary{
display:list-item;
cursor:pointer;
}
template{
display:none;
}
[hidden]{
display:none !important;
}
.h6, h1, h2, h3, h4, h5, h6{
margin-bottom:0.5rem;
font-family:inherit;
font-weight:500;
line-height:1.2;
color:inherit;
}
.h1, h1{
font-size:2.5rem;
}
.h2, h2{
font-size:2rem;
}
.h3, h3{
font-size:1.75rem;
}
.h4, h4{
font-size:1.5rem;
}
.h5, h5{
font-size:1.25rem;
}
.h6, h6{
font-size:1rem;
}
.small, small{
font-size:80%;
font-weight:400;
}
.mark, mark{
padding-top:0.2em;
padding-right:0.2em;
padding-bottom:0.2em;
padding-left:0.2em;
background-color:rgb(252, 248, 227);
}
.list-inline{
padding-left:0px;
list-style-position:initial;
list-style-image:initial;
list-style-type:none;
right:6px;
position:relative;
}
.list-inline-item{
display:inline-block;
}
.list-inline-item:not(:last-child){
margin-right:0.5rem;
}
.img-fluid{
max-width:100%;
position:relative;
margin:0 31px 0 -13px;
}
code{
font-size:87.5%;
color:rgb(232, 62, 140);
word-break:break-word;
}
a > code{
color:inherit;
}
kbd{
padding-top:0.2rem;
padding-right:0.4rem;
padding-bottom:0.2rem;
padding-left:0.4rem;
font-size:87.5%;
color:rgb(255, 255, 255);
background-color:rgb(33, 37, 41);
border-top-left-radius:0.2rem;
border-top-right-radius:0.2rem;
border-bottom-right-radius:0.2rem;
border-bottom-left-radius:0.2rem;
}
kbd kbd{
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
font-size:100%;
font-weight:700;
}
pre code{
font-size:inherit;
color:inherit;
word-break:normal;
}
.container{
width:100%;
padding-right:15px;
padding-left:15px;
margin-right:auto;
margin-left:auto;
}
.row{
display:flex;
flex-wrap:wrap;
margin-right:-15px;
margin-left:-15px;
}
.no-gutters > .col, .no-gutters > [class*="col-"]{
padding-right:0px;
padding-left:0px;
}
.col-md-4{
position:relative;
width:100%;
min-height:1px;
padding-right:15px;
padding-left:15px;
}
.col-md-8{
position:relative;
width:100%;
min-height:1px;
padding-right:15px;
padding-left:15px;
}
.col-sm-12{
position:relative;
width:100%;
min-height:1px;
padding-right:15px;
padding-left:15px;
}
.col-sm-6{
position:relative;
width:100%;
min-height:1px;
padding-right:15px;
padding-left:15px;
}
.col-sm-9{
position:relative;
width:100%;
min-height:1px;
padding-right:15px;
padding-left:15px;
}
.table td, .table th{
padding-top:0.75rem;
padding-right:0.75rem;
padding-bottom:0.75rem;
padding-left:0.75rem;
vertical-align:top;
border-top-width:1px;
border-top-style:solid;
border-top-color:rgb(222, 226, 230);
}
.table thead th{
vertical-align:bottom;
border-bottom-width:2px;
border-bottom-style:solid;
border-bottom-color:rgb(222, 226, 230);
}
.table tbody + tbody{
border-top-width:2px;
border-top-style:solid;
border-top-color:rgb(222, 226, 230);
}
.table .table{
background-color:rgb(255, 255, 255);
}
.table-sm td, .table-sm th{
padding-top:0.3rem;
padding-right:0.3rem;
padding-bottom:0.3rem;
padding-left:0.3rem;
}
.table-bordered td, .table-bordered th{
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(222, 226, 230);
border-right-color:rgb(222, 226, 230);
border-bottom-color:rgb(222, 226, 230);
border-left-color:rgb(222, 226, 230);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
.table-bordered thead td, .table-bordered thead th{
border-bottom-width:2px;
}
.table-borderless tbody + tbody, .table-borderless td, .table-borderless th, .table-borderless thead th{
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
.table-striped tbody tr:nth-of-type(2n+1){
background-color:rgba(0, 0, 0, 0.05);
}
.table-hover tbody tr:hover{
background-color:rgba(0, 0, 0, 0.075);
}
.table-primary, .table-primary > td, .table-primary > th{
background-color:rgb(184, 218, 255);
}
.table-hover .table-primary:hover{
background-color:rgb(159, 205, 255);
}
.table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th{
background-color:rgb(159, 205, 255);
}
.table-secondary, .table-secondary > td, .table-secondary > th{
background-color:rgb(214, 216, 219);
}
.table-hover .table-secondary:hover{
background-color:rgb(200, 203, 207);
}
.table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th{
background-color:rgb(200, 203, 207);
}
.table-success, .table-success > td, .table-success > th{
background-color:rgb(195, 230, 203);
}
.table-hover .table-success:hover{
background-color:rgb(177, 223, 187);
}
.table-hover .table-success:hover > td, .table-hover .table-success:hover > th{
background-color:rgb(177, 223, 187);
}
.table-info, .table-info > td, .table-info > th{
background-color:rgb(190, 229, 235);
}
.table-hover .table-info:hover{
background-color:rgb(171, 221, 229);
}
.table-hover .table-info:hover > td, .table-hover .table-info:hover > th{
background-color:rgb(171, 221, 229);
}
.table-warning, .table-warning > td, .table-warning > th{
background-color:rgb(255, 238, 186);
}
.table-hover .table-warning:hover{
background-color:rgb(255, 232, 161);
}
.table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th{
background-color:rgb(255, 232, 161);
}
.table-danger, .table-danger > td, .table-danger > th{
background-color:rgb(245, 198, 203);
}
.table-hover .table-danger:hover{
background-color:rgb(241, 176, 183);
}
.table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th{
background-color:rgb(241, 176, 183);
}
.table-light, .table-light > td, .table-light > th{
background-color:rgb(253, 253, 254);
}
.table-hover .table-light:hover{
background-color:rgb(236, 236, 246);
}
.table-hover .table-light:hover > td, .table-hover .table-light:hover > th{
background-color:rgb(236, 236, 246);
}
.table-dark, .table-dark > td, .table-dark > th{
background-color:rgb(198, 200, 202);
}
.table-hover .table-dark:hover{
background-color:rgb(185, 187, 190);
}
.table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th{
background-color:rgb(185, 187, 190);
}
.table-active, .table-active > td, .table-active > th{
background-color:rgba(0, 0, 0, 0.075);
}
.table-hover .table-active:hover{
background-color:rgba(0, 0, 0, 0.075);
}
.table-hover .table-active:hover > td, .table-hover .table-active:hover > th{
background-color:rgba(0, 0, 0, 0.075);
}
.table .thead-dark th{
color:rgb(255, 255, 255);
background-color:rgb(33, 37, 41);
border-top-color:rgb(50, 56, 62);
border-right-color:rgb(50, 56, 62);
border-bottom-color:rgb(50, 56, 62);
border-left-color:rgb(50, 56, 62);
}
.table .thead-light th{
color:rgb(73, 80, 87);
background-color:rgb(233, 236, 239);
border-top-color:rgb(222, 226, 230);
border-right-color:rgb(222, 226, 230);
border-bottom-color:rgb(222, 226, 230);
border-left-color:rgb(222, 226, 230);
}
.table-dark td, .table-dark th, .table-dark thead th{
border-top-color:rgb(50, 56, 62);
border-right-color:rgb(50, 56, 62);
border-bottom-color:rgb(50, 56, 62);
border-left-color:rgb(50, 56, 62);
}
.table-dark.table-striped tbody tr:nth-of-type(2n+1){
background-color:rgba(255, 255, 255, 0.05);
}
.table-dark.table-hover tbody tr:hover{
background-color:rgba(255, 255, 255, 0.075);
}
.table-responsive > .table-bordered{
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
.form-control{
display:block;
width:100%;
height:48px;
padding-top:0.375rem;
padding-right:0.75rem;
padding-bottom:0.375rem;
padding-left:0.75rem;
font-size:1rem;
line-height:1.5;
color:rgb(73, 80, 87);
background-color:rgb(255, 255, 255);
background-clip:padding-box;
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(206, 212, 218);
border-right-color:rgb(206, 212, 218);
border-bottom-color:rgb(206, 212, 218);
border-left-color:rgb(206, 212, 218);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
transition-duration:0.15s, 0.15s;
transition-timing-function:ease-in-out, ease-in-out;
transition-delay:0s, 0s;
transition-property:border-color, box-shadow;
box-shadow:none;
}
.form-control:focus{
color:rgb(73, 80, 87);
background-color:rgb(255, 255, 255);
border-top-color:rgb(128, 189, 255);
border-right-color:rgb(128, 189, 255);
border-bottom-color:rgb(128, 189, 255);
border-left-color:rgb(128, 189, 255);
outline-color:initial;
outline-style:initial;
outline-width:0px;
box-shadow:rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
}
.form-control::-webkit-input-placeholder{
color:rgb(108, 117, 125);
opacity:1;
}
.form-control::placeholder{
color:rgb(108, 117, 125);
opacity:1;
}
.form-control:disabled, .form-control[readonly]{
background-color:rgb(233, 236, 239);
opacity:1;
}
select.form-control[multiple], select.form-control[size]{
height:auto;
}
textarea.form-control{
height:auto;
}
.form-group{
margin-bottom:1rem;
}
.form-row > .col, .form-row > [class*="col-"]{
padding-right:5px;
padding-left:5px;
}
.form-check-input:disabled ~ .form-check-label{
color:rgb(108, 117, 125);
}
.form-check-inline .form-check-input{
position:static;
margin-top:0px;
margin-right:0.3125rem;
margin-left:0px;
}
.form-control.is-valid, .was-validated .custom-select:valid, .was-validated .form-control:valid{
border-top-color:rgb(40, 167, 69);
border-right-color:rgb(40, 167, 69);
border-bottom-color:rgb(40, 167, 69);
border-left-color:rgb(40, 167, 69);
}
.form-control.is-valid:focus, .was-validated .custom-select:valid:focus, .was-validated .form-control:valid:focus{
border-top-color:rgb(40, 167, 69);
border-right-color:rgb(40, 167, 69);
border-bottom-color:rgb(40, 167, 69);
border-left-color:rgb(40, 167, 69);
box-shadow:rgba(40, 167, 69, 0.25) 0px 0px 0px 0.2rem;
}
.custom-select.is-valid ~ .valid-feedback, .custom-select.is-valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback, .form-control.is-valid ~ .valid-tooltip, .was-validated .custom-select:valid ~ .valid-feedback, .was-validated .custom-select:valid ~ .valid-tooltip, .was-validated .form-control:valid ~ .valid-feedback, .was-validated .form-control:valid ~ .valid-tooltip{
display:block;
}
.form-control-file.is-valid ~ .valid-feedback, .form-control-file.is-valid ~ .valid-tooltip, .was-validated .form-control-file:valid ~ .valid-feedback, .was-validated .form-control-file:valid ~ .valid-tooltip{
display:block;
}
.form-check-input.is-valid ~ .form-check-label, .was-validated .form-check-input:valid ~ .form-check-label{
color:rgb(40, 167, 69);
}
.form-check-input.is-valid ~ .valid-feedback, .form-check-input.is-valid ~ .valid-tooltip, .was-validated .form-check-input:valid ~ .valid-feedback, .was-validated .form-check-input:valid ~ .valid-tooltip{
display:block;
}
.custom-control-input.is-valid ~ .custom-control-label, .was-validated .custom-control-input:valid ~ .custom-control-label{
color:rgb(40, 167, 69);
}
.custom-control-input.is-valid ~ .custom-control-label::before, .was-validated .custom-control-input:valid ~ .custom-control-label::before{
background-color:rgb(113, 221, 138);
}
.custom-control-input.is-valid ~ .valid-feedback, .custom-control-input.is-valid ~ .valid-tooltip, .was-validated .custom-control-input:valid ~ .valid-feedback, .was-validated .custom-control-input:valid ~ .valid-tooltip{
display:block;
}
.custom-control-input.is-valid:checked ~ .custom-control-label::before, .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before{
background-color:rgb(52, 206, 87);
}
.custom-control-input.is-valid:focus ~ .custom-control-label::before, .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before{
box-shadow:rgb(255, 255, 255) 0px 0px 0px 1px, rgba(40, 167, 69, 0.25) 0px 0px 0px 0.2rem;
}
.custom-file-input.is-valid ~ .custom-file-label, .was-validated .custom-file-input:valid ~ .custom-file-label{
border-top-color:rgb(40, 167, 69);
border-right-color:rgb(40, 167, 69);
border-bottom-color:rgb(40, 167, 69);
border-left-color:rgb(40, 167, 69);
}
.custom-file-input.is-valid ~ .custom-file-label::after, .was-validated .custom-file-input:valid ~ .custom-file-label::after{
border-top-color:inherit;
border-right-color:inherit;
border-bottom-color:inherit;
border-left-color:inherit;
}
.custom-file-input.is-valid ~ .valid-feedback, .custom-file-input.is-valid ~ .valid-tooltip, .was-validated .custom-file-input:valid ~ .valid-feedback, .was-validated .custom-file-input:valid ~ .valid-tooltip{
display:block;
}
.custom-file-input.is-valid:focus ~ .custom-file-label, .was-validated .custom-file-input:valid:focus ~ .custom-file-label{
box-shadow:rgba(40, 167, 69, 0.25) 0px 0px 0px 0.2rem;
}
.form-control.is-invalid, .was-validated .custom-select:invalid, .was-validated .form-control:invalid{
border-top-color:rgb(220, 53, 69);
border-right-color:rgb(220, 53, 69);
border-bottom-color:rgb(220, 53, 69);
border-left-color:rgb(220, 53, 69);
}
.form-control.is-invalid:focus, .was-validated .custom-select:invalid:focus, .was-validated .form-control:invalid:focus{
border-top-color:rgb(220, 53, 69);
border-right-color:rgb(220, 53, 69);
border-bottom-color:rgb(220, 53, 69);
border-left-color:rgb(220, 53, 69);
box-shadow:rgba(220, 53, 69, 0.25) 0px 0px 0px 0.2rem;
}
.custom-select.is-invalid ~ .invalid-feedback, .custom-select.is-invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback, .form-control.is-invalid ~ .invalid-tooltip, .was-validated .custom-select:invalid ~ .invalid-feedback, .was-validated .custom-select:invalid ~ .invalid-tooltip, .was-validated .form-control:invalid ~ .invalid-feedback, .was-validated .form-control:invalid ~ .invalid-tooltip{
display:block;
}
.form-control-file.is-invalid ~ .invalid-feedback, .form-control-file.is-invalid ~ .invalid-tooltip, .was-validated .form-control-file:invalid ~ .invalid-feedback, .was-validated .form-control-file:invalid ~ .invalid-tooltip{
display:block;
}
.form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label{
color:rgb(220, 53, 69);
}
.form-check-input.is-invalid ~ .invalid-feedback, .form-check-input.is-invalid ~ .invalid-tooltip, .was-validated .form-check-input:invalid ~ .invalid-feedback, .was-validated .form-check-input:invalid ~ .invalid-tooltip{
display:block;
}
.custom-control-input.is-invalid ~ .custom-control-label, .was-validated .custom-control-input:invalid ~ .custom-control-label{
color:rgb(220, 53, 69);
}
.custom-control-input.is-invalid ~ .custom-control-label::before, .was-validated .custom-control-input:invalid ~ .custom-control-label::before{
background-color:rgb(239, 162, 169);
}
.custom-control-input.is-invalid ~ .invalid-feedback, .custom-control-input.is-invalid ~ .invalid-tooltip, .was-validated .custom-control-input:invalid ~ .invalid-feedback, .was-validated .custom-control-input:invalid ~ .invalid-tooltip{
display:block;
}
.custom-control-input.is-invalid:checked ~ .custom-control-label::before, .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before{
background-color:rgb(228, 96, 109);
}
.custom-control-input.is-invalid:focus ~ .custom-control-label::before, .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before{
box-shadow:rgb(255, 255, 255) 0px 0px 0px 1px, rgba(220, 53, 69, 0.25) 0px 0px 0px 0.2rem;
}
.custom-file-input.is-invalid ~ .custom-file-label, .was-validated .custom-file-input:invalid ~ .custom-file-label{
border-top-color:rgb(220, 53, 69);
border-right-color:rgb(220, 53, 69);
border-bottom-color:rgb(220, 53, 69);
border-left-color:rgb(220, 53, 69);
}
.custom-file-input.is-invalid ~ .custom-file-label::after, .was-validated .custom-file-input:invalid ~ .custom-file-label::after{
border-top-color:inherit;
border-right-color:inherit;
border-bottom-color:inherit;
border-left-color:inherit;
}
.custom-file-input.is-invalid ~ .invalid-feedback, .custom-file-input.is-invalid ~ .invalid-tooltip, .was-validated .custom-file-input:invalid ~ .invalid-feedback, .was-validated .custom-file-input:invalid ~ .invalid-tooltip{
display:block;
}
.custom-file-input.is-invalid:focus ~ .custom-file-label, .was-validated .custom-file-input:invalid:focus ~ .custom-file-label{
box-shadow:rgba(220, 53, 69, 0.25) 0px 0px 0px 0.2rem;
}
.form-inline .form-check{
width:100%;
}
.btn{
display:inline-block;
font-weight:400;
text-align:center;
white-space:nowrap;
vertical-align:middle;
user-select:none;
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
padding-top:0.375rem;
padding-right:0.75rem;
padding-bottom:0.375rem;
padding-left:0.75rem;
font-size:1rem;
line-height:1.5;
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
transition-duration:0.15s, 0.15s, 0.15s, 0.15s;
transition-timing-function:ease-in-out, ease-in-out, ease-in-out, ease-in-out;
transition-delay:0s, 0s, 0s, 0s;
transition-property:color, background-color, border-color, box-shadow;
}
.btn:focus{
text-decoration-line:none !important;
text-decoration-thickness:initial !important;
text-decoration-style:initial !important;
text-decoration-color:initial !important;
outline-color:initial !important;
outline-style:none !important;
outline-width:initial !important;
box-shadow:none !important;
}
.btn:hover{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.btn.focus{
outline-color:initial;
outline-style:initial;
outline-width:0px;
box-shadow:rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
}
.btn.disabled{
opacity:0.65;
}
.btn:disabled{
opacity:0.65;
}
.btn:not(:disabled):not(.disabled){
cursor:pointer;
}
a.btn.disabled, fieldset:disabled a.btn{
pointer-events:none;
}
.btn-primary{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
border-top-color:rgb(0, 123, 255);
border-right-color:rgb(0, 123, 255);
border-bottom-color:rgb(0, 123, 255);
border-left-color:rgb(0, 123, 255);
}
.btn-primary:hover{
color:rgb(255, 255, 255);
background-color:rgb(0, 105, 217);
border-top-color:rgb(0, 98, 204);
border-right-color:rgb(0, 98, 204);
border-bottom-color:rgb(0, 98, 204);
border-left-color:rgb(0, 98, 204);
}
.btn-primary.focus{
box-shadow:rgba(0, 123, 255, 0.5) 0px 0px 0px 0.2rem;
}
.btn-primary:focus{
box-shadow:rgba(0, 123, 255, 0.5) 0px 0px 0px 0.2rem;
}
.btn-primary.disabled{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
border-top-color:rgb(0, 123, 255);
border-right-color:rgb(0, 123, 255);
border-bottom-color:rgb(0, 123, 255);
border-left-color:rgb(0, 123, 255);
}
.btn-primary:disabled{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
border-top-color:rgb(0, 123, 255);
border-right-color:rgb(0, 123, 255);
border-bottom-color:rgb(0, 123, 255);
border-left-color:rgb(0, 123, 255);
}
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(0, 98, 204);
border-top-color:rgb(0, 92, 191);
border-right-color:rgb(0, 92, 191);
border-bottom-color:rgb(0, 92, 191);
border-left-color:rgb(0, 92, 191);
}
.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-primary.dropdown-toggle:focus{
box-shadow:rgba(0, 123, 255, 0.5) 0px 0px 0px 0.2rem;
}
.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(84, 91, 98);
border-top-color:rgb(78, 85, 91);
border-right-color:rgb(78, 85, 91);
border-bottom-color:rgb(78, 85, 91);
border-left-color:rgb(78, 85, 91);
}
.btn-secondary:not(:disabled):not(.disabled).active:focus, .btn-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-secondary.dropdown-toggle:focus{
box-shadow:rgba(108, 117, 125, 0.5) 0px 0px 0px 0.2rem;
}
.btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show > .btn-success.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(30, 126, 52);
border-top-color:rgb(28, 116, 48);
border-right-color:rgb(28, 116, 48);
border-bottom-color:rgb(28, 116, 48);
border-left-color:rgb(28, 116, 48);
}
.btn-success:not(:disabled):not(.disabled).active:focus, .btn-success:not(:disabled):not(.disabled):active:focus, .show > .btn-success.dropdown-toggle:focus{
box-shadow:rgba(40, 167, 69, 0.5) 0px 0px 0px 0.2rem;
}
.btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show > .btn-info.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(17, 122, 139);
border-top-color:rgb(16, 112, 127);
border-right-color:rgb(16, 112, 127);
border-bottom-color:rgb(16, 112, 127);
border-left-color:rgb(16, 112, 127);
}
.btn-info:not(:disabled):not(.disabled).active:focus, .btn-info:not(:disabled):not(.disabled):active:focus, .show > .btn-info.dropdown-toggle:focus{
box-shadow:rgba(23, 162, 184, 0.5) 0px 0px 0px 0.2rem;
}
.btn-warning:not(:disabled):not(.disabled).active, .btn-warning:not(:disabled):not(.disabled):active, .show > .btn-warning.dropdown-toggle{
color:rgb(33, 37, 41);
background-color:rgb(211, 158, 0);
border-top-color:rgb(198, 149, 0);
border-right-color:rgb(198, 149, 0);
border-bottom-color:rgb(198, 149, 0);
border-left-color:rgb(198, 149, 0);
}
.btn-warning:not(:disabled):not(.disabled).active:focus, .btn-warning:not(:disabled):not(.disabled):active:focus, .show > .btn-warning.dropdown-toggle:focus{
box-shadow:rgba(255, 193, 7, 0.5) 0px 0px 0px 0.2rem;
}
.btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(189, 33, 48);
border-top-color:rgb(178, 31, 45);
border-right-color:rgb(178, 31, 45);
border-bottom-color:rgb(178, 31, 45);
border-left-color:rgb(178, 31, 45);
}
.btn-danger:not(:disabled):not(.disabled).active:focus, .btn-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-danger.dropdown-toggle:focus{
box-shadow:rgba(220, 53, 69, 0.5) 0px 0px 0px 0.2rem;
}
.btn-light:not(:disabled):not(.disabled).active, .btn-light:not(:disabled):not(.disabled):active, .show > .btn-light.dropdown-toggle{
color:rgb(33, 37, 41);
background-color:rgb(218, 224, 229);
border-top-color:rgb(211, 217, 223);
border-right-color:rgb(211, 217, 223);
border-bottom-color:rgb(211, 217, 223);
border-left-color:rgb(211, 217, 223);
}
.btn-light:not(:disabled):not(.disabled).active:focus, .btn-light:not(:disabled):not(.disabled):active:focus, .show > .btn-light.dropdown-toggle:focus{
box-shadow:rgba(248, 249, 250, 0.5) 0px 0px 0px 0.2rem;
}
.btn-dark:not(:disabled):not(.disabled).active, .btn-dark:not(:disabled):not(.disabled):active, .show > .btn-dark.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(29, 33, 36);
border-top-color:rgb(23, 26, 29);
border-right-color:rgb(23, 26, 29);
border-bottom-color:rgb(23, 26, 29);
border-left-color:rgb(23, 26, 29);
}
.btn-dark:not(:disabled):not(.disabled).active:focus, .btn-dark:not(:disabled):not(.disabled):active:focus, .show > .btn-dark.dropdown-toggle:focus{
box-shadow:rgba(52, 58, 64, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):active, .show > .btn-outline-primary.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
border-top-color:rgb(0, 123, 255);
border-right-color:rgb(0, 123, 255);
border-bottom-color:rgb(0, 123, 255);
border-left-color:rgb(0, 123, 255);
}
.btn-outline-primary:not(:disabled):not(.disabled).active:focus, .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-primary.dropdown-toggle:focus{
box-shadow:rgba(0, 123, 255, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):active, .show > .btn-outline-secondary.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(108, 117, 125);
border-top-color:rgb(108, 117, 125);
border-right-color:rgb(108, 117, 125);
border-bottom-color:rgb(108, 117, 125);
border-left-color:rgb(108, 117, 125);
}
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus{
box-shadow:rgba(108, 117, 125, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):active, .show > .btn-outline-success.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(40, 167, 69);
border-top-color:rgb(40, 167, 69);
border-right-color:rgb(40, 167, 69);
border-bottom-color:rgb(40, 167, 69);
border-left-color:rgb(40, 167, 69);
}
.btn-outline-success:not(:disabled):not(.disabled).active:focus, .btn-outline-success:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-success.dropdown-toggle:focus{
box-shadow:rgba(40, 167, 69, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):active, .show > .btn-outline-info.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(23, 162, 184);
border-top-color:rgb(23, 162, 184);
border-right-color:rgb(23, 162, 184);
border-bottom-color:rgb(23, 162, 184);
border-left-color:rgb(23, 162, 184);
}
.btn-outline-info:not(:disabled):not(.disabled).active:focus, .btn-outline-info:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-info.dropdown-toggle:focus{
box-shadow:rgba(23, 162, 184, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):active, .show > .btn-outline-warning.dropdown-toggle{
color:rgb(33, 37, 41);
background-color:rgb(255, 193, 7);
border-top-color:rgb(255, 193, 7);
border-right-color:rgb(255, 193, 7);
border-bottom-color:rgb(255, 193, 7);
border-left-color:rgb(255, 193, 7);
}
.btn-outline-warning:not(:disabled):not(.disabled).active:focus, .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-warning.dropdown-toggle:focus{
box-shadow:rgba(255, 193, 7, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):active, .show > .btn-outline-danger.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(220, 53, 69);
border-top-color:rgb(220, 53, 69);
border-right-color:rgb(220, 53, 69);
border-bottom-color:rgb(220, 53, 69);
border-left-color:rgb(220, 53, 69);
}
.btn-outline-danger:not(:disabled):not(.disabled).active:focus, .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-danger.dropdown-toggle:focus{
box-shadow:rgba(220, 53, 69, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-light:not(:disabled):not(.disabled).active, .btn-outline-light:not(:disabled):not(.disabled):active, .show > .btn-outline-light.dropdown-toggle{
color:rgb(33, 37, 41);
background-color:rgb(248, 249, 250);
border-top-color:rgb(248, 249, 250);
border-right-color:rgb(248, 249, 250);
border-bottom-color:rgb(248, 249, 250);
border-left-color:rgb(248, 249, 250);
}
.btn-outline-light:not(:disabled):not(.disabled).active:focus, .btn-outline-light:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-light.dropdown-toggle:focus{
box-shadow:rgba(248, 249, 250, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):active, .show > .btn-outline-dark.dropdown-toggle{
color:rgb(255, 255, 255);
background-color:rgb(52, 58, 64);
border-top-color:rgb(52, 58, 64);
border-right-color:rgb(52, 58, 64);
border-bottom-color:rgb(52, 58, 64);
border-left-color:rgb(52, 58, 64);
}
.btn-outline-dark:not(:disabled):not(.disabled).active:focus, .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-dark.dropdown-toggle:focus{
box-shadow:rgba(52, 58, 64, 0.5) 0px 0px 0px 0.2rem;
}
.btn-lg, .btn-group-lg > .btn{
padding-top:0.5rem;
padding-right:1rem;
padding-bottom:0.5rem;
padding-left:1rem;
font-size:1.25rem;
line-height:1.5;
border-top-left-radius:0.3rem;
border-top-right-radius:0.3rem;
border-bottom-right-radius:0.3rem;
border-bottom-left-radius:0.3rem;
}
.btn-sm, .btn-group-sm > .btn{
padding-top:0.25rem;
padding-right:0.5rem;
padding-bottom:0.25rem;
padding-left:0.5rem;
font-size:0.875rem;
line-height:1.5;
border-top-left-radius:0.2rem;
border-top-right-radius:0.2rem;
border-bottom-right-radius:0.2rem;
border-bottom-left-radius:0.2rem;
}
.btn-block + .btn-block{
margin-top:0.5rem;
}
input[type="button"].btn-block, input[type="reset"].btn-block, input[type="submit"].btn-block{
width:100%;
}
.fade:not(.show){
opacity:0;
}
.collapse:not(.show){
display:none;
}
.dropdown-toggle:empty::after{
margin-left:0px;
}
.dropup .dropdown-menu{
top:auto;
bottom:100%;
margin-top:0px;
margin-bottom:0.125rem;
}
.dropup .dropdown-toggle::after{
display:inline-block;
width:0px;
height:0px;
margin-left:0.255em;
vertical-align:0.255em;
content:"";
border-top-width:0px;
border-top-style:initial;
border-top-color:initial;
border-right-width:0.3em;
border-right-style:solid;
border-right-color:transparent;
border-bottom-width:0.3em;
border-bottom-style:solid;
border-bottom-color:initial;
border-left-width:0.3em;
border-left-style:solid;
border-left-color:transparent;
}
.dropup .dropdown-toggle:empty::after{
margin-left:0px;
}
.dropright .dropdown-menu{
top:0px;
right:auto;
left:100%;
margin-top:0px;
margin-left:0.125rem;
}
.dropright .dropdown-toggle::after{
display:inline-block;
width:0px;
height:0px;
margin-left:0.255em;
vertical-align:0px;
content:"";
border-top-width:0.3em;
border-top-style:solid;
border-top-color:transparent;
border-right-width:0px;
border-right-style:initial;
border-right-color:initial;
border-bottom-width:0.3em;
border-bottom-style:solid;
border-bottom-color:transparent;
border-left-width:0.3em;
border-left-style:solid;
border-left-color:initial;
}
.dropright .dropdown-toggle:empty::after{
margin-left:0px;
}
.dropleft .dropdown-menu{
top:0px;
right:100%;
left:auto;
margin-top:0px;
margin-right:0.125rem;
}
.dropleft .dropdown-toggle::after{
display:none;
width:0px;
height:0px;
margin-left:0.255em;
vertical-align:0.255em;
content:"";
}
.dropleft .dropdown-toggle::before{
display:inline-block;
width:0px;
height:0px;
margin-right:0.255em;
vertical-align:0px;
content:"";
border-top-width:0.3em;
border-top-style:solid;
border-top-color:transparent;
border-right-width:0.3em;
border-right-style:solid;
border-right-color:initial;
border-bottom-width:0.3em;
border-bottom-style:solid;
border-bottom-color:transparent;
}
.dropleft .dropdown-toggle:empty::after{
margin-left:0px;
}
.dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="top"]{
right:auto;
bottom:auto;
}
.btn-group-vertical > .btn, .btn-group > .btn{
position:relative;
flex-grow:0;
flex-shrink:1;
flex-basis:auto;
}
.btn-group-vertical > .btn:hover, .btn-group > .btn:hover{
z-index:1;
}
.btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus{
z-index:1;
}
.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group, .btn-group-vertical .btn + .btn, .btn-group-vertical .btn + .btn-group, .btn-group-vertical .btn-group + .btn, .btn-group-vertical .btn-group + .btn-group{
margin-left:-1px;
}
.btn-toolbar .input-group{
width:auto;
}
.btn-group > .btn:first-child{
margin-left:0px;
}
.btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn:not(:last-child):not(.dropdown-toggle){
border-top-right-radius:0px;
border-bottom-right-radius:0px;
}
.btn-group > .btn-group:not(:first-child) > .btn, .btn-group > .btn:not(:first-child){
border-top-left-radius:0px;
border-bottom-left-radius:0px;
}
.dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after{
margin-left:0px;
}
.dropleft .dropdown-toggle-split::before{
margin-right:0px;
}
.btn-group-sm > .btn + .dropdown-toggle-split, .btn-sm + .dropdown-toggle-split{
padding-right:0.375rem;
padding-left:0.375rem;
}
.btn-group-lg > .btn + .dropdown-toggle-split, .btn-lg + .dropdown-toggle-split{
padding-right:0.75rem;
padding-left:0.75rem;
}
.btn-group-vertical .btn, .btn-group-vertical .btn-group{
width:100%;
}
.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group{
margin-top:-1px;
margin-left:0px;
}
.btn-group-vertical > .btn-group:not(:last-child) > .btn, .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle){
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
.btn-group-vertical > .btn-group:not(:first-child) > .btn, .btn-group-vertical > .btn:not(:first-child){
border-top-left-radius:0px;
border-top-right-radius:0px;
}
.btn-group-toggle > .btn, .btn-group-toggle > .btn-group > .btn{
margin-bottom:0px;
}
.btn-group-toggle > .btn input[type="checkbox"], .btn-group-toggle > .btn input[type="radio"], .btn-group-toggle > .btn-group > .btn input[type="checkbox"], .btn-group-toggle > .btn-group > .btn input[type="radio"]{
position:absolute;
clip:rect(0px, 0px, 0px, 0px);
pointer-events:none;
}
.input-group > .custom-file, .input-group > .custom-select, .input-group > .form-control{
position:relative;
flex-grow:1;
flex-shrink:1;
flex-basis:auto;
width:1%;
margin-bottom:0px;
}
.input-group > .custom-file + .custom-file, .input-group > .custom-file + .custom-select, .input-group > .custom-file + .form-control, .input-group > .custom-select + .custom-file, .input-group > .custom-select + .custom-select, .input-group > .custom-select + .form-control, .input-group > .form-control + .custom-file, .input-group > .form-control + .custom-select, .input-group > .form-control + .form-control{
margin-left:-1px;
}
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label, .input-group > .custom-select:focus, .input-group > .form-control:focus{
z-index:3;
}
.input-group > .custom-file .custom-file-input:focus{
z-index:4;
}
.input-group > .custom-select:not(:last-child), .input-group > .form-control:not(:last-child){
border-top-right-radius:0px;
border-bottom-right-radius:0px;
}
.input-group > .custom-select:not(:first-child), .input-group > .form-control:not(:first-child){
border-top-left-radius:0px;
border-bottom-left-radius:0px;
}
.input-group > .custom-file{
display:flex;
align-items:center;
}
.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after{
border-top-right-radius:0px;
border-bottom-right-radius:0px;
}
.input-group > .custom-file:not(:first-child) .custom-file-label{
border-top-left-radius:0px;
border-bottom-left-radius:0px;
}
.input-group-append .btn, .input-group-prepend .btn{
position:relative;
z-index:2;
}
.input-group-append .btn + .btn, .input-group-append .btn + .input-group-text, .input-group-append .input-group-text + .btn, .input-group-append .input-group-text + .input-group-text, .input-group-prepend .btn + .btn, .input-group-prepend .btn + .input-group-text, .input-group-prepend .input-group-text + .btn, .input-group-prepend .input-group-text + .input-group-text{
margin-left:-1px;
}
.input-group-text input[type="checkbox"], .input-group-text input[type="radio"]{
margin-top:0px;
}
.input-group-lg > .form-control, .input-group-lg > .input-group-append > .btn, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-prepend > .input-group-text{
height:calc(2.875rem + 2px);
padding-top:0.5rem;
padding-right:1rem;
padding-bottom:0.5rem;
padding-left:1rem;
font-size:1.25rem;
line-height:1.5;
border-top-left-radius:0.3rem;
border-top-right-radius:0.3rem;
border-bottom-right-radius:0.3rem;
border-bottom-left-radius:0.3rem;
}
.input-group-sm > .form-control, .input-group-sm > .input-group-append > .btn, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-prepend > .input-group-text{
height:calc(1.8125rem + 2px);
padding-top:0.25rem;
padding-right:0.5rem;
padding-bottom:0.25rem;
padding-left:0.5rem;
font-size:0.875rem;
line-height:1.5;
border-top-left-radius:0.2rem;
border-top-right-radius:0.2rem;
border-bottom-right-radius:0.2rem;
border-bottom-left-radius:0.2rem;
}
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child), .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text{
border-top-right-radius:0px;
border-bottom-right-radius:0px;
}
.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child), .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text{
border-top-left-radius:0px;
border-bottom-left-radius:0px;
}
.custom-control-input:checked ~ .custom-control-label::before{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
}
.custom-control-input:focus ~ .custom-control-label::before{
box-shadow:rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
}
.custom-control-input:active ~ .custom-control-label::before{
color:rgb(255, 255, 255);
background-color:rgb(179, 215, 255);
}
.custom-control-input:disabled ~ .custom-control-label{
color:rgb(108, 117, 125);
}
.custom-control-input:disabled ~ .custom-control-label::before{
background-color:rgb(233, 236, 239);
}
.custom-checkbox .custom-control-label::before{
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{
background-color:rgb(0, 123, 255);
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{
background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{
background-color:rgb(0, 123, 255);
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{
background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{
background-color:rgba(0, 123, 255, 0.5);
}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{
background-color:rgba(0, 123, 255, 0.5);
}
.custom-radio .custom-control-label::before{
border-top-left-radius:50%;
border-top-right-radius:50%;
border-bottom-right-radius:50%;
border-bottom-left-radius:50%;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::before{
background-color:rgb(0, 123, 255);
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::after{
background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{
background-color:rgba(0, 123, 255, 0.5);
}
.custom-select[multiple], .custom-select[size]:not([size="1"]){
height:auto;
padding-right:0.75rem;
background-image:none;
}
.custom-file-input:focus ~ .custom-file-label{
border-top-color:rgb(128, 189, 255);
border-right-color:rgb(128, 189, 255);
border-bottom-color:rgb(128, 189, 255);
border-left-color:rgb(128, 189, 255);
box-shadow:rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
}
.custom-file-input:focus ~ .custom-file-label::after{
border-top-color:rgb(128, 189, 255);
border-right-color:rgb(128, 189, 255);
border-bottom-color:rgb(128, 189, 255);
border-left-color:rgb(128, 189, 255);
}
.custom-file-input:disabled ~ .custom-file-label{
background-color:rgb(233, 236, 239);
}
.custom-file-input:lang(en) ~ .custom-file-label::after{
content:"Browse";
}
.custom-range:focus::-webkit-slider-thumb{
box-shadow:rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 123, 255, 0.25) 0px 0px 0px 0.2rem;
}
.custom-range::-webkit-slider-thumb:active{
background-color:rgb(179, 215, 255);
}
.nav{
display:flex;
flex-wrap:wrap;
padding-left:0px;
margin-bottom:0px;
list-style-position:initial;
list-style-image:initial;
list-style-type:none;
}
.nav-tabs .nav-item{
margin-bottom:-1px;
}
.nav-tabs .nav-link{
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
}
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover{
border-top-color:rgb(233, 236, 239);
border-right-color:rgb(233, 236, 239);
border-bottom-color:rgb(222, 226, 230);
border-left-color:rgb(233, 236, 239);
}
.nav-tabs .nav-link.disabled{
color:rgb(108, 117, 125);
background-color:transparent;
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
color:rgb(73, 80, 87);
background-color:rgb(255, 255, 255);
border-top-color:rgb(222, 226, 230);
border-right-color:rgb(222, 226, 230);
border-bottom-color:rgb(255, 255, 255);
border-left-color:rgb(222, 226, 230);
}
.nav-tabs .dropdown-menu{
margin-top:-1px;
border-top-left-radius:0px;
border-top-right-radius:0px;
}
.nav-pills .nav-link{
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
}
.nav-fill .nav-item{
flex-grow:1;
flex-shrink:1;
flex-basis:auto;
text-align:center;
}
.nav-justified .nav-item{
flex-basis:0px;
flex-grow:1;
text-align:center;
}
.tab-content > .tab-pane{
display:none;
}
.tab-content > .active{
display:block;
}
.navbar > .container, .navbar > .container-fluid{
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
}
.navbar-brand:focus{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.navbar-brand:hover{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.navbar-nav{
display:flex;
flex-direction:column;
padding-left:0px;
margin-bottom:0px;
list-style-position:initial;
list-style-image:initial;
list-style-type:none;
}
.navbar-nav .nav-link{
padding-right:0px;
padding-left:0px;
}
.navbar-nav .dropdown-menu{
position:static;
float:none;
}
.navbar-collapse{
flex-basis:100%;
flex-grow:1;
align-items:center;
float:left;
transform:0 0 0 1 scaleY(0) 1;
}
.navbar-toggler{
padding-top:0.25rem;
padding-right:0.75rem;
padding-bottom:0.25rem;
padding-left:0.75rem;
font-size:1.25rem;
line-height:1;
background-color:transparent;
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
}
.navbar-toggler:focus{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.navbar-toggler:hover{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.navbar-toggler:not(:disabled):not(.disabled){
cursor:pointer;
}
.navbar-toggler-icon{
display:inline-block;
width:1.5em;
height:1.5em;
vertical-align:middle;
content:"";
background-image:initial;
background-position-x:center;
background-position-y:center;
background-repeat-x:no-repeat;
background-repeat-y:no-repeat;
background-attachment:initial;
background-origin:initial;
background-clip:initial;
background-color:initial;
background-size:100% 100%;
}
.navbar-expand > .container, .navbar-expand > .container-fluid{
padding-right:0px;
padding-left:0px;
flex-wrap:nowrap;
}
.navbar-expand .navbar-nav{
flex-direction:row;
}
.navbar-expand .navbar-nav .dropdown-menu{
position:absolute;
}
.navbar-expand .navbar-nav .nav-link{
padding-right:0.5rem;
padding-left:0.5rem;
}
.navbar-expand .navbar-collapse{
flex-basis:auto;
display:flex !important;
}
.navbar-expand .navbar-toggler{
display:none;
}
.navbar-light .navbar-brand{
color:rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover{
color:rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link{
color:rgba(0, 0, 0, 0.5);
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover{
color:rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled{
color:rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show > .nav-link{
color:rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler{
color:rgba(0, 0, 0, 0.5);
border-top-color:rgba(0, 0, 0, 0.1);
border-right-color:rgba(0, 0, 0, 0.1);
border-bottom-color:rgba(0, 0, 0, 0.1);
border-left-color:rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon{
background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-light .navbar-text{
color:rgba(0, 0, 0, 0.5);
}
.navbar-light .navbar-text a{
color:rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover{
color:rgba(0, 0, 0, 0.9);
}
.navbar-dark .navbar-brand{
color:rgb(255, 255, 255);
}
.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover{
color:rgb(255, 255, 255);
}
.navbar-dark .navbar-nav .nav-link{
color:rgba(255, 255, 255, 0.5);
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover{
color:rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled{
color:rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show > .nav-link{
color:rgb(255, 255, 255);
}
.navbar-dark .navbar-toggler{
color:rgba(255, 255, 255, 0.5);
border-top-color:rgba(255, 255, 255, 0.1);
border-right-color:rgba(255, 255, 255, 0.1);
border-bottom-color:rgba(255, 255, 255, 0.1);
border-left-color:rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon{
background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-dark .navbar-text{
color:rgba(255, 255, 255, 0.5);
}
.navbar-dark .navbar-text a{
color:rgb(255, 255, 255);
}
.navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover{
color:rgb(255, 255, 255);
}
.card > hr{
margin-right:0px;
margin-left:0px;
}
.card > .list-group:first-child .list-group-item:first-child{
border-top-left-radius:0.25rem;
border-top-right-radius:0.25rem;
}
.card > .list-group:last-child .list-group-item:last-child{
border-bottom-right-radius:0.25rem;
border-bottom-left-radius:0.25rem;
}
.card-link + .card-link{
margin-left:1.25rem;
}
.card-header + .list-group .list-group-item:first-child{
border-top-width:0px;
border-top-style:initial;
border-top-color:initial;
}
.card-deck .card{
margin-bottom:15px;
}
.card-group > .card{
margin-bottom:15px;
}
.card-columns .card{
margin-bottom:0.75rem;
}
.accordion .card:not(:first-of-type):not(:last-of-type){
border-bottom-width:0px;
border-bottom-style:initial;
border-bottom-color:initial;
border-top-left-radius:0px;
border-top-right-radius:0px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
.accordion .card:not(:first-of-type) .card-header:first-child{
border-top-left-radius:0px;
border-top-right-radius:0px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
.accordion .card:first-of-type{
border-bottom-width:0px;
border-bottom-style:initial;
border-bottom-color:initial;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
.accordion .card:last-of-type{
border-top-left-radius:0px;
border-top-right-radius:0px;
}
.breadcrumb-item + .breadcrumb-item{
padding-left:0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before{
display:inline-block;
padding-right:0.5rem;
color:rgb(108, 117, 125);
content:"/";
}
.breadcrumb-item + .breadcrumb-item:hover::before{
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
}
.page-link:not(:disabled):not(.disabled){
cursor:pointer;
}
.page-item:first-child .page-link{
margin-left:0px;
border-top-left-radius:0.25rem;
border-bottom-left-radius:0.25rem;
}
.page-item:last-child .page-link{
border-top-right-radius:0.25rem;
border-bottom-right-radius:0.25rem;
}
.page-item.active .page-link{
z-index:1;
color:rgb(255, 255, 255);
background-color:rgb(0, 123, 255);
border-top-color:rgb(0, 123, 255);
border-right-color:rgb(0, 123, 255);
border-bottom-color:rgb(0, 123, 255);
border-left-color:rgb(0, 123, 255);
}
.page-item.disabled .page-link{
color:rgb(108, 117, 125);
pointer-events:none;
cursor:auto;
background-color:rgb(255, 255, 255);
border-top-color:rgb(222, 226, 230);
border-right-color:rgb(222, 226, 230);
border-bottom-color:rgb(222, 226, 230);
border-left-color:rgb(222, 226, 230);
}
.pagination-lg .page-link{
padding-top:0.75rem;
padding-right:1.5rem;
padding-bottom:0.75rem;
padding-left:1.5rem;
font-size:1.25rem;
line-height:1.5;
}
.pagination-lg .page-item:first-child .page-link{
border-top-left-radius:0.3rem;
border-bottom-left-radius:0.3rem;
}
.pagination-lg .page-item:last-child .page-link{
border-top-right-radius:0.3rem;
border-bottom-right-radius:0.3rem;
}
.pagination-sm .page-link{
padding-top:0.25rem;
padding-right:0.5rem;
padding-bottom:0.25rem;
padding-left:0.5rem;
font-size:0.875rem;
line-height:1.5;
}
.pagination-sm .page-item:first-child .page-link{
border-top-left-radius:0.2rem;
border-bottom-left-radius:0.2rem;
}
.pagination-sm .page-item:last-child .page-link{
border-top-right-radius:0.2rem;
border-bottom-right-radius:0.2rem;
}
.btn .badge{
position:relative;
top:-1px;
}
.badge-primary[href]:focus, .badge-primary[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(0, 98, 204);
}
.badge-secondary[href]:focus, .badge-secondary[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(84, 91, 98);
}
.badge-success[href]:focus, .badge-success[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(30, 126, 52);
}
.badge-info[href]:focus, .badge-info[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(17, 122, 139);
}
.badge-warning[href]:focus, .badge-warning[href]:hover{
color:rgb(33, 37, 41);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(211, 158, 0);
}
.badge-danger[href]:focus, .badge-danger[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(189, 33, 48);
}
.badge-light[href]:focus, .badge-light[href]:hover{
color:rgb(33, 37, 41);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(218, 224, 229);
}
.badge-dark[href]:focus, .badge-dark[href]:hover{
color:rgb(255, 255, 255);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
background-color:rgb(29, 33, 36);
}
.alert-dismissible .close{
position:absolute;
top:0px;
right:0px;
padding-top:0.75rem;
padding-right:1.25rem;
padding-bottom:0.75rem;
padding-left:1.25rem;
color:inherit;
}
.alert-primary hr{
border-top-color:rgb(159, 205, 255);
}
.alert-primary .alert-link{
color:rgb(0, 39, 82);
}
.alert-secondary hr{
border-top-color:rgb(200, 203, 207);
}
.alert-secondary .alert-link{
color:rgb(32, 35, 38);
}
.alert-success hr{
border-top-color:rgb(177, 223, 187);
}
.alert-success .alert-link{
color:rgb(11, 46, 19);
}
.alert-info hr{
border-top-color:rgb(171, 221, 229);
}
.alert-info .alert-link{
color:rgb(6, 44, 51);
}
.alert-warning hr{
border-top-color:rgb(255, 232, 161);
}
.alert-warning .alert-link{
color:rgb(83, 63, 3);
}
.alert-danger hr{
border-top-color:rgb(241, 176, 183);
}
.alert-danger .alert-link{
color:rgb(73, 18, 23);
}
.alert-light hr{
border-top-color:rgb(236, 236, 246);
}
.alert-light .alert-link{
color:rgb(104, 104, 104);
}
.alert-dark hr{
border-top-color:rgb(185, 187, 190);
}
.alert-dark .alert-link{
color:rgb(4, 5, 5);
}
.progress{
display:flex;
height:8px;
overflow-x:hidden;
overflow-y:hidden;
font-size:0.75rem;
background-color:rgb(235, 235, 235);
border-top-left-radius:4px;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
border-bottom-left-radius:4px;
margin-bottom:22px;
box-shadow:none;
width:100%;
position:relative;
}
.progress-bar{
display:block;
flex-direction:column;
justify-content:center;
color:rgb(255, 255, 255);
text-align:center;
white-space:nowrap;
background-color:rgb(244, 191, 0);
flex-grow:inherit;
flex-shrink:inherit;
flex-basis:inherit;
box-shadow:none;
transition-duration:2s;
transition-timing-function:ease-in-out;
transition-delay:0s;
transition-property:width;
border-top-left-radius:4px;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
border-bottom-left-radius:4px;
}
.list-group-flush .list-group-item{
border-right-width:0px;
border-right-style:initial;
border-right-color:initial;
border-left-width:0px;
border-left-style:initial;
border-left-color:initial;
border-top-left-radius:0px;
border-top-right-radius:0px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
}
.list-group-flush:first-child .list-group-item:first-child{
border-top-width:0px;
border-top-style:initial;
border-top-color:initial;
}
.list-group-flush:last-child .list-group-item:last-child{
border-bottom-width:0px;
border-bottom-style:initial;
border-bottom-color:initial;
}
.close:not(:disabled):not(.disabled){
cursor:pointer;
}
.close:not(:disabled):not(.disabled):focus, .close:not(:disabled):not(.disabled):hover{
color:rgb(0, 0, 0);
text-decoration-line:none;
text-decoration-thickness:initial;
text-decoration-style:initial;
text-decoration-color:initial;
opacity:0.75;
}
button.close{
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
background-color:transparent;
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
appearance:none;
}
.modal-open .modal{
overflow-x:hidden;
overflow-y:auto;
}
.modal.fade .modal-dialog{
transition-duration:0.3s, 0.3s;
transition-timing-function:ease-out, ease-out;
transition-delay:0s, 0s;
transition-property:transform, -webkit-transform;
transform:translate(0px, -25%);
}
.modal.show .modal-dialog{
transform:translate(0px, 0px);
}
.modal-header .close{
padding-top:1rem;
padding-right:1rem;
padding-bottom:1rem;
padding-left:1rem;
margin-top:-1rem;
margin-right:-1rem;
margin-bottom:-1rem;
margin-left:auto;
}
.modal-footer > :not(:first-child){
margin-left:0.25rem;
}
.modal-footer > :not(:last-child){
margin-right:0.25rem;
}
.tooltip .arrow{
position:absolute;
display:block;
width:0.8rem;
height:0.4rem;
}
.tooltip .arrow::before{
position:absolute;
content:"";
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
}
.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"]{
padding-top:0.4rem;
padding-right:0px;
padding-bottom:0.4rem;
padding-left:0px;
}
.bs-tooltip-auto[x-placement^="top"] .arrow, .bs-tooltip-top .arrow{
bottom:0px;
}
.bs-tooltip-auto[x-placement^="top"] .arrow::before, .bs-tooltip-top .arrow::before{
top:0px;
border-top-width:0.4rem;
border-right-width:0.4rem;
border-bottom-width:0px;
border-left-width:0.4rem;
border-top-color:rgb(0, 0, 0);
}
.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"]{
padding-top:0px;
padding-right:0.4rem;
padding-bottom:0px;
padding-left:0.4rem;
}
.bs-tooltip-auto[x-placement^="right"] .arrow, .bs-tooltip-right .arrow{
left:0px;
width:0.4rem;
height:0.8rem;
}
.bs-tooltip-auto[x-placement^="right"] .arrow::before, .bs-tooltip-right .arrow::before{
right:0px;
border-top-width:0.4rem;
border-right-width:0.4rem;
border-bottom-width:0.4rem;
border-left-width:0px;
border-right-color:rgb(0, 0, 0);
}
.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"]{
padding-top:0.4rem;
padding-right:0px;
padding-bottom:0.4rem;
padding-left:0px;
}
.bs-tooltip-auto[x-placement^="bottom"] .arrow, .bs-tooltip-bottom .arrow{
top:0px;
}
.bs-tooltip-auto[x-placement^="bottom"] .arrow::before, .bs-tooltip-bottom .arrow::before{
bottom:0px;
border-top-width:0px;
border-right-width:0.4rem;
border-bottom-width:0.4rem;
border-left-width:0.4rem;
border-bottom-color:rgb(0, 0, 0);
}
.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"]{
padding-top:0px;
padding-right:0.4rem;
padding-bottom:0px;
padding-left:0.4rem;
}
.bs-tooltip-auto[x-placement^="left"] .arrow, .bs-tooltip-left .arrow{
right:0px;
width:0.4rem;
height:0.8rem;
}
.bs-tooltip-auto[x-placement^="left"] .arrow::before, .bs-tooltip-left .arrow::before{
left:0px;
border-top-width:0.4rem;
border-right-width:0px;
border-bottom-width:0.4rem;
border-left-width:0.4rem;
border-left-color:rgb(0, 0, 0);
}
.popover .arrow{
position:absolute;
display:block;
width:1rem;
height:0.5rem;
margin-top:0px;
margin-right:0.3rem;
margin-bottom:0px;
margin-left:0.3rem;
}
.popover .arrow::after, .popover .arrow::before{
position:absolute;
display:block;
content:"";
border-top-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
border-left-color:transparent;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
}
.bs-popover-top, .bs-popover-auto[x-placement^="top"]{
margin-bottom:0.5rem;
}
.bs-popover-auto[x-placement^="top"] .arrow, .bs-popover-top .arrow{
bottom:calc((0.5rem + 1px) * -1);
}
.bs-popover-auto[x-placement^="top"] .arrow::after, .bs-popover-auto[x-placement^="top"] .arrow::before, .bs-popover-top .arrow::after, .bs-popover-top .arrow::before{
border-top-width:0.5rem;
border-right-width:0.5rem;
border-bottom-width:0px;
border-left-width:0.5rem;
}
.bs-popover-auto[x-placement^="top"] .arrow::before, .bs-popover-top .arrow::before{
bottom:0px;
border-top-color:rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^="top"] .arrow::after, .bs-popover-top .arrow::after{
bottom:1px;
border-top-color:rgb(255, 255, 255);
}
.bs-popover-right, .bs-popover-auto[x-placement^="right"]{
margin-left:0.5rem;
}
.bs-popover-auto[x-placement^="right"] .arrow, .bs-popover-right .arrow{
left:calc((0.5rem + 1px) * -1);
width:0.5rem;
height:1rem;
margin-top:0.3rem;
margin-right:0px;
margin-bottom:0.3rem;
margin-left:0px;
}
.bs-popover-auto[x-placement^="right"] .arrow::after, .bs-popover-auto[x-placement^="right"] .arrow::before, .bs-popover-right .arrow::after, .bs-popover-right .arrow::before{
border-top-width:0.5rem;
border-right-width:0.5rem;
border-bottom-width:0.5rem;
border-left-width:0px;
}
.bs-popover-auto[x-placement^="right"] .arrow::before, .bs-popover-right .arrow::before{
left:0px;
border-right-color:rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^="right"] .arrow::after, .bs-popover-right .arrow::after{
left:1px;
border-right-color:rgb(255, 255, 255);
}
.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"]{
margin-top:0.5rem;
}
.bs-popover-auto[x-placement^="bottom"] .arrow, .bs-popover-bottom .arrow{
top:calc((0.5rem + 1px) * -1);
}
.bs-popover-auto[x-placement^="bottom"] .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::before, .bs-popover-bottom .arrow::after, .bs-popover-bottom .arrow::before{
border-top-width:0px;
border-right-width:0.5rem;
border-bottom-width:0.5rem;
border-left-width:0.5rem;
}
.bs-popover-auto[x-placement^="bottom"] .arrow::before, .bs-popover-bottom .arrow::before{
top:0px;
border-bottom-color:rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^="bottom"] .arrow::after, .bs-popover-bottom .arrow::after{
top:1px;
border-bottom-color:rgb(255, 255, 255);
}
.bs-popover-auto[x-placement^="bottom"] .popover-header::before, .bs-popover-bottom .popover-header::before{
position:absolute;
top:0px;
left:50%;
display:block;
width:1rem;
margin-left:-0.5rem;
content:"";
border-bottom-width:1px;
border-bottom-style:solid;
border-bottom-color:rgb(247, 247, 247);
}
.bs-popover-left, .bs-popover-auto[x-placement^="left"]{
margin-right:0.5rem;
}
.bs-popover-auto[x-placement^="left"] .arrow, .bs-popover-left .arrow{
right:calc((0.5rem + 1px) * -1);
width:0.5rem;
height:1rem;
margin-top:0.3rem;
margin-right:0px;
margin-bottom:0.3rem;
margin-left:0px;
}
.bs-popover-auto[x-placement^="left"] .arrow::after, .bs-popover-auto[x-placement^="left"] .arrow::before, .bs-popover-left .arrow::after, .bs-popover-left .arrow::before{
border-top-width:0.5rem;
border-right-width:0px;
border-bottom-width:0.5rem;
border-left-width:0.5rem;
}
.bs-popover-auto[x-placement^="left"] .arrow::before, .bs-popover-left .arrow::before{
right:0px;
border-left-color:rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^="left"] .arrow::after, .bs-popover-left .arrow::after{
right:1px;
border-left-color:rgb(255, 255, 255);
}
.carousel-fade .carousel-item{
opacity:0;
transition-duration:0.6s;
transition-property:opacity;
}
.carousel-fade .carousel-item-next.carousel-item-left, .carousel-fade .carousel-item-prev.carousel-item-right, .carousel-fade .carousel-item.active{
opacity:1;
}
.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-right{
opacity:0;
}
.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active{
transform:translateX(0px);
}
.carousel-indicators li{
position:relative;
flex-grow:0;
flex-shrink:1;
flex-basis:auto;
width:30px;
height:3px;
margin-right:3px;
margin-left:3px;
text-indent:-999px;
cursor:pointer;
background-color:rgba(255, 255, 255, 0.5);
}
.carousel-indicators li::before{
position:absolute;
top:-10px;
left:0px;
display:inline-block;
width:100%;
height:10px;
content:"";
}
.carousel-indicators li::after{
position:absolute;
bottom:-10px;
left:0px;
display:inline-block;
width:100%;
height:10px;
content:"";
}
.carousel-indicators .active{
background-color:rgb(255, 255, 255);
}
a.bg-primary:focus, a.bg-primary:hover, button.bg-primary:focus, button.bg-primary:hover{
background-color:rgb(0, 98, 204) !important;
}
a.bg-secondary:focus, a.bg-secondary:hover, button.bg-secondary:focus, button.bg-secondary:hover{
background-color:rgb(84, 91, 98) !important;
}
a.bg-success:focus, a.bg-success:hover, button.bg-success:focus, button.bg-success:hover{
background-color:rgb(30, 126, 52) !important;
}
a.bg-info:focus, a.bg-info:hover, button.bg-info:focus, button.bg-info:hover{
background-color:rgb(17, 122, 139) !important;
}
a.bg-warning:focus, a.bg-warning:hover, button.bg-warning:focus, button.bg-warning:hover{
background-color:rgb(211, 158, 0) !important;
}
a.bg-danger:focus, a.bg-danger:hover, button.bg-danger:focus, button.bg-danger:hover{
background-color:rgb(189, 33, 48) !important;
}
a.bg-light:focus, a.bg-light:hover, button.bg-light:focus, button.bg-light:hover{
background-color:rgb(218, 224, 229) !important;
}
a.bg-dark:focus, a.bg-dark:hover, button.bg-dark:focus, button.bg-dark:hover{
background-color:rgb(29, 33, 36) !important;
}
.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video{
position:absolute;
top:0px;
bottom:0px;
left:0px;
width:100%;
height:100%;
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
.text-center{
text-align:center !important;
}
a.text-primary:focus, a.text-primary:hover{
color:rgb(0, 98, 204) !important;
}
a.text-secondary:focus, a.text-secondary:hover{
color:rgb(84, 91, 98) !important;
}
a.text-success:focus, a.text-success:hover{
color:rgb(30, 126, 52) !important;
}
.text-info{
font-size:14px;
line-height:24px;
margin-bottom:50px;
color:rgb(45, 48, 56) !important;
}
a.text-info:focus, a.text-info:hover{
color:rgb(17, 122, 139) !important;
}
a.text-warning:focus, a.text-warning:hover{
color:rgb(211, 158, 0) !important;
}
a.text-danger:focus, a.text-danger:hover{
color:rgb(189, 33, 48) !important;
}
a.text-light:focus, a.text-light:hover{
color:rgb(218, 224, 229) !important;
}
a.text-dark:focus, a.text-dark:hover{
color:rgb(29, 33, 36) !important;
}
html, body{
font-family:Montserrat, sans-serif;
font-weight:normal;
overflow-x:hidden;
-webkit-font-smoothing:antialiased;
color:rgb(45, 48, 56);
}
ul{
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
list-style-position:initial;
list-style-image:initial;
list-style-type:none;
}
.form-control:focus, a, a:hover, a:active, a:focus, button:focus{
outline-color:initial !important;
outline-style:none !important;
outline-width:initial !important;
text-decoration-line:none !important;
text-decoration-thickness:initial !important;
text-decoration-style:initial !important;
text-decoration-color:initial !important;
box-shadow:none !important;
}
.section-padding{
padding-top:80px;
padding-bottom:100px;
}
.section-title{
margin-bottom:60px;
}
.section-title h1{
font-size:56px;
}
.home-two .section-title h1{
font-size:50px;
margin-top:0px;
}
.bg-color{
background-color:rgb(249, 249, 249);
position:relative;
}
.bg-color::before{
position:absolute;
content:"";
top:0px;
left:-100%;
width:100%;
height:100%;
background-color:rgb(249, 249, 249);
display:block;
}
.section-content{
max-width:750px;
}
.btn.btn-primary{
padding-left:30px;
padding-right:30px;
font-size:16px;
padding-top:10px;
padding-bottom:10px;
background-color:rgb(60, 112, 180);
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(60, 112, 180);
border-right-color:rgb(60, 112, 180);
border-bottom-color:rgb(60, 112, 180);
border-left-color:rgb(60, 112, 180);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
position:relative;
overflow-x:hidden;
overflow-y:hidden;
z-index:1;
}
.btn.btn-primary::before{
position:absolute;
content:"";
top:0px;
left:-100%;
width:100%;
height:100%;
background-color:rgb(255, 255, 255);
z-index:-1;
transition-duration:500ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.btn.btn-primary:hover::before{
left:0px;
}
.btn.btn-primary:hover{
color:rgb(60, 112, 180);
}
#navigation.menu-one .navbar{
width:30%;
left:inherit;
right:0px;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}
#navigation .navbar-nav > li{
background-color:rgb(45, 48, 56);
}
#navigation.menu-one .navbar-nav > li{
float:none;
position:relative;
margin-left:10px;
width:100%;
}
#navigation.menu-one .navbar-nav{
float:none;
flex-grow:inherit;
flex-shrink:inherit;
flex-basis:inherit;
}
#navigation.menu-one .navbar-nav > li:hover, #navigation.menu-one .navbar-nav > li.current{
margin-left:0px;
padding-left:10px;
}
#navigation.menu-one .navbar-nav > li:last-child:hover, #navigation.menu-one .navbar-nav > li:last-child.current{
margin-left:10px;
padding-left:0px;
}
#navigation .navbar-nav > li a{
color:rgb(255, 255, 255);
font-size:14px;
text-transform:uppercase;
display:block;
height:100%;
width:100%;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}
#navigation.menu-one .navbar-nav > li span{
position:absolute;
top:50%;
left:90px;
margin-top:-8px;
}
#navigation .navbar-nav > li i{
position:absolute;
left:-50px;
font-size:30px;
margin-top:-6px;
}
.nav > li > a:focus, .nav > li > a:hover{
background-color:transparent;
}
#navigation.menu-one .navbar::before{
left:15px;
right:-100%;
}
#navigation.menu-one .navbar::after{
display:none;
}
#navigation.menu-one .navbar-header{
position:absolute;
top:0px;
}
.home-one .logo{
height:65px;
float:none;
margin-left:10px;
padding-top:4px;
padding-right:30px;
padding-bottom:4px;
padding-left:30px;
}
.home-one .navbar-nav{
margin-top:65px;
}
#navigation .navbar-nav > li:nth-child(1){
background-color:rgb(244, 191, 0);
}
#navigation .navbar-nav > li:nth-child(2){
background-color:rgb(247, 148, 29);
}
#navigation .navbar-nav > li:nth-child(3){
background-color:rgb(242, 101, 34);
}
#navigation .navbar-nav > li:nth-child(4){
background-color:rgb(237, 28, 36);
}
#navigation .navbar-nav > li:nth-child(5){
background-color:rgb(225, 3, 55);
}
#navigation .navbar-nav > li:nth-child(6){
background-color:rgb(185, 1, 98);
}
#navigation .navbar-nav > li:nth-child(7){
background-color:rgb(135, 62, 149);
}
#navigation .navbar-nav > li:nth-child(8){
background-color:rgb(60, 112, 180);
}
#navigation .navbar-nav > li:nth-child(9){
background-color:rgb(5, 172, 128);
}
#navigation .navbar-nav > li:last-child{
background-color:rgb(135, 192, 94);
}
#navigation .navbar-nav > li .social{
margin-left:25px;
overflow-x:hidden;
overflow-y:hidden;
}
#navigation .navbar-nav > li .social li{
float:left;
}
#navigation .navbar-nav > li .social li a{
padding-top:20px;
padding-right:15px;
padding-bottom:20px;
padding-left:15px;
}
#navigation .navbar-nav > li ul li{
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}
#navigation .navbar-nav > li ul li i{
font-size:16px;
margin-right:0px;
position:inherit;
}
#navigation .navbar-nav > li ul li a{
padding-top:10px;
padding-right:10px;
padding-bottom:10px;
padding-left:10px;
}
#navigation .navbar-nav > li ul li a:hover i{
font-size:16px;
color:rgb(0, 0, 0);
}
#navigation .navbar{
border-top-width:0px;
border-right-width:0px;
border-bottom-width:0px;
border-left-width:0px;
border-top-style:initial;
border-right-style:initial;
border-bottom-style:initial;
border-left-style:initial;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
}
#navigation.menu-two .navbar-nav > li > a{
padding-top:28px;
padding-right:18px;
padding-bottom:28px;
padding-left:18px;
display:block;
position:inherit !important;
}
#navigation.menu-two .navbar-nav > li.current a, #navigation.menu-two .navbar-nav > li a:hover{
padding-bottom:40px;
}
#navigation.menu-two .navbar-nav > li:last-child{
background-color:rgb(60, 112, 180);
}
#navigation.menu-two .navbar{
display:block;
}
#navigation.menu-two .navbar-header{
float:left;
}
#navigation.menu-two .navbar-nav > li{
float:left;
}
#navigation.menu-two .navbar-nav{
display:block;
}
#navigation .navbar::before, #navigation .navbar::after{
position:absolute;
content:"";
top:0px;
width:100%;
height:76px;
background-color:rgb(45, 48, 56);
z-index:-1;
}
#navigation .navbar::before{
right:0px;
background-color:rgb(45, 48, 56);
left:-100%;
}
#navigation .navbar::after{
left:50%;
background-color:rgb(60, 112, 180);
right:0px;
z-index:-1;
}
.menu-two .fixed-top{
max-width:1170px;
margin-top:0px;
margin-right:auto;
margin-bottom:0px;
margin-left:auto;
}
ul.sub-menu{
position:absolute;
top:100%;
left:0px;
list-style-position:initial;
list-style-image:initial;
list-style-type:none;
padding-top:7px;
padding-right:0px;
padding-bottom:7px;
padding-left:0px;
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
min-width:160px;
display:none;
z-index:999;
background-color:rgb(244, 191, 0);
}
.nav.navbar-nav > li:hover > ul.sub-menu{
display:block;
animation-duration:500ms;
animation-timing-function:ease;
animation-delay:0s;
animation-iteration-count:1;
animation-direction:normal;
animation-fill-mode:none;
animation-play-state:running;
animation-name:fadeInUp;
}
#navigation.menu-two .navbar-nav .sub-menu li a{
padding-top:5px;
padding-right:18px;
padding-bottom:5px;
padding-left:18px;
color:rgb(255, 255, 255);
font-size:13px;
}
.navbar-toggle .icon-bar{
background-color:rgb(255, 255, 255);
}
.home-banner-one .banner-content{
background-image:url("../images/bg/banner.jpg");
background-color:rgb(231, 231, 231);
position:relative;
background-position-x:center;
background-position-y:center;
background-size:cover;
}
.home-two #home-banner{
// background-image:url("https://demo.themeregion.com/geek/images/bg/2.png");
background-repeat-x:no-repeat;
background-repeat-y:no-repeat;
background-position-x:right;
background-position-y:center;
background-size:contain;
}
.banner-info h1{
font-size:48px;
font-family:rookies-showtimesregular;
}
.banner-info h2{
font-size:128px;
margin-top:0px;
line-height:92px;
margin-left:-8px;
}
.banner-info h3{
font-size:16px;
text-transform:uppercase;
letter-spacing:26px;
}
.home-two .banner-info h1{
font-size:72px;
margin-bottom:0px;
font-family:Sacramento, cursive;
}
.banner-content{
position:relative;
width:100%;
height:700px;
}
.banner-content .banner-info{
position:absolute;
top:50%;
width:100%;
height:100%;
margin-top:-100px;
}
.home-two .home-social{
position:absolute;
top:40px;
}
.menu-two .home-social li + li{
margin-left:15px;
}
.menu-two .home-social li a{
color:rgb(45, 48, 56);
font-size:16px;
}
.menu-two .home-social li a:hover{
color:rgb(0, 174, 239);
}
.about-section .section-title{
margin-bottom:45px;
}
.about-section .section-title h4{
margin-top:0px;
line-height:0;
}
.about-info{
font-size:14px;
line-height:24px;
}
.about-info .signature h1{
font-weight:normal;
margin-top:20px;
margin-bottom:40px;
font-family:Sacramento, cursive;
}
.about-section address{
font-size:16px;
line-height:30px;
margin-bottom:40px;
}
.about-section address span{
font-weight:700;
}
.achievement li{
float:left;
}
.achievement li + li{
margin-left:30px;
}
.achievement-info .counter{
font-size:56px;
font-weight:700;
color:rgb(247, 148, 29);
line-height:62px;
}
.achievement-info .counter1{
color:rgb(135, 62, 149);
}
.achievement-info .counter2{
color:rgb(60, 112, 180);
}
.achievement-info .counter3{
color:rgb(135, 192, 94);
}
.achievement-info h4{
font-size:16px;
font-weight:normal;
margin-top:0px;
}
.skill-section .rating-bar{
width:360px;
}
.progress-content{
overflow-x:hidden;
overflow-y:hidden;
}
.bar-left{
float:left;
}
.bar-right{
float:right;
}
.rating-bar label, .rating-bar span{
font-size:16px;
margin-bottom:10px;
}
.skill-progress{
position:relative;
margin-bottom:40px;
}
.progress-bar.bar1{
background-color:rgb(185, 1, 98);
}
.progress-bar.bar2{
background-color:rgb(60, 112, 180);
}
.progress-bar.bar3{
background-color:rgb(242, 101, 34);
}
.progress-bar.bar4{
background-color:rgb(237, 28, 36);
}
.progress-bar.bar5{
background-color:rgb(135, 192, 94);
}
.language-skill{
margin-top:50px;
}
.language-skill canvas{
display:none;
}
.language-skill li{
float:left;
}
.language-skill li + li{
margin-left:80px;
}
.language-skill .percent{
display:inline-block;
text-align:center;
width:116px;
height:116px;
line-height:116px;
background-color:rgb(247, 148, 29);
border-top-left-radius:50%;
border-top-right-radius:50%;
border-bottom-right-radius:50%;
border-bottom-left-radius:50%;
color:rgb(255, 255, 255);
font-size:36px;
font-weight:700;
}
.language-skill .percent1{
background-color:rgb(242, 101, 34);
}
.language-skill .percent2{
background-color:rgb(60, 112, 180);
}
.language-skill .percent3{
background-color:rgb(135, 192, 94);
}
.language-skill .percent::after{
content:"%";
}
.language-skill .chart h5{
text-align:center;
font-size:16px;
font-weight:normal;
text-transform:capitalize;
}
.exprience-section .exprience{
overflow-x:hidden;
overflow-y:hidden;
}
.exprience-image{
float:left;
margin-right:20px;
width:175px;
height:160px;
overflow-x:hidden;
overflow-y:hidden;
}
.exprience-section .exprience img{
transform:scale(1.1);
}
.exprience-section .exprience:hover img{
transform:scale(1);
}
.exprience-info{
font-size:14px;
line-height:24px;
}
.exprience-info h3{
margin-bottom:0px;
line-height:28px;
margin-top:15px;
}
.exprience-info h5{
font-size:16px;
font-weight:normal;
margin-top:0px;
margin-bottom:20px;
}
.education-info{
font-size:14px;
line-height:24px;
padding-bottom:5px;
padding-top:10px;
}
.education-info h3{
margin-top:30px;
}
.education-info h5, .education-info h6{
font-size:16px;
line-height:12px;
}
.education-info h6{
margin-bottom:20px;
}
.portfolio-item{
position:relative;
margin-bottom:30px;
overflow-x:hidden;
overflow-y:hidden;
}
.portfolio-overlay{
position:absolute;
top:-100%;
left:0px;
width:100%;
height:100%;
background-color:rgb(239, 110, 48);
color:rgb(255, 255, 255);
transition-duration:500ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.portfolio-item:hover .portfolio-overlay{
top:0px;
}
.portfolio-info{
position:absolute;
bottom:0px;
left:0px;
font-size:16px;
font-weight:normal;
padding-left:30px;
padding-bottom:20px;
}
.portfolio-info h3{
color:rgb(255, 255, 255);
margin-top:5px;
margin-bottom:0px;
}
.portfolio-info a{
font-size:30px;
color:rgb(255, 255, 255);
}
.portfolio-info a:hover{
color:rgb(187, 70, 13);
}
img.mfp-img{
padding-top:12px;
padding-right:12px;
padding-bottom:12px;
padding-left:12px;
}
.mfp-image-holder .mfp-close{
top:-35px;
}
.mfp-zoom-out-cur .mfp-image-holder .mfp-close{
cursor:pointer;
}
.contact-section .icons{
float:left;
font-size:36px;
margin-right:30px;
color:rgb(247, 148, 29);
}
.home-two .contact-section .section-title h1{
margin-top:20px;
}
.contact-section li{
border-bottom-width:1px;
border-bottom-style:solid;
border-bottom-color:rgb(241, 241, 241);
padding-top:30px;
padding-right:0px;
padding-bottom:30px;
padding-left:0px;
}
.contact-section li:first-child{
padding-top:25px;
}
.contact-section h3{
margin-top:5px;
}
.contact-section li, .contact-section li a{
font-size:16px;
color:rgb(45, 48, 56);
}
.contact-section li a:hover{
color:rgb(135, 192, 94);
}
.contact-section li:hover .icons, .contact-info:hover .icons{
transform:rotate(360deg);
}
.contact-section .icons, .contact-info .icons{
transition-duration:800ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.contact-section .icons1{
color:rgb(237, 28, 36);
}
.contact-section .icons2{
color:rgb(185, 1, 98);
}
.contact-section .icons3{
color:rgb(60, 112, 180);
}
.contact-section .social li{
border-top-width:initial;
border-right-width:initial;
border-bottom-width:initial;
border-left-width:initial;
border-top-style:none;
border-right-style:none;
border-bottom-style:none;
border-left-style:none;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
display:inline-block;
}
.contact-section .social li + li{
margin-left:10px;
}
.contact-section .social a{
color:rgb(45, 48, 56);
}
.contact-section .social i.fa-facebook:hover{
color:rgb(64, 96, 165);
}
.contact-section .social i.fa-twitter:hover{
color:rgb(0, 171, 227);
}
.contact-section .social i.fa-google-plus:hover{
color:rgb(230, 69, 34);
}
.contact-section .social i.fa-dribbble:hover{
color:rgb(234, 76, 137);
}
.contact-section .social i.fa-behance:hover{
color:rgb(46, 153, 209);
}
.contact-section .social i.fa-github-alt:hover{
color:rgb(65, 125, 185);
}
.contact{
font-size:16px;
line-height:24px;
padding-left:50px;
margin-top:45px;
}
.contact .contact-info{
margin-bottom:15px;
}
.contact .title{
position:relative;
}
.contact .icons{
position:absolute;
left:-50px;
top:0px;
font-size:36px;
}
.contact .icons i{
color:rgb(135, 192, 94);
}
.contact .form-group{
margin-top:20px;
margin-bottom:0px;
}
.contact .form-control{
height:45px;
line-height:45px;
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(242, 242, 242);
border-right-color:rgb(242, 242, 242);
border-bottom-color:rgb(242, 242, 242);
border-left-color:rgb(242, 242, 242);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
box-shadow:none;
color:rgb(45, 48, 56);
font-size:14px;
background-color:rgb(242, 242, 242);
padding-left:20px;
padding-right:25px;
}
.contact .form-control:focus{
border-top-color:rgb(135, 192, 94);
border-right-color:rgb(135, 192, 94);
border-bottom-color:rgb(135, 192, 94);
border-left-color:rgb(135, 192, 94);
}
.contact textarea.form-control{
resize:none;
height:125px;
}
.contact .btn.btn-primary{
margin-top:20px;
}
.contact .form-control::-webkit-input-placeholder{
color:rgb(45, 48, 56);
}
.blog-section .entry-post{
margin-bottom:30px;
overflow-x:hidden;
overflow-y:hidden;
}
.entry-thumbnail{
position:relative;
z-index:-1;
overflow-x:hidden;
overflow-y:hidden;
}
.thumbnail-oberlay{
position:absolute;
top:0px;
left:0px;
width:100%;
height:100%;
border-top-left-radius:50%;
border-top-right-radius:50%;
border-bottom-right-radius:50%;
border-bottom-left-radius:50%;
background-color:rgba(45, 48, 56, 0.3);
transform:scale(0);
transition-duration:500ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.entry-post:hover .thumbnail-oberlay{
transform:scale(1);
border-top-left-radius:0%;
border-top-right-radius:0%;
border-bottom-right-radius:0%;
border-bottom-left-radius:0%;
}
.entry-post .time{
margin-top:-45px;
z-index:1;
}
.entry-post .time a{
width:84px;
height:84px;
color:rgb(255, 255, 255);
font-size:36px;
background-color:rgb(244, 191, 0);
line-height:60px;
text-align:center;
border-top-left-radius:50%;
border-top-right-radius:50%;
border-bottom-right-radius:50%;
border-bottom-left-radius:50%;
display:block;
font-weight:700;
text-transform:uppercase;
transition-duration:900ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.blog-section .entry-post:hover .time a{
border-top-left-radius:0%;
border-top-right-radius:0%;
border-bottom-right-radius:0%;
border-bottom-left-radius:0%;
}
.post-content .time.time1 a{
background-color:rgb(242, 101, 34);
}
.post-content .time.time2 a{
background-color:rgb(237, 28, 36);
}
.post-content .time.time3 a{
background-color:rgb(185, 1, 98);
}
.post-content .time.time4 a{
background-color:rgb(135, 62, 149);
}
.post-content .time.time5 a{
background-color:rgb(135, 192, 94);
}
.entry-post .time span{
display:block;
font-size:16px;
line-height:0;
margin-top:-2px;
}
.post-content{
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(240, 240, 240);
border-right-color:rgb(240, 240, 240);
border-bottom-color:rgb(240, 240, 240);
border-left-color:rgb(240, 240, 240);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
padding-left:35px;
padding-right:35px;
padding-bottom:30px;
}
.post-content h2{
line-height:21px;
}
.post-content h2 a{
font-size:18px;
color:rgb(45, 48, 56);
display:block;
}
.post-content h2 a:hover{
color:rgb(135, 192, 94);
}
.profile-section .section-padding{
padding-top:110px;
padding-bottom:120px;
}
.profile-section{
font-size:14px;
line-height:24px;
}
.profile-section .profile-info{
margin-bottom:70px;
overflow-x:hidden;
overflow-y:hidden;
}
.profile-logo{
float:left;
margin-right:40px;
}
.profile-info h1{
font-size:56px;
margin-top:0px;
margin-right:0px;
margin-bottom:0px;
margin-left:0px;
}
.profile-info h4{
margin-top:5px;
}
.profile-info address{
font-size:14px;
line-height:24px;
}
.profile-info address a{
color:rgb(45, 48, 56);
}
.profile-info address a:hover{
color:rgb(135, 192, 94);
}
.profile-section h3{
margin-top:25px;
margin-bottom:25px;
display:inline-block;
}
.career-objective{
padding-bottom:10px;
}
.sub-content{
padding-left:70px;
}
.history-content .title{
position:relative;
}
.profile-section .icons{
display:inline;
color:rgb(244, 191, 0);
margin-right:33px;
font-size:30px;
}
.work-history .icons{
color:rgb(247, 148, 29);
}
.educational-background h3, .work-history h3{
margin-bottom:20px;
}
.work-history hr{
margin-bottom:30px;
}
.work-history .history h5, .work-history .history h6{
font-size:14px;
}
.work-history .history h5{
font-weight:700;
}
.work-history .history h6{
font-weight:normal;
margin-bottom:25px;
}
.educational-background{
margin-bottom:25px;
}
.educational-background .icons{
color:rgb(237, 28, 36);
margin-right:22px;
}
.educational-background h5{
font-size:14px;
font-weight:700;
margin-bottom:5px;
}
.educational-background hr{
margin-top:25px;
margin-right:0px;
margin-bottom:25px;
margin-left:0px;
}
.language-proficiency{
padding-bottom:35px;
}
.language-proficiency .icons{
color:rgb(185, 1, 98);
}
.language-proficiency h5{
font-size:14px;
font-weight:700;
margin-bottom:5px;
margin-top:0px;
}
.language-proficiency ul > li{
display:inline-block;
}
.language-proficiency ul > li + li{
margin-left:20px;
padding-left:30px;
border-left-width:1px;
border-left-style:solid;
border-left-color:rgb(241, 241, 241);
}
.language-proficiency ul li ul li{
float:left;
color:rgb(187, 187, 187);
}
.language-proficiency ul li ul li + li{
margin-left:5px;
border-left-width:0px;
border-left-style:initial;
border-left-color:initial;
padding-left:0px;
}
.expertise{
padding-bottom:10px;
}
.expertise .icons{
color:rgb(135, 62, 149);
}
.expertise .rating-bar label{
font-size:14px;
font-weight:700;
margin-bottom:5px;
}
.expertise .progress-bar{
background-color:rgb(135, 62, 149);
}
.expertise .skill-progress{
margin-bottom:35px;
}
.personal-info{
padding-bottom:25px;
}
.portfolio{
padding-bottom:25px;
}
.personal-info .icons{
color:rgb(60, 112, 180);
}
.personal-info .address li, .portfolio li{
overflow-x:hidden;
overflow-y:hidden;
line-height:30px;
}
.personal-info .address li h5, .portfolio li h5{
float:left;
margin-top:5px;
min-width:180px;
}
.personal-info .address li span, .portfolio li span{
margin-right:30px;
}
.portfolio .icons{
color:rgb(5, 172, 128);
margin-right:28px;
}
.portfolio li a{
color:rgb(45, 48, 56);
}
.portfolio li a:hover{
color:rgb(135, 192, 94);
}
.declaration h1{
font-weight:normal;
margin-top:45px;
font-family:Sacramento, cursive;
}
.declaration .icons{
color:rgb(135, 192, 94);
}
.profile-section .btn.btn-primary{
margin-top:65px;
}
#footer a{
color:rgb(255, 255, 255);
}
#footer a:hover{
color:rgb(107, 255, 0);
}
.widget img{
max-width:100%;
}
.widget.widget_search form{
position:relative;
}
.widget_search button[type="submit"]{
position:absolute;
right:0px;
top:0px;
height:100%;
width:50px;
border-top-left-radius:0px;
border-top-right-radius:0px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
background-color:rgb(45, 48, 56);
color:rgb(255, 255, 255);
}
.form-control:focus, input[type="search"]:focus{
border-top-width:1px;
border-right-width:1px;
border-bottom-width:1px;
border-left-width:1px;
border-top-style:solid;
border-right-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-top-color:rgb(45, 48, 56);
border-right-color:rgb(45, 48, 56);
border-bottom-color:rgb(45, 48, 56);
border-left-color:rgb(45, 48, 56);
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
}
h3.widget_title{
margin-top:0px;
font-size:20px;
margin-bottom:20px;
padding-bottom:10px;
border-bottom-width:1px;
border-bottom-style:solid;
border-bottom-color:rgb(240, 240, 240);
}
.widget ul li{
padding-top:7px;
padding-right:0px;
padding-bottom:7px;
padding-left:0px;
margin-top:7px;
margin-right:0px;
margin-bottom:7px;
margin-left:0px;
position:relative;
}
.widget ul li a{
padding-left:10px;
}
.widget ul li::before{
content:"";
font-family:FontAwesome;
}
.widget > ul > li:first-child{
border-top-width:0px;
border-top-style:initial;
border-top-color:initial;
}
.widget ul ul{
padding-top:5px;
}
.widget ul ul li{
padding-left:15px;
}
#blog-details .section-title{
margin-bottom:40px;
}
#blog-details .post-content{
border-top-width:initial;
border-right-width:initial;
border-bottom-width:initial;
border-left-width:initial;
border-top-style:none;
border-right-style:none;
border-bottom-style:none;
border-left-style:none;
border-top-color:initial;
border-right-color:initial;
border-bottom-color:initial;
border-left-color:initial;
border-image-source:initial;
border-image-slice:initial;
border-image-width:initial;
border-image-outset:initial;
border-image-repeat:initial;
padding-top:0px;
padding-right:0px;
padding-bottom:0px;
padding-left:0px;
margin-left:110px;
font-size:14px;
line-height:22px;
margin-bottom:35px;
}
#blog-details .entry-thumbnail{
position:inherit;
}
#blog-details .entry-post .time{
margin-top:-15px;
float:left;
}
#blog-details .post-content h2{
font-size:30px;
line-height:32px;
margin-top:0px;
margin-bottom:20px;
}
.entry-summary p{
margin-bottom:20px;
}
.post-action li{
max-width:225px;
}
.post-action .previous-post{
float:left;
}
.post-action .next-post{
float:right;
text-align:right;
}
.post-action span{
font-size:14px;
color:rgb(207, 207, 207);
text-transform:uppercase;
}
.post-action h3{
line-height:19px;
margin-top:5px;
}
.post-action h3 a{
font-size:16px;
color:rgb(45, 48, 56);
}
.post-action h3 a:hover{
color:rgb(135, 192, 94);
}
.icons{
transition-duration:500ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.btn.btn-primary, a, #contact-section li a i:hover, .exprience-image img, .contact-section .social i, .navbar-nav > li, .navbar-nav > li ul li i, .navbar-nav > li span{
transition-duration:500ms;
transition-timing-function:ease;
transition-delay:0s;
transition-property:all;
}
.navbar.navbar-expand-lg{
padding:0 0 0.5rem 0;
width:100%;
color:rgb(221, 221, 221);
opacity:1;
background-color:rgba(45,48,56,0);
}
.navbar-brand.logo{
border-radius:0 0 0 0;
width:130%;
}
.about-section.section-padding{
padding:80px 0 50px 0;
}
.fa.fa-facebook{
right:0;
display:block;
}
.fa.fa-behance{
right:15px;
float:none;
margin:0 4px 0 0;
}
.fa.fa-google-plus{
right:14px;
left:0;
float:left;
margin:0 4px 0 0;
}
.home-social{
float:none;
position:relative;
display:block;
}
.fa.fa-twitter{
margin:0 6px 0 0;
}
.fa.fa-dribbble{
margin:0 2px 0 0;
}
.cell{
width:8%;
display:table-cell;
height:75px;
}
@media screen and (prefers-reduced-motion: reduce){
.form-control{
  transition-duration:0s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:none;
}
.btn{
  transition-duration:0s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:none;
}
.progress-bar{
  transition-duration:0s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:none;
}
.modal.fade .modal-dialog{
  transition-duration:0s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:none;
}
}
@media progress-bar-stripes{
from{
  background-position-x:1rem;
  background-position-y:0px;
}
to{
  background-position-x:0px;
  background-position-y:0px;
}
0%{
  background-position-x:1rem;
  background-position-y:0px;
}
100%{
  background-position-x:0px;
  background-position-y:0px;
}
0%{
  background-position-x:1rem;
  background-position-y:0px;
}
100%{
  background-position-x:0px;
  background-position-y:0px;
}
}
@media print{
size:a3;
}
@media print{
*, ::after, ::before{
  text-shadow:none !important;
  box-shadow:none !important;
}
a:not(.btn){
  text-decoration-line:underline;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
}
abbr[title]::after{
  content:" (" attr(title) ")";
}
pre{
  white-space:pre-wrap !important;
}
blockquote, pre{
  border-top-width:1px;
  border-right-width:1px;
  border-bottom-width:1px;
  border-left-width:1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(173, 181, 189);
  border-right-color:rgb(173, 181, 189);
  border-bottom-color:rgb(173, 181, 189);
  border-left-color:rgb(173, 181, 189);
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
  break-inside:avoid;
}
thead{
  display:table-header-group;
}
img, tr{
  break-inside:avoid;
}
h2, h3, p{
  orphans:3;
  widows:3;
}
h2, h3{
  break-after:avoid;
}
body{
  min-width:992px !important;
}
.container{
  min-width:992px !important;
}
.navbar{
  display:none;
}
.table td, .table th{
  background-color:rgb(255, 255, 255) !important;
}
.table-bordered td, .table-bordered th{
  border-top-width:1px !important;
  border-right-width:1px !important;
  border-bottom-width:1px !important;
  border-left-width:1px !important;
  border-top-style:solid !important;
  border-right-style:solid !important;
  border-bottom-style:solid !important;
  border-left-style:solid !important;
  border-top-color:rgb(222, 226, 230) !important;
  border-right-color:rgb(222, 226, 230) !important;
  border-bottom-color:rgb(222, 226, 230) !important;
  border-left-color:rgb(222, 226, 230) !important;
  border-image-source:initial !important;
  border-image-slice:initial !important;
  border-image-width:initial !important;
  border-image-outset:initial !important;
  border-image-repeat:initial !important;
}
.table-dark tbody + tbody, .table-dark td, .table-dark th, .table-dark thead th{
  border-top-color:rgb(222, 226, 230);
  border-right-color:rgb(222, 226, 230);
  border-bottom-color:rgb(222, 226, 230);
  border-left-color:rgb(222, 226, 230);
}
.table .thead-dark th{
  color:inherit;
  border-top-color:rgb(222, 226, 230);
  border-right-color:rgb(222, 226, 230);
  border-bottom-color:rgb(222, 226, 230);
  border-left-color:rgb(222, 226, 230);
}
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@font-face{
font-family:rookies-showtimesregular;
src:url("../fonts/rookies_showtimes-webfont.woff2") format("woff2"), url("../fonts/rookies_showtimes-webfont.woff") format("woff");
font-weight:normal;
font-style:normal;
}
@media fadeeffect{
from{
  opacity:0;
}
to{
  opacity:1;
}
}
@media fadeInUp{
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
0%{
  opacity:0;
  transform:translateY(30px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
}
@media (max-width: 1199.98px){
.table-responsive-xl > .table-bordered{
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-style:initial;
  border-right-style:initial;
  border-bottom-style:initial;
  border-left-style:initial;
  border-top-color:initial;
  border-right-color:initial;
  border-bottom-color:initial;
  border-left-color:initial;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
}
.navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid{
  padding-right:0px;
  padding-left:0px;
}
}
@media (min-width: 992px) and (max-width: 1199px){
.banner-info h2{
  font-size:110px;
  line-height:80px;
}
#navigation.menu-one .navbar{
  width:27%;
}
.achievement li + li{
  margin-left:20px;
}
.skill-section .rating-bar{
  width:47%;
}
.progress-content, .expertise .sub-content{
  padding-right:20px;
}
.language-skill li + li{
  margin-left:45px;
}
#navigation.menu-two .navbar-nav > li a{
  padding-top:23px;
  padding-right:10px;
  padding-bottom:23px;
  padding-left:10px;
  font-size:12px;
}
#navigation.menu-two .navbar-nav > li.current a, #navigation.menu-two .navbar-nav > li a:hover{
  padding-bottom:30px;
}
.home-two .banner-info h1{
  font-size:60px;
}
#navigation .navbar::before, #navigation .navbar::after{
  height:64px;
}
.logo{
  height:64px;
  padding-top:2px;
  padding-right:15px;
  padding-bottom:2px;
  padding-left:15px;
}
#navigation .navbar-nav > li .social li a{
  padding-top:20px;
  padding-right:10px;
  padding-bottom:20px;
  padding-left:10px;
}
}
@media (max-width: 991.98px){
.table-responsive-lg > .table-bordered{
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-style:initial;
  border-right-style:initial;
  border-bottom-style:initial;
  border-left-style:initial;
  border-top-color:initial;
  border-right-color:initial;
  border-bottom-color:initial;
  border-left-color:initial;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
}
.navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid{
  padding-right:0px;
  padding-left:0px;
}
}
@media (max-width: 768px){
.cell{
  width:100%;
  display:block;
}
}
@media (min-width: 576px){
.container{
  max-width:540px;
}
.col-sm-6{
  flex-grow:0;
  flex-shrink:0;
  flex-basis:50%;
  max-width:50%;
}
.col-sm-9{
  flex-grow:0;
  flex-shrink:0;
  flex-basis:75%;
  max-width:75%;
}
.col-sm-12{
  flex-grow:0;
  flex-shrink:0;
  flex-basis:100%;
  max-width:100%;
}
.form-inline label{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:0px;
}
.form-inline .form-group{
  display:flex;
  flex-grow:0;
  flex-shrink:0;
  flex-basis:auto;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  margin-bottom:0px;
}
.form-inline .form-control{
  display:inline-block;
  width:auto;
  vertical-align:middle;
}
.form-inline .form-control-plaintext{
  display:inline-block;
}
.form-inline .custom-select, .form-inline .input-group{
  width:auto;
}
.form-inline .form-check{
  display:flex;
  align-items:center;
  justify-content:center;
  width:auto;
  padding-left:0px;
}
.form-inline .form-check-input{
  position:relative;
  margin-top:0px;
  margin-right:0.25rem;
  margin-left:0px;
}
.form-inline .custom-control{
  align-items:center;
  justify-content:center;
}
.form-inline .custom-control-label{
  margin-bottom:0px;
}
.navbar-expand-sm .navbar-nav{
  flex-direction:row;
}
.navbar-expand-sm .navbar-nav .dropdown-menu{
  position:absolute;
}
.navbar-expand-sm .navbar-nav .nav-link{
  padding-right:0.5rem;
  padding-left:0.5rem;
}
.navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid{
  flex-wrap:nowrap;
}
.navbar-expand-sm .navbar-collapse{
  flex-basis:auto;
  display:flex !important;
}
.navbar-expand-sm .navbar-toggler{
  display:none;
}
.card-deck .card{
  display:flex;
  flex-grow:1;
  flex-shrink:0;
  flex-basis:0%;
  flex-direction:column;
  margin-right:15px;
  margin-bottom:0px;
  margin-left:15px;
}
.card-group > .card{
  flex-grow:1;
  flex-shrink:0;
  flex-basis:0%;
  margin-bottom:0px;
}
.card-group > .card + .card{
  margin-left:0px;
  border-left-width:0px;
  border-left-style:initial;
  border-left-color:initial;
}
.card-group > .card:first-child{
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
}
.card-group > .card:first-child .card-header, .card-group > .card:first-child .card-img-top{
  border-top-right-radius:0px;
}
.card-group > .card:first-child .card-footer, .card-group > .card:first-child .card-img-bottom{
  border-bottom-right-radius:0px;
}
.card-group > .card:last-child{
  border-top-left-radius:0px;
  border-bottom-left-radius:0px;
}
.card-group > .card:last-child .card-header, .card-group > .card:last-child .card-img-top{
  border-top-left-radius:0px;
}
.card-group > .card:last-child .card-footer, .card-group > .card:last-child .card-img-bottom{
  border-bottom-left-radius:0px;
}
.card-group > .card:only-child{
  border-top-left-radius:0.25rem;
  border-top-right-radius:0.25rem;
  border-bottom-right-radius:0.25rem;
  border-bottom-left-radius:0.25rem;
}
.card-group > .card:only-child .card-header, .card-group > .card:only-child .card-img-top{
  border-top-left-radius:0.25rem;
  border-top-right-radius:0.25rem;
}
.card-group > .card:only-child .card-footer, .card-group > .card:only-child .card-img-bottom{
  border-bottom-right-radius:0.25rem;
  border-bottom-left-radius:0.25rem;
}
.card-group > .card:not(:first-child):not(:last-child):not(:only-child){
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
.card-columns .card{
  display:inline-block;
  width:100%;
}
}
@media (min-width: 768px){
.container{
  max-width:720px;
}
.col-md-4{
  flex-grow:0;
  flex-shrink:0;
  flex-basis:33.3333%;
  max-width:33.3333%;
}
.col-md-8{
  flex-grow:0;
  flex-shrink:0;
  flex-basis:66.6667%;
  max-width:66.6667%;
}
.navbar-expand-md .navbar-nav{
  flex-direction:row;
}
.navbar-expand-md .navbar-nav .dropdown-menu{
  position:absolute;
}
.navbar-expand-md .navbar-nav .nav-link{
  padding-right:0.5rem;
  padding-left:0.5rem;
}
.navbar-expand-md > .container, .navbar-expand-md > .container-fluid{
  flex-wrap:nowrap;
}
.navbar-expand-md .navbar-collapse{
  flex-basis:auto;
  display:flex !important;
}
.navbar-expand-md .navbar-toggler{
  display:none;
}
}
@media (min-width: 768px) and (max-width: 991px){
#navigation.menu-one .navbar-nav > li:first-child a{
  margin-left:20px;
}
#navigation.menu-one .navbar li img{
  width:80%;
  height:inherit;
}
.banner-info h1{
  font-size:40px;
}
.section-title h1{
  font-size:50px;
}
.portfolio-info h3{
  font-size:22px;
}
.profile-info h1{
  font-size:46px;
}
.sub-content{
  padding-left:0px;
}
.banner-info h2{
  font-size:85px;
  line-height:50px;
}
.banner-info h3{
  letter-spacing:15px;
}
.achievement li{
  width:48%;
}
.achievement li + li{
  margin-left:0px;
}
.achievement-info h4{
  font-size:14px;
}
.skill-section .rating-bar{
  width:46%;
}
.progress-content{
  padding-right:20px;
}
.language-skill .percent{
  width:100px;
  height:100px;
  line-height:100px;
  font-size:28px;
}
.language-skill li + li{
  margin-left:15px;
}
.post-content{
  padding-left:20px;
  padding-right:20px;
  padding-bottom:20px;
}
.language-proficiency ul > li + li{
  margin-left:5px;
  padding-left:17px;
}
.personal-info .address li h5, .portfolio li h5{
  min-width:130px;
}
.exprience-image{
  height:230px;
}
.section-padding{
  padding-top:30px;
  padding-bottom:50px;
}
.profile-section .section-padding{
  padding-top:50px;
  padding-right:0px;
  padding-bottom:50px;
  padding-left:0px;
}
.banner-info{
  bottom:60px;
}
.post-action li{
  max-width:50%;
}
#navigation.menu-one .navbar-nav{
  padding-bottom:0px;
}
#navigation.menu-one .navbar-nav > li ul li a{
  padding-left:5px;
  padding-right:5px;
}
#navigation.menu-one .navbar-nav > li span{
  left:60px;
}
#navigation.menu-one .navbar-nav > li i{
  font-size:25px;
  left:-40px;
}
#navigation.menu-one .navbar-nav > li ul.social i{
  font-size:14px;
}
#navigation.menu-one .navbar-nav > li{
  height:6.5%;
}
#navigation.menu-one .navbar-nav > li .social{
  left:20px;
}
#navigation.menu-two .navbar-nav > li a{
  padding-top:15px;
  padding-right:20px;
  padding-bottom:15px;
  padding-left:20px;
}
#navigation.menu-two .navbar-nav > li.current a, #navigation.menu-two .navbar-nav > li a:hover{
  padding-bottom:15px;
}
.home-two .banner-info h1{
  font-size:50px;
}
#navigation .navbar::before{
  width:200%;
}
#navigation.menu-one .navbar{
  width:100%;
}
#navigation.menu-one .navbar::before{
  left:-100%;
  right:0px;
}
.home-one .navbar-nav{
  margin-top:10px;
}
.home-two .section-title h1{
  font-size:42px;
}
}
@media (min-width: 992px){
.container{
  max-width:960px;
}
.navbar-expand-lg{
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:flex-start;
}
.navbar-expand-lg .navbar-nav{
  flex-direction:row;
}
.navbar-expand-lg .navbar-nav .dropdown-menu{
  position:absolute;
}
.navbar-expand-lg .navbar-nav .nav-link{
  padding-right:0.5rem;
  padding-left:0.5rem;
}
.navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid{
  flex-wrap:nowrap;
}
.navbar-expand-lg .navbar-collapse{
  flex-basis:auto;
  display:flex !important;
}
.navbar-expand-lg .navbar-toggler{
  display:none;
}
}
@media (min-width: 1200px){
.container{
  max-width:1140px;
}
.navbar-expand-xl .navbar-nav{
  flex-direction:row;
}
.navbar-expand-xl .navbar-nav .dropdown-menu{
  position:absolute;
}
.navbar-expand-xl .navbar-nav .nav-link{
  padding-right:0.5rem;
  padding-left:0.5rem;
}
.navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid{
  flex-wrap:nowrap;
}
.navbar-expand-xl .navbar-collapse{
  flex-basis:auto;
  display:flex !important;
}
.navbar-expand-xl .navbar-toggler{
  display:none;
}
}
@media (max-width: 991px){
.navbar-header{
  float:none;
}
.navbar-collapse{
  margin-top:65px;
}
.navbar-toggler{
  position:absolute;
  top:20px;
  right:30px;
  color:rgb(255, 255, 255);
  padding-top:6px;
  padding-right:8px;
  padding-bottom:6px;
  padding-left:8px;
  line-height:0;
  border-top-width:1px;
  border-right-width:1px;
  border-bottom-width:1px;
  border-left-width:1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(255, 255, 255);
  border-right-color:rgb(255, 255, 255);
  border-bottom-color:rgb(255, 255, 255);
  border-left-color:rgb(255, 255, 255);
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
}
.home-one .logo{
  padding-top:9px;
  padding-right:30px;
  padding-bottom:9px;
  padding-left:30px;
  margin-left:0px;
}
.navbar-toggler-icon{
  width:inherit;
  height:inherit;
}
.navbar-nav{
  float:none !important;
}
.navbar-nav > li{
  float:none;
}
.home-two .home-social{
  top:100px;
}
.banner-content .banner-info{
  top:100%;
  margin-top:-220px;
}
#navigation .navbar::before{
  width:200%;
}
#navigation.menu-two .navbar{
  display:flex;
}
#navigation.menu-two .navbar-nav > li{
  float:none;
}
#navigation.menu-two .navbar-collapse{
  margin-top:0px;
}
.blog-section{
  margin-top:100px;
}
}
@media (max-width: 767.98px){
.table-responsive-md > .table-bordered{
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-style:initial;
  border-right-style:initial;
  border-bottom-style:initial;
  border-left-style:initial;
  border-top-color:initial;
  border-right-color:initial;
  border-bottom-color:initial;
  border-left-color:initial;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
}
.navbar-expand-md > .container, .navbar-expand-md > .container-fluid{
  padding-right:0px;
  padding-left:0px;
}
}
@media (max-width: 767px){
.home-two .section-title h1{
  font-size:42px;
}
#navigation .navbar::before{
  width:200%;
}
.banner-info{
  bottom:30px;
}
.banner-info h1{
  font-size:30px;
}
.banner-info h2{
  font-size:50px;
  line-height:25px;
}
.banner-info h3{
  font-size:14px;
  letter-spacing:15px;
}
.section-padding{
  overflow-x:hidden;
  overflow-y:hidden;
  padding-bottom:30px;
  padding-top:30px;
}
.section-title, .about-section .section-title{
  margin-bottom:20px;
}
.section-title h1{
  font-size:36px;
}
.about-info .signature h1{
  margin-bottom:10px;
}
.about-section address{
  line-height:24px;
}
.achievement li + li{
  margin-left:0px;
}
.achievement li{
  float:none;
  display:inline-block;
  margin-bottom:20px;
  width:49%;
}
.achievement-info h4{
  font-size:14px;
}
.achievement-info .counter{
  font-size:40px;
  line-height:42px;
}
.skill-section .rating-bar{
  width:97%;
}
.bar-right{
  float:none;
}
.language-skill .percent{
  font-size:24px;
  width:80px;
  height:80px;
  line-height:80px;
}
.language-skill li + li{
  margin-left:40px;
}
.language-skill{
  margin-top:0px;
}
.exprience-info h3{
  font-size:20px;
}
.exprience-image{
  min-height:200px;
}
.exprience-info h5{
  font-size:14px;
  margin-bottom:10px;
}
.education-info h3{
  margin-top:10px;
  font-size:20px;
}
.portfolio-item{
  margin-bottom:15px;
}
.portfolio-item img{
  width:100%;
}
.education-section hr, .contact-section hr{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.text-info{
  margin-bottom:20px;
}
.contact-section h3{
  font-size:20px;
}
.contact-section .icons{
  height:65px;
}
.contact-section li{
  overflow-x:hidden;
  overflow-y:hidden;
  padding-top:15px;
  padding-bottom:15px;
}
.blog-section .entry-post{
  margin-bottom:15px;
}
.blog-section .entry-post img{
  width:100%;
}
.profile-info h1{
  font-size:40px;
}
#profile hr, .exprience-section hr{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
#profile h3{
  margin-bottom:15px;
  font-size:20px;
}
.profile-logo{
  margin-right:20px;
}
.profile-section .section-padding{
  padding-bottom:30px;
  padding-top:40px;
}
.profile-section .profile-info{
  margin-bottom:0px;
}
.sub-content{
  padding-left:45px;
}
.profile-section .icons{
  margin-right:8px;
}
.educational-background .icons{
  margin-right:0px;
}
.work-history .history h6{
  margin-bottom:10px;
}
#profile .educational-background h3, #profile .work-history h3{
  margin-bottom:5px;
}
.personal-info .address li h5, .portfolio li h5{
  min-width:120px;
}
.personal-info .address li span, .portfolio li span{
  margin-right:10px;
}
.language-proficiency ul > li{
  width:49%;
  margin-bottom:20px;
}
.language-proficiency ul > li ul li{
  width:inherit;
  margin-bottom:0px;
}
.language-proficiency ul > li + li{
  margin-left:0px;
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-style:initial;
  border-right-style:initial;
  border-bottom-style:initial;
  border-left-style:initial;
  border-top-color:initial;
  border-right-color:initial;
  border-bottom-color:initial;
  border-left-color:initial;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
  padding-left:0px;
}
.btn.btn-primary{
  font-size:14px;
  padding-top:7px;
  padding-right:15px;
  padding-bottom:7px;
  padding-left:15px;
}
.profile-section .btn.btn-primary{
  margin-top:15px;
}
.declaration h1{
  margin-top:20px;
}
.skill-progress{
  margin-bottom:20px;
}
.progress, .expertise .skill-progress{
  margin-bottom:20px;
}
.home-one #navigation .navbar, .home-two #navigation .navbar{
  width:100%;
}
.navbar-collapse{
  border-top-width:0px;
  border-top-style:initial;
  border-top-color:initial;
  margin-top:55px;
}
#blog-details .post-content h2{
  font-size:26px;
  margin-bottom:10px;
}
.entry-summary p{
  margin-bottom:10px;
}
.post-action li{
  max-width:50%;
}
#navigation.menu-one .navbar-nav > li i{
  display:none;
}
#navigation.menu-one .navbar-nav > li ul li a:hover i, #navigation.menu-one .navbar-nav > li ul li i{
  display:block;
  font-size:14px;
}
#navigation.menu-one .navbar-nav > li{
  height:15%;
  margin-left:0px;
  padding-left:10px;
}
#navigation.menu-one .navbar-nav > li:last-child, #navigation.menu-one .navbar-nav > li:last-child:hover{
  margin-left:0px;
  padding-left:0px;
}
#navigation.menu-one .navbar-nav > li ul li a{
  margin-top:18%;
}
#navigation.menu-one .navbar-nav > li span{
  left:20px;
}
#navigation.menu-one .navbar-nav > li.current span, #navigation.menu-one .navbar-nav > li:hover span{
  left:25px;
}
#navigation .navbar-nav{
  margin-top:0px;
}
#navigation .navbar-nav > li .social{
  left:25px;
}
.menu-one .container{
  padding-top:0px;
  padding-right:0px;
  padding-bottom:0px;
  padding-left:0px;
}
.home-one .logo{
  padding-left:15px;
  max-width:100%;
  margin-left:0px;
  height:57px;
  padding-top:6px;
  padding-right:15px;
  padding-bottom:4px;
}
#navigation.menu-two .navbar-nav > li a{
  padding-top:10px;
  padding-right:15px;
  padding-bottom:10px;
  padding-left:15px;
  font-size:13px;
}
#navigation.menu-two .navbar-nav > li.current a, #navigation.menu-two .navbar-nav > li a:hover, #navigation.menu-two .navbar-nav > li:last-child a:hover, #navigation.menu-two .navbar-nav > li.current:last-child a{
  padding-bottom:10px;
}
.home-two .banner-info{
  text-align:left;
  width:100%;
}
.logo{
  background-color:rgb(45, 48, 56);
  height:57px;
  padding-top:8px;
  padding-right:15px;
  padding-bottom:8px;
  padding-left:15px;
  max-width:60%;
}
.logo img{
  max-width:75%;
}
.home-two .home-social{
  top:100%;
  margin-top:-40px;
}
.home-two .banner-info h1{
  font-size:40px;
  margin-bottom:5px;
}
#navigation .navbar::before, #navigation .navbar::after{
  height:57px;
}
.banner-content .banner-info{
  top:100%;
  margin-top:-180px;
}
.home-banner-one .banner-content{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
}
.home-banner-one .container{
  max-width:100%;
  padding-top:0px;
  padding-right:0px;
  padding-bottom:0px;
  padding-left:0px;
}
.navbar-toggler{
  top:12px;
}
#navigation.menu-two .logo{
  max-width:100%;
}
.textwidget img{
  width:100%;
}
}
@media (max-width: 575.98px){
.table-responsive-sm > .table-bordered{
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:0px;
  border-left-width:0px;
  border-top-style:initial;
  border-right-style:initial;
  border-bottom-style:initial;
  border-left-style:initial;
  border-top-color:initial;
  border-right-color:initial;
  border-bottom-color:initial;
  border-left-color:initial;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
}
.navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid{
  padding-right:0px;
  padding-left:0px;
}
}
@media (max-width: 479px){
#navigation.menu-two .logo{
  max-width:75%;
}
.banner-info h2{
  font-size:48px;
  line-height:15px;
}
.banner-info h3{
  letter-spacing:8px;
}
.achievement{
  text-align:left;
}
.section-title h1, .home-two .section-title h1{
  font-size:30px;
}
.skill-section ul{
  text-align:center;
}
.language-skill li + li{
  margin-left:0px;
}
.language-skill li{
  float:none;
  display:inline-block;
  width:49%;
}
.exprience-image{
  float:none;
  height:inherit;
  min-height:inherit;
  margin-top:10px;
}
.exprience-info{
  margin-bottom:20px;
}
#profile h3{
  font-size:19px;
}
.sub-content{
  padding-left:0px;
}
.personal-info .address li h5, .portfolio li h5{
  min-width:inherit;
}
.personal-info .address li span, .portfolio li span{
  margin-right:5px;
  padding-left:10px;
}
.personal-info .address li, .portfolio li{
  font-size:12px;
}
.profile-logo{
  float:none;
  margin-right:0px;
  margin-bottom:20px;
}
#blog-details .post-content{
  margin-left:0px;
}
#blog-details .entry-post .time{
  float:none;
  margin-bottom:10px;
}
#blog-details .post-content h2{
  font-size:24px;
  line-height:26px;
}
.post-action li{
  max-width:100%;
  float:none;
}
.post-action .next-post{
  text-align:left;
  margin-top:15px;
}
.blog-social li{
  width:24%;
}
#navigation .navbar-nav > li{
  height:8%;
}
.menu-two .logo{
  padding-bottom:5px;
}
.logo img{
  max-width:90%;
}
.home-two .banner-info{
  padding-left:15px;
}
.home-two .home-social{
  margin-left:15px;
}
.home-one .logo{
  max-width:80%;
  height:57px;
}
#navigation.menu-one .navbar-nav > li{
  height:12%;
}
}
@media ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){
.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active{
  transform:translate3d(0px, 0px, 0px);
}
}
.imgSet
{
  position: absolute;
  right: 0;
  
}
.imgSet img
{
  width: 90%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-flow: inherit !important;
}
</style>



<body>
<div id="ior4-2">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <div class="main-wrapper home-two">
    <div id="home-banner-2">
      <div class="container">
        <div id="ils6-2" class="row">
          <div class="col-sm-9">
            <div class="banner-content">
              <div class="home-social">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#" id="ijv72-2"><i aria-hidden="true" class="fa fa-facebook">
                      </i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" id="iukwf-2"><i aria-hidden="true" class="fa fa-twitter">
                      </i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#"><i aria-hidden="true" class="fa fa-google-plus">
                      </i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" id="i8a4j-2"><i aria-hidden="true" class="fa fa-dribbble">
                      </i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" id="i94jg-2"><i aria-hidden="true" class="fa fa-behance">
                      </i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#"><i aria-hidden="true" class="fa fa-github-alt">
                      </i></a>
                  </li>
                </ul>
              </div>
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-info">
                <h1 id="irtpc-2">Hello, I am
                </h1>
                <h2 id="iz46s-2">Surzil Geek
                </h2>
                <h3 id="iaywy-2">graphics Designer
                </h3>
              </div>
              
              </div>
               </div>
             
           
            </div>
          </div>
          <div class="col-sm-3">
          <div class="imgSet">
                  <img src="https://demo.themeregion.com/geek/images/bg/2.png">
               </div>
              </div>
        </div>
      </div>
    </div>
            <div class="container">
      <div id="navigation" class="menu-two">
      <div class="navbar navbar-expand-lg">
      <div class="navbar-header">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fa fa-align-justify"></i></span>
      </button>
      <div class="navbar-brand logo">
      <a href="index.html"><img class="img-fluid" src="https://demo.themeregion.com/geek/images/logo.png" alt="Image"></a>
      </div>
      </div>
      <div id="navbar-collapse" class="collapse navbar-collapse">
      <nav id="mainmenu">
      <ul class="nav navbar-nav">
      <li class="scroll"><a href="#home-banner">Home</a></li>
      <li class="scroll current"><a href="#about">About Me</a></li>
      <li class="scroll"><a href="#skill">Skills</a></li>
      <li class="scroll"><a href="#exprience">Experience</a></li>
      <li class="scroll"><a href="#education">Education</a></li>
      <li class="scroll"><a href="#portfolio">Portfolio</a></li>
      <li class="scroll"><a href="#contact">Contact</a></li>
      <li class="scroll"><a href="#blog">Blog</a></li>
      </ul>
      </nav>
      </div>
      </div>
      </div>
      </div>
            </div>
    <div id="about-2" class="about-section section-padding">
      <div class="container">
        <div id="i9hi6-2" class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1 id="iqznl-2">Surzil Geek
              </h1>
            </div>
          </div>
          <div id="ic63r-2" class="col-md-8">
            <blockquote class="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
            </blockquote>
            <div class="about-info">
              <div class="signature">
                <h1 id="i0268-2">Surzil Geek
                </h1>
              </div>
            </div>
            <address id="ib4fm-2">
              <p id="ioc5j-2">
                <span>Nick Name:</span> Endrue Surzil Geek
              </p>
              <p>
                <span>Email:</span> 
                <a href="/cdn-cgi/l/email-protection" data-cfemail="a1c8d5d2ccc4e1d2d4d3dbc8cdc6c4c4ca8fc2cecc" class="__cf_email__">[email protected]</a>
              </p>
              <p id="ibowi-2">
                <span>Phone:</span> (123)-456-78910
              </p>
              <p id="ibau5a-2">
                <span>Date of Birth:</span> Jan 13, 1982
              </p>
              <p id="imeezn-2">
                <span>Address:</span> 121 King Street, Melbourne Victoria, 1200 USA
              </p>
            </address>
            <div id="i81ltl-2" class="row">
              <div id="ij19ob-2" class="cell">
              </div>
              <div id="ivmdtg-2" class="cell">
              </div>
            </div>
            <ul class="achievement">
              <li class="achievement-info">
                <span class="counter">35</span>
                <h4>Projects completed
                </h4>
              </li>
              <li class="achievement-info">
                <span class="counter counter1">19</span>
                <h4>Winning Awards
                </h4>
              </li>
              <li class="achievement-info">
                <span class="counter counter2">230</span>
                <h4>Happy Clients
                </h4>
              </li>
              <li class="achievement-info">
                <span class="counter counter3">19</span>
                <h4>Running Projects
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="test-2" class="skill-section bg-color section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>My Skills
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="section-content">
              <div class="text-info">
                <h4>Experience Skill
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div class="progress-content">
                <div class="rating-bar bar-left">
                  <label>Photoshop</label>
                  <span class="rating-count pull-right">90%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                      </div>
                    </div>
                  </div>
                  <label>PHP</label>
                  <span class="rating-count pull-right">40%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar bar1">
                      </div>
                    </div>
                  </div>
                  <label>Html 5 &amp; CSS 3</label>
                  <span class="rating-count pull-right">70%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar bar2">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="skill rating-bar bar-right">
                  <label>Illustrator</label>
                  <span class="rating-count pull-right">80%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="progress-bar bar3">
                      </div>
                    </div>
                  </div>
                  <label>Joomla</label>
                  <span class="rating-count pull-right">50%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar bar4">
                      </div>
                    </div>
                  </div>
                  <label>Wordpress</label>
                  <span class="rating-count pull-right">90%</span>
                  <div class="skill-progress">
                    <div class="progress">
                      <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar bar5">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="language-skill">
                <div class="text-info">
                  <h4>Language skill
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <ul>
                  <li data-percent="100" class="chart">
                    <span class="percent"></span>
                    <h5>German
                    </h5>
                  </li>
                  <li data-percent="90" class="chart">
                    <span class="percent percent1"></span>
                    <h5>Spanish
                    </h5>
                  </li>
                  <li data-percent="100" class="chart">
                    <span class="percent percent2"></span>
                    <h5>English
                    </h5>
                  </li>
                  <li data-percent="30" class="chart">
                    <span class="percent percent3"></span>
                    <h5>Latin
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="exprience-2" class="exprience-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>My Exprience
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text-info">
              <h4>15 Years Exprience
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div class="exprience">
              <div class="exprience-image">
                <img src="https://demo.themeregion.com/geek/images/exprience/1.png" alt="Image" class="img-fluid"/>
              </div>
              <div class="exprience-info">
                <h3>Senior Graphic Designer
                </h3>
                <h5>July, 2012 - Present (4 years)
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <hr/>
            <div class="exprience">
              <div class="exprience-image">
                <img src="https://demo.themeregion.com/geek/images/exprience/2.png" alt="Image" class="img-fluid"/>
              </div>
              <div class="exprience-info">
                <h3>Former Graphic Designer
                </h3>
                <h5>March, 2011 - June, 2012 (1 year, 3 Month)
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <hr/>
            <div class="exprience">
              <div class="exprience-image">
                <img src="https://demo.themeregion.com/geek/images/exprience/3.png" alt="Image" class="img-fluid"/>
              </div>
              <div class="exprience-info">
                <h3>Head of Design
                </h3>
                <h5>March, 2005 - March, 2011 (6 years)
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <hr/>
            <div class="exprience">
              <div class="exprience-image">
                <img src="https://demo.themeregion.com/geek/images/exprience/4.png" alt="Image" class="img-fluid"/>
              </div>
              <div class="exprience-info">
                <h3>Graphic Designer
                </h3>
                <h5>January, 2004 - March, 2005 (1 Year, 2 Months)
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <hr/>
            <div class="exprience">
              <div class="exprience-image">
                <img src="https://demo.themeregion.com/geek/images/exprience/5.png" alt="Image" class="img-fluid"/>
              </div>
              <div class="exprience-info">
                <h3>Graphic Designer (intern)
                </h3>
                <h5>January, 2002 - August, 2004 (2 years, 7 months)
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="education-2" class="education-section bg-color section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>Education
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="section-content">
              <div class="text-info">
                <h4>Just My Educational Background
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div class="education-info">
                <img src="https://demo.themeregion.com/geek/images/education/1.png" alt="Image" class="img-fluid"/>
                <h3>Montana State University
                </h3>
                <h5>Bachalor of Arts
                </h5>
                <h6>1999 - 2003
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <hr/>
              <div class="education-info">
                <img src="https://demo.themeregion.com/geek/images/education/2.png" alt="Image" class="img-fluid"/>
                <h3>Montana State University
                </h3>
                <h5>University of Bristol
                </h5>
                <h6>1999 - 2003
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <hr/>
              <div class="education-info">
                <img src="https://demo.themeregion.com/geek/images/education/3.png" alt="Image" class="img-fluid"/>
                <h3>Cincinnati Christian University
                </h3>
                <h5>Bachalor of Arts
                </h5>
                <h6>1999 - 2003
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="portfolio-2" class="portfolio-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>Portfolio
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text-info">
              <h4>My Recent Work
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div class="portfolio-content">
              <div class="row">
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/1.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/1.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/2.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/2.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/3.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/3.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/4.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/4.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/5.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/5.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/6.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/6.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/7.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/7.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="portfolio-item">
                    <img src="https://demo.themeregion.com/geek/images/portfolio/8.jpg" alt="Image" class="img-fluid"/>
                    <div class="portfolio-overlay">
                      <div class="portfolio-info">
                        <a href="https://demo.themeregion.com/geek/images/portfolio/8.jpg"><i aria-hidden="true" class="fa fa-camera-retro">
                          </i></a>
                        <h3>Book Cover
                        </h3>
                        <p>Print Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contact-2" class="contact-section bg-color section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>Contact Me
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="section-content">
              <div class="text-info">
                <h4>Lets Keep In Touch
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div class="address">
                <ul>
                  <li>
                    <div class="icons">
                      <i aria-hidden="true" class="fa fa-map-signs">
                      </i>
                    </div>
                    <h3>Address
                    </h3>
                    <p>123 West 12th Street, Suite 456 New York, NY 123456
                    </p>
                  </li>
                  <li>
                    <div class="icons icons1">
                      <i aria-hidden="true" class="fa fa-phone">
                      </i>
                    </div>
                    <h3>Mobile number
                    </h3>
                    <p>+012 345 678 910
                    </p>
                  </li>
                  <li>
                    <div class="icons icons2">
                      <i aria-hidden="true" class="fa fa-envelope-o">
                      </i>
                    </div>
                    <h3>Email address
                    </h3>
                    <a href="#"><span data-cfemail="452c31362820053630373f2c292220202e6b262a28" class="__cf_email__">[email protected]</span></a>
                  </li>
                  <li>
                    <div class="icons icons3">
                      <i aria-hidden="true" class="fa fa-external-link">
                      </i>
                    </div>
                    <h3>Social profiles
                    </h3>
                    <ul class="social list-inline">
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-facebook">
                          </i></a>
                      </li>
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-twitter">
                          </i></a>
                      </li>
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-google-plus">
                          </i></a>
                      </li>
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-dribbble">
                          </i></a>
                      </li>
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-behance">
                          </i></a>
                      </li>
                      <li>
                        <a href="#"><i aria-hidden="true" class="fa fa-github-alt">
                          </i></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contact">
                <div class="contact-info">
                  <div class="title">
                    <div class="icons">
                      <i aria-hidden="true" class="fa fa-commenting-o">
                      </i>
                    </div>
                    <h3>Leave me a message
                    </h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <form id="contact-form-2" name="contact-form" method="post" action="#" class="contact-form">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input type="text" required="required" placeholder="Full Name" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input type="email" required="required" placeholder="Your email id" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <input type="text" required="required" placeholder="Subject" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <textarea name="message" required="required" rows="7" placeholder="Your message" class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group pull-right">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="blog-2" class="blog-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>Blog
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="text-info">
              <h4>News &amp; Update
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/1.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time">
                      <a href="#">09 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="blog.html">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/2.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time time1">
                      <a href="#">19 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="blog.html">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/3.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time time2">
                      <a href="#">11 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="blog.html">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/4.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time time3">
                      <a href="#">09 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="#">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/5.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time time4">
                      <a href="#">08 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="#">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="entry-post">
                  <div class="entry-thumbnail">
                    <div class="thumbnail-oberlay">
                    </div>
                    <img src="https://demo.themeregion.com/geek/images/blog/6.jpg" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="post-content">
                    <div class="time time5">
                      <a href="#">02 <span>feb</span></a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="#">Dashboard Design: 50+ Brilliant Examples and Resources</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="profile-2" class="profile-section bg-color section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-title">
              <h1>My Resume
              </h1>
            </div>
          </div>
          <div class="col-md-8">
            <div class="section-content">
              <div class="profile-logo">
                <img src="https://demo.themeregion.com/geek/images/profile.jpg" alt="Image" class="img-fluid"/>
              </div>
              <div class="profile-info">
                <h1>Surzil Geek
                </h1>
                <h4>Web Developer
                </h4>
                <address>
                  <p>Address: 123 West 12th Street, Suite 456 New York, NY 123456 
                    <br/> Phone: +012 345 678 910 
                    <br/> 
                    <a href="#">Email: <span data-cfemail="274e53544a42675452555d4e4b424042424c0944484a" class="__cf_email__">[email protected]</span></a>
                  </p>
                </address>
              </div>
              <div class="career-objective">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-black-tie">
                    </i>
                  </div>
                  <h3>Career Objective
                  </h3>
                </div>
                <div class="sub-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <hr/>
              <div class="work-history">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-briefcase">
                    </i>
                  </div>
                  <h3>Work History
                  </h3>
                </div>
                <div class="sub-content">
                  <div class="history">
                    <h5>Senior Graphic Designer @ Buildomo
                    </h5>
                    <h6>2012 - Present
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <hr/>
                  <div class="history">
                    <h5>Former Graphic Designer @ Ideame
                    </h5>
                    <h6>2011 - 2012
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <hr/>
                  <div class="history">
                    <h5>Head of Design @ Titan Compnay
                    </h5>
                    <h6>2005 - 2011
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <hr/>
                  <div class="history">
                    <h5>Graphic Designer @ Precision
                    </h5>
                    <h6>2004 - 2005
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <hr/>
                  <div class="history">
                    <h5>Graphic Designer (Intern) @ Costa Rica Fruit Compnay
                    </h5>
                    <h6>2002 - 2004
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="educational-background">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-graduation-cap">
                    </i>
                  </div>
                  <h3>Educational Background
                  </h3>
                </div>
                <div class="sub-content">
                  <div class="education">
                    <h5>Masters of Arts @ Montana Satet University
                    </h5>
                    <p>1999 - 2001
                    </p>
                  </div>
                  <hr/>
                  <div class="education">
                    <h5>Bachalor of Arts @ Universty of Bristol
                    </h5>
                    <p>1995 - 1999
                    </p>
                  </div>
                  <hr/>
                  <div class="education">
                    <h5>Diploma in Graphics Design @ Cincinnati Christian University
                    </h5>
                    <p>1993 - 1995
                    </p>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="language-proficiency">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-language">
                    </i>
                  </div>
                  <h3>Language Proficiency
                  </h3>
                </div>
                <div class="sub-content">
                  <ul class="list-inline">
                    <li>
                      <h5>English
                      </h5>
                      <ul>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>German
                      </h5>
                      <ul>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>Sh5anish
                      </h5>
                      <ul>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>Latin
                      </h5>
                      <ul>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                        <li>
                          <i aria-hidden="true" class="fa fa-star-o">
                          </i>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <hr/>
              <div class="expertise">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-thumbs-o-up">
                    </i>
                  </div>
                  <h3>Expertise
                  </h3>
                </div>
                <div class="sub-content">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="rating-bar">
                        <label>Photoshop</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                        <label>WordPress</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="skill rating-bar">
                        <label>Illustrator</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                        <label>Joomla</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="skill rating-bar">
                        <label>Html 5 &amp; CSS 3</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                        <label>PHP</label>
                        <div class="skill-progress">
                          <div class="progress">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="personal-info">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-user-secret">
                    </i>
                  </div>
                  <h3>Personal Info
                  </h3>
                </div>
                <div class="sub-content">
                  <ul class="address">
                    <li>
                      <h5>Full Name 
                      </h5> 
                      <span>:</span>Surzil Geek
                    </li>
                    <li>
                      <h5>Father&#039;s Name 
                      </h5> 
                      <span>:</span>Robert Geek
                    </li>
                    <li>
                      <h5>Mother&#039;s Name 
                      </h5> 
                      <span>:</span>Ismatic Roderos Geek
                    </li>
                    <li>
                      <h5>Date of Birth 
                      </h5> 
                      <span>:</span>26/01/1982
                    </li>
                    <li>
                      <h5>Birth Place 
                      </h5> 
                      <span>:</span>United State of America
                    </li>
                    <li>
                      <h5>Nationality 
                      </h5> 
                      <span>:</span>Canadian
                    </li>
                    <li>
                      <h5>Sex 
                      </h5> 
                      <span>:</span>Male
                    </li>
                    <li>
                      <h5>Address 
                      </h5> 
                      <span>:</span>121 King Street, Melbourne Victoria
                    </li>
                  </ul>
                </div>
              </div>
              <hr/>
              <div class="portfolio">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-picture-o">
                    </i>
                  </div>
                  <h3>Portfolio
                  </h3>
                </div>
                <div class="sub-content">
                  <ul>
                    <li>
                      <h5>Dribbble 
                      </h5> 
                      <span>:</span>
                      <a href="#">dribbble.com/geek</a>
                    </li>
                    <li>
                      <h5>Website 
                      </h5> 
                      <span>:</span>
                      <a href="#">www.surzilgeek.com/portfolio</a>
                    </li>
                    <li>
                      <h5>Flicker 
                      </h5> 
                      <span>:</span>
                      <a href="#">www.flicker.com/geek-photography</a>
                    </li>
                    <li>
                      <h5>Behance 
                      </h5> 
                      <span>:</span>
                      <a href="#">www.behance.com/geekin</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr/>
              <div class="declaration">
                <div class="title">
                  <div class="icons">
                    <i aria-hidden="true" class="fa fa-hand-peace-o">
                    </i>
                  </div>
                  <h3>Declaration
                  </h3>
                </div>
                <div class="sub-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </p>
                  <div class="signature">
                    <h1>Surzil Geek
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="button">
              <a href="#" class="btn btn-primary">Download My Resume as a .pdf file</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-2">
      <div class="container text-center">
        <div class="footer">
          <p> © 2016 
            <a href="#">Surzil Geek.</a> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</body>`)[0];

  setEditor(editor);
  }, []);

  return (
  <div className="App">
    <div id="editor">
      <h1></h1>
    </div>
  </div>
  );
}




export default App;
