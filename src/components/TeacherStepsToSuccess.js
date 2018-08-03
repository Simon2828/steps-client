import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'


class TeacherStepsToSuccess extends React.Component {

        constructor(props) {
                super(props);
        }

        click(evt) {
                // move into TeacherAbout.js..? have repeated this code there in edit method 
                // but for lo and used setState which wouldn't want for steps to success..
                evt.target.onfocus = function(e) {
                        var el = this;
                        requestAnimationFrame(function() {
                            selectElementContents(el);
                        });
                    };
                function selectElementContents(el) {
                        var range = document.createRange();
                        range.selectNodeContents(el);
                        var sel = window.getSelection();
                        range.setStart(sel.anchorNode,0);
                        sel.removeAllRanges();
                        sel.addRange(range);
                }


        }

        render() {
                return (
                        <div>
                                <ContentEditable className={`steps${this.props.index} loResults steps`} onFocus={this.click} onKeyPress={this.props.onKeyPress.bind(this)} html={this.props.step} disabled={false}></ContentEditable>
                        </div>


                )

        }

}



export default TeacherStepsToSuccess;

