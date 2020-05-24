#ifdef GL_ES
precision highp float;
#endif

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

uniform float supplies;

void main() {
    /*vec4 color = vec4(0.0,0.0,0.0,0.0);

    float a = supplies;*/

    vec4 color;

    if ((0.2*supplies)<vVertexPosition.x+0.5)
    {
        color=vec4(0.5, 0.5, 0.5, 1.0);   
    }
    else
    {
        color=vec4(0.5 - vVertexPosition.s, 0.5 + vVertexPosition.s, 0.0, 1.0); 
    }

    gl_FragColor = color;
}
