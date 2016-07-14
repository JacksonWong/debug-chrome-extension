# debug-chrome-extension
a simple chrome extension that provided debugging function for web develepment.

Usage:
1.Download a zip;
2.Unzip the master file and load it from chrome://extensions/
3.click on the icon to the top-right of your chrome browser to activate the plugin;

now a debug() function has injected to your web page. you can invoking it in your code.

accepted parameters:
debug(param1, [param2], [...'group title']);

Outputs:
group title
  param_data1
  param_data2
  ...
  trace stack
    ...
    ...
    
