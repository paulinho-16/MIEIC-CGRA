#ifdef GL_ES
precision highp float;
#endif

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

void main() {
    vec4 color=vec4(0.5 - vVertexPosition.s, 0.5 + vVertexPosition.s, 0.0, 1.0);

    gl_FragColor = color;
}







