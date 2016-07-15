# debug-chrome-extension
A simple chrome extension that provides debugging function for web development.

#####Usage:  
1. Clone or Download the package;  
2. Unzip the master folder and load it from chrome://extensions/  
3. click on the icon to the top-right of your chrome browser to activate the plugin;

now a debug() function has injected to your web page. you can invoking it in your code like this:  
(any type of parameter is accepted. such as Object、String、Number、Boolean, etc.)  
> `debug(foo, [bar], [...'group title']);`

#####console outputs:  
>group title  
>>foo  
>>bar  
>>...  
>trace stack  
>>>...  
>>>...
    
#####How to clean up the debugging code?
you can clean up the debugging code with plugin 'gulp-replace' automatically.  
e.g.  
>`gulp.src('./src/foo.js')`  
>>`.pipe(replace(/debug\(.*\);?/g, ''))`  
>>`.pipe(gulp.dest('./dist/js/'));`
