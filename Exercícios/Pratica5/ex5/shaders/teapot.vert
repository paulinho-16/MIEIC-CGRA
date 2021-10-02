attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec4 VertexCoords;

void main() {
	vec4 vertex = vec4(aVertexPosition, 1.0);

	gl_Position = uPMatrix * uMVMatrix * vertex;

	VertexCoords = uPMatrix * uMVMatrix * vertex;
}

