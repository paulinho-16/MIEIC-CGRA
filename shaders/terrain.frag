#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D terrainTex;
uniform sampler2D terrainMap;

void main() {
  vec4 color = texture2D(terrainTex, vTextureCoord);
	
	gl_FragColor = color;
}