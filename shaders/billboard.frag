#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);

    factor = vTextureCoord.s*1/50;

    color=vec4(1.0-factor, 0.0 + factor, 0.0, 1.0);

    gl_FragColor = texture2D(uSampler, vTextureCoord);
}


