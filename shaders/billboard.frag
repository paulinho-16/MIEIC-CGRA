#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D billboardTex;

void main() {
    vec4 color = texture2D(billboardTex, vTextureCoord);

    float factor = vTextureCoord.s/50.0;

    color=vec4(1.0 - factor, 0.0 + factor, 0.0, 1.0);

    gl_FragColor = color;
}


