<?php include "htmlheadpreamble-secondary.php" ?>
<title>Secondary Page Title</title>
<?php include "htmlheadpostamble.html" ?>



<!-- -*- html -*- -->
<div class="container">
  <div class="wrapper">
    <div class="tightbox header">
     <a href="index.php"><img class="fit rounded-corners" src="images/foggy.jpg" alt="Foggy Bike Ride"></a>
   </div>

  <div class="box links">
   <?php include "navigation-links.html" ?>
  </div>

<style>
/* local css for this page */
.box {
   font-size: 110%;  /* This is the default size set in the CSS files */
}
</style>


<div class="box main">


<h4 class="center">ReadMe page for these web pages </h4>

<ol> <li> These web pages are responsive, meaning that they should
view well on phones, tablets, or computer screens.  If you are on your
laptop, just drag the window so that the width shrinks to a small size
and you will see what I mean.</li>

<li> The content of this directory should replace the current contents
of your <tt>public_html</tt> directory.</li>

<li>Your homepage is the index.php page and in it you can tweak the
obvious things like the title of the page, your name, where you got
your degree, etc.</li>

<li>A few less obvious things can also (easily) be changed such as the
colors with which your name and credentials appear against your chosen
background.</li>

<li>The file <tt>navigation-links.html</tt> sets the links at the
bottom of the homepage, and at the top of the secondary pages</li>

<li>The secondary pages all have the same format, and again you can
tweak things in the local <style></style> stanza near the top; The
example is set to allow you to scale all the font sizes uniformly; the
default is 110%.</li>


<hr class="dg100">
<br/>

<p> Font sizes are set in the css files; all can be tweaked.  The
default has been set at 110%.  You can change them locally as already
mentioned, or globally by changing the values in the css files.

<hr class="dg100">


You can also change font sizes for just a few words:


<ul>
<li><span class="large">Large Fonts (font-size: 130%;)</span></li>
<li>Regular Fonts (font-size: 110%;)</li>
<li><span class="small">Small Fonts  (font-size: 80%;)</span></li>
</ul>
<hr class="dg100">
<br/>

<h1>h1: Main Content</h1>
<h2>h2: Main Content</h2>
<h3>h3: Main Content</h3>
<h4>h4: Main Content</h4>
<h5>h5: Main Content</h5>
<h6>h6: Main Content</h6>
</div>




<?php include "footer.php" ?>