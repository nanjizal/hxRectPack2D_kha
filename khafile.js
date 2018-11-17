let project = new Project('RectPack2D Test');
project.addAssets('Assets/**');
project.addShaders('Shaders/**');
project.addSources('src');
project.addLibrary('hxRectPack2D');
project.addParameter('-main RectPack2Demo');
project.windowOptions.width = 1024;
project.windowOptions.height = 768;
resolve( project );