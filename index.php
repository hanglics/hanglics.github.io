<?php include "htmlheadpreamble-index.php" ?>
<title>First M. LastName</title>
<?php include "htmlheadpostamble.php" ?>


<!-- -*- html -*- -->
<div class="container">
  <div class="wrapper">

    <div class="tightbox header">
     <img class="fit rounded-corners" src="images/CTriver.jpg" alt="Connecticut River">
     <a class="toprightname" href="http://www.math.dartmouth.edu/gallery/faculty-photos/">First M. LastName</a>
     <div class="toprightcredentials">
     	  Ph.D., Dartmouth College, YYYY<br />
  	  My Current Title<br />
     </div>
   </div>

<style>
/* css local to this page */

/* For example, how to change the colors which display your name and credentials against your chosen background */
/* The first changes the color for your name; the second for your credentials */
/* rgba(r,g,b,d)  0\le r,g,b \le 255,  0\le d \le 1  (red, green, blue values and an intensity*/

/*
.toprightname {
color: rgba(0, 255, 0, .5);
}
.toprightcredentials {
color: rgba(255, 255, 0, 0.8);
}
*/
</style>


<div class="box contact">
  <table>
    <tr>
      <th align="left">Phone:</th>
      <td>(603) 646-nnnn</td>
    </tr>

    <tr>
      <th align="left">Dept. Fax:</th>
      <td>(603) 646-1312 </td>
    </tr>

    <tr>
      <th align="left">Office:</th>
      <td>nnn Kemeny Hall
        <br />
        <a href="images/kemeny-hall.jpg" target="_blank">In red --- check the map</a>.
      </td>
    </tr>

    <tr>
      <th align="left">Office Hours:&nbsp;</th>
      <td>Click
        <a href="officehours.php">here</a> for current hours.
      </td>
    </tr>

    <tr>
      <th align="left">Email:</th>
      <td>
        <a href="mailto:
        first.m.lastname at dartmouth.edu">first.m.lastname at dartmouth.edu</a>
      </td>
    </tr>

    <tr>
      <th align="left">US Mail:</th>
      <td><a href="/">Department of Mathematics</a>
        <br />27 N. Main Street
        <br />Dartmouth College
        <br />Hanover, NH 03755-3551
        <br />(603) 646-2415</td>
      </tr>
    </table>
  </div>

  <div class="tightbox photo">
  <img class="fit rounded-corners" src="images/JacobKuperman14.jpg" alt="random photo">
   </div>



  <div class="box links">
   <?php include "navigation-links.html" ?>
  </div>



<?php include "footer.php" ?>
