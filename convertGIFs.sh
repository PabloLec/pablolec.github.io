ffmpeg -i src/img/recoverpy.gif -c vp9 -b:v 0 -crf 41 src/video/recoverpy.webm
ffmpeg -f gif -i src/img/recoverpy.gif -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' src/video/recoverpy.mp4


ffmpeg -i src/img/neoss.gif -c vp9 -b:v 0 -crf 41 src/video/neoss.webm
ffmpeg -f gif -i src/img/neoss.gif -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' src/video/neoss.mp4
