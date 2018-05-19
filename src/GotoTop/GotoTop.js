import React, {Component} from 'react';
import gototopStyle from './GotoTop.module.less';

if(!window.requestAnimationFrame){
    let requestAnimationFrame = function (fn) {
        setTimeout(fn, 17)
    }
}

export class GotoTop extends Component{
    goTop(){
        let doc = document.body.scrollTop? document.body: document.documentElement;
        let scrollTop = doc.scrollTop;

        let top = () => {
            scrollTop = scrollTop + (0 - scrollTop) / 2;

            if(scrollTop <= 1){
                doc.scrollTop = 0;
                return;
            }

            doc.scrollTop = scrollTop;
            window.requestAnimationFrame(top);
        };
        top();
    }

    render(){
        return (
            <div className={gototopStyle.gotoTop} onClick={this.goTop}>
                Top
            </div>
        )
    }
}