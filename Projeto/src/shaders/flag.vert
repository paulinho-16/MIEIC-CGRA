attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform float timeFactor;
uniform float pos;

void main() {
	
	float phase = pos * 20.0;

	vTextureCoord = aTextureCoord;

	vec3 offset = vec3(0.0, 0.0, 0.0);

	offset.z = sin(aVertexPosition.x * 15.0 + 0.5 * timeFactor + phase) * 0.1;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}
