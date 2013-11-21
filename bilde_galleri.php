           <style>
                        #bilde_boks{
                                        float_ left;
                                        width: 40em;
                                        height: 25em;
                                        margin-left: auto;
                                        margin-right: auto;
                                       
                                        position: inherit;
                                        border: solid black 1px;                        
                                        z-index: -1;
                                        
                                
                        }
                        #knappar{
                                        position: relative;
                                        z-index: 2;
                                        width: 40em;
                                        height: 21em;
                                        margin-bottom: auto;                        
                        }
                        .knappe_tekst{
                                        padding-top: 2em;
                        }
                        div .bilde_button{
                                color: none;
                                width: 1em;
                                height: 100%;
                                cursor: pointer;
                                padding: 1em;
                                position: inherit;
                                font-size: 2em;
                                -webkit-touch-callout: none;
                                -webkit-user-select: none;
                                -khtml-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
                                }
                        #left{
                                float: left;
                                
                        }
                        #right{
                                        
                                float: right;
                        }
                        #left:hover{
                                        
                                        color: white;
                                        background: rgb(0, 0, 0 );
                                        background: rgba(0, 0, 0, 0.5); 
                        }
                        #right:hover{
                                        color: white;
                                        background: rgb(0, 0, 0 );
                                        background: rgba(0, 0, 0, 0.5); 
                        }                
                        #mittBilde{
                                        height: 25em;
                                        width: 40em;
                                        position: absolute;
                                        z-index: 0;
                        }        
                                                
                </style> 
        
                <div id="bilde_boks">
                        
                        <!-- henter inn javascript for bildegalleri -->
                        <script src="bildescript.js"></script>
                        <!-- setter default bildet, samme bilde som bilde_galleri[0] i button_sponge.js -->
                        <img id="mittBilde" src="bilder/desk.jpg" alt="bildegalleri">
                        <!-- knapper for å bytte mellom bildene i bilde galleriet -->
                        <div id="knappar">                        
                                <div class="bilde_button" id="left" ><h2 class="knappe_tekst"> &lt; </h2></div>
                                <div class="bilde_button" id="right"><h2 class="knappe_tekst"> > </h2></div>
                        </div>
                </div>
