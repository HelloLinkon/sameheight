# sameheight
simple jquery plugin: It makes every child section height size equal based on both highest and lowest length of child 

Usages of V0.1:
=====================================
1. include sameheight.js in project file
   example : <script type="text/javascript" src="sameHeight.js"></script>
2. find child under parent section and call the sameheight function.
   $(".parent").find(".child").sameHeight();
3. By default it makes the height equal based on highest hight of the child. If you want to change the option then pass way 
   option.
   $(".parent").find(".child").sameHeight({way: "min"});
