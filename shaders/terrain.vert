attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D terrainMap;


void main() {

  vTextureCoord = aTextureCoord;   
  
  vec4 filter = texture2D(terrainMap, vTextureCoord);

  vec3 offset = aVertexNormal * filter.b * 8.0;

    
      
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

}