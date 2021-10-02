#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterTex;
uniform sampler2D waterMap;

void main() {
  vec4 color = texture2D(waterTex, vTextureCoord);
  vec4 filter = texture2D(waterMap, vTextureCoord);
	
	gl_FragColor = color;
}