import React, { Component } from 'react';
import './Slider.css';

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            <div
                className="slider__slide"
                data-active={this.props.active}
                style={slideStyle}
            >
                <div className="slider__slide__desc">{this.props.desc}</div>
                <a href="#" className="slider__slider__btn">
                    <div className="slider__slide__text">
                    {this.props.text}
                    </div>
                </a>
            </div>
        );
    }
}

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeSlide: 0 };

    }

    prevSlide() {
        var slides = this.props.slides;

        let slide = this.state.activeSlide - 1 < 0
            ? slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }
    nextSlide() {
        var slides = this.props.slides;
        let slide = this.state.activeSlide + 1 < slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }
    render() {
        var slides = this.props.slides;
        return (
            <div>
                {slides.map((slide, index, array) => {
                    return (
                        <Slide key={Math.random()}
                            background={slide.background}
                            desc={slide.desc}
                            text={slide.text}
                            active={index === this.state.activeSlide}
                        />
                    );
                })}
                <div className="leftArrow" onClick={this.nextSlide.bind(this)}><i className="fa fa-4x fa-chevron-right"></i></div>
                <div className="rightArrow" onClick={this.prevSlide.bind(this)}> <i className="fa fa-4x fa-chevron-left"></i></div>

                <div className="slider_section"></div>
            </div>
        );
    }
}
