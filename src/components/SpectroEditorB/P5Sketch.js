import React, { Component } from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";

export default class P5Sketch extends Component {

    componentDidMount() {
        this.canvas = new p5((p) => {

            let width = document.querySelector('#canvas').clientWidth;
            let height = document.querySelector('#canvas').clientHeight;
            let link = `${this.props.link}`;

            p.preload = function () {

            }

            p.setup = function () {
                p.createCanvas(width, height, p.WEBGL);
                p.noStroke();

            };

            p.draw = function () {
                p.background(250);
            };

            p.windowResized = function () {
                if (document.querySelector('#canvas')) {
                    width = document.querySelector('#canvas').clientWidth;
                    height = document.querySelector('#canvas').clientHeight;
                    p.resizeCanvas(width, height);
                }
            };

        }, this.wrapper);
        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
        }
    }

    shouldComponentUpdate(newprops) {

        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
        }

        return true;
    }

    componentWillUnmount() {

        this.canvas.stop();

        this.canvas.remove();
        this.wrapper.remove();
    }

    render() {
        return <div id="canvas" ref={wrapper => this.wrapper = wrapper}></div>;
    }
}