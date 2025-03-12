import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from 'jquery'
import '../styles/side-menu.css'

function Header(){

    const currentUrl = useLocation()

    useEffect(()=>{
        $('.step-number h1').filter(function() {
            return $(this).css('background-color') === 'rgb(179, 221, 255)'; 
        }).css({
            backgroundColor: '',
            color: 'white',
            border: '1px solid white'
        });
        
    switch(currentUrl.pathname){
        case '/':
            $('.step-number').eq(0).find('h1').css({
                backgroundColor: 'rgb(179, 221, 255)',
                color: 'black',
                border: 'none'
            })
            break  
        
        case '/form2':
            $('.step-number').eq(1).find('h1').css({
                backgroundColor: 'rgb(179, 221, 255)',
                color: 'black',
                border: 'none'
            })
            break 
        
        case '/form3':
            $('.step-number').eq(2).find('h1').css({
                backgroundColor: 'rgb(179, 221, 255)',
                color: 'black',
                border: 'none'
            })
            break 

        case '/form4':
            $('.step-number').eq(3).find('h1').css({
                backgroundColor: 'rgb(179, 221, 255)',
                color: 'black',
                border: 'none'
            })
            break
        case '/form5':
            $('.step-number').eq(3).find('h1').css({
                backgroundColor: 'rgb(179, 221, 255)',
                color: 'black',
                border: 'none'
            })
            break 
        
            default :
            console.log('nothing!')
            break
    }

    }, [currentUrl])

    return(
        <header id="side-menu">

        <div id="side-container">

            <div className="step-number">
                <h1 className="large-number">1</h1>

                <div className="side-titles">
                    <h6>STEP 1</h6>
                    <h5>YOUR INFO</h5>
                </div>
            </div>

            <div className="step-number">
                <h1 className="large-number">2</h1>

                <div className="side-titles">
                    <h6>STEP 2</h6>
                    <h5>SELECT PLAN</h5>
                </div>
            </div>

            <div className="step-number">
                <h1 className="large-number">3</h1>

                <div className="side-titles">
                    <h6>STEP 3</h6>
                    <h5>ADD-ONS</h5>
                </div>
            </div>

            <div className="step-number">
                <h1 className="large-number">4</h1>

                <div className="side-titles">
                    <h6>STEP 4</h6>
                    <h5>SUMMARY</h5>
                </div>
            </div>


        </div>
{/* 
        <ul>
            <li>
            <span>1</span>
                <div>
                    <h6>STEP 1</h6>
                    <h5>YOUR INFO</h5>
                </div>
            </li>

            <li>
            <span>2</span>
                <div>
                    <h6>STEP 2</h6>
                    <h5>SELECT PLAN</h5>
                </div>
            </li>

            <li>
            <span>3</span>
                <div>
                        <h6>STEP 3</h6>
                        <h5>ADD-ONS</h5>
                </div>
            </li>

            <li>
            <span>4</span>
                <div>
                    <h6>STEP 4</h6>
                    <h5>SUMMARY</h5>
                </div>
            </li>

        </ul>  */}

        </header>
    )
}

export default Header;