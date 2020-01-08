import React from 'react';
import NavBar from "../../Components/navbar";
import AppConfig from "../../Configs/package"


export default function Home() {
    return (
        <div className="">            
            <div className="container-fluid mt-5">
                <div className="col-12 h3">
                    Добро пожаловать на платформе {AppConfig.appname} 
                </div>
                <div className="col-12">{AppConfig.description} 
                </div>
            </div>
        </div>      
    );
  }
  