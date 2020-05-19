#ifdef GL_ES
precision highp float;
#endif

varying vec4 VertexCoords;

void main() {
    vec4 color=vec4(1.0 - VertexCoords.s, VertexCoords.s, 0.0, 1.0);

    gl_FragColor = color;
}







