
$(window).on('load', function () {

    /* Coding By Sujit, Assign variable/constant data */
    const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        text_options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

    const optionMenu1 = document.querySelector(".select-menu1"),
        selectBtn1 = optionMenu1.querySelector(".select-btn1"),
        text_options1 = optionMenu1.querySelectorAll(".option1"),
        sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

    const optionMenu2 = document.querySelector(".select-menu2"),
        selectBtn2 = optionMenu2.querySelector(".select-btn2"),
        text_options2 = optionMenu2.querySelectorAll(".option2"),
        sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

    const optionMenu3 = document.querySelector(".select-menu3"),
        selectBtn3 = optionMenu3.querySelector(".select-btn3"),
        text_options3 = optionMenu3.querySelectorAll(".option3"),
        sBtn_text3 = optionMenu3.querySelector(".sBtn-text3");

    const optionMenu4 = document.querySelector(".select-menu4"),
        selectBtn4 = optionMenu4.querySelector(".select-btn4"),
        text_options4 = optionMenu4.querySelectorAll(".option4"),
        sBtn_text4 = optionMenu4.querySelector(".sBtn-text4");

    const optionMenu5 = document.querySelector(".select-menu5"),
        selectBtn5 = optionMenu5.querySelector(".select-btn5"),
        text_options5 = optionMenu5.querySelectorAll(".option5"),
        sBtn_text5 = optionMenu5.querySelector(".sBtn-text5");

    const optionMenu6 = document.querySelector(".select-menu6"),
        selectBtn6 = optionMenu6.querySelector(".select-btn6"),
        text_options6 = optionMenu6.querySelectorAll(".option6"),
        sBtn_text6 = optionMenu6.querySelector(".sBtn-text6");

    const optionMenu7 = document.querySelector(".select-menu7"),
        selectBtn7 = optionMenu7.querySelector(".select-btn7"),
        text_options7 = optionMenu7.querySelectorAll(".option7"),
        sBtn_text7 = optionMenu7.querySelector(".sBtn-text7");

    const optionMenu8 = document.querySelector(".select-menu8"),
        selectBtn8 = optionMenu8.querySelector(".select-btn8"),
        text_options8 = optionMenu8.querySelectorAll(".option8"),
        sBtn_text8 = optionMenu8.querySelector(".sBtn-text8");

    const optionMenu9 = document.querySelector(".select-menu9"),
        selectBtn9 = optionMenu9.querySelector(".select-btn9"),
        text_options9 = optionMenu9.querySelectorAll(".option9"),
        sBtn_text9 = optionMenu9.querySelector(".sBtn-text9");

    const optionMenu10 = document.querySelector(".select-menu10"),
        selectBtn10 = optionMenu10.querySelector(".select-btn10"),
        text_options10 = optionMenu10.querySelectorAll(".option10"),
        sBtn_text10 = optionMenu10.querySelector(".sBtn-text10");
    /* End Coding By Sujit, Assign variable/constant data */

    (function (global) {

        "use strict";

        var multiplier = $("input#canvas_multiplier").val();
        var multiplier_ratio = $("input#canvas_ratio").val();
        var array_font = $("input#array_font").val();
        var array_font = $.parseJSON(array_font);
        //Arial":{"ratio_width":"0.47","ratio_height":"0.75"}
        var used_font = $("input#used_font").val();
        var used_font = $.parseJSON(used_font);
        var used_browser = "";
        var style_nemu_line_color = 'border-color';
        var ini_drag_div_menu = 240;
        var ini_drag_div_menu_price = 80;
        var ini_drag_div_menu_price2 = 80;
        var ini_drag_div_menu_price3 = 80;
        var ini_drag_div_menu_price4 = 80;
        function browserDetection() {
            //Check if browser is IE or not
            if (navigator.userAgent.search("Edge") >= 0) {
                used_browser = 'Edge';
            }
            //Check if browser is Chrome or not
            else if (navigator.userAgent.search("Chrome") >= 0) {
                used_browser = 'Chrome';
            }
            //Check if browser is Firefox or not
            else if (navigator.userAgent.search("Firefox") >= 0) {
                used_browser = 'FireFox';
                style_nemu_line_color = 'borderTopColor';
            }
            //Check if browser is Safari or not
            else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                used_browser = 'Safari';
            }
            //Check if browser is Opera or not
            else if (navigator.userAgent.search("Opera") >= 0) {
                used_browser = 'Opera';
            }
        }
        browserDetection();

        function pad(str, length) {
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };

        function rgb2hex(rgb) {
            if (typeof rgb === "undefined" || rgb == "") {
                return "#555555";
            }
            else {
                rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                return "#" +
                    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
            }
        }

        function hex2rgb(hex) {
            if (typeof hex === "undefined") {
                return "#FFFFFF";
            }
            else {
                var i = 0;
                // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                if (parseInt(result[1], 16) <= 180) {
                    i++;
                }
                if (parseInt(result[2], 16) <= 180) {
                    i++;
                }
                if (parseInt(result[3], 16) <= 180) {
                    i++;
                }
                if (i < 1) {
                    return "#676767";
                } else {
                    return "#FFFFFF";
                }
            }
        }

        window.onbeforeunload = function (e) {
            if ($("input#canvas_modified").val() == "1") {
                return 'Any unsaved change will be lost! Are your sure to continue?';
            }
        };


        function isVisible(ele) {
            var style = window.getComputedStyle(ele);
            return style.width !== 0 &&
                style.height !== 0 &&
                style.opacity !== 0 &&
                style.display !== 'none' &&
                style.visibility !== 'hidden';
        }
        $('html').keydown(function (e) {
            if (e.keyCode === 46 || e.keyCode === 51 || e.keyCode === 117 || e.keyCode === 8) {
                var activeObject = canvas.getActiveObject();//,
                var activeObjects = canvas.getActiveObjects();//,
                var activeGroup = canvas.getActiveGroup();
                /*if ((activeObject || activeGroup) && menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {*/
                if ((activeObject || activeGroup) && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
               // if ((activeObject) && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    if (confirm('Sure to delete selected object?')) {
                        if (activeObject) {
                            /*if (activeObject.length > 1) {*/
                            canvas.getActiveObjects().forEach((object) => {
                                canvas.remove(object);
                            });
                            //}
                            //else {
                            // canvas.remove(activeObject);
                            //            }

                            //  canvas.remove(activeObject);
                            } else if (activeGroup) {
                              var objectsInGroup = activeGroup.getObjects();
                              canvas.discardActiveGroup();
                              objectsInGroup.forEach(function(object) {
                                canvas.remove(object);
                              });
                        }
                        canvasModified();
                        $(".pop_container").hide();
                    }
                }
                //else if ((activeObjects) && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                //    if (confirm('Sure to delete selected object?')) {
                //        if (activeObjects) {
                //            /*if (activeObject.length > 1) {*/
                //            canvas.getActiveObjects().forEach((object) => {
                //                canvas.remove(object);
                //            });
                //            //}
                //            //else {
                //            // canvas.remove(activeObject);
                //            //            }

                //            //  canvas.remove(activeObject);
                //            //} else if (activeGroup) {
                //            //  var objectsInGroup = activeGroup.getObjects();
                //            //  canvas.discardActiveGroup();
                //            //  objectsInGroup.forEach(function(object) {
                //            //    canvas.remove(object);
                //            //  });
                //        }
                //        canvasModified();
                //        $(".pop_container").hide();
                //    }
                //}
            }
            if (e.keyCode == 116) {
                //alert('Desabled refress functionality!');
                //return false;
            }
            if (e.keyCode == 37) {
                var activeObject = canvas.getActiveObject();
                if (activeObject && (menu_edit_flag == false || activeObject.type == "group")  && document.activeElement.type != "text" && document.activeElement.type != "textarea" && !activeObject.lockMovementX) {
                    activeObject.left = activeObject.left - 1;
                    manualRenderCanvasFlag = true;
                    manualRenderCanvas();
                }
            }
            if (e.keyCode == 38) {
                var activeObject = canvas.getActiveObject();
                if (activeObject && (menu_edit_flag == false || activeObject.type == "group") && document.activeElement.type != "text" && document.activeElement.type != "textarea" && !activeObject.lockMovementY) {
                    event.preventDefault();
                    activeObject.top = activeObject.top - 1;
                    manualRenderCanvasFlag = true;
                    manualRenderCanvas();
                }
            }
            if (e.keyCode == 39) {
                var activeObject = canvas.getActiveObject();
                if (activeObject && (menu_edit_flag == false || activeObject.type == "group") && document.activeElement.type != "text" && document.activeElement.type != "textarea" && !activeObject.lockMovementX) {
                    activeObject.left = activeObject.left + 1;
                    manualRenderCanvasFlag = true;
                    manualRenderCanvas();
                }
            }
            if (e.keyCode == 40) {
                var activeObject = canvas.getActiveObject();
                if (activeObject && (menu_edit_flag == false || activeObject.type == "group") && document.activeElement.type != "text" && document.activeElement.type != "textarea" && !activeObject.lockMovementY) {
                    event.preventDefault();
                    activeObject.top = activeObject.top + 1;
                    manualRenderCanvasFlag = true;
                    manualRenderCanvas();
                }
            }
            //if (e.keyCode == 13 && (canvas.getActiveObject() || canvas.getActiveObjects())) {
            //    var updt_range_tp = $('#update_range_type').val();
            //    UpdateOpacity(updt_range_tp);
            //}
            if ((e.which === 90 && e.ctrlKey) || (e.which === 90 && e.metaKey))  {
                if (menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    canvasUndo();
                }
            }
            if ((e.which === 89 && e.ctrlKey) ||  (e.which === 89 && e.metaKey)) {
                if (menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    canvasRedo();
                }
            }
            if ((e.which === 67 && e.ctrlKey) ||  (e.which === 67 && e.metaKey)) {
                var activeObject = canvas.getActiveObject();//,
                //activeGroup = canvas.getActiveGroup();
                if ((activeObject) && menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    elementCopy();
                }
            }
            if ((e.which === 86 && e.ctrlKey) || (e.which === 86 && e.metaKey)) {
                var activeObject = canvas.getActiveObject();//,
                //activeGroup = canvas.getActiveGroup();
                if (menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    elementPaste();
                }
            }
            //Unchanged Code
            if (e.which === 67 && e.shiftKey) { // copy to browser local store
                var copiedCanvasObjects = [];
                var activeObject = canvas.getActiveObject();//,
                //activeGroup = canvas.getActiveGroup();

                if ((activeObject) && menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    if (activeObject) {
                        canvas.getActiveObjects().forEach((object) => {
                            copiedCanvasObjects.push(object);
                        });
                        //var objectsInGroup = activeGroup.getObjects();
                        //canvas.discardActiveGroup();

                        //objectsInGroup.forEach(function(object) {
                        //  copiedCanvasObjects.push(object);
                        //});
                        // }
                        // else if (activeObject) {
                        //copiedCanvasObjects.push(activeObject);
                    }
                    else {
                        alert('Object not selected!');
                    }

                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("canvasCopiedObject", JSON.stringify(copiedCanvasObjects));
                    }
                }
            }
            if (e.which === 86 && e.shiftKey) { // paste fron browser store
                if (menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
                    if (typeof (Storage) !== "undefined") {
                        var objects = JSON.parse(localStorage.getItem("canvasCopiedObject"));
                        for (var i = 0; i < objects.length; i++) {
                            var klass = fabric.util.getKlass(objects[i].type);
                            //if (klass.async) {
                            //    klass.fromObject(objects[i], function (img) {
                            //        canvas.add(img);
                            //    });
                            //} else {
                            //    canvas.add(klass.fromObject(objects[i]));
                            //}
                            klass.fromObject(objects[i], function (img) {
                                canvas.add(img);
                            });
                        }
                        canvas.renderAll();
                        canvas.calcOffset();
                        canvasModified();
                    }
                }
            }


            // /*USE SHIFT COPY AND PASTE  AS CTRL KEY   SUDIP 10-1-2025*/
            //if (e.which === 67 && e.shiftKey) { 
            //    var activeObject = canvas.getActiveObject();
            //    if ((activeObject) && menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
            //        elementCopy();
            //    }
            //}
            //if (e.which === 86 && e.shiftKey) {
            //    var activeObject = canvas.getActiveObject();
            //    if (menu_edit_flag == false && document.activeElement.type != "text" && document.activeElement.type != "textarea") {
            //        shiftelementPaste();
            //    }
            //}
        });

        //sudip 10-1-2025
        function shiftelementPaste() {
            if (copiedObjects.length > 0) {
                for (var i in copiedObjects) {
                    copiedObjects[i] = fabric.util.object.clone(copiedObjects[i]);
                    canvas.add(copiedObjects[i]);
                    canvas.item(canvas.size() - 1).hasControls = true;
                }
            }
            canvas.renderAll();
            canvas.calcOffset();
        }

        //sudip 10-1-2025

        function canvasModified() {
            $("input#canvas_modified").val("1");
        }

        fabric.NamedText = fabric.util.createClass(fabric.Text, {
            type: 'named-text',

            initialize: function (element, options) {
                this.callSuper('initialize', element, options);
                options && this.set('name', options.name);
            },

            toObject: function () {
                return fabric.util.object.extend(this.callSuper('toObject'), { name: this.name });
            }
        });

        fabric.NamedGroup = fabric.util.createClass(fabric.Group, {
            type: 'named-group',

            initialize: function (element, options) {
                this.callSuper('initialize', element, options);
                options && this.set('name', options.name);
            },
            toObject: function () {
                return fabric.util.object.extend(this.callSuper('toObject'), { name: this.name });
            }
        });


        fabric.NamedGroup.fromObject = function (object, callback) {
            fabric.util.loadGroup(object.src, function (img) {
                callback && callback(new fabric.NamedGroup(img, object));
            });
        };
        fabric.NamedGroup.async = true;

        var getRandomInt = fabric.util.getRandomInt;
        function getRandomColor() {
            return (
                pad(getRandomInt(0, 255).toString(16), 2) +
                pad(getRandomInt(0, 255).toString(16), 2) +
                pad(getRandomInt(0, 255).toString(16), 2)
            );
        }

        function getRandomNum(min, max) {
            return Math.random() * (max - min) + min;
        }

        if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
            fabric.Object.prototype.cornersize = 30;
        }



        //const scene = new THREE.Scene();
        //const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        //const renderer = new THREE.WebGLRenderer();
        //renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(renderer.domElement);

        //// Create an existing canvas element
        //const existingCanvas = document.createElement('canvas');
        //existingCanvas.width = 100;
        //existingCanvas.height = 50;
        //const ctx = existingCanvas.getContext('2d');




        //// Create a texture from the existing canvas
        //const texture = new THREE.CanvasTexture(existingCanvas);

        //// Create a material with the texture
        //const material = new THREE.MeshBasicMaterial({ map: texture });

        //// Create an existing mesh (you should replace this with your existing objects)
        //const existingMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);

        //// Add the existing mesh to the scene
        //scene.add(existingMesh);

        //// Apply the scaleAllObjects function initially
        //scaleAllObjects(scene, 2);

        //// Position the camera
        //camera.position.z = 5;



        //var canvas  = new fabric.Canvas('canvas');
        const canvas = global.canvas = new fabric.Canvas('canvas');

        //Haraprasad add dt:06.03.2024
        // Create a Fabric.js canvas
        //const canvas = global.canvas = new fabric.Canvas('canvas', {
        //    selection: false // Disable default selection
        //});

        // Define custom selection style
        const selectionStyle = {
            borderColor: '#00BFFF',
            cornerColor: 'white',
            transparentCorners: false,
            cornerSize: 12

        };

        
        // Handle object selection
        canvas.on('mouse:down', function (options) {
            if (options.target) {
                // An object was clicked
                const clickedObject = options.target;

                // Toggle selection
                clickedObject.set('customSelected', !clickedObject.customSelected);

                // Update object appearance based on selection state
                if (clickedObject.customSelected) {
                    clickedObject.set(selectionStyle);
                } 
                //else {
                //    clickedObject.set('stroke', null); // Remove stroke if not selected
                //}

                // Render canvas after changes
                canvas.renderAll();
            }
        });
        //Haraprasad end dt:06.03.2024
        //canvas.preserveObjectStacking = true;
        /*var canvas = new fabric.Canvas('canvas', { renderOnAddRemove: false });*/
        var canvas_output_w = $('#canvas_w').val();
        var canvas_output_h = $('#canvas_h').val();
        //var output = new fabric.Canvas('canvas_output'); //sunil dt. 27.08.2024
        var output = new fabric.Canvas('canvas_output', {
            width: canvas_output_w,
            height: canvas_output_h
        });
        var output_temp = new fabric.Canvas('canvas_temp');
        var z_index = 10;
        var preview_flag = false;
        var menu_edit_flag = false;
        var menu_line_colour_flag = true;
        var my_menu_popup_flag = false;
        var menu_dispaly_style = "";
        var menu_layout = "vartical";
        var menu_line_type = "solid";
        var undoArray = new Array();
        var undoIndex = 0;
        var oldCanvas = '';
        var redoArray = new Array();
        var redoIndex = 0;
        var oldCanvasRedo = '';
        var originalCanvas = '';
        var manualRenderCanvasFlag = true;
        var manualRenderCanvasPreviewFlag = true;
        var overlayImage = false;
        var column_menu = 1;
        var copiedObjects = new Array();
        var array_advanced_style = new Array();
        var objPropertise = "";
        var canvas_data = $("textarea#canvas_data").val();

        if (!$('#new_canvas').val()) {
            $('#template_loader').show();
            $('#disable_canvas').show();
        }
        else {
            addBlankObject();
        }

        //Sunil comment on 08.11.2022
        //   document.getElementById("a_pop_settings_login").onclick = closeMenuboard;
        //document.getElementById("button_pop_settings_login").onclick = closeMenuboard;
        //   function closeMenuboard() {
        //     window.location.href = "http://dsmenu.com";
        //   }
        //end


        /* LOAD CANVAS */
        $.each(used_font, function (key, value) {
            console.log('Load Font : ' + value);
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position = 'absolute';
            node.style.left = '-10000px';
            node.style.top = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize = '300px';
            // Reset any font properties
            node.style.fontFamily = 'sans-serif';
            node.style.fontVariant = 'normal';
            node.style.fontStyle = 'normal';
            node.style.fontWeight = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = value;
        });

        //////////////const checker = document.getElementById('font-checker');
        //////////////const initialWidth = checker.offsetWidth;

        //////////////// Apply your custom font (ensure this font is in your font.css)
        //////////////checker.style.fontFamily = 'monstroregular';

        //////////////// After applying, check if the width changes
        //////////////const newWidth = checker.offsetWidth;


        //////////////document.fonts.load('1em monstroregular').then(function (loadedFonts) {
        //////////////    if (loadedFonts.length === 0) {
        //////////////        // Font didn't load properly
        //////////////        console.log("Montserrat font not loaded, reloading the page.");
        //////////////        window.location.reload();
        //////////////    } else {
        //////////////        console.log("Montserrat font loaded successfully.");
        //////////////    }
        //////////////}).catch(function (error) {
        //////////////    // If there's an error loading the font, reload the page
        //////////////    console.log("Error loading the font, reloading the page.", error);
        //////////////    //window.location.reload();
        //////////////});
        ////////////////if (initialWidth === newWidth) {
        ////////////////    // If the width hasn't changed, the font hasn't loaded, so reload
        ////////////////    console.log("Font not loaded, reloading the page.");
        ////////////////    window.location.reload();
        ////////////////} else {
        ////////////////    console.log("Font loaded successfully.");
        ////////////////}
        function checkFrontLoad(FrontName) {
            const checker = document.getElementById('font-checker');
            const initialWidth = checker.offsetWidth;

            // Apply your custom font (ensure this font is in your font.css)
            checker.style.fontFamily = FrontName;

            // After applying, check if the width changes
            const newWidth = checker.offsetWidth;


            document.fonts.load('1em ' + FrontName).then(function (loadedFonts) {
                if (loadedFonts.length === 0) {
                    // Font didn't load properly
                    console.log(FrontName + " font not loaded, reloading the page.");
                    window.location.reload();
                } else {
                    console.log(FrontName + " font loaded successfully.");
                }
            }).catch(function (error) {
                // If there's an error loading the font, reload the page
                console.log("Error loading the font, reloading the page.", error);
                //window.location.reload();
            });
        }

        checkFrontLoad('monstroregular');
        checkFrontLoad('cubanonormal');
        checkFrontLoad('bourtonbase');

        checkFrontLoad('giza_fivefiveregular');

        if ($("textarea#canvas_data").length > 0) {
            setTimeout(function () {
                updateCanvasArea();
                if (used_browser == "Chrome" || used_browser == "FireFox") {
                    document.fonts.ready.then(function () {
                        var canvas_data = $("textarea#canvas_data").val();
                        originalCanvas = canvas_data;
                        canvas.loadFromJSON(canvas_data, canvas.renderAll.bind(canvas));
                        canvas.renderAll();
                        canvas.calcOffset();
                        pushUndo();
                        manualRenderCanvas(true);
                    });
                }
                else {
                    var canvas_data = $("textarea#canvas_data").val();
                    originalCanvas = canvas_data;
                    canvas.loadFromJSON(canvas_data, canvas.renderAll.bind(canvas));
                    canvas.renderAll();
                    canvas.calcOffset();
                    pushUndo();
                    manualRenderCanvas(true);
                }
            scaleCanvasObject(0);
            }, 3000);
            
        }
        else {
            updateCanvasArea();
            //autofunction calling start
            ////setTimeout(function () {
            ////    autocreatemenuboard();
            ////}, 1000);
            
            
        }

        // automenucreate function start
        function autocreatemenuboard() {
            //for backgroud setting
           

            //for text setting
            setTimeout(function () {
                addtext();

                canvas.getObjects().forEach(function (o) {
                    if (o.type === 'text') {
                        canvas.setActiveObject(o);
                    }
                });
                var activeObject = canvas.getActiveObject();
                activeObject.scaleX = 1.25;
                activeObject.scaleY = 1.25;
                activeObject.text = 'Burger Menu';

                canvas.renderAll();
                canvas.calcOffset();

            }, 3000);

            //for image setting
            setTimeout(function () {
                addimage();


            }, 5000);

            setTimeout(function () {
                canvas.getObjects().forEach(function (o) {
                    if (o.type === 'image') {
                        canvas.setActiveObject(o);
                    }
                });
                var activeObject = canvas.getActiveObject();
                activeObject.scaleX = 0.5;
                activeObject.scaleY = 0.5;
                canvas.renderAll();
                canvas.calcOffset();

            }, 7000);

            setTimeout(function () {
                var text_gr = createNewmenu(1, '');

                var currentGroupScale = 1;// parseInt($('#slider_scale').val(), 10) / 100;
                text_gr.scale(currentGroupScale);

                text_gr.name = 'template' + column_menu;
                text_gr.lockUniScaling = true;
                text_gr.top = 140;
                text_gr.left = 100;

                pushUndo();
                canvas.add(text_gr);
                canvas.renderAll();
                canvas.calcOffset();

            }, 9000);

            setTimeout(function () {
                canvas.getObjects().forEach(function (o) {
                    if (o.type === 'group') {
                        canvas.setActiveObject(o);
                    }
                });
                var activeObject = canvas.getActiveObject();
                showEditMenu(2);
                var textName = document.getElementsByClassName('headingText');
                textName[0].value = 'Burger';
                var textPrice = document.getElementsByClassName('price');
                textPrice[0].value = '$5.0';
            }, 11000);

            setTimeout(function () {
                $('#modify_into_canvas').click();
            }, 13000);

            setTimeout(function () {
                pushUndo();
                $("input#background_id").val("0");
                $("input#img_path").val('#f9da85');
                $("div#canvas_container").css('background-image', '');
                $("div#canvas_container").css('background-color', '#f9da85');
                canvas.renderAll();
                updateCanvasArea();
            }, 15000);

            setTimeout(function () {
                var activeObject = canvas.getActiveObject();
                activeObject.set('scaleX', parseInt(135, 10) / 100);
                activeObject.set('scaleY', parseInt(135, 10) / 100);
                activeObject.setCoords();
                canvas.renderAll();
            }, 17000);


        }
        function addtext() {
            $(".txt-img").removeClass('menu-active');
            pushUndo();
            menu_edit_flag = false;
            $(".pop_container").hide();
            var textSample = new fabric.Text(text, {
                left: 100,
                top: 100,
                fontFamily: 'monstroregular',
                angle: 0,
                fill: '#0d0c0c',
                scaleX: 1.25,//0.5,
                scaleY: 1.25,//0.5,
                fontWeight: '',
                originX: 'left',
                cornersize: 10,
                padding: 0,
                lineHeight: 1.00,
                hasRotatingPoint: true,
                lockUniScaling: true
            });
            textSample.scale(multiplier_ratio);

            textSample.set('scaleX', textSample.scaleX - 0.00000001);
            textSample.set('scaleY', textSample.scaleY - 0.00000001);

            canvas.add(textSample);
            canvasModified();
        
        }
        function addimage() {
            pushUndo();
            fabric.Image.fromURL('/dynamic-images/dynamic-extra-image/1718015982Burger-combo1.png', function (image) {
                image.set({
                    type:'image',
                    objectName: 'burger',
                    left: 500,
                    top: 200,
                    originX: 'left',
                    originY: 'top',
                    angle: 0,
                    padding: 0,
                    cornersize: 10,
                    opacity: 1,
                    zindex: ++z_index,
                    scaleX: 0.5,//image.scaleX * multiplier_ratio,
                    scaleY: 0.5,//image.scaleY * multiplier_ratio,
                });
                image.scaleToHeight(image.height * multiplier_ratio);
                image.scaleToWidth(image.width * multiplier_ratio);
                image.scale(multiplier_ratio).setCoords();
                canvas.add(image);
                canvasModified();
                canvas.renderAll();
                canvas.calcOffset();
            }, { crossOrigin: 'anonymous' });
        }


        //end
        function addBlankObject() {
            var textSample = new fabric.Text(' ', {
                left: $('#canvas_w').val() + 200,
                top: $('#canvas_h').val() + 200,
                fontFamily: 'Helvetica',
                angle: 0,
                fill: '#FFFFFF',
                scaleX: 0.5,
                scaleY: 0.5,
                fontWeight: '',
                originX: 'left',
                cornersize: 10,
                padding: 0,
                hasRotatingPoint: true,
                lockUniScaling: true
            });
            textSample.scale(multiplier_ratio);
            canvas.add(textSample);
        }

        function manualRenderCanvas(flag) {
            if (manualRenderCanvasFlag) {
                var objects = canvas.getObjects();
                if (typeof objects[0] === "object" && objects[0] != "") {
                    canvas.renderAll();
                    manualRenderCanvasFlag = false;
                    if (flag) {
                        initialOutputLoad();
                    }
                    else {
                        $('#template_loader').hide();
                        $('#disable_canvas').hide();
                    }
                }
                else {
                    setTimeout(function () {
                        manualRenderCanvas(flag);
                    }, 1000);
                }
            }
        }

        function initialOutputLoad() {
            //temp comminted , please open later on
            var menu_board_id = $("input#menu_board_id").val();
            if (menu_board_id) {
                output.clear();

                setTimeout(function () {
                    fabric.Image.fromURL(canvas.toDataURL({
                        format: 'png',
                        multiplier: multiplier
                    }), function (image) {
                        image.set({
                            left: parseInt(0),
                            top: parseInt(0),
                            angle: 0,
                            padding: 0
                        });
                        image.scale(1.0).setCoords();
                        output.add(image);
                        output.renderAll();
                        output.calcOffset();
                    }, { crossOrigin: 'anonymous' });
                }, 4000)


                ///// INDRANIL ADDED

                //output.loadFromJSON(canvas_data);
                //output.renderAll();
                //output.calcOffset();



                //fabric.Image.fromURL(canvas.toDataURL({
                //    format: 'png',
                //    multiplier: multiplier
                //}), function (image) {
                //    image.set({
                //        left: parseInt(0),
                //        top: parseInt(0),
                //        angle: 0,
                //        padding: 0
                //    });
                //    image.scale(1.0).setCoords();
                //    output.add(image);
                //    output.renderAll();
                //    output.calcOffset();
                //});

                //fabric.Image.fromURL(canvas.toDataURL('png', multiplier, 1.0), function (image) {
                //    image.set({
                //        left: parseInt($('#canvas_w').val() / 2),
                //        top: parseInt($('#canvas_h').val() / 2),
                //        originX: 'center',
                //        originY: 'center',
                //        width: $('#canvas_w').val(),
                //        height: $('#canvas_h').val(),
                //        angle: 0,
                //        padding: 0
                //    });
                //    image.scale(1.0).setCoords();
                //    output.add(image);
                //    output.renderAll();
                //    output.calcOffset();
                //});


                if ($("#background_id").val() && $("#background_id").val() > 0) {
                    fabric.Image.fromURL($("input#img_path").val(), function (image) {
                        image.set({
                            left: 0,//parseInt($('#canvas_w').val() / 2),
                            top: 0,//parseInt($('#canvas_h').val() / 2),
                            originX: 'left',
                            originY: 'top',
                            //width: parseInt($('#canvas_w').val()) * parseFloat($('#canvas_ratio').val()),
                            //height: parseInt($('#canvas_h').val()) * parseFloat($('#canvas_ratio').val()),
                            scaleX: parseInt($('#canvas_w').val()) / image.width,
                            scaleY: parseInt($('#canvas_h').val()) / image.height,
                            angle: 0,
                            padding: 0

                        });
                        image.scale(1.0).setCoords();
                        output.add(image);
                        output.sendToBack(image);
                        output.renderAll();
                        output.calcOffset();

                        canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas), {
                            scaleX: canvas.width / image.width,
                            scaleY: canvas.height / image.height
                        });

                    }, { crossOrigin: 'anonymous' });
                }
                else {
                    if ($("input#img_path").val()) {
                        output.backgroundColor = $("input#img_path").val();
                    }
                    else {
                        output.backgroundColor = '#dedede';
                    }
                }
                $('#template_loader').hide();
                $('#disable_canvas').hide();
                $("input#canvas_modified").val("0");
            }
        }

        function updateCanvasArea() {
            /* setTimeout(function () {*/
            $("div#canvas_container").css("height", String(($("input#canvas_h").val()) / multiplier) + "px");
            $("div#canvas_container").css("width", String(($("input#canvas_w").val()) / multiplier) + "px");
            if ($("input#background_id").val() > 0) {
                $("div#canvas_container").css('background-color', '');
                $("div#canvas_container").css('background-image', '');
                $("div#canvas_container").css('background-image', 'url(\'' + $("input#img_path").val() + '\')');
                //$("div#canvas_container").css('background-repeat', 'no-repeat');
                $("div#canvas_container").removeClass('canvas-border');
                //document.getElementById('div#canvas_container').style.backgroundColor = "";
                //document.getElementById('div#canvas_container').removeAttribute('backgroundColor');
                //document.getElementById('div#canvas_container').style.backgroundImage = 'url(\'' + $("input#img_path").val() + '\')';
                //document.getElementById('div#canvas_container').removeClass('canvas-border');
            }
            else {
                $("div#canvas_container").css('background-image', '');
                $("div#canvas_container").css('background-color', String($("input#img_path").val()));
                if (hex2rgb(String($("input#img_path").val())) == "#676767") {
                    $("div#canvas_container").addClass('canvas-border');
                }
                else {
                    $("div#canvas_container").removeClass('canvas-border');
                }
            }
            $("div#canvas_container").css("background-size", String($("input#canvas_w").val() / multiplier) + "px " + String($("input#canvas_h").val() / multiplier) + "px");

            $("#canvas_container .canvas-container").css("width", String($("input#canvas_w").val() / multiplier) + 'px');
            $("#canvas_container .canvas-container").css("height", String($("input#canvas_h").val() / multiplier) + 'px');



            //canvas.renderAll();
            //canvas.calcOffset();

            /*$("#canvas_container").load(" #canvas_container > *");*/
            /* }, 3000);*/
            if (canvas) {
                canvas.setBackgroundImage(null);
                canvas.setBackgroundColor('');
                canvas.renderAll();
                output.setBackgroundImage(null);
                output.setBackgroundColor('');
                output.renderAll();
            }
            if ($("#background_id").val() && $("#background_id").val() > 0) {
                fabric.Image.fromURL($("input#img_path").val(), function (image) {
                    image.set({
                        left: 0,//parseInt($('#canvas_w').val() / 2),
                        top: 0,//parseInt($('#canvas_h').val() / 2),
                        originX: 'left',
                        originY: 'top',
                        //width: parseInt($('#canvas_w').val()) * parseFloat($('#canvas_ratio').val()),
                        //height: parseInt($('#canvas_h').val()) * parseFloat($('#canvas_ratio').val()),
                        scaleX: parseInt($('#canvas_w').val()) / image.width,
                        scaleY: parseInt($('#canvas_h').val()) / image.height,
                        angle: 0,
                        padding: 0

                    });
                    image.scale(1.0).setCoords();
                    output.add(image);
                    output.sendToBack(image);
                    output.renderAll();
                    output.calcOffset();

                    canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas), {
                        scaleX: canvas.width / image.width,
                        scaleY: canvas.height / image.height
                    });

                }, { crossOrigin: 'anonymous' });
            }
            else {
                if ($("input#img_path").val()) {
                    output.backgroundColor = $("input#img_path").val();
                    canvas.backgroundColor = $("input#img_path").val();
                    canvas.renderAll();
                }
                else {
                    output.backgroundColor = '#f0f0f0';
                    canvas.backgroundColor = $("input#img_path").val();
                    canvas.renderAll();
                }
            }
        }

        function loadPropertise() {
            $('#propertise_size').html('Canvas Size: <span>' + $("input#canvas_w").val() + 'x' + $("input#canvas_h").val() + '</spanv>');
            var str = multiplier_ratio;
            str = str.toString();
            if (str.indexOf(".") >= 0) {
                str = parseInt(str * 100);
            } else {
                str = parseInt(str * 100);
            }
            $('#propertise_zoom').html(' I ZOOM: <span>' + str + '%</span>');

        }

        function loadPropertiseDynamic() {
            var activeObj = canvas.getActiveObject();
            var imageType = '';
            if (activeObj) {
                imageType = activeObj.type.toUpperCase();
                if (imageType == "PATH" || imageType == "PATH-GROUP") {
                    imageType = "SVG";
                }
                if (imageType == "GROUP" && (activeObj.name == "template1" || activeObj.name == "template2" || activeObj.name == "template3" || activeObj.name == "template4")) {
                    imageType = "MENU ITEM";
                }
                $('#propertise_type').html(' I Object Type: <span>' + imageType + '</span>');
                if ((activeObj.type == "image" || activeObj.type == "path") && activeObj.objectName != "") {
                    $('#propertise_name').html(' I Object Name: <span>' + activeObj.objectName + '</span>');
                }
                else {
                    $('#propertise_name').html('');
                }
            }
            else {
                $('#propertise_type').html('');
                $('#propertise_name').html('');
            }
        }

        /* LOAD CANVAS END */

        /* CHANGE MENU SIZE START */
        $("#ul_menu_size li").click(function () {
            var change_menu_size = $(this).attr('title').split("x");
            changeSize(change_menu_size[0], change_menu_size[1], $(this).attr('id'))
        });

        function changeSize(width, height, id) {

            if (confirm('Are you sure to change the menu size?')) {
                $('.tr_menu_size').hide();
                $('#re' + id).show();

                var new_multiplier = 1;
                var new_multiplier_ratio = 1;
                var SCALE_FACTOR = 1;
                var oldCanvasWidth = $("input#canvas_w").val() / multiplier;
                var oldCanvasHeight = $("input#canvas_h").val() / multiplier;
                if (width >= 1000) {
                    new_multiplier = width / 1000;
                    new_multiplier_ratio = 1000 / width;
                }
                var newCanvasWidth = width / new_multiplier;
                var newCanvasHeight = height / new_multiplier;

                if (oldCanvasWidth >= 999 && newCanvasWidth >= 999 && newCanvasHeight >= oldCanvasHeight) {
                    SCALE_FACTOR = 1;
                }
                else if (oldCanvasWidth >= 999 && newCanvasWidth >= 999 && newCanvasHeight < oldCanvasHeight) {
                    SCALE_FACTOR = (oldCanvasHeight - newCanvasHeight) / oldCanvasHeight;
                    SCALE_FACTOR = 1 - SCALE_FACTOR;
                }
                else {
                    SCALE_FACTOR = (oldCanvasWidth - newCanvasWidth) / oldCanvasWidth;
                    SCALE_FACTOR = 1 - SCALE_FACTOR;
                }


                $("input#canvas_w").val(width);
                $("input#canvas_h").val(height);
                $("input#canvas_multiplier").val(new_multiplier);
                $("input#canvas_ratio").val(new_multiplier_ratio);

                multiplier = new_multiplier;
                multiplier_ratio = new_multiplier_ratio;
                updateCanvasArea();
                updateCanvasAreaSize();
                scaleCanvasObject(SCALE_FACTOR);
                loadPropertise();
                $('#msg_menu_size').show();
                setTimeout(function () { $('#msg_menu_size').hide(); }, 3000);
            }
        }

        function updateCanvasAreaSize() {
            canvas.setHeight(Math.round($("#canvas_container").height()));
            canvas.setWidth(Math.round($("#canvas_container").width()));
            output.setHeight(Math.round($("#canvas_container").height() * multiplier));
            output.setWidth(Math.round($("#canvas_container").width() * multiplier));
        }

        function scaleCanvasObject(SCALE_FACTOR) {
            SCALE_FACTOR = 1.27
            var objects = canvas.getObjects();
            for (var i in objects) {
                var scaleX = objects[i].scaleX;
                var scaleY = objects[i].scaleY;
                var left = objects[i].left;
                var top = objects[i].top;

                var tempScaleX = scaleX * SCALE_FACTOR;
                var tempScaleY = scaleY * SCALE_FACTOR;
                var tempLeft = left * SCALE_FACTOR;
                var tempTop = top * SCALE_FACTOR;

                objects[i].scaleX = tempScaleX;
                objects[i].scaleY = tempScaleY;
                objects[i].left = tempLeft;
                objects[i].top = tempTop;

                objects[i].setCoords();
            }
            canvas.renderAll();
            canvas.calcOffset();
        }
        /* CHANGE MENU SIZE END */

        /* COPY & PASTE START */
        document.getElementById("btn-copy").onclick = elementCopy;
        function elementCopy() {
            copiedObjects = [];
            var activeObject = canvas.getActiveObject();
            //activeGroup = canvas.getActiveGroup();

            // if (activeGroup) {
            //var objectsInGroup = activeGroup.getObjects();
            //canvas.discardActiveGroup();

            //objectsInGroup.forEach(function(object) {
            //  copiedObjects.push(object);
            //});
            // }
            // else if (activeObject) {
            //copiedObjects.push(activeObject);
            // }
            // else{
            //alert('Object not selected!');
            // }
            //activeGroup = canvas.getActiveGroup();

            //if (activeObject.length>1) {
            ////var objectsInGroup = activeGroup.getObjects();
            ////canvas.discardActiveGroup();

            //	activeObject.forEach(function(object) {
            //  copiedObjects.push(object);
            //});
            // }
            // else 
            if (activeObject) {
                //var objectsInGroup = activeObject.getObjects();
                //objectsInGroup.forEach(function(object) {
                //	copiedObjects.push(object);
                //});
                canvas.getActiveObjects().forEach((object) => {
                    copiedObjects.push(object);
                });
            }
            else {
                alert('Object not selected!');
            }
        }
        document.getElementById("btn-paste").onclick = elementPaste;
        //   function elementPaste() {
        //  var count = 0;
        //  if (copiedObjects.length == 1) {
        //	if (fabric.util.getKlass(copiedObjects[0].type).async) {
        //		copiedObjects[0].clone(function(clone) {
        //		pasteOne(clone);
        //	  });
        //	}
        //	else { //Sync cloning
        //	  pasteOne(copiedObjects[0].clone());
        //	}
        //  }
        //  else if(copiedObjects.length > 1) { 
        //	for (var index = (copiedObjects.length - 1); index >= 0; index--) {
        //	  if (fabric.util.getKlass(copiedObjects[index].type).async) {
        //		  copiedObjects[index].clone(function(clone) {
        //		  pasteOne(clone);
        //		  count++;
        //		});
        //	  }
        //	  else{ //sync cloning
        //		pasteOne(copiedObjects[index].clone());
        //		count++;
        //	  }
        //	}
        //  }
        //     canvas.renderAll();
        //     canvas.calcOffset();
        //   }

        //function pasteOne(clone) {
        //  clone.left += 20; //add 100 to the left position
        //  clone.top += 20; //add 100 to the top position
        //  clone.set('canvas', canvas); //Set the canvas attribute to our canvas
        //  clone.setCoords(); //Must call this when we cahnged our coordinates
        //  canvas.add(clone); //Add the item
        //};


        function elementPaste() {
            if (copiedObjects.length > 0) {
                for (var i in copiedObjects) {
                    copiedObjects[i] = fabric.util.object.clone(copiedObjects[i]);

                    copiedObjects[i].set("top", copiedObjects[i].top + 100);
                    copiedObjects[i].set("left", copiedObjects[i].left + 100);

                    canvas.add(copiedObjects[i]);
                    canvas.item(canvas.size() - 1).hasControls = true;
                }
            }
            else if (copiedObject) {
                copiedObject = fabric.util.object.clone(copiedObject);
                copiedObject.set("top", 150);
                copiedObject.set("left", 150);
                canvas.add(copiedObject);
                canvas.item(canvas.size() - 1).hasControls = true;
            }
            canvas.renderAll();
            canvas.calcOffset();
        }

        /* COPY & PASTE END */

        /* UNDO REDO START */
        document.getElementById("btn-undo").onclick = canvasUndo;
        function canvasUndo() {
            if (undoIndex > 0) {
                pushRedo();
                if (undoIndex <= 1) {
                    pushUndo();
                }
                var data = undoArray.pop();
                canvas.loadFromJSON(data[0]);
                canvas.renderAll();
                canvas.calcOffset();
                undoIndex--;
                manualRenderCanvasFlag = true;
                manualRenderCanvas();
                menu_edit_flag = false;
                $(".pop_container").hide();
                canvasModified();
            }
        }

        function pushUndo() {
            canvasModified();
            var toSave = JSON.stringify(canvas);
            if (oldCanvas != toSave || undoIndex <= 1) {
                undoArray[undoIndex] = new Array();
                undoArray[undoIndex][0] = toSave;
                undoIndex++;
                oldCanvas = toSave;
            }
        }

        document.getElementById("btn-redo").onclick = canvasRedo;
        function canvasRedo() {
            if (redoIndex > 0) {
                pushUndo();
                var data = redoArray.pop();
                canvas.loadFromJSON(data[0]);
                canvas.renderAll();
                canvas.calcOffset();
                redoIndex--;
                manualRenderCanvasFlag = true;
                manualRenderCanvas();
                menu_edit_flag = false;
                $(".pop_container").hide();
                canvasModified();
            }
        }

        function pushRedo() {
            var toSave = JSON.stringify(canvas);
            if (oldCanvasRedo != toSave) {
                redoArray[redoIndex] = new Array();
                redoArray[redoIndex][0] = toSave;
                redoIndex++;
                oldCanvasRedo = toSave;
            }
        }

        canvas.on('mouse:down', function (e) {
            var activeObj = canvas.getActiveObject();
            if (activeObj) {
                if (!activeObj.hasControls && !activeObj.lockMovementX && !activeObj.lockMovementY) {
                    activeObj.set('hasControls', true);
                    activeObj.set('lockMovementX', false);
                    activeObj.set('lockMovementY', false);
                }
            }
            canvas.renderAll();
            canvas.calcOffset();

            pushUndo();
            loadPropertiseDynamic();
        });



        // INDRANIL ADDED

        let isScaling = false;
        const scaleFactor = 1; // Adjust the scale factor as needed
        //////canvas.on('object:scaling', function (e) {
        //////    fabric.Object.prototype.objectCaching = false;
        //////    canvas.selection = false;
        //////    if (isScaling) return;

        //////    const activeObject = e.target;

        //////    if (activeObject) {
        //////        isScaling = true;

        //////        //const scaleX = activeObject.scaleX;
        //////        //const scaleY = activeObject.scaleY;

        //////        // Limit the minimum and maximum scale values
        //////        const minScale = 0.1; // Adjust as needed
        //////        const maxScale = 5; // Adjust as needed

        //////        // Calculate the new scale factors
        //////        var newScaleX = Math.max(minScale, Math.min(maxScale, activeObject.scaleX));
        //////        var newScaleY = Math.max(minScale, Math.min(maxScale, activeObject.scaleY));
        //////        //set scale value to element
        //////        const scaleObject = document.getElementById('slider_scale');
        //////        if (scaleObject) {
        //////            scaleObject.value = parseInt(newScaleX * 100);
        //////        }
        //////        //console.log(newScaleX);
        //////        // Store the current object position
        //////        const originalLeft = activeObject.left;
        //////        const originalTop = activeObject.top;


        //////        // Remove the object from the canvas temporarily
        //////        canvas.remove(activeObject);

        //////        // Apply the new scale factors
        //////        //activeObject.scaleX = newScaleX;
        //////        //activeObject.scaleY = newScaleY;

        //////        // Re-add the object to the canvas and reposition it
        //////        activeObject.set({
        //////            left: originalLeft,
        //////            top: originalTop,
        //////        });

        //////        //canvas.preserveObjectStacking = true;
        //////        canvas.add(activeObject);
        //////        console.log(canvas.preserveObjectStacking);
        //////        // Enable image smoothing for smooth scaling
        //////        canvas.contextContainer.imageSmoothingEnabled = true;

        //////        // Apply the transformation without reselecting
        //////        activeObject.setCoords();
        //////        canvas.renderAll();

        //////        isScaling = false;
        //////    }
        //////});

        //canvas.on('object:scaling', function (e) {
        //    fabric.Object.prototype.objectCaching = false;// dont comment it please/ Important
        //    var activeObj = canvas.getActiveObject();
        //    if (activeObj && activeObj.type == "rect") {
        //        var widthSC = activeObj.width * activeObj.scaleX;
        //        if (widthSC < 2) {
        //            widthSC = 2;
        //        }
        //        var heightSC = activeObj.height * activeObj.scaleY;
        //        if (heightSC < 2) {
        //            heightSC = 2;
        //        }

        //        activeObj.set('width', widthSC);
        //        activeObj.set('scaleX', parseInt(1));
        //        activeObj.set('height', heightSC);
        //        activeObj.set('scaleY', parseInt(1));
        //        activeObj.rx = parseInt(activeObj.rx * activeObj.scaleX);
        //        activeObj.ry = parseInt(activeObj.ry * activeObj.scaleY);
        //    }
        //    // Limit the minimum and maximum scale values
        //    const minScale = 0.1; // Adjust as needed
        //    const maxScale = 5; // Adjust as needed
        //    // Calculate the new scale factors
        //    var newScaleX = Math.max(minScale, Math.min(maxScale, activeObj.scaleX));
        //    //set scale value to element
        //    const scaleObject = document.getElementById('slider_scale');
        //    if (scaleObject) {
        //        scaleObject.value = parseInt(newScaleX * 100);
        //    }
        //});


        //canvas.on('object:scaling', function (e) {
        //    fabric.Object.prototype.objectCaching = false; // Don't comment it, important
        //    var activeObj = canvas.getActiveObject();

        //    if (activeObj && activeObj.type === "rect") {
        //        var widthSC = activeObj.width * activeObj.scaleX;
        //        if (widthSC < 2) {
        //            widthSC = 2;
        //        }
        //        var heightSC = activeObj.height * activeObj.scaleY;
        //        if (heightSC < 2) {
        //            heightSC = 2;
        //        }

        //        // Resize the rectangle
        //        activeObj.set('width', widthSC);
        //        activeObj.set('scaleX', 1);
        //        activeObj.set('height', heightSC);
        //        activeObj.set('scaleY', 1);
        //        activeObj.rx = activeObj.rx * activeObj.scaleX;
        //        activeObj.ry = activeObj.ry * activeObj.scaleY;

        //        // Resize the linear gradient
        //        if (activeObj.fill && activeObj.fill.type === 'linear') {
        //            var gradientCoords = activeObj.fill.coords;
        //            gradientCoords.x2 = gradientCoords.x1 + widthSC;
        //            activeObj.fill.coords = gradientCoords;
        //        }

        //        // Apply the changes
        //        canvas.renderAll();

        //        // Limit the minimum and maximum scale values
        //        const minScale = 0.1; // Adjust as needed
        //        const maxScale = 5; // Adjust as needed

        //        // Calculate the new scale factors
        //        var newScaleX = Math.max(minScale, Math.min(maxScale, activeObj.scaleX));

        //        // Set scale value to the element
        //        const scaleObject = document.getElementById('slider_scale');
        //        if (scaleObject) {
        //            scaleObject.value = parseInt(newScaleX * 100);
        //        }
        //    }
        //});

        

        
        canvas.on('object:scaling', function (e) {
            fabric.Object.prototype.objectCaching = false; // Don't comment it, important
            var activeObj = canvas.getActiveObject();

            if (activeObj) {
                if (activeObj.type === "rect" || activeObj.type === "triangle") {
                    var widthSC = activeObj.width * activeObj.scaleX;
                    if (widthSC < 2) {
                        widthSC = 2;
                    }
                    var heightSC = activeObj.height * activeObj.scaleY;
                    if (heightSC < 2) {
                        heightSC = 2;
                    }

                    // Resize the object
                    activeObj.set({
                        width: widthSC,
                        height: heightSC,
                        scaleX: 1,
                        scaleY: 1
                    });

                    // Apply the changes
                    canvas.renderAll();

                } else if (activeObj.type === "circle") {
                    var radiusSC = activeObj.radius * activeObj.scaleX;
                    if (radiusSC < 1) {
                        radiusSC = 1;
                    }

                    //// Resize the circle     //comment is neccessary for making a circle to oval  sudip 05.12.2024
                    //activeObj.set({
                    //    radius: radiusSC,
                    //    scaleX: 1,
                    //    scaleY: 1
                    //});

                    // Apply the changes
                    canvas.renderAll();

                } 
                // Limit the minimum and maximum scale values
                const minScale = 0.1; // Adjust as needed
                const maxScale = 5; // Adjust as needed

                // Calculate the new scale factors
                var newScaleX = Math.max(minScale, Math.min(maxScale, activeObj.scaleX));
                var newScaleY = Math.max(minScale, Math.min(maxScale, activeObj.scaleY));

                // Set scale value to the element (assuming it's the same for both axes)
                const scaleObject = document.getElementById('slider_scale');
                if (scaleObject) {
                    scaleObject.value = parseInt(newScaleX * 100);
                }
            }
        });



        // Render the scene
        //const animate = () => {
        //    requestAnimationFrame(animate);
        //    renderer.render(scene, camera);
        //};

        //animate();

        //function scaleAllObjects(object, scaleFactor) {
        //    if (object instanceof THREE.Mesh) {
        //        // Scale the mesh
        //        object.scale.multiplyScalar(scaleFactor);
        //    }

        //    if (object.children.length > 0) {
        //        // Recursively scale child objects
        //        for (const child of object.children) {
        //            scaleAllObjects(child, scaleFactor);
        //        }
        //    }
        //}

        /* UNDO REDO END */

        //$("#chk_image_rotate_0").click(function () { canvasModified(); });
        //$("#chk_image_rotate_90").click(function () { canvasModified(); });
        //$("#chk_image_rotate_180").click(function () { canvasModified(); });
        //$("#chk_image_rotate_270").click(function () { canvasModified(); });
        $("#set-menu-orentation-rotate-default").on("click", function () {
            var rotateval = $("#set-menu-orentation-rotate-default").val();
            $("#chk_image_rotate").val(rotateval);
            canvasModified();
            $("#orentation-rotate-90").removeClass("orientation-roted");
            $("#orentation-rotate-180").removeClass("orientation-roted");
            $("#orentation-rotate-270").removeClass("orientation-roted");
            $("#orentation-rotate-0").addClass("orientation-roted");
            messageAlert("orentation changed", "success");
        });
        $("#set-menu-orentation-rotate-90").on("click", function () {
            var rotateval = $("#set-menu-orentation-rotate-90").val();
            $("#chk_image_rotate").val(rotateval);
            canvasModified();
            $("#orentation-rotate-90").addClass("orientation-roted");
            $("#orentation-rotate-180").removeClass("orientation-roted");
            $("#orentation-rotate-270").removeClass("orientation-roted");
            $("#orentation-rotate-0").removeClass("orientation-roted");
            messageAlert("orentation changed", "success");
        });
        $("#set-menu-orentation-rotate-180").on("click", function () {
            var rotateval = $("#set-menu-orentation-rotate-180").val();
            $("#chk_image_rotate").val(rotateval);
            canvasModified();
            $("#orentation-rotate-90").removeClass("orientation-roted");
            $("#orentation-rotate-180").addClass("orientation-roted");
            $("#orentation-rotate-270").removeClass("orientation-roted");
            $("#orentation-rotate-0").removeClass("orientation-roted");
            messageAlert("orentation changed", "success");
        });
        $("#set-menu-orentation-rotate-270").on("click", function () {
            var rotateval = $("#set-menu-orentation-rotate-270").val();
            $("#chk_image_rotate").val(rotateval);
            canvasModified();
            $("#orentation-rotate-90").removeClass("orientation-roted");
            $("#orentation-rotate-180").removeClass("orientation-roted");
            $("#orentation-rotate-270").addClass("orientation-roted");
            $("#orentation-rotate-0").removeClass("orientation-roted");
            messageAlert("orentation changed", "success");
        });
        
        
        /* SAVE PUBLISH PREVIEW START */



        //Indranil added
        localStorage.setItem("Save", "0");
        document.getElementById("btn_canvas_save").onclick = function () {
            
            var canvasName = $('#canvasName').val();

            if (canvasName == null || canvasName == '') {
                //alert('please enter new canvas name')
                //$("#save_menu_modal").modal('show');
                messageAlert('Please enter new canvas name', 'err');
                $('#canvasName').focus();
                return false;
            }

            
            SaveMenuBoard();
        }

        document.getElementById("btn_save").onclick = function () {

            ///// dont touch this////Indranil
            //////if (localStorage.getItem("Action") === "new") {

            //////    $("#save_menu_modal").modal('show');
            //////}
            //////else {
            //////    console
            //////    $("#save_menu_modal").modal('hide');
            //////    localStorage.setItem("Action", "Edit");
            //////    SaveMenuBoard();
            //////}
            //console.log('start');
            //var canvasName = $('#canvasName').val();

            var canvasName = $('#menu_name').val();

            if (canvasName == null || canvasName == '') {
                canvasName = $('#canvasName').val();
                if (canvasName == null || canvasName == '') {
                    $("#save_menu_modal").modal('show');                    
                    $('#canvasName').focus();
                    return false;
                }
            }

            if (canvasName != null && canvasName != '') {
                var id = $("#menu_board_id").val();
                var menuid = 0;
                if (id > 0) {
                    menuid = id;
                }


                $.ajax({
                    type: "GET",
                    url: '/canvas/checkduplicatemenuname',
                    data: { "fileName": canvasName, "menuId": menuid },
                    dataType: 'json',
                    success: function (response) {
                        if (response != null) {
                            if (response > 0) {
                                messageAlert('Menu name already exists, please enter new name !', 'err');
                                $('#canvasName').focus();
                                return;
                            }
                            else {
                                SaveMenuBoard();
                            }
                        }
                        
                    },
                    error: function (error) {
                        messageAlert('Menu name already exists, please enter new name !', 'err');
                        return;
                    }
                });


            }

            //console.log('end');
            
        }
        function SaveMenuBoard() {

            //checking for menuboard name
            $("#save_menu_modal").modal('hide');
            //console.log('Save Start');
            var canvasName = $('#menu_name').val();
            if (canvasName == null || canvasName == '') {
                canvasName = $('#canvasName').val();
                if (canvasName == null || canvasName == '') {
                    $("#save_menu_modal").modal('show');
                    messageAlert('Please enter new canvas name', 'err');
                    $('#canvasName').focus();
                    return false;
                }
            }

            

            //console.log('check over');
            if (overlayImage) {
                canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
                overlayImage = false;
            }
            // added by sunil on 04.01.2024
                ////////fabric.Image.fromURL(canvas.toDataURL({
                ////////    format: 'png',
                ////////    multiplier: multiplier
                ////////}), function (image) {
                ////////    image.set({
                ////////        left: parseInt(0),
                ////////        top: parseInt(0),
                ////////        angle: 0,
                ////////        padding: 0
                ////////    });
                ////////    image.scale(1.0).setCoords();
                ////////    output.add(image);
                ////////    output.renderAll();
                ////////    output.calcOffset();
                ////////});

            output.clear();
            fabric.Image.fromURL(canvas.toDataURLWithMultiplier('png', multiplier, 1.0), function (image) {
                image.set({
                    left: parseInt($('#canvas_w').val() / 2),
                    top: parseInt($('#canvas_h').val() / 2),
                    originX: 'center',
                    originY: 'center',
                    width: $('#canvas_w').val(),
                    height: $('#canvas_h').val(),
                    angle: 0,
                    padding: 0
                });
                image.scale(1.0).setCoords();
                output.add(image);
                output.renderAll();
                output.calcOffset();
            });

                if($("#background_id").val() && $("#background_id").val() > 0)
                {
                  fabric.Image.fromURL($("input#img_path").val(), function(image) {
                    image.set({
                      left: parseInt($('#canvas_w').val()/2),
                      top: parseInt($('#canvas_h').val()/2),
				  	  originX: 'center',
				  	  originY: 'center',
					  width: $('#canvas_w').val(),
					  height: $('#canvas_h').val(),
                      angle: 0,
                      padding: 0
                    });
                    image.scale(1.0).setCoords();
                    output.add(image);
                    output.sendToBack(image);
                    output.renderAll();
                    output.calcOffset();
                  });
                }
                else {
                  if($("input#img_path").val()){
                    output.backgroundColor = $("input#img_path").val();
                  }
                  else{
                    output.backgroundColor = '#f0f0f0';
                  }
                }

            //end


            
            siteLoderOn('0%');
            setTimeout(function () {
                var d = new Date();
                var n = d.toLocaleTimeString();
                console.log('Start Saving : ' + n);
                var toSave = JSON.stringify(canvas);



                //// temp Comment
                //var scaleFactor = window.devicePixelRatio || 1;
                //console.log('scale factor : ' + scaleFactor);
                //output.setZoom(1);
                //var toImage = output.toDataURL({
                //    format: 'png',
                //    quality: 1.0,
                //    multiplier: scaleFactor
                //});
                ////end

                //---------------
                //var canvasElement = document.getElementById('canvas_output');

                var scaleFactor = window.devicePixelRatio || 1;
                //var pixelRatio = window.devicePixelRatio || 1;
                console.log('scale factor : ' + scaleFactor);

                ////// Target size for the image (1920x1080)
                ////var targetWidth = $('#canvas_w').val();
                ////var targetHeight = $('#canvas_h').val();

                ////output.width = targetWidth;
                ////output.height = targetHeight;

                //////var fabricCanvas = new fabric.Canvas(canvasElement);
                
                ////output.setWidth(targetWidth / pixelRatio);
                ////output.setHeight(targetHeight / pixelRatio);

                ////// Scale content for high-DPI displays (Retina) so that it's not blurry on macOS
                ////output.setZoom(pixelRatio);
                ////var toImage = output.toDataURL({
                ////    format: 'png',
                ////    quality: 1.0,  // Use high quality
                ////    multiplier: 1  // No scaling, as we want the exact 1920x1080 size
                ////});
                var toImage;
                if (scaleFactor > 1) {
                    //toImage = output.toDataURL("image/png", 1/scaleFactor);

                    //output.setHeight(output.getHeight() * scaleFactor);
                    //output.setWidth(output.getWidth() * scaleFactor);
                    //output.setZoom(scaleFactor);

                    //const ctx = output.getContext();
                    //ctx.scale(scaleFactor, scaleFactor);

                    //output.renderAll();

                    // Create image
                    toImage = output.toDataURL({
                        format: 'png',
                        multiplier: 1 / scaleFactor  // <- Important to export at original scale
                    });

                }
                else {
                    toImage = output.toDataURL("image/png", 1.0);
                }
                //var toImage = output.toDataURL("image/png", 1.0);  // chage by sunil on dt. 29.05.2025
                //--------------


                preview_flag = false;
                //console.log(toSave);
                var bgparam = {
                    'img_path': $("#img_path").val(),
                    'canvas_w': $("#canvas_w").val(),
                    'canvas_h': $("#canvas_h").val(),
                    'image_rotate': $('#chk_image_rotate').val()
                };

                var id = $("#menu_board_id").val();
                var param = {
                    'action': 'save_raw_data',
                    'filename': canvasName,
                    'canvesData': toSave,
                    'canvesImage': toImage,
                    'backgroundId': $("#background_id").val(),//background_id
                    'sizeId': $("#canvas_w").val() + 'x' + $("#canvas_h").val(),
                    'backgroundConfig': JSON.stringify(bgparam),
                    'userId': $("input#canvas_user_id").val(),
                    'id': $("input#menu_board_id").val()
                };
                //console.log(param);

                var formData = new FormData();
                formData.append('data', JSON.stringify(param));
               
                $.ajax({
                    url: '/canvas/upsertmenuboard',
                    data: formData,
                    async: true,
                    type: 'POST',
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    xhr: function () {
                        var xhr = new window.XMLHttpRequest();
                        xhr.upload.addEventListener("progress", function (evt) {
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                percentComplete = parseInt(percentComplete * 100);
                                $('#sdLoderTxt').val("Saving : " + percentComplete + "%");
                                console.log(percentComplete)
                            }
                        }, false);
                        return xhr;
                    },
                    success: function (menu_board_id) {
                        $('#sdLoderTxt').val("Auto configuring..");
                        if (menu_board_id != 0) {
                            if ($("input#menu_board_id").val() == "" || $("input#menu_board_id").val() == "0") {
                                $("input#menu_board_id").val(menu_board_id);
                                siteLoderOff();
                                showSuccessPopup();
                            }
                            $("input#canvas_modified").val("0");
                            
                            $("input#canvas_modified").val("0");


                            //Haraprasad add dt:18.01.2024
                            if (id == 0) {
                                var action = 'edit';
                                var width = $("#canvas_w").val();
                                var height = $("#canvas_h").val();

                                window.location = '/Canvas/MainCanves?menuBoardid=' + menu_board_id + '&&callaction=' + action + '&&canvasWidth=' + width + '&&canvasHeight=' + height;
                                setTimeout(function () {
                                    //messageAlert('File Saved', 'success');
                                }, 3000);

                            }
                            else {
                                messageAlert('File Saved', 'success');
                                siteLoderOff();
                            }
                            Reset();
                            //Haraprasad end dt:18.01.2024

                        }
                        else {
                            // redirect to pricing page
                            siteLoderOff();
                            messageAlert('Please try after some time', 'err');
                            //setTimeout(function () {
                            //    window.location = '/home/pricing';
                            //}, 3000);
                            
                        }
                    }
                });


            }, 5000);
            

        };

        function load() {
            
        }
        function CallPublish() {
            // alert(2);
            console.log('publish start');
            $("#publish_menu").click();
            console.log('publish end');
            //localStorage.setItem("Save", "0");

            //messageAlert('File Saved', 'success');
            //setTimeout(messageAlert('File Saved', 'success'), 10000);
            setTimeout(function () {
                callMessage();
                siteLoderOff();
            }, 5000);
        }

        function callMessage() {
            messageAlert('File Saved', 'success');
        }

        $("#rasterize").click(function () {
            if ($("#session_authentication").val() == 'error_session') {
                $("#pop_settings_login").show();
                document.getElementById('txtE_popup').focus();
                return false;
            }

            if ($("input#canvas_modified").val() == "1" || preview_flag == false) {
                alert("Please save & publish in order to get the preview!");
            } else {
                if (!fabric.Canvas.supports('toDataURL')) {
                    alert('This browser doesn\'t provide means to serialize canvas to an image');
                } else {
                    var menu_board_id = $("input#menu_board_id").val();

                    $("#a_preview").attr("href", "image-preview?mbi=" + $("input#menu_board_id").val());
                    $('#preview_image').html('<img src="' + $('#basicmenuweb').val() + parseInt(menu_board_id / 3000) + '/' + menu_board_id + '-.png?t=' + Math.random() + '" width="100%" />');
                    $("#canvas_preview").css("top", 0);
                    $('#canvas_preview').fadeIn();
                    $(".modal-content").removeClass("modal-close");
                    $(".modal-content").addClass("modal-view");
                }
            }
        });

        $("#publish_menu").click(function () {

            if ($("#session_authentication").val() == 'error_session') {
                $("#pop_settings_login").show();
                document.getElementById('txtE_popup').focus();
                return false;
            }

            if ($("input#canvas_modified").val() == "1" || $("input#menu_board_id").val() == "" || $("input#menu_board_id").val() == "0") {
                alert("Please save the menu board changes in order to publish!");
                messageAlert('Please save the menu board changes in order to publish', 'err');
            } else {
                if (!fabric.Canvas.supports('toDataURL')) {
                    alert('This browser doesn\'t provide means to serialize canvas to an image');
                } else {
                    var strDataURI = output.toDataURL("image/png", 1.0);
                    //var imgData = document.getElementById('canvas').toDataURL();
                    //console.log(strDataURI);
                    //console.log(imgData);
                    var menu_board_id = $("input#menu_board_id").val();
                    console.log('publish id  : ' + menu_board_id);
                    preview_flag = true;
                    $('#template_loader').show();
                    //$('#disable_canvas').show();
                    //if (localStorage.getItem("Save") != "1")
                    siteLoderOn('0%');
                    var param = {
                        'action': 'save_menu_premium',
                        'canvasName': $('input#canvasName').val(),
                        'basicMenuweb': strDataURI,// strDataURI,
                        'menuBoardid': menu_board_id,
                        'imageRotate': $('#chk_image_rotate').val(),
                        'itemSave': 'No',
                    };

                    var formData = new FormData();
                    formData.append('data', JSON.stringify(param));

                    $.ajax({
                        url: '/canvas/publishmenuboard',
                        data: formData,
                        type: 'POST',
                        dataType: 'json',
                        contentType: false,
                        async: true,
                        processData: false,
                        xhr: function () {
                            $('#template_loader_percentage').show();
                            var xhr = new window.XMLHttpRequest();
                            xhr.upload.addEventListener("progress", function (evt) {
                                if (evt.lengthComputable) {
                                    var percentComplete = evt.loaded / evt.total;
                                    percentComplete = parseInt(percentComplete * 100);
                                    //$('#span_loader_percentage').html("Publishing : " + percentComplete + "%");
                                    $('#sdLoderTxt').val(percentComplete + "%");
                                }
                            }, false);
                            return xhr;
                        },

                        success: function (msg) {
                            //alert(msg);
                            if (localStorage.getItem("Save") != "1")
                                siteLoderOff();
                            if (msg != "success") {
                                //alert('System encounter an error! Please refress the page and try again or contact us at info@dsmenu.com!');
                                messageAlert('System encounter an error! Please refress the page and try again.', 'err');
                                $('body').focus();
                                //$('#template_loader').hide();
                                //$('#template_loader_percentage').hide();
                                //$('#disable_canvas').hide();

                            } else {

                                //if (localStorage.getItem("Save") != "1")
                                messageAlert('File published!', 'success');
                                //localStorage.setItem("Save", "2");
                                //setTimeout(messageAlert('File Published', 'success'), 5000);
                                $('body').focus();
                                //$('#template_loader').hide();
                                //$('#template_loader_percentage').hide();
                                //$('#disable_canvas').hide();
                            }
                        }
                    });
                    /*}*/
                }
        }

      });
        
        /* SAVE PUBLISH PREVIEW END */

        /* SHAPS START */
        // $("#btn-shapes").click(function() {
        //$(".pop_container").hide();
        //$("#menu-shapes").show();
        //$(".txt-img").removeClass('menu-active');
        //$(this).addClass('menu-active');
        // });




        document.getElementById("add-line").onclick = drawLine;
        function drawLine() {

            pushUndo();
            menu_edit_flag = false;
            //alert('Before');
            $("#set-shapes").hide();
            //alert('After');
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            var line_left = fabric.util.getRandomInt(100, 300);
            var line = new fabric.Line([line_left, line_left, line_left + 300, line_left], {
                stroke: '#' + getRandomColor(),
                padding: 10,
                strokeWidth: 2,
                scale: multiplier_ratio,
                zindex: ++z_index,
                left: 500,
                top: 300,
            });

            canvas.add(line);

            canvasModified();
            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        document.getElementById("add-rectriangle").onclick = drawRect;
        function drawRect() {
            pushUndo();
            menu_edit_flag = false;
            $("#set-shapes").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            canvas.add(new fabric.Rect({
                left: 500,
                top: 300,
                fill: '#' + getRandomColor(),
                width: 150,
                height: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                height: 300,
                width: 500,
                strokeUniform: true,
                noScaleCache: false,
            }));
            canvasModified();
            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        document.getElementById("add-triangle").onclick = drawTriangle;
        function drawTriangle() {
            pushUndo();
            menu_edit_flag = false;
            $("#set-shapes").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            canvas.add(new fabric.Triangle({
                left: 500,
                top: 300,
                fill: '#' + getRandomColor(),
                width: 100,
                height: 100,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                height: 500,
                width: 500,
                strokeUniform: true,
                noScaleCache: false,
            }));
            canvasModified();
            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        document.getElementById("add-circle").onclick = drawCircle;
        function drawCircle() {
            pushUndo();
            menu_edit_flag = false;
            $("#set-shapes").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            canvas.add(new fabric.Circle({
                left: 500,
                top: 300,
                fill: '#' + getRandomColor(),
                radius: 250,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                height: 500,
                width: 500,
                strokeUniform: true,
                noScaleCache: false,
            }));
            canvasModified();
            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        document.getElementById("add-hexagon").onclick = drawHexagon;
        function drawHexagon() {
            pushUndo();
            menu_edit_flag = false;
            $("#set-shapes").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            var polygon = [{ x: 850, y: 75 },
            { x: 958, y: 137.5 },
            { x: 958, y: 262.5 },
            { x: 850, y: 325 },
            { x: 742, y: 262.5 },
            { x: 742, y: 137.5 },
            ];
            canvas.add(new fabric.Polygon(polygon, {
                left: 450,
                top: 280,
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                originX: .9,
                originY: .9,
                zindex: ++z_index,
                strokeUniform: true,
                noScaleCache: false,
            }));
            canvasModified();

            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        document.getElementById("add-heartcard").onclick = drawHeartCard;
        function drawHeartCard() {
            pushUndo();
            menu_edit_flag = false;
            $("#set-shapes").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            var path = new fabric.Path('M 272.70141,238.71731 \
          C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
          C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
          C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
          C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
          C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
          C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
          z ');
            var scale = 100 / path.width;
            path.set({
                name:"heart",//Haraprasad add dt:10.01.2024
                left: 480,
                top: 259,
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                scaleX: .8,
                scaleY: .8,
                originX: 'center',
                originY: 'center',
                zindex: ++z_index,
                strokeUniform: true,
                noScaleCache: false,
            });
            canvas.add(path);
            canvasModified();
            canvas.renderAll();
            //$("#set-shapes").hide();
        }

        /* SHAPS END */


        /* NEW SHAPS START ( Sunil )*/


        document.getElementById("shape-add-blob").onclick = drawBlob;
        function drawBlob() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            //var path = new fabric.Path('M0,100 C20,0 50,0 100,100 C150,200 180,200 200,100 C220,0 250,0 300,100 C350,200 380,200 400,100 L400,400 L0,400 Z');
            var path = new fabric.Path('M146.427,300.683c0,0,84.368-3.616,106.243-63.775C274.545,176.748,296.917-0.074,453.637,0  c127.219,0.06,283.452,95.174,232.865,323.505c-50.588,228.328-301.85,85.798-381.476,195.938  C203.589,659.75,80.194,604.959,30.211,549.521C-15.565,498.746-31.314,333.496,146.427,300.683z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 500 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                //stroke: 'black',
                //strokeWidth: 2,
                radius: 50,
                opacity: 1.0,
                padding: 0,
                scaleX: scale,
                scaleY: scale,
                originX: 'center',
                originY: 'center',
                zindex: ++z_index,
                name: 'shape_blob',
                id: 'test1'
            });

            localStorage.setItem("SVG", "2");
            canvas.add(path);
            canvasModified();
            canvas.renderAll();
        }

        document.getElementById("shape-add-circle").onclick = drawRect_shape;
        function drawRect_shape() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');
            //canvas.add(new fabric.Rect({
            //    left: fabric.util.getRandomInt(0 + 50, 700 - 50),
            //    top: fabric.util.getRandomInt(0 + 50, 500 - 50),
            //    fill: '#' + getRandomColor(),
            //    width: 150,
            //    height: 50,
            //    opacity: 1.0,
            //    padding: 0,
            //    zindex: ++z_index,
            //    name: 'shape_rectriangle'
            //}));

            var path = new fabric.Path('M600,150H200c-70,0-125,55-125,125v250c0,70,55,125,125,125h400c70,0,125-55,125-125V275C725,205,670,150,600,150z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 500 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                //stroke: 'black',
                //strokeWidth: 2,
                radius: 50,
                opacity: 1.0,
                padding: 0,
                scaleX: scale,
                scaleY: scale,
                originX: 'center',
                originY: 'center',
                zindex: ++z_index,
                name: 'shape_rounded_rectangle'
            });
            localStorage.setItem("SVG", "3");
            canvas.add(path);
            canvasModified();
            canvas.renderAll();
        }

        document.getElementById("shape-add-rectriangle").onclick = drawCircle_shape;
        function drawCircle_shape() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M200,0 A200,200 0 1,1 0,200 A200,200 0 0,1 200,0 Z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape_circle',
                id: 'test1'
            });

            //canvas.add(new fabric.Circle({
            //    left: fabric.util.getRandomInt(0 + 50, 700 - 50),
            //    top: fabric.util.getRandomInt(0 + 50, 500 - 50),
            //    fill: '#' + getRandomColor(),
            //    radius: 50,
            //    opacity: 1.0,
            //    padding: 0,
            //    zindex: ++z_index,
            //    name: 'shape_circle'
            //}));

            canvas.add(path);
            localStorage.setItem("SVG", "1");

            canvasModified();
            canvas.renderAll();
        }



        /////// INDRANIL ADDED

        //document.getElementById("show_gradient_text").checked = false;
        //document.getElementById("show_gradient_text1").checked = false;
        // document.getElementById("show_gradient_text1").onclick = LinearGradient;
        document.getElementById("show_gradient_text").onclick = LinearGradient;





        function blendColors(color1, color2, ratio) {
            var hex = function (x) {
                x = x.toString(16);
                return (x.length === 1) ? '0' + x : x;
            };

            var r = Math.ceil(parseInt(color1.substring(1, 3), 16) * (1 - ratio) + parseInt(color2.substring(1, 3), 16) * ratio);
            var g = Math.ceil(parseInt(color1.substring(3, 5), 16) * (1 - ratio) + parseInt(color2.substring(3, 5), 16) * ratio);
            var b = Math.ceil(parseInt(color1.substring(5, 7), 16) * (1 - ratio) + parseInt(color2.substring(5, 7), 16) * ratio);

            return '#' + hex(r) + hex(g) + hex(b);
        }





        //function LinearGradient() {

        //    // Assuming you have created a Fabric canvas and added some objec

        //    // Assuming you have an active object


        //    var activeObject = canvas.getActiveObject();
        //    var activeGroup = canvas.getActiveObjects();
        //    console.log(activeObject.objectName);
        //    /*if (document.getElementById("show_gradient_text").checked == true || document.getElementById("show_gradient_text1").checked == true) {*/
        //    if (document.getElementById("show_gradient_text").checked == true) {
        //        $("#div_Chk_gradient_show").show();

        //        // Check if there is an active object
        //        if (activeObject && (activeObject.type === 'rect')) {

        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;
        //            // Create a linear gradient object
        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 300,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: redHex },
        //                    { offset: 1, color: blueHex }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }

        //        else if (activeObject && (activeObject.type === 'circle')) {


        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;


        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 300,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: $('#shape_gradient_color_2').val() }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }
        //            //Haraprasad add dt:09.01.2024
        //        else if (activeObject && (activeObject.type === 'triangle')) {

        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;
        //            // Create a linear gradient object
        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 300,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: redHex },
        //                    { offset: 1, color: blueHex }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }
        //        else if (activeObject && (activeObject.type === 'polygon')) {

        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;
        //            // Create a linear gradient object
        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 300,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: redHex },
        //                    { offset: 1, color: blueHex }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }

        //             //Haraprasad end dt:09.01.2024
        //        else if (activeObject && (activeObject.type === 'text')) {

        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;

        //            var gradientCoords = {
        //                x1: -120,
        //                y1: 0,
        //                x2: 50,
        //                y2: 0
        //            };

        //            // Calculate intermediate colors
        //            var numSteps = 1000; // Adjust the number of steps as needed
        //            var intermediateColors = [];
        //            for (var i = 0; i <= numSteps; i++) {
        //                var ratio = i / numSteps;
        //                var intermediateColor = blendColors(redHex, blueHex, ratio);
        //                intermediateColors.push(intermediateColor);
        //            }

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: intermediateColors.map(function (color, index) {
        //                    return { offset: index / numSteps, color: color };
        //                }),
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();

        //            // Function to blend two colors based on a ratio






        //        }

        //        else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {

        //            //var path = new fabric.Path('M450.078,0v420.688c-5.355,1.263-11.446,4.053-18.289,9.11c-21.061,15.566-38.147,18.838-64.05-3.768  c-23.104-20.163-41.442-31.082-88.538-3.768c-47.096,27.316-105.59,12.583-123.343-31.943  c-14.644-36.729,9.823-70.094-24.535-80.143c-28.157-8.234-46.912-25.121-41.444-47.096c6.701-26.931,11.931-37.99,0-56.513  c-11.29-17.529-70.194-42.932-84.429-98.795C-5.639,64.256,1.896,27.075,12.883,0H450.078z', {
        //            //    //fill: 'red',
        //            //    left: 100,
        //            //    top: 100,
        //            //});

        //            var path = activeObject;

        //            var redHex = '#FF0000'; // Red
        //            var blueHex = '#0000FF'; // Blue

        //            document.getElementById('shape_gradient_color_1').value = redHex;
        //            document.getElementById('shape_gradient_color_2').value = blueHex;


        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 180,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: $('#shape_gradient_color_2').val() }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            canvas.remove(activeObject);
        //            canvas.add(path);
        //            // Set the fill of the active object to the gradient
        //            path.set("fill", gradient);

        //            canvas.setActiveObject(path);
        //            //path.name = 'SideBar-2';
        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }

        //        else {
        //            console.error("No active object found.");
        //        }
        //    }

        //    //else if ((document.getElementById("show_gradient_text1").checked == true && document.getElementById("show_gradient_text").checked == false)
        //    //    ||
        //    //    (document.getElementById("show_gradient_text1").checked == false && document.getElementById("show_gradient_text").checked == true)
        //    //    ||
        //    //    (document.getElementById("show_gradient_text1").checked == false && document.getElementById("show_gradient_text").checked == false)) {
        //    else if ((document.getElementById("show_gradient_text").checked == false)) {
        //        $("#div_Chk_gradient_show").hide();
        //        if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {
        //            (activeObject || activeGroup).paths[0].setFill("#FF0000");
        //            canvas.renderAll();
        //        }
        //        else {
        //            activeObject.set("fill", "#FF0000");

        //            //(activeObject || activeGroup).set(fill: "#FF0000");
        //            canvas.renderAll();
        //        }


        //    }


        //}

        function LinearGradient() {

            // Assuming you have created a Fabric canvas and added some objec

            // Assuming you have an active object

            var activeObject = canvas.getActiveObject();
            var activeGroup = canvas.getActiveObjects();
            console.log(activeObject.objectName);
            /*if (document.getElementById("show_gradient_text").checked == true || document.getElementById("show_gradient_text1").checked == true) {*/
            if (document.getElementById("show_gradient_text").checked == true) {
                $("#div_Chk_gradient_show").show();

                // Check if there is an active object
                if (activeObject && (activeObject.type === 'rect')) {

                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;
                    // Create a linear gradient object
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: redHex },
                            { offset: 1, color: blueHex }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }

                else if (activeObject && (activeObject.type === 'circle')) {


                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;


                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }
                //Haraprasad add dt:09.01.2024
                else if (activeObject && (activeObject.type === 'triangle')) {

                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;
                    // Create a linear gradient object
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: redHex },
                            { offset: 1, color: blueHex }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'polygon')) {

                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;
                    // Create a linear gradient object
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: redHex },
                            { offset: 1, color: blueHex }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }

                //Haraprasad end dt:09.01.2024
                else if (activeObject && (activeObject.type === 'text')) {

                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;

                    var gradientCoords = {
                        x1: -120,
                        y1: 0,
                        x2: 50,
                        y2: 0
                    };
                    //sudip 30-12-2024

                    // Calculate intermediate colors
                    //var numSteps = 1000; // Adjust the number of steps as needed
                    //var intermediateColors = [];
                    //for (var i = 0; i <= numSteps; i++) {
                    //    var ratio = i / numSteps;
                    //    var intermediateColor = blendColors(redHex, blueHex, ratio);
                    //    intermediateColors.push(intermediateColor);
                    //}

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    //var gradient = new fabric.Gradient({
                    //    type: 'linear',
                    //    coords: gradientCoords,
                    //    colorStops: intermediateColors.map(function (color, index) {
                    //        return { offset: index / numSteps, color: color };
                    //    }),
                    //    angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    //});

                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: redHex },
                            { offset: 1, color: blueHex }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    //sudip end 30-12-2024

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();

                    // Function to blend two colors based on a ratio






                }

                else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {

                    var path = activeObject;

                    var redHex = '#FF0000'; // Red
                    var blueHex = '#0000FF'; // Blue

                    document.getElementById('shape_gradient_color_1').value = redHex;
                    document.getElementById('shape_gradient_color_2').value = blueHex;


                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    canvas.remove(activeObject);
                    canvas.add(path);
                    // Set the fill of the active object to the gradient
                    path.set("fill", gradient);

                    canvas.setActiveObject(path);
                    //path.name = 'SideBar-2';
                    // Update the canvas to see the changes
                    canvas.renderAll();
                }

                else {
                    console.error("No active object found.");
                }
            }

            else if ((document.getElementById("show_gradient_text").checked == false)) {
                $("#div_Chk_gradient_show").hide();
                var fillcolour = document.getElementById('line-fill-color').value;
                if (fillcolour == null) {
                    fillcolour = '#FF0000';
                }
                if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {
                    activeObject.fill= '';
                    (activeObject || activeGroup).paths[0].setFill(fillcolour);
                    //activeObject.fill.type = '';
                    canvas.renderAll();
                }
                else {
                    activeObject.set("fill", fillcolour);

                    //(activeObject || activeGroup).set(fill: "#FF0000");
                    canvas.renderAll();
                }


            }


        }



        $('#shape_gradient_color_1').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();

                if (activeObject && (activeObject.type === 'rect')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width * activeObject.scaleX, y2: 0 },
                        colorStops: [
                            { offset: 0, color: this.value },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'circle')) {
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }
                    //Haraprasad add dt:09.01.2024
                else if (activeObject && (activeObject.type === 'triangle')) {
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'polygon')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
                        colorStops: [
                            { offset: 0, color: this.value },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'path') && (activeObject.name)==='heart') {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: 300, y2: 0 },
                        colorStops: [
                            { offset: 0, color: this.value },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }

                     //Haraprasad end dt:09.01.2024

                    //sudip 30-12-2024 gradient
                else if (activeObject && (activeObject.type === 'text')) {
                    //var redHex = $('#shape_gradient_color_1').val();
                    //var blueHex = $('#shape_gradient_color_2').val();
                    var transitionColor = '#FF00FF';
                    var gradientCoords = {
                        x1: -120,
                        y1: 0,
                        x2: 50,
                        y2: 0
                    };

                    //var numSteps = 100;
                    //var intermediateColors = [];

                    //for (var i = 0; i <= numSteps; i++) {
                    //    var ratio = i / numSteps;
                    //    var blendedColor = tinycolor.mix(redHex, blueHex, ratio * 100).toHexString();
                    //    intermediateColors.push({ offset: ratio, color: blendedColor });
                    //}

                    //var gradient = new fabric.Gradient({
                    //    type: 'linear',
                    //    coords: gradientCoords,
                    //    colorStops: intermediateColors,
                    //    angle: activeObject.angle
                    //});

                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: this.value },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle
                    });
                                         //sudip end 23-12-2024

                    activeObject.set("fill", gradient);
                    canvas.renderAll();

                }

                else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {


                    // Assuming you have an active object
                    var activeObject = canvas.getActiveObject();
                    var activeGroup = canvas.getActiveObjects();
                    // Check if there is an active object and if it's an SVG path
                    //if (activeObject && activeObject.type === 'path') {
                    // Create a linear gradient object using Fabric.js Gradient class
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: {
                            x1: 0,
                            y1: 0,
                            x2: activeObject.width * activeObject.scaleX,
                            y2: 0
                        },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ]
                    });
                    pushUndo();
                    (activeObject || activeGroup).paths[0].setFill(gradient);

                    //chk_fill_color.checked = true;
                    canvas.renderAll();

                }
            }
        );

        //$('#shape_gradient_color_1').on('input', function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject();

        //    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'triangle')) {
        //        var gradientCoords = {
        //            x1: 0,
        //            y1: 0,
        //            x2: activeObject.width * activeObject.scaleX, // Use bounding box width
        //            y2: 0
        //        };

        //        var startColor = $('#shape_gradient_color_1').val();
        //        var endColor = $('#shape_gradient_color_2').val();
        //        var numSteps = 100; // Adjust the number of steps as needed
        //        var intermediateColors = [];

        //        for (var i = 0; i <= numSteps; i++) {
        //            var ratio = i / numSteps;
        //            var blendedColor = tinycolor.mix(startColor, endColor, ratio * 100).toHexString();
        //            intermediateColors.push({ offset: ratio, color: blendedColor });
        //        }

        //        var gradient = new fabric.Gradient({
        //            type: 'linear',
        //            coords: gradientCoords,
        //            colorStops: intermediateColors,
        //            angle: activeObject.angle
        //        });

        //        activeObject.set("fill", gradient);
        //        canvas.renderAll();
        //    }
        //    else if (activeObject && (activeObject.type === 'polygon')) {
        //        var gradient = new fabric.Gradient({
        //            type: 'linear',
        //            coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
        //            colorStops: [
        //                { offset: 0, color: this.value },
        //                { offset: 1, color: $('#shape_gradient_color_2').val() }
        //            ],
        //            //angle: 45 // Set the angle in degrees
        //        });

        //        // Set the fill of the active object to the gradient
        //        activeObject.set("fill", gradient);
        //        canvas.renderAll();
        //    }
        //    else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group') && (activeObject.name === 'heart')) {
        //        var gradientCoords = {
        //            x1: 0,
        //            y1: 0,
        //            x2: activeObject.width * activeObject.scaleX, // Use bounding box width
        //            y2: 0
        //        };

        //        var startColor = $('#shape_gradient_color_1').val();
        //        var endColor = $('#shape_gradient_color_2').val();
        //        var numSteps = 100; // Adjust the number of steps as needed
        //        var intermediateColors = [];

        //        for (var i = 0; i <= numSteps; i++) {
        //            var ratio = i / numSteps;
        //            var blendedColor = tinycolor.mix(startColor, endColor, ratio * 100).toHexString();
        //            intermediateColors.push({ offset: ratio, color: blendedColor });
        //        }

        //        var gradient = new fabric.Gradient({
        //            type: 'linear',
        //            coords: gradientCoords,
        //            colorStops: intermediateColors,
        //            angle: activeObject.angle
        //        });

        //        activeObject.set("fill", gradient);
        //        canvas.renderAll();
        //    } else if (activeObject && activeObject.type === 'text') {
        //        var gradientCoords = {
        //            x1: -120,
        //            y1: 0,
        //            x2: 50,
        //            y2: 0
        //        };

        //        var startColor = $('#shape_gradient_color_1').val();
        //        var endColor = $('#shape_gradient_color_2').val();
        //        var numSteps = 100; // Adjust the number of steps as needed
        //        var intermediateColors = [];

        //        for (var i = 0; i <= numSteps; i++) {
        //            var ratio = i / numSteps;
        //            var blendedColor = tinycolor.mix(startColor, endColor, ratio * 100).toHexString();
        //            intermediateColors.push({ offset: ratio, color: blendedColor });
        //        }

        //        var gradient = new fabric.Gradient({
        //            type: 'linear',
        //            coords: gradientCoords,
        //            colorStops: intermediateColors,
        //            angle: activeObject.angle
        //        });

        //        activeObject.set("fill", gradient);
        //        canvas.renderAll();
        //    }
        //});



        //$('#shape_gradient_color_2').on('input',
        //    function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();

        //        if (activeObject && (activeObject.type === 'rect')) {
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: { x1: 0, y1: 0, x2: 300, y2: 0 },
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: this.value }
        //                ],
        //                //angle: 45 // Set the angle in degrees
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);
        //            canvas.renderAll();
        //        }
        //        else if (activeObject && (activeObject.type === 'circle')) {
        //            var gradientCoords = {
        //                x1: 0,
        //                y1: 0,
        //                x2: 300,
        //                y2: 0
        //            };

        //            // Create a linear gradient object with dynamic coordinates based on the rectangle
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: $('#shape_gradient_color_2').val() }
        //                ],
        //                angle: activeObject.angle // Set the angle based on the rectangle's rotation
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);

        //            // Update the canvas to see the changes
        //            canvas.renderAll();
        //        }
        //            //Haraprasad add dt:09.01.2024
        //        else if (activeObject && (activeObject.type === 'triangle')) {
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: { x1: 0, y1: 0, x2: 300, y2: 0 },
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: this.value }
        //                ],
        //                //angle: 45 // Set the angle in degrees
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);
        //            canvas.renderAll();
        //        }
        //        else if (activeObject && (activeObject.type === 'polygon')) {
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: { x1: 0, y1: 0, x2: 300, y2: 0 },
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: this.value }
        //                ],
        //                //angle: 45 // Set the angle in degrees
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);
        //            canvas.renderAll();
        //        }
        //        else if (activeObject && (activeObject.type === 'path') && (activeObject.name==='heart')) {
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: { x1: 0, y1: 0, x2: 300, y2: 0 },
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: this.value }
        //                ],
        //                //angle: 45 // Set the angle in degrees
        //            });

        //            // Set the fill of the active object to the gradient
        //            activeObject.set("fill", gradient);
        //            canvas.renderAll();
        //        }
        //            //Haraprasad End dt:09.01.2024
        //        else if (activeObject && (activeObject.type === 'text')) {
        //            var redHex = $('#shape_gradient_color_1').val();
        //            var blueHex = $('#shape_gradient_color_2').val();
        //            var transitionColor = '#FF00FF';
        //            var gradientCoords = {
        //                x1: -120,
        //                y1: 0,
        //                x2: 50,
        //                y2: 0
        //            };

        //            var numSteps = 100;
        //            var intermediateColors = [];

        //            for (var i = 0; i <= numSteps; i++) {
        //                var ratio = i / numSteps;
        //                var blendedColor = tinycolor.mix(redHex, blueHex, ratio * 100).toHexString();
        //                intermediateColors.push({ offset: ratio, color: blendedColor });
        //            }

        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: gradientCoords,
        //                colorStops: intermediateColors,
        //                angle: activeObject.angle
        //            });

        //            activeObject.set("fill", gradient);
        //            canvas.renderAll();

        //        }



        //        else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {


        //            // Assuming you have an active object
        //            var activeObject = canvas.getActiveObject();
        //            var activeGroup = canvas.getActiveObjects();
        //            // Check if there is an active object and if it's an SVG path
        //            //if (activeObject && activeObject.type === 'path') {
        //            // Create a linear gradient object using Fabric.js Gradient class
        //            var gradient = new fabric.Gradient({
        //                type: 'linear',
        //                coords: {
        //                    x1: 0,
        //                    y1: 0,
        //                    x2: 180,
        //                    y2: 0
        //                },
        //                colorStops: [
        //                    { offset: 0, color: $('#shape_gradient_color_1').val() },
        //                    { offset: 1, color: $('#shape_gradient_color_2').val() }
        //                ]
        //            });
        //            pushUndo();
        //            (activeObject || activeGroup).paths[0].setFill(gradient);
        //            //chk_fill_color.checked = true;
        //            canvas.renderAll();

        //        }
        //    }
        //);


        $('#shape_gradient_color_2').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();

                if (activeObject && (activeObject.type === 'rect')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width * activeObject.scaleX, y2: 0 },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: this.value }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'circle')) {
                    var gradientCoords = {
                        x1: 0,
                        y1: 0,
                        x2: activeObject.width * activeObject.scaleX,
                        y2: 0
                    };

                    // Create a linear gradient object with dynamic coordinates based on the rectangle
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ],
                        angle: activeObject.angle // Set the angle based on the rectangle's rotation
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);

                    // Update the canvas to see the changes
                    canvas.renderAll();
                }
                //Haraprasad add dt:09.01.2024
                else if (activeObject && (activeObject.type === 'triangle')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width * activeObject.scaleX, y2: 0 },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: this.value }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'polygon')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: this.value }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                else if (activeObject && (activeObject.type === 'path') && (activeObject.name === 'heart')) {
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: { x1: 0, y1: 0, x2: activeObject.width * activeObject.scaleX, y2: 0 },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: this.value }
                        ],
                        //angle: 45 // Set the angle in degrees
                    });

                    // Set the fill of the active object to the gradient
                    activeObject.set("fill", gradient);
                    canvas.renderAll();
                }
                //Haraprasad End dt:09.01.2024


                    //sudip gradient 30-12-2024
                else if (activeObject && (activeObject.type === 'text')) {
                    //var redHex = $('#shape_gradient_color_1').val();
                    //var blueHex = $('#shape_gradient_color_2').val();
                    var transitionColor = '#FF00FF';
                    var gradientCoords = {
                        x1: -120,
                        y1: 0,
                        x2: 50,
                        y2: 0
                    };

                    //var numSteps = 100;
                    //var intermediateColors = [];

                    //for (var i = 0; i <= numSteps; i++) {
                    //    var ratio = i / numSteps;
                    //    var blendedColor = tinycolor.mix(redHex, blueHex, ratio * 100).toHexString();
                    //    intermediateColors.push({ offset: ratio, color: blendedColor });
                    //}

                    //var gradient = new fabric.Gradient({
                    //    type: 'linear',
                    //    coords: gradientCoords,
                    //    colorStops: intermediateColors,
                    //    angle: activeObject.angle
                    //});

                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: gradientCoords,
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: this.value }
                        ],
                        angle: activeObject.angle
                    });
                    //sudip end 30-12-2024

                    activeObject.set("fill", gradient);
                    canvas.renderAll();

                }



                else if (activeObject && (activeObject.type === 'path' || activeObject.type === 'path-group')) {


                    // Assuming you have an active object
                    var activeObject = canvas.getActiveObject();
                    var activeGroup = canvas.getActiveObjects();
                    // Check if there is an active object and if it's an SVG path
                    //if (activeObject && activeObject.type === 'path') {
                    // Create a linear gradient object using Fabric.js Gradient class
                    var gradient = new fabric.Gradient({
                        type: 'linear',
                        coords: {
                            x1: 0,
                            y1: 0,
                            x2: activeObject.width * activeObject.scaleX,
                            y2: 0
                        },
                        colorStops: [
                            { offset: 0, color: $('#shape_gradient_color_1').val() },
                            { offset: 1, color: $('#shape_gradient_color_2').val() }
                        ]
                    });
                    pushUndo();
                    (activeObject || activeGroup).paths[0].setFill(gradient);
                    //chk_fill_color.checked = true;
                    canvas.renderAll();

                }
            }
        );

        document.getElementById("shape_gradient_color_angel_30").onclick = setAngleFirst;
        function setAngleFirst() {
            var activeObject = canvas.getActiveObject();

            var gradient = new fabric.Gradient({
                type: 'linear',
                coords: { x1: 0, y1: 100, x2: 50, y2: 0 },
                colorStops: [
                    { offset: 0, color: $('#shape_gradient_color_1').val() },
                    { offset: 1, color: $('#shape_gradient_color_2').val() }
                ],
                angle: 30 // Set the angle in degrees
            });

            // Set the fill of the active object to the gradient
            activeObject.set("fill", gradient);
            canvas.renderAll();
        }

        document.getElementById("shape_gradient_color_angel_45").onclick = setAngleSecond;
        function setAngleSecond() {
            var activeObject = canvas.getActiveObject();

            var gradient = new fabric.Gradient({
                type: 'linear',
                coords: { x1: 0, y1: 100, x2: 100, y2: 0 },
                colorStops: [
                    { offset: 0, color: $('#shape_gradient_color_1').val() },
                    { offset: 1, color: $('#shape_gradient_color_2').val() }
                ],
                angle: 45 // Set the angle in degrees
            });

            // Set the fill of the active object to the gradient
            activeObject.set("fill", gradient);
            canvas.renderAll();
        }

        document.getElementById("shape_gradient_color_angel_90").onclick = setAngleTheird;
        function setAngleTheird() {
            var activeObject = canvas.getActiveObject();

            var gradient = new fabric.Gradient({
                type: 'linear',
                coords: { x1: 0, y1: 100, x2: 220, y2: 0 },
                colorStops: [
                    { offset: 0, color: $('#shape_gradient_color_1').val() },
                    { offset: 1, color: $('#shape_gradient_color_2').val() }
                ],
                angle: 90 // Set the angle in degrees
            });

            // Set the fill of the active object to the gradient
            activeObject.set("fill", gradient);
            canvas.renderAll();
        }


        document.getElementById("option5").onclick = LANDSCAPE;

        function LANDSCAPE() {
            canvas.clear();
            //const ctx = canvas.getContext("2d");
            //canvas.width = 1920; // Set landscape width
            //canvas.height = 1080; // Set landscape height
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            //ctx.translate(0, canvas.height);
            //ctx.rotate(-Math.PI / 2); // Rotate -90 degrees for landscape mode
            //ctx.fillStyle = "lightblue"; // Background color
            //ctx.fillRect(0, 0, canvas.height, canvas.width);
            //ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation
            var id = $("#menu_board_id").val();
            window.location = '/Canvas/MainCanves?menuBoardid=' + id + '&&callaction=' + 'new' + '&&canvasWidth=' + 1920 + '&&canvasHeight=' + 1080;
            //window.location = '/Canvas/MainCanves?menuBoardid=' + id + '&&callaction=' + 'new' + '&&canvasHeight=' + 1080 + '&&canvasWidth=' + 1920;
        }

        document.getElementById("option6").onclick = PORTRAIT;

        function PORTRAIT() {
            //canvas.clear();
            //const ctx = canvas.getContext("2d");
            //canvas.width = 900; // Set portrait width
            //canvas.height = 1920; // Set portrait height
            //canvas.left = 300;
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            //ctx.translate(canvas.width, 0);
            //ctx.rotate(Math.PI / 2); // Rotate 90 degrees for portrait mode
            //ctx.fillStyle = "lightblue"; // Background color
            //ctx.fillRect(0, 0, canvas.height, canvas.width); // Use swapped dimensions
            //ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation

            var id = $("#menu_board_id").val();
            window.location = '/Canvas/MainCanves?menuBoardid=' + id + '&&callaction=' + 'new' + '&&canvasWidth=' + 1080 + '&&canvasHeight=' + 1920;
        }





        document.getElementById("shape-add-4").onclick = draw_shape4;

        function draw_shape4() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M218.557,482.817c0,0-14.196-21.024-57.146-25.339c-42.881-4.307-95.156-17.707-114.292-67.929 c-12.214-32.055,5.742-71.807,29.507-93.647c18.467-16.972,41.259-27.507,65.198-34.301c34.911-9.909,62.91-21.741,85.194-50.854 c22.283-29.112,14.396-107.745,123.622-138.735c115.909-32.886,190.307,49.599,205.682,108.421 c11.356,43.454,3.234,118.869-47.71,147.979c-50.942,29.111-88.861,41.634-92.904,85.042c-4.043,43.406-8.909,80.805-51.216,108.9 C334.677,542.156,270.851,546.973,218.557,482.817z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape4'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "4");

            canvasModified();
            canvas.renderAll();
        }


        document.getElementById("shape-add-5").onclick = draw_shape5;

        function draw_shape5() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M535.007,296.759c-7.449,15.923-26.074,21.577-32.72,38.028c-14.136,35.021,41.552,59.765,12.3,97.33 c-13.218,16.979-31.097,10.981-48.277,18.845c-14.489,6.631-19.939,24.28-31.732,34.299c-24.574,20.885-56.176,21.569-86.221,16.579 c-28.617-4.754-52.43,10.198-75.514,25.449c-38.204,25.242-77.413,33.418-121.144,18.723 c-40.395-13.574-67.605-45.676-80.827-83.893c-10.149-29.338-12.056-62.278-5.353-93.205c9.795-45.188,34.878-89.667,77.158-111.527 c39.194-20.265,89.696-24.284,115.411-65.097c18.53-29.413,26.115-65.371,46.409-93.461c30.271-41.901,96.899-61.459,143.489-47.832 c46.928,13.727,94.959,66.016,79.699,124.706c-3.222,12.387-14.632,18.197-21.389,28.094c-17.813,26.077,9.268,33.219,23.366,47.954 C541.022,263.62,541.748,282.345,535.007,296.759z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape5'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "5");

            canvasModified();
            canvas.renderAll();
        }


        document.getElementById("shape-add-6").onclick = draw_shape6;

        function draw_shape6() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M297.586,60.58c0,0,188.532-9.727,243.348,164.238c54.821,173.962-118.356,296.256-170.255,306.488 c-39.046,7.701-160.071,30.698-239.743-62.13C51.26,376.353,15.447,259.396,87.078,157.794 C87.077,157.794,144.091,58.39,297.586,60.58z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape6'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "6");

            canvasModified();
            canvas.renderAll();
        }


        document.getElementById("shape-add-7").onclick = draw_shape7;

        function draw_shape7() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M472.424,492.894c-74.45,39.653-131.9-2.423-177.215-48.549c-45.313-46.125-50.167-63.929-128.657-93.059 c-78.494-29.131-90.631-48.547-110.86-88.199C35.462,223.438,32.224,119.054,219.147,95.585 c186.922-23.469,262.171,57.453,262.171,57.453C605.935,270.369,546.866,453.244,472.424,492.894z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape7'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "7");

            canvasModified();
            canvas.renderAll();
        }


        document.getElementById("shape-add-8").onclick = draw_shape8;

        function draw_shape8() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M555.223,300c0,126.137-102.034,228.391-227.897,228.391c-64.681,0-123.022-27.046-164.5-70.417 c-88.994-51.604-118.047-10.412-118.047-10.412c1.855-2.627,0.159-13.195,0.217-16.575c0.701-41.079,4.416-82.003,14.479-121.926 c7.765-30.797,19.292-61.125,34.156-89.211c11.739-22.175,27.281-42.119,43.605-61.084c12.684-14.734,27.849-25.827,43.045-37.737 c8.681-6.805,18.437-12.502,28.233-17.514C245.37,84.65,285.575,71.61,327.33,71.61C453.195,71.61,555.223,173.864,555.223,300z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape8'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "8");

            canvasModified();
            canvas.renderAll();
        }

        document.getElementById("shape-add-9").onclick = draw_shape9;

        function draw_shape9() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M553.378,46.5H299.995c-140,0-253.501,113.497-253.501,253.504c0,140.003,113.502,253.496,253.501,253.496 c137.219,0,248.889-109.046,253.285-245.202l0.098-3.668c0.029-1.544,0.119-3.073,0.119-4.625c0-1.552,0.022-3.704,0-5.248 L553.378,46.5z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape9'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "9");

            canvasModified();
            canvas.renderAll();
        }

        document.getElementById("shape-add-10").onclick = draw_shape10;

        function draw_shape10() {
            pushUndo();
            menu_edit_flag = false;
            $(".modalWork_area").hide();
            $('header, main').css('pointer-events', '');
            $(".spapeItem").removeClass('active');




            var path = new fabric.Path('M450.545,418.313c0,76.56-62.146,138.624-138.809,138.624l0,0c-76.664,0-138.812-62.063-138.812-138.624 V181.687c0-76.56,62.147-138.624,138.81-138.624l0,0c76.664,0,138.811,62.064,138.811,138.624V418.313L450.545,418.313z', {
                fill: 'red',
                left: 100,
                top: 100
            });
            var scale = 100 / path.width;
            path.set({
                left: fabric.util.getRandomInt(0 + 50, 700 - 50),
                top: fabric.util.getRandomInt(0 + 50, 500 - 50),
                fill: '#' + getRandomColor(),
                radius: 50,
                opacity: 1.0,
                padding: 0,
                zindex: ++z_index,
                name: 'shape10'
            });

            canvas.add(path);
            localStorage.setItem("SVG", "10");

            canvasModified();
            canvas.renderAll();
        }

        //document.getElementById("shape-add-hexagon").onclick = drawHexagon_shape;
        //function drawHexagon_shape() {
        //    pushUndo();
        //    menu_edit_flag = false;
        //    $(".modalWork_area").hide();
        //    $('header, main').css('pointer-events', '');
        //    $(".spapeItem").removeClass('active');
        //    var polygon = [{ x: 850, y: 75 },
        //    { x: 958, y: 137.5 },
        //    { x: 958, y: 262.5 },
        //    { x: 850, y: 325 },
        //    { x: 742, y: 262.5 },
        //    { x: 742, y: 137.5 },
        //    ];
        //    canvas.add(new fabric.Polygon(polygon, {
        //        left: fabric.util.getRandomInt(0 + 50, 700 - 50),
        //        top: fabric.util.getRandomInt(0 + 50, 500 - 50),
        //        fill: '#' + getRandomColor(),
        //        radius: 50,
        //        opacity: 1.0,
        //        padding: 0,
        //        originX: 'center',
        //        originY: 'center',
        //        zindex: ++z_index,
        //        name: 'shape_hexagon'
        //    }));
        //    canvasModified();
        //    canvas.renderAll();
        //}

        //    document.getElementById("shape-add-heartcard").onclick = drawHeartCard_shape;
        //    function drawHeartCard_shape() {
        //        pushUndo();
        //        menu_edit_flag = false;
        //        $(".modalWork_area").hide();
        //        $('header, main').css('pointer-events', '');
        //        $(".spapeItem").removeClass('active');
        //        var path = new fabric.Path('M 272.70141,238.71731 \
        //C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
        //C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
        //C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
        //C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
        //C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
        //C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
        //z ');
        //        var scale = 100 / path.width;
        //        path.set({
        //            left: fabric.util.getRandomInt(0 + 50, 700 - 50),
        //            top: fabric.util.getRandomInt(0 + 50, 500 - 50),
        //            fill: '#' + getRandomColor(),
        //            radius: 50,
        //            opacity: 1.0,
        //            padding: 0,
        //            scaleX: scale,
        //            scaleY: scale,
        //            originX: 'center',
        //            originY: 'center',
        //            zindex: ++z_index,
        //            name: 'shape_heartcard'
        //        });
        //        canvas.add(path);
        //        canvasModified();
        //        canvas.renderAll();
        //    }

        /* NEW SHAPS END */

        function remove_object() {
            pushUndo();
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveGroup();
            if (activeObject || activeGroup) {
                if (confirm('Sure to delete selected object?')) {
                    if (activeObject) {
                        canvas.remove(activeObject);
                    } else if (activeGroup) {
                        var objectsInGroup = activeGroup.getObjects();
                        canvas.discardActiveGroup();
                        objectsInGroup.forEach(function (object) {
                            canvas.remove(object);
                        });
                    }
                    canvasModified();
                    menu_edit_flag = false;
                    $(".pop_container").hide();
                }
            }
        };

        document.getElementById("btn-clear").onclick = clear_canvas;
        function clear_canvas() {
            if (confirm('Are you sure?')) {
                pushUndo();
                canvas.clear();
                var background_color = $("#hdn_background_color").val();
                canvas.backgroundColor = background_color;
                canvasModified();
                addBlankObject();
                menu_edit_flag = false;
                $(".pop_container").hide();
            }
        }

        document.getElementById("btn-grid").onclick = gridView;
        function gridView() {
            if (overlayImage) {
                canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
                overlayImage = false;
            }
            else {
                canvas.setOverlayImage('/images/canvasImg/a-grid.png', canvas.renderAll.bind(canvas));
                overlayImage = true;
            }
        }
        canvas.on('object:moving', onObjectMove);
        function onObjectMove(e) {
            var activeObj = canvas.getActiveObject();
            if (activeObj != null) {
                if (activeObj.angle < 11) {
                    drawAlignLine();
                }
            }
            
        }
        var rulerLine;
        var activeObjTop = 0;
        var activeObjLeft = 0;
        function drawAlignLine() {
            canvas.remove(rulerLine);
            var activeObj = canvas.getActiveObject();
            var objMoveto = 'top';
            if (activeObj.top > activeObjTop) {
                objMoveto = 'buttom';
            }
            else if (activeObj.top < activeObjTop) {
                objMoveto = 'top';
            }
            else if (activeObj.left > activeObjLeft) {
                objMoveto = 'right';
            }
            else {
                objMoveto = 'left';
            }
            //console.log(objMoveto);
            activeObjTop = activeObj.top;
            activeObjLeft = activeObj.left;

            if (objMoveto == 'top') {
                if (activeObj.originX == "center") {
                    var cordinateX1 = 0;
                    var cordinateX2 = Math.round(activeObj.top - ((activeObj.height * activeObj.scaleY) / 2));
                    var cordinateY1 = canvas.width;
                    var cordinateY2 = Math.round(activeObj.top - ((activeObj.height * activeObj.scaleY) / 2));
                }
                else {
                    var cordinateX1 = 0;
                    var cordinateX2 = activeObj.top;
                    var cordinateY1 = canvas.width;
                    var cordinateY2 = activeObj.top;
                }
            }

            if (objMoveto == 'buttom') {
                if (activeObj.originX == "center") {
                    var cordinateX1 = 0;
                    var cordinateX2 = Math.round(activeObj.top + ((activeObj.height * activeObj.scaleY) / 2));
                    var cordinateY1 = canvas.width;
                    var cordinateY2 = Math.round(activeObj.top + ((activeObj.height * activeObj.scaleY) / 2));
                }
                else {
                    var cordinateX1 = 0;
                    var cordinateX2 = Math.round(activeObj.top + (activeObj.height * activeObj.scaleY));
                    var cordinateY1 = canvas.width;
                    var cordinateY2 = activeObj.top + (activeObj.height * activeObj.scaleY);
                }
            }

            if (objMoveto == 'left') {
                if (activeObj.originX == "center") {
                    var cordinateX1 = Math.round(activeObj.left - ((activeObj.width * activeObj.scaleX) / 2));
                    var cordinateX2 = 0;
                    var cordinateY1 = Math.round(activeObj.left - ((activeObj.width * activeObj.scaleX) / 2));
                    var cordinateY2 = canvas.height;
                }
                else {
                    var cordinateX1 = activeObj.left;
                    var cordinateX2 = 0;
                    var cordinateY1 = activeObj.left;
                    var cordinateY2 = canvas.height;
                }
            }

            if (objMoveto == 'right') {
                if (activeObj.originX == "center") {
                    var cordinateX1 = Math.round(activeObj.left + ((activeObj.width * activeObj.scaleX) / 2));
                    var cordinateX2 = 0;
                    var cordinateY1 = Math.round(activeObj.left + ((activeObj.width * activeObj.scaleX) / 2));
                    var cordinateY2 = canvas.height;
                }
                else {
                    var cordinateX1 = Math.round(activeObj.left + (activeObj.width * activeObj.scaleX));
                    var cordinateX2 = 0;
                    var cordinateY1 = Math.round(activeObj.left + (activeObj.width * activeObj.scaleX));
                    var cordinateY2 = canvas.height;
                }
            }
            var line = new fabric.Line([cordinateX1, cordinateX2, cordinateY1, cordinateY2], {
                stroke: '#00ffff',
                padding: 1,
                strokeWidth: 1,
                scale: 1,
                zindex: ++z_index
            });
            rulerLine = line;
            canvas.add(line);
        }
        canvas.on('mouse:up', onMouseUp);
        function onMouseUp() {
            canvas.remove(rulerLine);
        }







        /* TEXT EDIT START */
        var supportsInputOfType = function (type) {
            return function () {
                var el = document.createElement('input');
                try {
                    el.type = type;
                }
                catch (err) { }
                return el.type === type;
            };
        };

        var activeObjectButtons = [];

        var opacityEl = document.getElementById('opacity');
        //if (opacityEl) {
        //    activeObjectButtons.push(opacityEl);
        //}
        var colorEl = document.getElementById('color');
        if (colorEl) {
            //alert('color');
            activeObjectButtons.push(colorEl);
        }

        for (var i = activeObjectButtons.length; i--;) {
            activeObjectButtons[i].disabled = true;
        }

        canvas.on('object:selected', onObjectSelected);

        function onObjectSelected(e) {
            var selectedObject = e.target;

            for (var i = activeObjectButtons.length; i--;) {
                activeObjectButtons[i].disabled = false;
            }







            //Indranil changes

            // Assume activeObject is the selected object in the canvas
            //var activeObject = canvas.getActiveObject();

            // Check if the object is selected and has a gradient fill
            if (selectedObject && selectedObject.fill instanceof fabric.Gradient) {
                // Extract the color stops from the active object's gradient




                $("#div_shape_editor").hide();
                $("#div_menu_text_editor").hide();
                //$("#div_text_text_editor").show();
                $("#div_shape_sec_bot_top_head").hide();
                $("#div_menu_sec_bot_top_head").show();
                $("#div_text_sec_bot_top_head").show();
                $("#div_shapesvg_sec_bot_top_head").hide();
                $("#div_my_images_sec_bot_top_head").hide();
                $("#div_my_images").hide();
                $("#div_pos_images_sec_bot_top_head").hide();
                $("#div_pos_images").hide();

                $("#div_main_editor_options").show();
                $("#div_images_editor_gallery").hide();
                $("#div_images_sec_bot_top_head").hide();
                $("#div_text_text_editor").show();
                $("#menu-item-properties").hide();
                $("#menu-item-effect").hide();
                $("#div_Chk_gradient_show").show();
                document.getElementById("show_gradient_text").checked = true;



                //var colorStops = selectedObject.fill.colorStops;
                var gradient = selectedObject.fill;
                console.log(gradient.type);
                var colorStops = gradient.colorStops;
                console.log('Color Stop Positions:', colorStops.map(stop => stop.position));
                console.log('Color Stop Colors:', colorStops.map(stop => stop.color));

                $('#div_gradient_show').show();
                document.getElementById("show_gradient_text").checked = true;
                // Assume colorStops is an array with two color stops
                if (colorStops.length >= 2) {
                    // Extract the colors from the color stops
                    var color1 = colorStops[0].color;
                    if (selectedObject.type === 'path' || selectedObject.type === 'circle' || selectedObject.type === 'rect' || selectedObject.type === 'triangle' || selectedObject.type === 'polygon') {
                        var color2 = colorStops[1].color;
                    }
                    else if (selectedObject.type === 'path-group') {
                        var firstPath = selectedObject.paths[0];
                        var gradient = firstPath.fill;

                        var colorStops = gradient.colorStops;

                        var color1 = colorStops[0].color;
                        var color2 = colorStops[1].color;
                        //var color3 = colorStops[2].color;
                        // Assign these colors to your two IDs or use them as needed
                        var id1 = 'shape_gradient_color_1';
                        var id2 = 'shape_gradient_color_2';

                        // Example: Assign the colors to the elements with the specified IDs
                        document.getElementById(id1).value = color1;
                        document.getElementById(id2).value = color2;
                    }
                    else {
                        //var color2 = colorStops[90].color;

                        //update 28-11-2024 Sudip
                        var color2 = colorStops[1].color;
                        //update 28-11-2024 Sudip End

                    }

                    //var color3 = colorStops[2].color;
                    // Assign these colors to your two IDs or use them as needed
                    var id1 = 'shape_gradient_color_1';
                    var id2 = 'shape_gradient_color_2';

                    // Example: Assign the colors to the elements with the specified IDs
                    document.getElementById(id1).value = color1;
                    document.getElementById(id2).value = color2;
                } else {
                    console.log('The selected object must have at least two color stops.');
                }
            } else {
                $('#div_gradient_show').hide();
                document.getElementById("show_gradient_text").checked = false;
                console.log('The selected object must have a gradient fill.');
            }







        }

        canvas.on('selection:cleared', function (e) {
            for (var i = activeObjectButtons.length; i--;) {
                activeObjectButtons[i].disabled = true;
            }
        });




        //// Indranil changes

        var text = 'Add your text here';
        document.getElementById('add-text').onclick = function () {
            $(".txt-img").removeClass('menu-active');
            pushUndo();
            menu_edit_flag = false;
            $(".pop_container").hide();
            //$('header, main').css('pointer-events', '');
            var textSample = new fabric.Text(text, {
                //left: getRandomInt(50, 200),
                //top: $(window).scrollTop() + 150,
                left: 100,
                top: 100,
                fontFamily: 'Helvetica',
                angle: 0,
                fill: '#ff00a8',
                scaleX: 0.5,
                scaleY: 0.5,
                fontWeight: '',
                originX: 'left',
                cornersize: 10,
                padding: 0,
                lineHeight: 1.00,
                hasRotatingPoint: true,
                lockUniScaling: true
            });
            textSample.scale(multiplier_ratio);

            textSample.set('scaleX', textSample.scaleX - 0.00000001);
            textSample.set('scaleY', textSample.scaleY - 0.00000001);

            canvas.add(textSample);
            canvasModified();
            //textSample.setActive(true);
            //document.getElementById('text_edit_box').focus();
        };

        

        ///Haraprasad Added
        document.getElementById('add-curvetext').onclick = function () {
            var activeObject = canvas.getActiveObject();
            $(".txt-img").removeClass('menu-active');
            pushUndo();
            menu_edit_flag = false;
            $(".pop_container").hide();
            var CurvedText = new fabric.CurvedText(text, {
                //left: getRandomInt(50, 200),
                //top: $(window).scrollTop() + 150,
                type:'curvedText',
                left: 100,
                top: 100,
                textAlign: 'center',
                fontSize: 32,
                spacing: 20,
                fontFamily: 'Helvetica',
                //angle: 0,
                //fill: clr,

                //left: getRandomInt(50, 200),
                //top: $(window).scrollTop() + 150,
                //fontFamily: 'Helvetica',
                fill: '#ff00a8',
                //scaleX: 0.5,
                //scaleY: 0.5,
                fontWeight: '',
                originX: 'left',
                cornersize: 10,
                padding: 0,
                lineHeight: 1.00,
                hasRotatingPoint: true,
                lockUniScaling: true,
                //backgroundColor: clr,
                radius: 100,
                angle: 0,
                //effect:'largeToSmallBottom'
                //spacing: 20 //Haraprasad dt:04.12.2023
                //fontFamily: 'Arial'
            });
            canvas.add(CurvedText).renderAll();
            canvas.setActiveObject(canvas.item(canvas.getObjects().length - 1));
            canvasModified();
        };
        //Indranil Added



        //canvas.on('object:rotating', function (options) {
        //    const modifiedObject = options.target;


        //    //if (modifiedObject.name === 'shape_circle' || modifiedObject.name === 'shape_blob' || modifiedObject.name === 'shape_rounded_rectangle'
        //    //    || modifiedObject.name === 'shape4' || modifiedObject.name === 'shape5' || modifiedObject.name === 'shape6' ||
        //    //    modifiedObject.name === 'shape7' || modifiedObject.name === 'shape8' || modifiedObject.name === 'shape9' ||
        //    //    modifiedObject.name === 'shape10') {

        //    //    if (modifiedObject) {
        //    //        const currentAngle = modifiedObject.angle;

        //    //        if (currentAngle > 0 && currentAngle <= 90) {
        //    //            modifiedObject.setAngle(90);

        //    //        } else if (currentAngle > 90 && currentAngle <= 180) {
        //    //            modifiedObject.setAngle(180);

        //    //            // Get the active object from the canvas
        //    //            const activeObject = canvas.getActiveObject();



        //    //        } else if (currentAngle > 180 && currentAngle <= 270) {
        //    //            modifiedObject.setAngle(270);
        //    //        } else //if (currentAngle === 360 || currentAngle === 0) {
        //    //            modifiedObject.setAngle(0);


        //    //        if (currentAngle > 315 && currentAngle <= 360)
        //    //            modifiedObject.setAngle(315);
        //    //        else if (currentAngle > 270 && currentAngle <= 315)
        //    //            modifiedObject.setAngle(270);
        //    //        else if (currentAngle > 225 && currentAngle <= 270)
        //    //            modifiedObject.setAngle(225);
        //    //        else if (currentAngle > 180 && currentAngle <= 225)
        //    //            modifiedObject.setAngle(180);
        //    //        else if (currentAngle > 135 && currentAngle <= 180)
        //    //            modifiedObject.setAngle(135);
        //    //        else if (currentAngle > 90 && currentAngle <= 135)
        //    //            modifiedObject.setAngle(90);
        //    //        else if (currentAngle > 45 && currentAngle <= 90)
        //    //            modifiedObject.setAngle(45);
        //    //        else
        //    //            modifiedObject.setAngle(0);

        //    //        canvas.renderAll();
        //    //    }
        //    //}
        //});




        localStorage.setItem("object", "");
        $(document).on('click', '.design_shape img', function () {


            if (localStorage.getItem("SVG") == "1") {


                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M200,0 A200,200 0 1,1 0,200 A200,200 0 0,1 200,0 Z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });





                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];

                    //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                    //Haraprasad end dt:20.03.2024

                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350, // Adjust if needed
                        offsetY: -400, // Adjust if needed
                        //patternTransform: patternTransform,
                        angle: 0,
                    });






                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.4, 0, 0, .4, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape_circle';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };



            }
            


            else if (localStorage.getItem("SVG") == "2") {


                const activeObject = canvas.getActiveObject();
                const positionLeft = activeObject.getLeft();
                const positionTop = activeObject.getTop();


                const svgPath = new fabric.Path("M146.427,300.683c0,0,84.368-3.616,106.243-63.775C274.545,176.748,296.917-0.074,453.637,0  c127.219,0.06,283.452,95.174,232.865,323.505c-50.588,228.328-301.85,85.798-381.476,195.938  C203.589,659.75,80.194,604.959,30.211,549.521C-15.565,498.746-31.314,333.496,146.427,300.683z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: positionTop,
                    left: positionLeft,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }
                // Load an image
                const img = new Image();
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: .7, // You can adjust the scale as needed
                        scaleY: .7,
                        left: 10, // Set the initial position
                        top: 10,
                    });

                    // Create a Fabric.js group containing the SVG path and the image
                    //const group = new fabric.Group([svgPath, fabricImage], {
                    //    selectable: true, // Make the group selectable
                    //});

                    // Set the image as the fill pattern for the object



                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                    //Haraprasad Add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.7 * Math.cos(shapeAngle), -0.7 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.7 * Math.sin(shapeAngle), 0.7 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024

                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -200,
                    //    offsetY: -300,
                    //    patternTransform: patternTransform,
                    //    angle: 0,
                    //});

                    activeObject.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -200,
                        offsetY: -300,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });



                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -200,
                    //    offsetY: -300,
                    //    patternTransform: [.7, 0, 0, .7, 0, 0]
                    //});
                    //svgPath.set({ fill: this.color });
                    // Add the group to the canvas
                    //canvas.remove(activeObject);
                    //canvas.add(svgPath);
                    canvas.setActiveObject(activeObject);
                    // Render the canvas to update the display
                    activeObject.name = 'shape_blob';
                    canvas.renderAll();
                };
            }

            else if (localStorage.getItem("SVG") == "3") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M600,150H200c-70,0-125,55-125,125v250c0,70,55,125,125,125h400c70,0,125-55,125-125V275C725,205,670,150,600,150z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });



                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.7 * Math.cos(shapeAngle), -0.7 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.7 * Math.sin(shapeAngle), 0.7 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350,
                    //    offsetY: -400,
                    //    patternTransform: patternTransform,
                    //    angle: 0,
                    //});



                    activeObject.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });





                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    //canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    //canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(activeObject);

                    activeObject.name = 'shape_rounded_rectangle';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }



            else if (localStorage.getItem("SVG") == "4") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M218.557,482.817c0,0-14.196-21.024-57.146-25.339c-42.881-4.307-95.156-17.707-114.292-67.929 c-12.214-32.055,5.742-71.807,29.507-93.647c18.467-16.972,41.259-27.507,65.198-34.301c34.911-9.909,62.91-21.741,85.194-50.854 c22.283-29.112,14.396-107.745,123.622-138.735c115.909-32.886,190.307,49.599,205.682,108.421 c11.356,43.454,3.234,118.869-47.71,147.979c-50.942,29.111-88.861,41.634-92.904,85.042c-4.043,43.406-8.909,80.805-51.216,108.9 C334.677,542.156,270.851,546.973,218.557,482.817z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });



                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });







                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape4';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }


            else if (localStorage.getItem("SVG") == "5") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M535.007,296.759c-7.449,15.923-26.074,21.577-32.72,38.028c-14.136,35.021,41.552,59.765,12.3,97.33 c-13.218,16.979-31.097,10.981-48.277,18.845c-14.489,6.631-19.939,24.28-31.732,34.299c-24.574,20.885-56.176,21.569-86.221,16.579 c-28.617-4.754-52.43,10.198-75.514,25.449c-38.204,25.242-77.413,33.418-121.144,18.723 c-40.395-13.574-67.605-45.676-80.827-83.893c-10.149-29.338-12.056-62.278-5.353-93.205c9.795-45.188,34.878-89.667,77.158-111.527 c39.194-20.265,89.696-24.284,115.411-65.097c18.53-29.413,26.115-65.371,46.409-93.461c30.271-41.901,96.899-61.459,143.489-47.832 c46.928,13.727,94.959,66.016,79.699,124.706c-3.222,12.387-14.632,18.197-21.389,28.094c-17.813,26.077,9.268,33.219,23.366,47.954 C541.022,263.62,541.748,282.345,535.007,296.759z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });





                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });




                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape5';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }




            else if (localStorage.getItem("SVG") == "6") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M297.586,60.58c0,0,188.532-9.727,243.348,164.238c54.821,173.962-118.356,296.256-170.255,306.488 c-39.046,7.701-160.071,30.698-239.743-62.13C51.26,376.353,15.447,259.396,87.078,157.794 C87.077,157.794,144.091,58.39,297.586,60.58z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });




                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];

                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });




                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape6';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }



            else if (localStorage.getItem("SVG") == "7") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M472.424,492.894c-74.45,39.653-131.9-2.423-177.215-48.549c-45.313-46.125-50.167-63.929-128.657-93.059 c-78.494-29.131-90.631-48.547-110.86-88.199C35.462,223.438,32.224,119.054,219.147,95.585 c186.922-23.469,262.171,57.453,262.171,57.453C605.935,270.369,546.866,453.244,472.424,492.894z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });



                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });



                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape7';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }



            else if (localStorage.getItem("SVG") == "8") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M555.223,300c0,126.137-102.034,228.391-227.897,228.391c-64.681,0-123.022-27.046-164.5-70.417 c-88.994-51.604-118.047-10.412-118.047-10.412c1.855-2.627,0.159-13.195,0.217-16.575c0.701-41.079,4.416-82.003,14.479-121.926 c7.765-30.797,19.292-61.125,34.156-89.211c11.739-22.175,27.281-42.119,43.605-61.084c12.684-14.734,27.849-25.827,43.045-37.737 c8.681-6.805,18.437-12.502,28.233-17.514C245.37,84.65,285.575,71.61,327.33,71.61C453.195,71.61,555.223,173.864,555.223,300z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });



                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024
                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });




                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape8';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }



            else if (localStorage.getItem("SVG") == "9") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M553.378,46.5H299.995c-140,0-253.501,113.497-253.501,253.504c0,140.003,113.502,253.496,253.501,253.496 c137.219,0,248.889-109.046,253.285-245.202l0.098-3.668c0.029-1.544,0.119-3.073,0.119-4.625c0-1.552,0.022-3.704,0-5.248 L553.378,46.5z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });




                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];
                     //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.6 * Math.cos(shapeAngle), -0.6 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.6 * Math.sin(shapeAngle), 0.6 * Math.cos(shapeAngle),
                        -1, 1
                    ];
                     //Haraprasad end dt:20.03.2024

                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });





                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.7, 0, 0, .7, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape9';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }




            else if (localStorage.getItem("SVG") == "10") {

                const activeObject = canvas.getActiveObject();
                const svgPath = new fabric.Path("M450.545,418.313c0,76.56-62.146,138.624-138.809,138.624l0,0c-76.664,0-138.812-62.063-138.812-138.624 V181.687c0-76.56,62.147-138.624,138.81-138.624l0,0c76.664,0,138.811,62.064,138.811,138.624V418.313L450.545,418.313z", {
                    fill: this.backgroundColor,
                    stroke: this.color,
                    strokeWidth: 0,
                    selectable: true,
                    scaleX: activeObject.scaleX,
                    scaleY: activeObject.scaleY,
                    top: activeObject.top,
                    left: activeObject.left,
                    angle: activeObject.angle,
                });
                const activeObjectType = canvas.getActiveObject().type;
                if (svgPath.fill instanceof fabric.Pattern) {
                    // Remove the existing image fill (set it to null)
                    svgPath.setPatternFill(null);
                }

                // Load an image
                const img = this;
                img.src = this.src.replace("t_", ""); // Replace 'image.jpg' with the path to your image

                // Wait for the image to load
                img.onload = function () {
                    // Create a Fabric.js image object
                    const fabricImage = new fabric.Image(img, {
                        scaleX: 2, // Adjust the scale as needed (e.g., 0.5 for 50% size)
                        scaleY: 2,
                        left: 0, // Position the image at the center horizontally
                        top: 0, // Position the image at the center vertically
                    });




                    //const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    //// Calculate the pattern transform matrix
                    //const patternTransform = [
                    //    Math.cos(shapeAngle),  // Scale factor for X
                    //    -Math.sin(shapeAngle),  // Skew factor for X
                    //    Math.sin(shapeAngle), // Skew factor for Y
                    //    Math.cos(shapeAngle),  // Scale factor for Y
                    //    -1,                   // Horizontal translation
                    //    1                    // Vertical translation
                    //];

                    //Haraprasad add dt:20.03.2024
                    const shapeAngle = (svgPath.angle * Math.PI) / 180;

                    // Adjust scale factor in patternTransform matrix
                    const patternTransform = [
                        0.5 * Math.cos(shapeAngle), -0.5 * Math.sin(shapeAngle), // Scale factor for X and Y
                        0.5 * Math.sin(shapeAngle), 0.5 * Math.cos(shapeAngle),
                        -1, 1
                    ];

                    // Set the image as the fill pattern for the object with the dynamic patternTransform
                    svgPath.setPatternFill({
                        source: img,
                        repeat: 'no-repeat',
                        offsetX: -350,
                        offsetY: -400,
                        //patternTransform: patternTransform,
                        angle: 0,
                    });

                     //Haraprasad end dt:20.03.2024





                    // Set the image as the fill pattern for the object
                    //svgPath.setPatternFill({
                    //    source: img,
                    //    repeat: 'no-repeat',
                    //    offsetX: -350, // Adjust if needed
                    //    offsetY: -400, // Adjust if needed
                    //    patternTransform: [.5, 0, 0, .5, 0, 0], // Adjust scale here as well
                    //});

                    // Remove the existing object from the canvas
                    canvas.remove(activeObject);

                    // Add the SVG path with the image fill to the canvas
                    canvas.add(svgPath);

                    // Set the active object to the newly added SVG path
                    canvas.setActiveObject(svgPath);

                    svgPath.name = 'shape10';
                    // Render the canvas to update the display
                    canvas.renderAll();
                };


            }
        });


        document.getElementById("chkCurve").onchange = function (e) {
            var chk = document.getElementById("chkCurve");

            if (chk.checked) {
                $('#div_curve_text_desc').slideDown();
                var activeObject = canvas.getActiveObject();
                if (activeObject) {
                    if (activeObject.radius === undefined)
                        activeObject.radius = 100;
                    CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, 20).set({ fill: activeObject.get('fill') });
                    canvas.getActiveObject().set({ top: activeObject.top });
                    canvas.getActiveObject().set({ left: activeObject.left });
                    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    canvas.renderAll();
                }
            }
            else {
                $('#div_curve_text_desc').slideUp();
                var activeObject = canvas.getActiveObject();
                if (activeObject) {

                    $(".txt-img").removeClass('menu-active');
                    pushUndo();
                    menu_edit_flag = false;

                    //$(".pop_container").hide();
                    //$('header, main').css('pointer-events', '');
                    var textSample = new fabric.Text(activeObject.text, {
                        left: 100,
                        top: 100,
                        fontFamily: 'Helvetica',
                        angle: 0,
                        fill: '#ff00a8',
                        scaleX: 0.5,
                        scaleY: 0.5,
                        fontWeight: '',
                        originX: 'left',
                        cornersize: 10,
                        padding: 0,
                        lineHeight: 1.00,
                        hasRotatingPoint: true,
                        lockUniScaling: true
                    });

                    canvas.remove(activeObject);
                    textSample.scale(multiplier_ratio);

                    textSample.set('scaleX', textSample.scaleX - 0.00000001);
                    textSample.set('scaleY', textSample.scaleY - 0.00000001);

                    canvas.add(textSample);

                    canvas.setActiveObject(canvas.item(canvas.getObjects().length - 1));
                    textSample.set({ top: activeObject.top });
                    textSample.set({ left: activeObject.left });
                    canvas.renderAll();
                    canvasModified();
                    //textSample.setActive(true);
                    //document.getElementById('text_edit_box').focus();
                }
            }
        }


        function CreateCurveText(obj, clr, rad, angle, fontname, spacing) {
            canvas.remove(obj);

            var CurvedText = new fabric.CurvedText(obj.text, {  // Haraprasad date- 08.11.2023
                //width: 100,
                //height: 50,
                left: 100,
                top: 100,
                textAlign: 'center',
                fontSize: obj.fontSize,
                spacing: 20,
                fontFamily: fontname,
                //angle: 0,
                //fill: clr,

                //left: getRandomInt(50, 200),
                //top: $(window).scrollTop() + 150,
                //fontFamily: 'Helvetica',
                fill: clr,
                //scaleX: 0.5,
                //scaleY: 0.5,
                fontWeight: '20',
                originX: 'left',
                cornersize: 10,
                padding: 0,
                lineHeight: 1.00,
                hasRotatingPoint: true,
                lockUniScaling: true,
                //backgroundColor: clr,
                radius: rad,
                angle: angle,
                spacing: spacing,
                strokeWidth: obj.strokeWidth,
                stroke: obj.stroke
                //fontFamily: 'Arial'
            });

            //var CurvedText = new fabric.CurvedText($("#text").val(), {
            //    //width: 100,
            //    //height: 50,
            //    left: 100,
            //    top: 100,
            //    textAlign: 'center',
            //    fontSize: 30,
            //    spacing: 20,
            //    fontFamily: fontname,
            //    //angle: 0,
            //    //fill: clr,

            //    //left: getRandomInt(50, 200),
            //    //top: $(window).scrollTop() + 150,
            //    //fontFamily: 'Helvetica',
            //    fill: clr,
            //    //scaleX: 0.5,
            //    //scaleY: 0.5,
            //    fontWeight: '20',
            //    originX: 'left',
            //    cornersize: 10,
            //    padding: 0,
            //    lineHeight: 1.00,
            //    hasRotatingPoint: true,
            //    lockUniScaling: true,
            //    //backgroundColor: clr,
            //    radius: rad,
            //    angle: angle,
            //    spacing: spacing
            //    //fontFamily: 'Arial'
            //});
            //CurvedText.set('scaleX', CurvedText.scaleX - 0.00000001);
            //CurvedText.set('scaleY', CurvedText.scaleY - 0.00000001);
            canvas.add(CurvedText).renderAll();
            canvas.setActiveObject(canvas.item(canvas.getObjects().length - 1));
            canvasModified();
            return CurvedText;
        }

        /// Haraprasad add dt:28.11.2023

        function AddCurveText(obj, clr, rad, angle, fontname, spacing, fontweight, fontStyle) {
            canvas.remove(obj);

            var CurvedText = new fabric.CurvedText(obj.text, {  // Haraprasad date- 08.11.2023
                //width: 100,
                //height: 50,
                left: 100,
                top: 100,
                textAlign: 'center',
                fontSize: 30,
                spacing: 20,
                fontFamily: fontname,
                //angle: 0,
                //fill: clr,

                //left: getRandomInt(50, 200),
                //top: $(window).scrollTop() + 150,
                //fontFamily: 'Helvetica',
                fill: clr,
                //scaleX: 0.5,
                //scaleY: 0.5,
                fontWeight: fontweight,
                originX: 'left',
                cornersize: 10,
                padding: 0,
                lineHeight: 1.00,
                hasRotatingPoint: true,
                lockUniScaling: true,
                //backgroundColor: clr,
                radius: rad,
                angle: angle,
                spacing: spacing,
                fontStyle: fontStyle,
                strokeWidth: obj.strokeWidth,
                stroke: obj.stroke
                //fontFamily: 'Arial'
            });

            canvas.add(CurvedText).renderAll();
            canvas.setActiveObject(canvas.item(canvas.getObjects().length - 1));
            canvasModified();
            return CurvedText;
        }


        document.getElementById("template_curve_text_radius").oninput = function (event) {
            var chk = document.getElementById("chkCurve");
            var lineBarValue = parseInt(event.target.value);
            var newRadius = 30 + (lineBarValue / 255) * 70; // Adjust radius range

            if (chk.checked) {
                var activeObject = canvas.getActiveObject();
                if (activeObject) {
                    changeRadius(activeObject, lineBarValue);
                }
            }
            canvas.renderAll();

        }
        //Haraprasad add dt:02.12.2023
        $('#template_curve_text_radius_plus').on('click',
            function () {

                var chk = document.getElementById("chkCurve");
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();

                if (activeObject || activeGroup) {
                    var lineBarValue = $("#template_curve_text_radius").val();
                    lineBarValue++;
                    if (lineBarValue <= 400) {
                        var newRadius = 30 + (lineBarValue / 255) * 70; // Adjust radius range

                        if (chk.checked) {
                            //var activeObject = canvas.getActiveObject();
                            if (activeObject) {
                                changeRadius(activeObject, lineBarValue);
                            }
                        }
                        $("#template_curve_text_radius").val(lineBarValue);
                    }
                }
                canvas.renderAll();
            }
        );
        $('#template_curve_text_radius_minus').on('click',
            function () {

                var chk = document.getElementById("chkCurve");
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();

                if (activeObject || activeGroup) {
                    var lineBarValue = $("#template_curve_text_radius").val();
                    lineBarValue--;
                    if (lineBarValue >= 100) {
                        var newRadius = 30 + (lineBarValue / 255) * 70; // Adjust radius range

                        if (chk.checked) {
                            //var activeObject = canvas.getActiveObject();
                            if (activeObject) {
                                changeRadius(activeObject, lineBarValue);
                            }
                        }
                        $("#template_curve_text_radius").val(lineBarValue);
                    }
                }
                canvas.renderAll();
            }
        );
        //Haraprasad end dt:02.12.2023
        document.getElementById("template_curve_text_spacing").oninput = function (event) {
            var chk = document.getElementById("chkCurve");
            var lineBarValue = parseInt(event.target.value);
            var newSpacing = 30 + (lineBarValue / 255) * 70; // Adjust radius range

            if (chk.checked) {
                var activeObject = canvas.getActiveObject();
                if (activeObject) {
                    changeSpacing(activeObject, lineBarValue);
                }
            }
            canvas.renderAll();

        }
        //Haraprasad add dt:02.12.2023
        $('#template_curve_text_spacing_plus').on('click',
            function () {

                var chk = document.getElementById("chkCurve");
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();

                if (activeObject || activeGroup) {
                    var lineBarValue = $("#template_curve_text_spacing").val();
                    lineBarValue++;
                    if (lineBarValue <= 200) {
                        var newSpacing = 30 + (lineBarValue / 255) * 70; // Adjust radius range

                        if (chk.checked) {
                            //var activeObject = canvas.getActiveObject();
                            if (activeObject) {
                                changeSpacing(activeObject, lineBarValue);
                            }
                        }
                        $("#template_curve_text_spacing").val(lineBarValue);
                    }
                }
                canvas.renderAll();
            }
        );

        $('#template_curve_text_spacing_minus').on('click',
            function () {

                var chk = document.getElementById("chkCurve");
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();

                if (activeObject || activeGroup) {
                    var lineBarValue = $("#template_curve_text_spacing").val();
                    lineBarValue--;
                    if (lineBarValue >= -200) {
                        var newSpacing = 30 + (lineBarValue / 255) * 70; // Adjust radius range

                        if (chk.checked) {
                            //var activeObject = canvas.getActiveObject();
                            if (activeObject) {
                                changeSpacing(activeObject, lineBarValue);
                            }
                        }
                        $("#template_curve_text_spacing").val(lineBarValue);
                    }
                }
                canvas.renderAll();
            }
        );


        //Haraprasad end dt:02.12.2023


        //document.getElementById("template_curve_text_rotation").oninput = function (event) {
        //    var chk = document.getElementById("chkCurve");
        //    var lineBarValue = parseInt(event.target.value);
        //    var newSpacing = 30 + (lineBarValue / 255) * 70; // Adjust radius range

        //    if (chk.checked) {
        //        var activeObject = canvas.getActiveObject();
        //        rotateCurveTextCharacters(activeObject,lineBarValue);
        //        //activeObject.set({ angle: lineBarValue });
        //        //canvas.renderAll();
        //    }
        //}

        //function rotateCurveTextCharacters(activeObject, linebarValue) {
        //    if (activeObject && activeObject.type === 'curvedText') {
        //        var characters = activeObject.getChars();
        //        const angleIncrement = linebarValue;
        //        const center = activeObject.getCenterPoint();
        //        characters.forEach((charObject, index) => {
        //            const currentAngle = charObject.angle || 0; // Get the current angle (default to 0)
        //            const newAngle = currentAngle + angleIncrement;

        //            // Calculate the new position based on the angle
        //            const radius = activeObject.radius;
        //            const radians = fabric.util.degreesToRadians(newAngle);
        //            const x = center.x + radius * Math.cos(radians);
        //            const y = center.y + radius * Math.sin(radians);

        //            charObject.set({ left: x, top: y, angle: newAngle });
        //        });

        //        // Update the angle of the Curve Text object itself
        //        activeObject.set({ text: characters.map(charObject => charObject.text).join('') });
        //        // Update the canvas to see the rotation
        //        canvas.renderAll();
        //    }

        //}
        //function isPointWithinCurvedPath(x, y, curvedText) {
        //    // Calculate the center and radius of the curved path
        //    const centerX = curvedText.left;
        //    const centerY = curvedText.top;
        //    const radius = curvedText.radius;

        //    // Calculate the distance from the point (x, y) to the center of the curved path
        //    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

        //    // Check if the distance is less than or equal to the radius
        //    return distance <= radius;
        //}



        function changeSpacing(activeObject, targetSpace) {
            if (activeObject && activeObject.type === 'curvedText') {
                activeObject.set({ spacing: targetSpace });
                canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                canvas.renderAll();
            }
        }

        //function changeRotation(activeObject, targetSpace) {
        //    if (activeObject && activeObject.type === 'curvedText') {
        //        activeObject.set({ angle: targetSpace });
        //        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
        //        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
        //        canvas.renderAll();
        //    }
        //}
        function changeRadius(activeObject, targetRadius) {
            if (activeObject && activeObject.type === 'curvedText') {
                activeObject.set({ radius: targetRadius });
                canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                canvas.renderAll();
            }
        }


        //if (document.location.search.indexOf('guidelines') > -1) {
        //    initCenteringGuidelines(canvas);
        //    initAligningGuidelines(canvas);
        //}

        var textEl = document.getElementById('text');
        if (textEl) {
            textEl.onfocus = function () {

                var activeObject = canvas.getActiveObject();

                if (activeObject && activeObject.type === 'text') {
                    this.value = activeObject.text;

                }
                else if (activeObject.type === 'curvedText') {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject) {


                        CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                        canvas.getActiveObject().set({ fill: activeObject.get('fill') });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                        canvas.renderAll();

                    }
                    canvas.renderAll();
                }
            };
            textEl.onkeyup = function (e) {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    if (!this.value) {
                        //canvas.discardActiveObject();
                        activeObject.set('text', this.value);
                    }
                    else {
                        activeObject.set('text', this.value);
                    }
                    canvas.renderAll();
                }
                else if (activeObject && activeObject.type === 'curvedText') {
                    activeObject.set('text', this.value);///haraprasad date:11.11.2023
                    CreateCurveText(activeObject, activeObject.color, activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                    canvas.getActiveObject().set({ fill: activeObject.get('fill') });
                    canvas.getActiveObject().set({ top: activeObject.top });
                    canvas.getActiveObject().set({ left: activeObject.left });
                    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    canvas.renderAll();
                }
            };
        }

        //var cmdUnderlineBtn = document.getElementById('text-cmd-underline');
        //if (cmdUnderlineBtn) {
        //    activeObjectButtons.push(cmdUnderlineBtn);
        //    cmdUnderlineBtn.disabled = true;
        //    cmdUnderlineBtn.onclick = function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();
        //        if (activeObject && activeObject.type === 'text') {
        //            if (activeObject.underline === false) {
        //                canvas.getActiveObject().set("underline", true);
        //                cmdUnderlineBtn.classList.add('active');
        //            }
        //            else {
        //                canvas.getActiveObject().set("underline", false);
        //                cmdUnderlineBtn.classList.remove('active');
        //            }
        //            canvas.renderAll();
        //        }
        //    };
        //}

        //var cmdLinethroughBtn = document.getElementById('text-cmd-linethrough');
        //if (cmdLinethroughBtn) {
        //    activeObjectButtons.push(cmdLinethroughBtn);
        //    cmdLinethroughBtn.disabled = true;
        //    cmdLinethroughBtn.onclick = function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();
        //        if (activeObject && activeObject.type === 'text') {
        //            if (activeObject.linethrough === false) {
        //                canvas.getActiveObject().set("linethrough", true);
        //                cmdLinethroughBtn.classList.add('active');
        //            }
        //            else {
        //                canvas.getActiveObject().set("linethrough", false);
        //                cmdLinethroughBtn.classList.remove('active');
        //            }
        //            canvas.renderAll();
        //        }
        //    };
        //}

        //var cmdOverlineBtn = document.getElementById('text-cmd-overline');
        //if (cmdOverlineBtn) {
        //    activeObjectButtons.push(cmdOverlineBtn);
        //    cmdOverlineBtn.disabled = true;
        //    cmdOverlineBtn.onclick = function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();
        //        if (activeObject && activeObject.type === 'text') {
        //            if (activeObject.overline === false) {
        //                canvas.getActiveObject().set("overline", true);
        //                cmdOverlineBtn.classList.add('active');
        //            }
        //            else {
        //                canvas.getActiveObject().set("overline", false);
        //                cmdOverlineBtn.classList.remove('active');
        //            }
        //            canvas.renderAll();
        //        }
        //    };
        //}

        var cmdBoldBtn = document.getElementById('text-cmd-bold'); //Haraprasad dt. 07.11.2023
        if (cmdBoldBtn) {
            activeObjectButtons.push(cmdBoldBtn);
            cmdBoldBtn.disabled = true;
            cmdBoldBtn.onclick = function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text' || activeObject.type === "curvedText") {
                    activeObject.fontWeight = (activeObject.fontWeight == 'bold' ? '' : 'bold');
                    if (activeObject.fontWeight === 'bold') {
                        cmdBoldBtn.classList.add('btn-active');//Haraprasad dt. 07.11.2023
                    }
                    else {
                        cmdBoldBtn.classList.remove('btn-active');//Haraprasad dt. 07.11.2023
                    }
                    if (activeObject.type === 'curvedText') {
                        var obj = AddCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing, activeObject.fontWeight, activeObject.fontStyle);
                        obj.set({ fill: activeObject.fill });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    }
                    canvas.renderAll();
                }

            };
        }

        var cmdItalicBtn = document.getElementById('text-cmd-italic');//Haraprasad dt. 07.11.2023
        if (cmdItalicBtn) {
            activeObjectButtons.push(cmdItalicBtn);
            cmdItalicBtn.disabled = true;
            cmdItalicBtn.onclick = function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text' || activeObject && activeObject.type === 'curvedText') {
                    activeObject.fontStyle = (activeObject.fontStyle == 'italic' ? '' : 'italic');
                    if (activeObject.fontStyle === 'italic') {//Haraprasad dt. 07.11.2023
                        cmdItalicBtn.classList.add('btn-active');//Haraprasad dt. 07.11.2023
                    }
                    else {
                        cmdItalicBtn.classList.remove('btn-active');//Haraprasad dt. 07.11.2023
                    }
                    if (activeObject.type === 'curvedText') {
                        var obj = AddCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing, activeObject.fontWeight, activeObject.fontStyle,);
                        obj.set({ fill: activeObject.fill });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    }
                    canvas.renderAll();
                }
            };
        }

        ////menu editor model form

        //--- Heading Text
        //var menu_editor_menu_heading = document.getElementById('menu_editor_menu_heading');
        //menu_editor_menu_heading.onchange = function () {
        //    var selectedFont = menu_editor_menu_heading.value;
        //    var textareas = document.querySelectorAll(".text-heading.headingText");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn1.addEventListener("click", () => {
            optionMenu1.classList.toggle("active");
        });

        text_options1.forEach(option1 => {
            option1.addEventListener("click", () => {
                const optionTextEl = option1.querySelector(".option-text1");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text1.textContent = selectedName;
                sBtn_text1.className = `sBtn-text1 ${selectedFont}`;

                text_options1.forEach(opt => opt.classList.remove("active")); // remove from all
                option1.classList.add("active");

                optionMenu1.classList.remove("active");

                var textareas = document.querySelectorAll(".text-heading.headingText");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();

                //pushUndo();
                //var activeObject = canvas.getActiveObject();
                //if (activeObject && (activeObject.type === 'text')) {
                //    activeObject.fontFamily = selectedFont;
                //    canvas.renderAll();
                //}
                //else {
                //    activeObject.fontFamily = selectedFont;
                //    var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                //    obj.set({ fill: activeObject.fill });
                //    canvas.getActiveObject().set({ top: activeObject.top });
                //    canvas.getActiveObject().set({ left: activeObject.left });
                //    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                //    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                //    canvas.renderAll();
                //}
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu1.contains(e.target)) {
                optionMenu1.classList.remove("active");
            }
        });

        var menu_editor_menu_heading_font_size = document.getElementById('menu_editor_menu_heading_font_size');
        menu_editor_menu_heading_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_heading_font_size.value;
            var textareas = document.querySelectorAll(".text-heading.headingText");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_heading_font_color = document.getElementById('menu_editor_menu_heading_font_color');
        menu_editor_menu_heading_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_heading_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".text-heading.headingText");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_heading_font_bold = document.getElementById('menu_editor_menu_heading_font_bold');
        menu_editor_menu_heading_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading.headingText");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_heading_font_italic = document.getElementById('menu_editor_menu_heading_font_italic');
        menu_editor_menu_heading_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading.headingText");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_heading_font_caps = document.getElementById('menu_editor_menu_heading_font_caps');
        //menu_editor_menu_heading_font_caps.onclick = function () {
        //    var textareas = document.querySelectorAll(".text-heading.headingText");
        //    textareas.forEach(function (textarea) {
        //        console.log(textarea.style.textDecoration);
        //        if (textarea.value === textarea.value.toUpperCase()) {
        //            textarea.value = textarea.value.toLowerCase();
        //        }
        //        else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
        //            textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
        //            //textarea.value = textarea.value.toLowerCase();
        //        }
        //        else {
        //            textarea.value = textarea.value.toUpperCase();
        //        }
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        // Function to convert a string to title case
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
            });
        }

        // State variable to track button clicks
        let state = 0;

        menu_editor_menu_heading_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading.headingText");
            textareas.forEach(function (textarea) {
                if (state === 0) {
                    // First click: convert all text to lowercase
                    textarea.value = textarea.value.toLowerCase();
                } else if (state === 1) {
                    // Second click: convert all text to title case
                    textarea.value = toTitleCase(textarea.value);
                } else if (state === 2) {
                    // Third click: convert all text to uppercase
                    textarea.value = textarea.value.toUpperCase();
                }
            });

            // Update the state for the next click
            state = (state + 1) % 3;

            // Call the function to update the menu editor properties
            Menueditorpropertiessettingupdate();
        };


        // Description
        //var menu_editor_menu_description = document.getElementById('menu_editor_menu_description');
        //menu_editor_menu_description.onchange = function () {
        //    var selectedFont = menu_editor_menu_description.value;
        //    var textareas = document.querySelectorAll(".sub-heading.addDescription");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn2.addEventListener("click", () => {
            optionMenu2.classList.toggle("active");
        });

        text_options2.forEach(option2 => {
            option2.addEventListener("click", () => {
                const optionTextEl = option2.querySelector(".option-text2");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text2.textContent = selectedName;
                sBtn_text2.className = `sBtn-text2 ${selectedFont}`;

                text_options2.forEach(opt => opt.classList.remove("active")); // remove from all
                option2.classList.add("active");

                optionMenu2.classList.remove("active");

                var textareas = document.querySelectorAll(".sub-heading.addDescription");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu2.contains(e.target)) {
                optionMenu2.classList.remove("active");
            }
        });

        var menu_editor_menu_description_font_size = document.getElementById('menu_editor_menu_description_font_size');
        menu_editor_menu_description_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_description_font_size.value;
            var textareas = document.querySelectorAll(".sub-heading.addDescription");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_description_font_color = document.getElementById('menu_editor_menu_description_font_color');
        menu_editor_menu_description_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_description_font_color.value;
            var textareas = document.querySelectorAll(".sub-heading.addDescription");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_description_font_bold = document.getElementById('menu_editor_menu_description_font_bold');
        menu_editor_menu_description_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".sub-heading.addDescription");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_description_font_italic = document.getElementById('menu_editor_menu_description_font_italic');
        menu_editor_menu_description_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".sub-heading.addDescription");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_description_font_caps = document.getElementById('menu_editor_menu_description_font_caps');
        menu_editor_menu_description_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".sub-heading.addDescription");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
                    textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price 1
        //var menu_editor_menu_price = document.getElementById('menu_editor_menu_price');
        //menu_editor_menu_price.onchange = function () {
        //    var selectedFont = menu_editor_menu_price.value;
        //    var textareas = document.querySelectorAll(".price");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn3.addEventListener("click", () => {
            optionMenu3.classList.toggle("active");
        });

        text_options3.forEach(option3 => {
            option3.addEventListener("click", () => {
                const optionTextEl = option3.querySelector(".option-text3");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text3.textContent = selectedName;
                sBtn_text3.className = `sBtn-text3 ${selectedFont}`;

                text_options3.forEach(opt => opt.classList.remove("active")); // remove from all
                option3.classList.add("active");

                optionMenu3.classList.remove("active");

                var textareas = document.querySelectorAll(".price");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu3.contains(e.target)) {
                optionMenu3.classList.remove("active");
            }
        });

        var menu_editor_menu_price_font_size = document.getElementById('menu_editor_menu_price_font_size');
        menu_editor_menu_price_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price_font_size.value;
            var textareas = document.querySelectorAll(".price");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_font_color = document.getElementById('menu_editor_menu_price_font_color');
        menu_editor_menu_price_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".price");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_font_bold = document.getElementById('menu_editor_menu_price_font_bold');
        menu_editor_menu_price_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".price");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_font_italic = document.getElementById('menu_editor_menu_price_font_italic');
        menu_editor_menu_price_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".price");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_font_caps = document.getElementById('menu_editor_menu_price_font_caps');
        menu_editor_menu_price_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".price");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
                    textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price 2
        //var menu_editor_menu_price2 = document.getElementById('menu_editor_menu_price2');
        //menu_editor_menu_price2.onchange = function () {
        //    var selectedFont = menu_editor_menu_price2.value;
        //    var textareas = document.querySelectorAll(".price2");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn4.addEventListener("click", () => {
            optionMenu4.classList.toggle("active");
        });

        text_options4.forEach(option4 => {
            option4.addEventListener("click", () => {
                const optionTextEl = option4.querySelector(".option-text4");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text4.textContent = selectedName;
                sBtn_text4.className = `sBtn-text4 ${selectedFont}`;

                text_options4.forEach(opt => opt.classList.remove("active")); // remove from all
                option4.classList.add("active");

                optionMenu4.classList.remove("active");

                var textareas = document.querySelectorAll(".price2");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu4.contains(e.target)) {
                optionMenu4.classList.remove("active");
            }
        });

        var menu_editor_menu_price2_font_size = document.getElementById('menu_editor_menu_price2_font_size');
        menu_editor_menu_price2_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price2_font_size.value;
            var textareas = document.querySelectorAll(".price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_font_color = document.getElementById('menu_editor_menu_price2_font_color');
        menu_editor_menu_price2_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price2_font_color.value;
            var textareas = document.querySelectorAll(".price2");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_font_bold = document.getElementById('menu_editor_menu_price2_font_bold');
        menu_editor_menu_price2_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_font_italic = document.getElementById('menu_editor_menu_price2_font_italic');
        menu_editor_menu_price2_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_font_caps = document.getElementById('menu_editor_menu_price2_font_caps');
        menu_editor_menu_price2_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".price2");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
                    textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price 3
        //var menu_editor_menu_price3 = document.getElementById('menu_editor_menu_price3');
        //menu_editor_menu_price3.onchange = function () {
        //    var selectedFont = menu_editor_menu_price3.value;
        //    var textareas = document.querySelectorAll(".price3");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn5.addEventListener("click", () => {
            optionMenu5.classList.toggle("active");
        });

        text_options5.forEach(option5 => {
            option5.addEventListener("click", () => {
                const optionTextEl = option5.querySelector(".option-text5");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text5.textContent = selectedName;
                sBtn_text5.className = `sBtn-text5 ${selectedFont}`;

                text_options5.forEach(opt => opt.classList.remove("active")); // remove from all
                option5.classList.add("active");

                optionMenu5.classList.remove("active");

                var textareas = document.querySelectorAll(".price3");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu5.contains(e.target)) {
                optionMenu5.classList.remove("active");
            }
        });

        var menu_editor_menu_price3_font_size = document.getElementById('menu_editor_menu_price3_font_size');
        menu_editor_menu_price3_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price3_font_size.value;
            var textareas = document.querySelectorAll(".price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_font_color = document.getElementById('menu_editor_menu_price3_font_color');
        menu_editor_menu_price3_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price3_font_color.value;
            var textareas = document.querySelectorAll(".price3");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_font_bold = document.getElementById('menu_editor_menu_price3_font_bold');
        menu_editor_menu_price3_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_font_italic = document.getElementById('menu_editor_menu_price3_font_italic');
        menu_editor_menu_price3_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_font_caps = document.getElementById('menu_editor_menu_price3_font_caps');
        menu_editor_menu_price3_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".price3");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
                    textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price 4
        //var menu_editor_menu_price4 = document.getElementById('menu_editor_menu_price4');
        //menu_editor_menu_price4.onchange = function () {
        //    var selectedFont = menu_editor_menu_price4.value;
        //    var textareas = document.querySelectorAll(".price4");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn6.addEventListener("click", () => {
            optionMenu6.classList.toggle("active");
        });

        text_options6.forEach(option6 => {
            option6.addEventListener("click", () => {
                const optionTextEl = option6.querySelector(".option-text6");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text6.textContent = selectedName;
                sBtn_text6.className = `sBtn-text6 ${selectedFont}`;

                text_options6.forEach(opt => opt.classList.remove("active")); // remove from all
                option6.classList.add("active");

                optionMenu6.classList.remove("active");

                var textareas = document.querySelectorAll(".price4");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu6.contains(e.target)) {
                optionMenu6.classList.remove("active");
            }
        });

        var menu_editor_menu_price4_font_size = document.getElementById('menu_editor_menu_price4_font_size');
        menu_editor_menu_price4_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price4_font_size.value;
            var textareas = document.querySelectorAll(".price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_font_color = document.getElementById('menu_editor_menu_price4_font_color');
        menu_editor_menu_price4_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price4_font_color.value;
            var textareas = document.querySelectorAll(".price4");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_font_bold = document.getElementById('menu_editor_menu_price4_font_bold');
        menu_editor_menu_price4_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_font_italic = document.getElementById('menu_editor_menu_price4_font_italic');
        menu_editor_menu_price4_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_font_caps = document.getElementById('menu_editor_menu_price4_font_caps');
        menu_editor_menu_price4_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".price4");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else if (textarea.value === textarea.value.toLowerCase()) {//Haraprasad add 15.01.2024
                    textarea.value = toTitleCase(textarea.value);//Haraprasad add 15.01.2024
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };




        // Price Heading 1
        //var menu_editor_menu_price_heading = document.getElementById('menu_editor_menu_price_heading');
        //menu_editor_menu_price_heading.onchange = function () {
        //    var selectedFont = menu_editor_menu_price_heading.value;
        //    var textareas = document.querySelectorAll(".text-heading-price");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn7.addEventListener("click", () => {
            optionMenu7.classList.toggle("active");
        });

        text_options7.forEach(option7 => {
            option7.addEventListener("click", () => {
                const optionTextEl = option7.querySelector(".option-text7");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text7.textContent = selectedName;
                sBtn_text7.className = `sBtn-text7 ${selectedFont}`;

                text_options7.forEach(opt => opt.classList.remove("active")); // remove from all
                option7.classList.add("active");

                optionMenu7.classList.remove("active");

                var textareas = document.querySelectorAll(".text-heading-price");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu7.contains(e.target)) {
                optionMenu7.classList.remove("active");
            }
        });

        var menu_editor_menu_price_heading_font_size = document.getElementById('menu_editor_menu_price_heading_font_size');
        menu_editor_menu_price_heading_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price_heading_font_size.value;
            var textareas = document.querySelectorAll(".text-heading-price");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_heading_font_color = document.getElementById('menu_editor_menu_price_heading_font_color');
        menu_editor_menu_price_heading_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price_heading_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".text-heading-price");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_heading_font_bold = document.getElementById('menu_editor_menu_price_heading_font_bold');
        menu_editor_menu_price_heading_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_heading_font_italic = document.getElementById('menu_editor_menu_price_heading_font_italic');
        menu_editor_menu_price_heading_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price_heading_font_caps = document.getElementById('menu_editor_menu_price_heading_font_caps');
        menu_editor_menu_price_heading_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price Heading 2
        //var menu_editor_menu_price2_heading = document.getElementById('menu_editor_menu_price2_heading');
        //menu_editor_menu_price2_heading.onchange = function () {
        //    var selectedFont = menu_editor_menu_price2_heading.value;
        //    var textareas = document.querySelectorAll(".text-heading-price2");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn8.addEventListener("click", () => {
            optionMenu8.classList.toggle("active");
        });

        text_options8.forEach(option8 => {
            option8.addEventListener("click", () => {
                const optionTextEl = option8.querySelector(".option-text8");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text8.textContent = selectedName;
                sBtn_text8.className = `sBtn-text8 ${selectedFont}`;

                text_options8.forEach(opt => opt.classList.remove("active")); // remove from all
                option8.classList.add("active");

                optionMenu8.classList.remove("active");

                var textareas = document.querySelectorAll(".text-heading-price2");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu8.contains(e.target)) {
                optionMenu8.classList.remove("active");
            }
        });

        var menu_editor_menu_price2_heading_font_size = document.getElementById('menu_editor_menu_price2_heading_font_size');
        menu_editor_menu_price2_heading_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price2_heading_font_size.value;
            var textareas = document.querySelectorAll(".text-heading-price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_heading_font_color = document.getElementById('menu_editor_menu_price2_heading_font_color');
        menu_editor_menu_price2_heading_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price2_heading_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".text-heading-price2");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_heading_font_bold = document.getElementById('menu_editor_menu_price2_heading_font_bold');
        menu_editor_menu_price2_heading_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_heading_font_italic = document.getElementById('menu_editor_menu_price2_heading_font_italic');
        menu_editor_menu_price2_heading_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price2");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price2_heading_font_caps = document.getElementById('menu_editor_menu_price2_heading_font_caps');
        menu_editor_menu_price2_heading_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price2");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price Heading 3
        //var menu_editor_menu_price3_heading = document.getElementById('menu_editor_menu_price3_heading');
        //menu_editor_menu_price3_heading.onchange = function () {
        //    var selectedFont = menu_editor_menu_price3_heading.value;
        //    var textareas = document.querySelectorAll(".text-heading-price3");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn9.addEventListener("click", () => {
            optionMenu9.classList.toggle("active");
        });

        text_options9.forEach(option9 => {
            option9.addEventListener("click", () => {
                const optionTextEl = option9.querySelector(".option-text9");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text9.textContent = selectedName;
                sBtn_text9.className = `sBtn-text9 ${selectedFont}`;

                text_options9.forEach(opt => opt.classList.remove("active")); // remove from all
                option9.classList.add("active");

                optionMenu9.classList.remove("active");

                var textareas = document.querySelectorAll(".text-heading-price3");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu9.contains(e.target)) {
                optionMenu9.classList.remove("active");
            }
        });

        var menu_editor_menu_price3_heading_font_size = document.getElementById('menu_editor_menu_price3_heading_font_size');
        menu_editor_menu_price3_heading_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price3_heading_font_size.value;
            var textareas = document.querySelectorAll(".text-heading-price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_heading_font_color = document.getElementById('menu_editor_menu_price3_heading_font_color');
        menu_editor_menu_price3_heading_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price3_heading_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".text-heading-price3");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_heading_font_bold = document.getElementById('menu_editor_menu_price3_heading_font_bold');
        menu_editor_menu_price3_heading_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_heading_font_italic = document.getElementById('menu_editor_menu_price3_heading_font_italic');
        menu_editor_menu_price3_heading_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price3");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price3_heading_font_caps = document.getElementById('menu_editor_menu_price3_heading_font_caps');
        menu_editor_menu_price3_heading_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price3");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };

        // Price Heading 4
        //var menu_editor_menu_price4_heading = document.getElementById('menu_editor_menu_price4_heading');
        //menu_editor_menu_price4_heading.onchange = function () {
        //    var selectedFont = menu_editor_menu_price4_heading.value;
        //    var textareas = document.querySelectorAll(".text-heading-price4");
        //    textareas.forEach(function (textarea) {
        //        textarea.style.fontFamily = selectedFont;
        //    });
        //    Menueditorpropertiessettingupdate();
        //};
        selectBtn10.addEventListener("click", () => {
            optionMenu10.classList.toggle("active");
        });

        text_options10.forEach(option10 => {
            option10.addEventListener("click", () => {
                const optionTextEl = option10.querySelector(".option-text10");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text10.textContent = selectedName;
                sBtn_text10.className = `sBtn-text10 ${selectedFont}`;

                text_options10.forEach(opt => opt.classList.remove("active")); // remove from all
                option10.classList.add("active");

                optionMenu10.classList.remove("active");

                var textareas = document.querySelectorAll(".text-heading-price4");
                textareas.forEach(function (textarea) {
                    textarea.style.fontFamily = selectedFont;
                });

                Menueditorpropertiessettingupdate();
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu10.contains(e.target)) {
                optionMenu10.classList.remove("active");
            }
        });

        var menu_editor_menu_price4_heading_font_size = document.getElementById('menu_editor_menu_price4_heading_font_size');
        menu_editor_menu_price4_heading_font_size.onchange = function () {
            var selectedFontsize = menu_editor_menu_price4_heading_font_size.value;
            var textareas = document.querySelectorAll(".text-heading-price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontSize = selectedFontsize + 'px';
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_heading_font_color = document.getElementById('menu_editor_menu_price4_heading_font_color');
        menu_editor_menu_price4_heading_font_color.onchange = function () {
            var selectedFontcolor = menu_editor_menu_price4_heading_font_color.value;
            console.log(selectedFontcolor);
            var textareas = document.querySelectorAll(".text-heading-price4");
            textareas.forEach(function (textarea) {
                textarea.style.color = selectedFontcolor;
                textarea.style.backgroundColor = hex2rgb(selectedFontcolor);
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_heading_font_bold = document.getElementById('menu_editor_menu_price4_heading_font_bold');
        menu_editor_menu_price4_heading_font_bold.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontWeight = (textarea.style.fontWeight == '700' ? '400' : '700');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_heading_font_italic = document.getElementById('menu_editor_menu_price4_heading_font_italic');
        menu_editor_menu_price4_heading_font_italic.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price4");
            textareas.forEach(function (textarea) {
                textarea.style.fontStyle = (textarea.style.fontStyle == 'italic' ? 'normal' : 'italic');
            });
            Menueditorpropertiessettingupdate();
        };

        var menu_editor_menu_price4_heading_font_caps = document.getElementById('menu_editor_menu_price4_heading_font_caps');
        menu_editor_menu_price4_heading_font_caps.onclick = function () {
            var textareas = document.querySelectorAll(".text-heading-price4");
            textareas.forEach(function (textarea) {
                console.log(textarea.style.textDecoration);
                if (textarea.value === textarea.value.toUpperCase()) {
                    textarea.value = textarea.value.toLowerCase();
                }
                else {
                    textarea.value = textarea.value.toUpperCase();
                }
            });
            Menueditorpropertiessettingupdate();
        };



        //var menu_line_type_click = document.getElementsByName('menu_line_type');
        $('input[name="menu_line_type"]').click(function () {
            menu_line_type = $('input[name="menu_line_type"]:checked').val();
            Menueditorpropertiessettingupdate();
        });


        //Menu Editor Advance Style Start

        //Menu Heading Text
        var var_advance_heading_bg_curvature = document.getElementById('advance_heading_bg_curvature');
        var_advance_heading_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_heading_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_heading_bg_line_color = document.getElementById('advance_heading_bg_line_color');
        var_advance_heading_bg_line_color.onchange = function () {
            $('#advance_heading_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_heading_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_heading_bg_stroke_color = document.getElementById('advance_heading_bg_stroke_color');
        var_advance_heading_bg_stroke_color.onchange = function () {
            $('#advance_heading_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_heading_bg_stroke_width = document.getElementById('advance_heading_bg_stroke_width');
        var_advance_heading_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_heading_bg_stroke_type = document.getElementById('advance_heading_bg_stroke_type');
        var_advance_heading_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        //Menu Description Text
        var var_advance_description_bg_curvature = document.getElementById('advance_description_bg_curvature');
        var_advance_description_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_description_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_description_bg_line_color = document.getElementById('advance_description_bg_line_color');
        var_advance_description_bg_line_color.onchange = function () {
            $('#advance_description_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_description_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_description_bg_stroke_color = document.getElementById('advance_description_bg_stroke_color');
        var_advance_description_bg_stroke_color.onchange = function () {
            $('#advance_description_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_description_bg_stroke_width = document.getElementById('advance_description_bg_stroke_width');
        var_advance_description_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_description_bg_stroke_type = document.getElementById('advance_description_bg_stroke_type');
        var_advance_description_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        //Menu Price Text

        var var_advance_price1_bg_curvature = document.getElementById('advance_price1_bg_curvature');
        var_advance_price1_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price1_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price1_bg_line_color = document.getElementById('advance_price1_bg_line_color');
        var_advance_price1_bg_line_color.onchange = function () {
            $('#advance_price1_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price1_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price1_bg_stroke_color = document.getElementById('advance_price1_bg_stroke_color');
        var_advance_price1_bg_stroke_color.onchange = function () {
            $('#advance_price1_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price1_bg_stroke_width = document.getElementById('advance_price1_bg_stroke_width');
        var_advance_price1_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price1_bg_stroke_type = document.getElementById('advance_price1_bg_stroke_type');
        var_advance_price1_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        //price 2
        var var_advance_price2_bg_curvature = document.getElementById('advance_price2_bg_curvature');
        var_advance_price2_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price2_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price2_bg_line_color = document.getElementById('advance_price2_bg_line_color');
        var_advance_price2_bg_line_color.onchange = function () {
            $('#advance_price2_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price2_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price2_bg_stroke_color = document.getElementById('advance_price2_bg_stroke_color');
        var_advance_price2_bg_stroke_color.onchange = function () {
            $('#advance_price2_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price2_bg_stroke_width = document.getElementById('advance_price2_bg_stroke_width');
        var_advance_price2_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price2_bg_stroke_type = document.getElementById('advance_price2_bg_stroke_type');
        var_advance_price2_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        //price 3
        var var_advance_price3_bg_curvature = document.getElementById('advance_price3_bg_curvature');
        var_advance_price3_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price3_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price3_bg_line_color = document.getElementById('advance_price3_bg_line_color');
        var_advance_price3_bg_line_color.onchange = function () {
            $('#advance_price3_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price3_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price3_bg_stroke_color = document.getElementById('advance_price3_bg_stroke_color');
        var_advance_price3_bg_stroke_color.onchange = function () {
            $('#advance_price3_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price3_bg_stroke_width = document.getElementById('advance_price3_bg_stroke_width');
        var_advance_price3_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price3_bg_stroke_type = document.getElementById('advance_price3_bg_stroke_type');
        var_advance_price3_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        //price 4
        var var_advance_price4_bg_curvature = document.getElementById('advance_price4_bg_curvature');
        var_advance_price4_bg_curvature.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price4_bg_fill_color').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price4_bg_line_color = document.getElementById('advance_price4_bg_line_color');
        var_advance_price4_bg_line_color.onchange = function () {
            $('#advance_price4_bg_fill_color').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        $('#advance_price4_bg_stroke_show').click(function () {
            Menueditorpropertiessettingupdate();
        });

        var var_advance_price4_bg_stroke_color = document.getElementById('advance_price4_bg_stroke_color');
        var_advance_price4_bg_stroke_color.onchange = function () {
            $('#advance_price4_bg_stroke_show').prop('checked', true);
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price4_bg_stroke_width = document.getElementById('advance_price4_bg_stroke_width');
        var_advance_price4_bg_stroke_width.onchange = function () {
            Menueditorpropertiessettingupdate();
        };

        var var_advance_price4_bg_stroke_type = document.getElementById('advance_price4_bg_stroke_type');
        var_advance_price4_bg_stroke_type.onchange = function () {
            Menueditorpropertiessettingupdate();
        };
        //End


        ////menu editor model form


        //var txt_shadow_color = document.getElementById('shadow_color');
        //txt_shadow_color.onchange = function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject();
        //    activeObject.set('shadow', {
        //        color: $("#shadow_color").val(),
        //        blur: activeObject.shadow.blur,
        //        offsetX: activeObject.shadow.offsetX,
        //        offsetY: activeObject.shadow.offsetY
        //    });
        //    canvas.renderAll();
        //};

        function objectShadow() {
            pushUndo();
            var activeObject = canvas.getActiveObject();

            var shadow_opacity = $('#shadow_opacity').val();
            var opacity_val = 0;
            if (shadow_opacity >= 0 && shadow_opacity < 10) {
                opacity_val = 0 + (shadow_opacity);
            }
            else {
                opacity_val = (shadow_opacity);
            }
            if (shadow_opacity == 100) {
                opacity_val = (shadow_opacity - 1);
            }
            var shadow_color = $("#shadow_color").val() + opacity_val;
            var shadow_blur = parseFloat(($("#shadow_blur").val() * 20) / 100).toFixed(2)
            var shadow_offset = parseFloat(($("#shadow_blur").val() * 20) / 100).toFixed(2)
            if (activeObject.shadow) {
                activeObject.set('shadow', null);
            }
            else {
                if (activeObject.type == "path-group") {
                    activeObject.set('shadow', {
                        color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color,
                        blur: shadow_blur,
                        offsetX: shadow_offset,
                        offsetY: shadow_offset
                    });
                }
                else {
                    activeObject.set('shadow', {
                        color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color,
                        blur: shadow_blur,
                        offsetX: shadow_offset,
                        offsetY: shadow_offset
                    });
                }
            }
            canvas.renderAll();
        }

        document.getElementById("text-cmd-uppercase").onclick = function () {
            changeTextUpperCase();
        };

        function changeTextUpperCase() {
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text' || activeObject.type === 'curvedText') {
                if (activeObject.text === activeObject.text.toUpperCase()) {
                    activeObject.text = activeObject.text.toLowerCase();
                    $('#text').val(activeObject.text.toLowerCase());
                    $('#text-cmd-uppercase').addClass('selected');
                    $('#text-cmd-uppercase').addClass('btn-active');//Haraprasad dt. 07.11.2023
                    if (activeObject.type === 'curvedText') {
                        var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                        obj.set({ fill: activeObject.fill });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    }
                }
                //Haraprasad add dt:15.01.2024
                else if (activeObject.text === activeObject.text.toLowerCase()) {
                    activeObject.text = toTitleCase(activeObject.text);//Haraprasad add dt:15.01.2024
                    // Update the input field value
                    $('#text').val(activeObject.text);
                    $('#text-cmd-uppercase').addClass('selected');
                    $('#text-cmd-uppercase').addClass('btn-active');//Haraprasad dt. 07.11.2023
                    if (activeObject.type === 'curvedText') {
                        var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                        obj.set({ fill: activeObject.fill });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    }
                }
                //Haraprasad end dt:15.01.2024
                else {
                    activeObject.text = activeObject.text.toUpperCase();
                    $('#text').val(activeObject.text.toUpperCase());
                    $('#text-cmd-uppercase').removeClass('selected');
                    $('#text-cmd-uppercase').addClass('btn-active');//Haraprasad dt. 07.11.2023
                    if (activeObject.type === 'curvedText') {
                        var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                        obj.set({ fill: activeObject.fill });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    }
                }
                canvas.renderAll();
            }
        }
        //Haraprasad add dt:15.01.2024
        function toTitleCase(text) {
            return text.replace(/\b\w/g, function (match) {
                return match.toUpperCase();
            });
        }
        //Haraprasad end dt:15.01.2024
        //document.getElementById("text-align-left").onclick = function () {
        //    changeTextAlign('left');
        //};
        //document.getElementById("text-align-right").onclick = function () {
        //    changeTextAlign('right');
        //};
        //document.getElementById("text-align-center").onclick = function () {
        //    changeTextAlign('center');
        //};
        //document.getElementById("text-align-justify").onclick = function () {
        //    changeTextAlign('justify');
        //};

        //};
        document.getElementById("text-align-left").onclick = function () {
            changeTextAlign('left');
        };
        document.getElementById("text-align-right").onclick = function () {//Haraprasad dt. 07.11.2023
            changeTextAlign('right');
        };
        document.getElementById("text-align-center").onclick = function () {//Haraprasad dt. 07.11.2023
            changeTextAlign('center');

        };
        document.getElementById("text-align-justify").onclick = function () {//Haraprasad dt. 07.11.2023
            changeTextAlign('justify');
        };

        function changeTextAlign(value) {//Haraprasad dt. 07.11.2023
            pushUndo();
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textAlign = value;
                canvas._adjustPosition && canvas._adjustPosition(activeObject, value === 'justify' ? 'left' : value);
                if (activeObject.textAlign === 'left') {//Haraprasad dt. 07.11.2023
                    $("#text-align-left").addClass('btn-active');//Haraprasad dt. 07.11.2023
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObject.textAlign === 'right') {
                    $("#text-align-right").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObject.textAlign === 'center') {
                    $("#text-align-center").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObject.textAlign === 'justify') {
                    $("#text-align-justify").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                }
                else {
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    ("#text-align-justify").removeClass('btn-active');
                }
                canvas.renderAll();
            }
        }

        //This select dropdown option now disabled

        //var fontFamilySwitch = document.getElementById('font-family');//Haraprasad dt. 07.11.2023
        //if (fontFamilySwitch) {
        //    activeObjectButtons.push(fontFamilySwitch);
        //    fontFamilySwitch.onchange = function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();
        //        if (activeObject && (activeObject.type === 'text')) {
        //            activeObject.fontFamily = this.value;
        //            canvas.renderAll();
        //        }
        //        else {
        //            activeObject.fontFamily = this.value;
        //            var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
        //            obj.set({ fill: activeObject.fill });
        //            canvas.getActiveObject().set({ top: activeObject.top });
        //            canvas.getActiveObject().set({ left: activeObject.left });
        //            canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
        //            canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
        //            canvas.renderAll();
        //        }
        //    };
        //} 

        /* Select option replaced by ul li for MAC, developed by Sujit for TEXT FONT CHANGE */
        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
        });

        text_options.forEach(option => {
            option.addEventListener("click", () => {
                const optionTextEl = option.querySelector(".option-text");
                const selectedFont = optionTextEl.classList[1];
                const selectedName = optionTextEl.textContent;

                sBtn_text.textContent = selectedName;
                sBtn_text.className = `sBtn-text ${selectedFont}`;

                text_options.forEach(opt => opt.classList.remove("active")); // remove from all
                option.classList.add("active");

                optionMenu.classList.remove("active");

                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && (activeObject.type === 'text')) {
                    activeObject.fontFamily = selectedFont;
                    canvas.renderAll();
                }
                else {
                    activeObject.fontFamily = selectedFont;
                    var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                    obj.set({ fill: activeObject.fill });
                    canvas.getActiveObject().set({ top: activeObject.top });
                    canvas.getActiveObject().set({ left: activeObject.left });
                    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    canvas.renderAll();
                }
            });
        });

        document.addEventListener("click", (e) => {
            if (!optionMenu.contains(e.target)) {
                optionMenu.classList.remove("active");
            }
        });
        /* END of Select option replaced by ul li for MAC, developed by Sujit for TEXT FONT CHANGE */

        var textFontSize = document.getElementById('text-font-size');//Haraprasad dt. 07.11.2023
        if (textFontSize) {
            textFontSize.onchange = function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    activeObject.fontSize = this.value;
                    canvas.renderAll();
                }
                else if (activeObject && activeObject.type === 'curvedText') {
                    activeObject.fontSize = this.value;
                    var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                    obj.set({ fill: activeObject.fill });
                    canvas.getActiveObject().set({ top: activeObject.top });
                    canvas.getActiveObject().set({ left: activeObject.left });
                    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                    canvas.renderAll();
                }
            };
        }

        ////var bgColorField = document.getElementById('text-bg-color');
        ////if (bgColorField) {
        ////    bgColorField.onchange = function () {
        ////        pushUndo();
        ////        var activeObject = canvas.getActiveObject();
        ////        if (activeObject && activeObject.type === 'text') {
        ////            canvas.getActiveObject().set("backgroundColor", this.value);
        ////            canvas.renderAll();
        ////        }
        ////    };
        ////}

        ////text background colour
        //const bgColorField = document.getElementById('sd3');
        //const observer_bg = new MutationObserver((mutationsList, observer) => {
        //    for (const mutation of mutationsList) {
        //        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        //            const newValue = mutation.target.getAttribute('value');
        //            pushUndo();
        //            var activeObject = canvas.getActiveObject();
        //            if (activeObject && activeObject.type === 'text') {
        //                canvas.getActiveObject().set("backgroundColor", newValue);
        //                canvas.renderAll();
        //            }
        //        }
        //    }
        //});
        //observer_bg.observe(bgColorField, { attributes: true });

        /////Indranil added

        //const fontColorld = document.getElementById('sd2');
        //const observer_font = new MutationObserver((mutationsList, observer) => {
        //    for (const mutation of mutationsList) {
        //        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        //            const newValue = mutation.target.getAttribute('value');
        //            pushUndo();
        //            var activeObject = canvas.getActiveObject();
        //            if (activeObject && (activeObject.type === 'text' || activeObject.type === 'curvedText')) {
        //                canvas.getActiveObject().set({ fill: newValue });
        //                canvas.renderAll();
        //            }
        //        }
        //    }
        //});
        //observer_font.observe(fontColorld, { attributes: true });

        //$("#text_bg_color_transparent").click(function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject();
        //    if (activeObject && activeObject.type === 'text') {
        //        canvas.getActiveObject().set("backgroundColor", "");
        //        canvas.renderAll();
        //    }
        //});

        ////var fontColorField = document.getElementsByClassName('text-font-color');
        ////if (fontColorField) {
        ////    fontColorField.onchange = function () {
        ////        pushUndo();
        ////        var activeObject = canvas.getActiveObject();
        ////        if (activeObject && activeObject.type === 'text') {
        ////            canvas.getActiveObject().set("fill", this.value);
        ////            canvas.renderAll();
        ////        }
        ////    };
        ////}
        ////var fontColorField = document.getElementById('sd2');
        ////if (fontColorField) {
        ////    fontColorField.onchange = function () {
        ////        pushUndo();
        ////        var activeObject = canvas.getActiveObject();
        ////        if (activeObject && activeObject.type === 'text') {
        ////            canvas.getActiveObject().set("fill", this.value);
        ////            canvas.renderAll();
        ////        }
        ////    };
        ////}

        ////Text Font Colour
        //const hiddenInput = document.getElementById('sd2');
        //const observer = new MutationObserver((mutationsList, observer) => {
        //    for (const mutation of mutationsList) {
        //        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        //            const newValue = mutation.target.getAttribute('value');
        //            pushUndo();
        //            var activeObject = canvas.getActiveObject();
        //            if (activeObject && activeObject.type === 'text') {
        //                canvas.getActiveObject().set("fill", newValue);
        //                canvas.renderAll();
        //            }
        //        }
        //    }
        //});
        //observer.observe(hiddenInput, { attributes: true });

        ////var clickableSpan = document.getElementById('sd2');
        ////$('#sd2').change(function () {
        ////    alert("change");
        ////});

        ////clickableSpan.addEventListener('click', function () {
        ////    const newValue = $('#sd2').val();
        ////    console.log('Value clicked:', newValue);

        ////});

        //var fontColorFieldTransparent = document.getElementById('text_color_transparent');
        //if (fontColorFieldTransparent) {
        //    fontColorFieldTransparent.onclick = function () {
        //        pushUndo();
        //        var activeObject = canvas.getActiveObject();
        //        if (activeObject && activeObject.type === 'text') {
        //            canvas.getActiveObject().set("fill", "");
        //            canvas.renderAll();
        //        }
        //    };
        //}

        ////var fontColorStrokeColor = document.getElementById('text-stroke-color');
        ////if (fontColorStrokeColor) {
        ////    fontColorStrokeColor.onchange = function () {
        ////        pushUndo();
        ////        var activeObject = canvas.getActiveObject();
        ////        if (activeObject && activeObject.type === 'text') {
        ////            activeObject.stroke = this.value;
        ////            if (activeObject.strokeWidth < 1) {
        ////                $('#stroke-width').val('1');
        ////                activeObject.strokeWidth = 1;
        ////            }
        ////            else {
        ////                $('#stroke-width').val(activeObject.strokeWidth);
        ////            }
        ////            canvas.renderAll();
        ////        }
        ////    };
        ////}
        ////Text Strock Color
        //const fontColorStrokeColor = document.getElementById('sd1');
        //const observer_StrokeColor = new MutationObserver((mutationsList, observer) => {
        //    for (const mutation of mutationsList) {
        //        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        //            const newValue = mutation.target.getAttribute('value');
        //            pushUndo();
        //            var activeObject = canvas.getActiveObject();
        //            if (activeObject && activeObject.type === 'text') {
        //                //activeObject.stroke = newValue;
        //                canvas.getActiveObject().set("stroke", newValue);
        //                if (activeObject.strokeWidth < 1) {
        //                    $('#stroke-width').val('1');
        //                    activeObject.strokeWidth = 1;
        //                }
        //                else {
        //                    $('#stroke-width').val(activeObject.strokeWidth);
        //                }
        //                canvas.renderAll();
        //            }
        //        }
        //    }
        //});
        //observer_StrokeColor.observe(fontColorStrokeColor, { attributes: true });




        //$("#text_stroke_color_transparent").click(function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject();
        //    if (activeObject && activeObject.type === 'text') {
        //        activeObject.stroke = "";
        //        activeObject.strokeWidth = "";
        //        $('#stroke-width').val('');
        //        canvas.renderAll();
        //    }
        //});

        var textStrokeWidth = document.getElementById('stroke-width');
        if (textStrokeWidth) {
            textStrokeWidth.onchange = function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {

                    if (this.value > 0) {
                        activeObject.strokeWidth = parseInt(this.value);
                        activeObject.stroke = $('#sd1').val();
                    }
                    else {
                        activeObject.strokeWidth = "";
                        activeObject.stroke = "";
                    }
                    $("#sd1").addClass('btn-active');
                    $("#sd1_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    canvas.renderAll();
                }
                if (activeObject && activeObject.type === 'curvedText') {
                    if (this.value > 0) {
                        activeObject.strokeWidth = parseInt(this.value);
                        activeObject.stroke = $('#sd1').val();
                    }
                    else {
                        activeObject.strokeWidth = "";
                        activeObject.stroke = "";
                    }
                    var obj = CreateCurveText(activeObject, "", activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                    obj.set({ fill: activeObject.fill });
                    canvas.getActiveObject().set({ top: activeObject.top });
                    canvas.getActiveObject().set({ left: activeObject.left });
                    canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                    canvas.getActiveObject().set({ scaleY: activeObject.scaleY });

                    $("#sd1").addClass('btn-active');
                    $("#sd1_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    canvas.renderAll();
                }
            };
        }

        var textLineHeight = document.getElementById('text-line-hieght');
        textLineHeight.onchange = function () {
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                if (this.value > 0) {
                    activeObject.lineHeight = this.value;

                    canvas.renderAll();
                    activeObject.setCoords();
                }
                else {
                    activeObject.lineHeight = 0.04;

                    canvas.renderAll();
                    activeObject.setCoords();
                }
            }
        };
        $('#text-line-hieght-plus').on('click',//haraprasad date:15.11.2023 
            function () {

                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    var lineHeightplus = $("#text-line-hieght").val();//haraprasad date:15.11.2023 

                    var lineHeightplusVal = parseFloat(lineHeightplus) + parseFloat("0.04");
                    // lineHeightplus++;//haraprasad date:15.11.2023 
                    if (lineHeightplusVal > 0) {

                        activeObject.lineHeight = lineHeightplusVal;//haraprasad date:15.11.2023 
                        $("#text-line-hieght").val(lineHeightplusVal);//haraprasad date:15.11.2023 
                        canvas.renderAll();
                        activeObject.setCoords();
                    }
                    else {
                        activeObject.lineHeight = 0.04;

                        canvas.renderAll();
                        activeObject.setCoords();
                    }
                }
            }
        );
        $('#text-line-hieght-minus').on('click',
            function () {

                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    var lineHeightminus = $("#text-line-hieght").val();//haraprasad date:15.11.2023 
                    var lineHeightminusVal = parseFloat(lineHeightminus) - parseFloat("0.04");
                    //lineHeightminus--;//haraprasad date:15.11.2023 
                    if (lineHeightminusVal > 0) {//haraprasad date:15.11.2023 

                        activeObject.lineHeight = lineHeightminusVal;//haraprasad date:15.11.2023 
                        $("#text-line-hieght").val(lineHeightminusVal);//haraprasad date:15.11.2023 
                        canvas.renderAll();
                        activeObject.setCoords();
                    }
                    else {
                        activeObject.lineHeight = 0.04;

                        canvas.renderAll();
                        activeObject.setCoords();
                    }

                }
            }
        );
        // var supportsslider = supportsinputoftype('range');
        // if (supportsslider) {
        //   (function(){
        //     var container = document.getelementbyid('text-controls');
        //     var slider = document.createelement('input');
        //     var label = document.createelement('label');
        //     label.innerhtml = '<span>line height: </span>';
        //     try { slider.type = 'range'; } catch(err) { }
        //     slider.min = 0;
        //     slider.max = 10;
        //     slider.step = 0.1;
        //     slider.value = 1.5;
        //     container.appendchild(label);
        //     label.appendchild(slider);
        //     slider.title = "line height";
        //     slider.onchange = function(){
        //       var activeobject = canvas.getactiveobject();
        //       if (activeobject && activeobject.type === 'text') {
        //         activeobject.lineheight = this.value;
        //         canvas.renderall();
        //activeobject.setcoords();
        //       }
        //     };

        //     canvas.on('object:selected', function(e) {
        //       slider.value = e.target.lineheight;
        //     });
        //   })();
        // }
        /* TEXT EDIT END */


        // start Haraprasad dt. 07.11.2023

        $('#sd2').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && (activeObject.type === 'text' || activeObject.type === 'curvedText')) {
                    $("#sd2").addClass('btn-active');
                    $("#sd2_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    canvas.getActiveObject().set({ fill: this.value });
                    canvas.renderAll();
                }

            }
        );
        $('#sd2_no_color').on('click',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && (activeObject.type === 'text' || activeObject.type === 'curvedText')) {
                    if (activeObject.fill != '') {
                        canvas.getActiveObject().set({ fill: '' });
                        $("#sd2_no_color").addClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd2").removeClass('btn-active');
                    }
                    else {
                        canvas.getActiveObject().set({ fill: $("#sd2").val() });
                        $("#sd2_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd2").addClass('btn-active');
                    }

                    canvas.renderAll();
                }

            }
        );
        $('#sd3').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    $("#sd3").addClass('btn-active');
                    $("#sd3_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    canvas.getActiveObject().set("backgroundColor", this.value);
                    canvas.renderAll();
                }

            }
        );
        $('#sd3_no_color').on('click',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    if (activeObject.backgroundColor != '') {
                        canvas.getActiveObject().set("backgroundColor", '');
                        $("#sd3_no_color").addClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd3").removeClass('btn-active');
                    }
                    else {
                        canvas.getActiveObject().set("backgroundColor", $("#sd3").val());
                        $("#sd3_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd3").addClass('btn-active');
                    }

                    canvas.renderAll();
                }

            }
        );
        $('#sd1').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text' || activeObject.type === 'curvedText') {
                    //activeObject.stroke = newValue;
                    canvas.getActiveObject().set("stroke", this.value);
                    $("#sd1").addClass('btn-active');
                    $("#sd1_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    if (activeObject.strokeWidth < 1) {
                        $('#stroke-width').val('1');
                        activeObject.strokeWidth = 1;
                    }
                    else {
                        $('#stroke-width').val(activeObject.strokeWidth);
                    }
                    canvas.renderAll();
                }

            }
        );
        $('#sd1_no_color').on('click',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text' || activeObject.type === 'curvedText') {
                    //activeObject.stroke = newValue;
                    if (activeObject.stroke != '') {
                        canvas.getActiveObject().set("stroke", '');
                        $("#sd1_no_color").addClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd1").removeClass('btn-active');
                    }
                    else {
                        canvas.getActiveObject().set("stroke", $("#sd1").val());
                        $("#sd1_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                        $("#sd1").addClass('btn-active');
                    }

                    if (activeObject.strokeWidth < 1) {
                        $('#stroke-width').val('1');
                        activeObject.strokeWidth = 1;
                    }
                    else {
                        $('#stroke-width').val(activeObject.strokeWidth);
                    }
                    canvas.renderAll();
                }

            }
        );


        // End Haraprasad dt. 07.11.2023


        /* DOUBLE CLICK PROPERTISE START */
        //document.getElementById("tab_properties").onclick = function() {
        //  $("#tab_edit").removeClass("active");
        //  $("#edit").hide();
        //  $("#tab_properties").addClass("active");
        //  $("#properties").show();
        //  $("#menu_properties").hide();
        //  $("#tab_effect").removeClass("active");//sourav
        //  $("#effect").hide();//sourav
        //};
        //document.getElementById("tab_edit").onclick = function() {
        //  $("#menu_properties").hide();
        //  $("#tab_edit").addClass("active");
        //  $("#edit").show();
        //  $("#tab_properties").removeClass("active");
        //  $("#tab_effect").removeClass("active");//sourav
        //  $("#properties").hide();
        //  $("#effect").hide();//sourav
        //  if($("#manage_menu_item").is(":visible")){
        //	$("#menu_properties").show();
        //  }
        //};
        ///*start sourav*/
        //document.getElementById("tab_effect").onclick = function() {
        //  $("#menu_properties").hide();
        //  $("#tab_effect").addClass("active");
        //  $("#effect").show();
        //  $("#edit").hide();
        //  $("#properties").hide();
        //  $("#tab_properties").removeClass("active");
        //  $("#tab_edit").removeClass("active");
        //};/*end sourav*/

        // document.getElementById("canvas_container").oncontextmenu = function(e) {
        //var pointer = canvas.getPointer(e);
        //var posx = pointer.x + 100;
        //var posy = pointer.y;
        //showEditMenu(posx,posy);
        //return false;
        // };

        //$(".upper-canvas").on('scaling', function (e) {
        //    var activeObject = e.target;
        //    console.log(activeObject.scaleX);
        //    //obj.scaleX = obj.scaleX * 2;
        //    //obj.scaleY = obj.scaleY * 2;
        //});


        $(".upper-canvas").dblclick(function (e) {
            //var pointer = canvas.getPointer(e);
            //var posx = pointer.x + 100;
            //var posy = pointer.y;
            showEditMenu(2);
        });
        
        function showEditMenu(clicktype) {
            try {
           
            if (clicktype != 1 && clicktype != 2) {
                clicktype = 1;
            }
            
            var activeObj = canvas.getActiveObject();
            if (activeObj) {
                $('.tabBody_group').height('');
                $(".txt-img").removeClass('active');
                menu_edit_flag = false;
                deselectMenudiv();
                $("#menu-item-text-tab").addClass('active');
                //$("#menu-item-properties-tab").removeClass('active');
                //$("#menu-item-effect-tab").removeClass('active');
                //$("#div_text_text_editor").show();
                $("#menu-item-properties").hide();
                $("#menu-item-effect").hide();
                $(".set-menu-prie-colum-content-h").hide();
                $("#set_menu_template_colum_content").hide();
                $("#set_menu_desc_colum_content").hide();
                $("#set_menu_prie_colum_content").hide();

                $("#menu-item-text").addClass('active show');
                $("#menu-item-text").show();//Haraprasad date:29.11.2023
                $("#menu-item-text-tab").show();//Haraprasad date:29.11.2023
                $("#div_images_editor_sec_bot_top_head").hide();
                $("#div_gradient_show").hide();//Haraprasad dt:02.12.2023
                $("#div_masking_shape_editor").hide();//Haraprasad dt:02.12.2023
                $("#div_menu_design_top").hide();
                $("#div_CategoryName").hide();//Haraprasad dt:20.12.2023
                $("#div_masking_img_sec_bot_top_head").hide();
                $("#div_curvetext_sec_bot_top_head").hide();
                //$("#pop_settings").removeAttr("data-modalindex");
                //$("#pop_settings").show();
                //$("#pop_settings").addClass("active");
                //$('header, main').css('pointer-events', 'none');
                //MenuItem Tab
                //$('#tab_menu_item').hide();
                //$('#div_canvas_menu_done_button').show();
                //$('items').hide();
                //$("#tab_menu_item").removeClass("active");


                //$("#add_background").hide();
                //$("#add_background").removeClass("active");

                $('.toolsModal').removeClass("active");
                $('.toolItem').removeClass("active");
                //console.log(activeObj.type);
                if (activeObj.type != 'group' && activeObj.shadow != null) {
                    document.getElementById("shadow").value = (activeObj.shadow.offsetX * 10) / 2;
                    document.getElementById("shadow_blur").value = (activeObj.shadow.blur * 10) / 2;
                    var opactiy_color_trans = activeObj.shadow.color
                    var opacity_value = 100;
                    var opacity_len = activeObj.shadow.color.length;
                    var opacity_color = "";
                    if (opacity_len > 7) {
                        opacity_color = opactiy_color_trans.slice(0, -2);
                        opacity_value = String(activeObj.shadow.color).slice(-2);
                        if (opacity_value < 99) {
                            document.getElementById("shadow_opacity").value = opacity_value;
                            $("#shadow_color").val(opacity_color);
                        }
                        else {
                            opacity_color = opactiy_color_trans.slice(0, -2);
                            document.getElementById("shadow_opacity").value = 100;
                            $("#shadow_color").val(opacity_color);
                        }
                    }
                    else {
                        document.getElementById("shadow_opacity").value = 100;
                        $("#shadow_color").val(opactiy_color_trans);
                    }
                }
                //if (!activeObj.hasControls && activeObj.lockMovementX && activeObj.lockMovementY) {
                //    $("#li_lock_object").addClass('properties-active');
                //}
                //$('#label_curvature').hide();

            }

            //Haraprasad date:30.11.2023 
            $("#slider_scale").val(Math.round(activeObj.scaleX * 100));
            $("#opacity_text").val(activeObj.opacity * 100);
            $("#opacity").val(activeObj.opacity * 100);
            if (activeObj.shadow) {

                $("#asssignShadow").prop("checked", true);//haraprasad date:30:11:2023
                $('#chk_shadow').show();//haraprasad date:30:11:2023
                $("#shadow_no_color").removeClass('btn-active');//Haraprasad dt. 30.11.2023
                $("#shadow_color").addClass('btn-active');
                //$("#shadow_text").val(activeObj.shadow.shadow_offset);
                //$("#shadow_blur_text").val(activeObj.shadow.shadow_blur);
                //$("#shadow_opacity_text").val(activeObj.shadow.shadow_opacity);
                $("#shadow_text").val($('#shadow').val());
                $("#shadow_blur_text").val($('#shadow_blur').val());
                $("#shadow_opacity_text").val($('#shadow_opacity').val());
                    
            }
            else {
                $("#asssignShadow").prop("checked", false);
                $('#chk_shadow').hide();//haraprasad date:30:11:2023
            }
            
            
            //Haraprasad date:30.11.2023 
            if (activeObj && (activeObj.type === 'text' || activeObj.type === 'curvedText')) { //done
                //$("#pop_settings").hide();
                $("#div_shape_editor").hide();
                $("#div_menu_text_editor").hide();
                //$("#div_text_text_editor").show();
                $("#div_shape_sec_bot_top_head").hide();
                $("#div_menu_sec_bot_top_head").show();
                $("#div_text_sec_bot_top_head").show();
                $("#div_shapesvg_sec_bot_top_head").hide();
                $("#div_my_images_sec_bot_top_head").hide();
                $('#div_masking_img_sec_bot_top_head').hide();
                $("#div_my_images").hide();
                $("#div_pos_images_sec_bot_top_head").hide();
                $("#div_pos_images").hide();

                $("#div_main_editor_options").show();
                $("#div_images_editor_gallery").hide();
                $("#div_images_sec_bot_top_head").hide();
                $("#div_text_text_editor").show();
                $("#menu-item-properties").hide();
                $("#menu-item-effect").hide();


                //$("#pop_settings").css("top", posy);
                //$("#pop_settings").css("left", posx);
                //$('#pop_setting_caption').html('Text');
                //$("#tab_edit").show();
                //$("#tab_edit").addClass("active");
                //$("#tab_properties").removeClass("active");
                //$("#tab_effect").removeClass("active");

                //$("#edit").show();
                //$("#edit").addClass("active");
                //$("#edit").attr("data-subject", "");//remove existing
                //$("#edit").attr("data-subject", "textContentEditor");// add for text edit

                //$("#text_edit_box").show();
                //$("#text_edit_box").addClass("active");
                //$("#shapeeditor").hide();
                //$("#shapeeditor").removeClass("active");
                //$("#menu_properties").hide();
                //$("#menu_properties").removeClass("active");

                //Always Hide on Start
                //$("#properties").hide();
                //$("#properties").removeClass("active");
                //$("#effect").hide();
                //$("#effect").removeClass("active");
                //$('#items').hide();

                //Show hide on basis of active object
                $('#show_scale').show();
                $("#image_modify_box").hide();
                //Fill Value as per active object
                $("textarea#text").click();
                $("textarea#text").val(activeObj.text);

                //Selected font family (Close by Sujit)
                //$("select#font-family").val(activeObj.fontFamily);
                //$("select#font-family").prop("disabled", false);

                //Selected font family for ul li done by Sujit
                //console.log(activeObject.fontFamily);
                sBtn_text.textContent = activeObj.fontFamily;
                sBtn_text.className = `sBtn-text ${activeObj.fontFamily}`;
                text_options.forEach(opt => opt.classList.remove("active"));
                //text_options.forEach(opt => {
                //    const optionTextEl = opt.querySelector(".option-text");
                //    if (optionTextEl && optionTextEl.classList.contains(activeObj.fontFamily)) {
                //        opt.classList.add("active");
                //    }
                //});
                optionMenu.classList.remove("active");
                //End of selected font family for ul li done by Sujit

                $("input#text-font-color").val(activeObj.fill);
                $("input#text-bg-color").val(activeObj.backgroundColor);
                $("input#text-stroke-color").val(activeObj.stroke);
                $("#stroke-width").val(activeObj.strokeWidth);
                $("#text-line-hieght").val(activeObj.lineHeight);
                $("#text-font-size").val(activeObj.fontSize);
                //Haraprasad date:14.11.2023 start
                $("input#sd2").val(activeObj.fill);//Haraprasad date:14.11.2023
                $("input#sd3").val(activeObj.backgroundColor);//Haraprasad date:14.11.2023
                $("input#sd1").val(activeObj.stroke);//Haraprasad date:14.11.2023
                //Haraprasad date:30.11.2023

                //sudip 7-1-2025

                if (activeObj && activeObj.fill instanceof fabric.Gradient) {
                    $("#div_Chk_gradient_show").show();
                    var gradient = activeObj.fill;
                    var colorStops = gradient.colorStops;
                    $('#div_gradient_show').show();
                    document.getElementById("show_gradient_text").checked = true;
                    // Assume colorStops is an array with two color stops
                    if (colorStops.length >= 2) {
                        // Extract the colors from the color stops
                        var color1 = colorStops[0].color;
                        var color2 = colorStops[1].color;

                        //var color3 = colorStops[2].color;
                        // Assign these colors to your two IDs or use them as needed
                        var id1 = 'shape_gradient_color_1';
                        var id2 = 'shape_gradient_color_2';

                        // Example: Assign the colors to the elements with the specified IDs
                        document.getElementById(id1).value = color1;
                        document.getElementById(id2).value = color2;
                    }

                } else {
                    $("#div_Chk_gradient_show").hide();
                    $('#div_gradient_show').hide();
                    document.getElementById("show_gradient_text").checked = false;
                } 

                 //sudip 7-1-25






                if (activeObj.text === activeObj.text.toUpperCase()) {

                    $('#text-cmd-uppercase').addClass('selected');
                    $('#text-cmd-uppercase').addClass('btn-active');//Haraprasad dt. 07.11.2023
                }
                else if (activeObj.text === activeObj.text.toLowerCase()) {

                    $('#text-cmd-uppercase').removeClass('selected');
                    $('#text-cmd-uppercase').addClass('btn-active');//Haraprasad dt. 07.11.2023
                }
                else {
                    $('#text-cmd-uppercase').removeClass('btn-active');
                }
                //Haraprasad date:30.11.2023 end
                if (activeObj.fill != '') {

                    $("#sd2_no_color").removeClass('btn-active');
                    $("#sd2").addClass('btn-active');
                }
                else {
                    $("#sd2_no_color").addClass('btn-active');
                    $("#sd2").removeClass('btn-active');
                }

                if (activeObj.backgroundColor != '') {

                    $("#sd3_no_color").removeClass('btn-active');
                    $("#sd3").addClass('btn-active');
                }
                else {

                    $("#sd3_no_color").addClass('btn-active');
                    $("#sd3").removeClass('btn-active');
                }
                if (activeObj.stroke != '' && activeObj.stroke != null) {

                    $("#sd1_no_color").removeClass('btn-active');
                    $("#sd1").addClass('btn-active');
                }
                else {
                    $("#sd1_no_color").addClass('btn-active');
                    $("#sd1").removeClass('btn-active');
                }
                if (activeObj.fontWeight === 'bold') {
                    cmdBoldBtn.classList.add('btn-active');
                }
                else {
                    cmdBoldBtn.classList.remove('btn-active');
                }
                if (activeObj.fontStyle === 'italic') {
                    cmdItalicBtn.classList.add('btn-active');
                }
                else {
                    cmdItalicBtn.classList.remove('btn-active');
                }
                if (activeObj.textAlign === 'left') {//Haraprasad dt. 07.11.2023
                    $("#text-align-left").addClass('btn-active');//Haraprasad dt. 07.11.2023
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObj.textAlign === 'right') {
                    $("#text-align-right").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObj.textAlign === 'center') {
                    $("#text-align-center").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-justify").removeClass('btn-active');
                }
                else if (activeObj.textAlign === 'justify') {
                    $("#text-align-justify").addClass('btn-active');
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                }
                else {
                    $("#text-align-left").removeClass('btn-active');
                    $("#text-align-right").removeClass('btn-active');
                    $("#text-align-center").removeClass('btn-active');
                    ("#text-align-justify").removeClass('btn-active');
                }
                if (activeObj.scaleX > 0) {
                    var setScalevalue = parseInt(activeObj.scaleX * 100, 0);
                    //$('#slider_scale').val(setScalevalue);
                    document.getElementById("slider_scale").value = setScalevalue;
                    $('#slider_scale_div').attr('data-value', setScalevalue);
                    console.log(activeObj.scaleX);
                }

                $('#chkCurve').prop('checked', false);
                $("#div_shape_editor").hide();
                $('#div_curve_text_desc').hide();
                //Haraprasad date:14.11.2023 end
                if (activeObj.stroke < 1) {
                    $("#stroke-width").val('');
                    if (activeObj.type === 'curvedText') {
                        $("#div_textAlign_show").hide();
                        $("#div_curve_show").show();
                        $("#div_backgroundcolor_show").hide();
                        $('#div_gradient_show').hide();
                        $('#chkCurve').prop('checked', true); // Unchecks it
                        $('#div_curve_text_desc').slideDown();
                        $("#div_curvetext_sec_bot_top_head").show();
                        $("#div_text_sec_bot_top_head").hide();
                    }
                    else {
                        $('#div_gradient_show').show();
                        $("#div_curve_show").hide();
                        $("#div_textAlign_show").show();
                        $("#div_backgroundcolor_show").show();
                        if ($("#show_gradient_text").prop('checked') == true) {
                            $("#div_Chk_gradient_show").show();
                        }
                        else {
                            $("#div_Chk_gradient_show").hide();
                        }
                        $("#div_curvetext_sec_bot_top_head").hide();
                        $("#div_text_sec_bot_top_head").show();
                        //$("#div_Chk_gradient_show").hide();
                        //if (chk_gradient == true) {

                        //    $("#div_Chk_gradient_show").show();
                        //}
                        //else {
                        //    $("#div_Chk_gradient_show").hide();
                        //}

                    }
                }
                else {
                    if (activeObj.type === 'curvedText') {
                        $("#div_textAlign_show").hide();
                        $("#div_curve_show").show();
                        $("#div_backgroundcolor_show").hide();
                        $('#div_gradient_show').hide();
                        $('#chkCurve').prop('checked', true); // Unchecks it
                        $('#div_curve_text_desc').slideDown();
                        $("#div_curvetext_sec_bot_top_head").show();
                        $("#div_text_sec_bot_top_head").hide();
                    }
                    else {
                        $('#div_gradient_show').show();
                        $("#div_curve_show").hide();
                        $("#div_textAlign_show").show();
                        $("#div_backgroundcolor_show").show();
                        $("#div_curvetext_sec_bot_top_head").hide();
                        $("#div_text_sec_bot_top_head").show();
                        //if (chk_gradient == true) {

                        //    $("#div_Chk_gradient_show").show();
                        //}
                        //else {
                        //    $("#div_Chk_gradient_show").hide();
                        //}

                        //$("#div_Chk_gradient_show").hide();
                        //if (chk_gradient == true) {

                        //    $("#div_Chk_gradient_show").show();
                        //}
                        //else {
                        //    $("#div_Chk_gradient_show").hide();
                        //}

                    }
                }

                //canvas.add(new fabric.IText(activeObj.text, {
                //    fontFamily: 'arial black',
                //    left: 100,
                //    top: 100,
                //}));

            }
            if (activeObj && activeObj.type === 'image') {
                //$('#pop_setting_caption').html('Image'); // commited by sunil on dt. 10.11.2023
                //$("#pop_settings").css("top", posy);
                //$("#pop_settings").css("left", posx);

                //Haraprasad date:29.11.2023
                $("#div_shape_editor").hide();
                $("#div_menu_text_editor").hide();
                //$("#div_text_text_editor").show();
                $("#div_shape_sec_bot_top_head").hide();
                $("#div_menu_sec_bot_top_head").hide();
                $("#div_text_sec_bot_top_head").hide();
                $("#div_shapesvg_sec_bot_top_head").hide();
                $("#div_my_images_sec_bot_top_head").hide();
                $('#div_masking_img_sec_bot_top_head').hide();//Haraprasad dt:02.12.2023
                $("#div_my_images").hide();
                $("#div_pos_images_sec_bot_top_head").hide();
                $("#div_pos_images").hide();
                $("#menu-item-text-tab").removeClass('active');
                $("#menu-item-properties-tab").addClass('active');
                $("#menu-item-effect-tab").removeClass('active');
                //$("#div_text_text_editor").show();
                $("#menu-item-properties").addClass('active show');
                $("#menu-item-effect").hide();
                $("#menu-item-text").hide();
                $("#menu-item-text-tab").remove('active show');
                $("#menu-item-text-tab").hide();
                $("#div_images_editor_sec_bot_top_head").show();
                //Haraprasad end

                $("#div_main_editor_options").show();
                $("#div_images_editor_gallery").hide();
                $("#div_images_sec_bot_top_head").hide();
                $("#div_text_text_editor").hide();
                $("#menu-item-properties").show();
                $("#menu-item-effect").hide();

                $("#div_image_show").show(); //PNG Image Color change Saunak 09-07-2025
                //$("#tab_edit").hide();
                //$("#tab_edit").removeClass("active");
                //$("#tab_properties").addClass("active");
                //$("#tab_effect").removeClass("active");

                //$("#edit").hide();
                //$("#edit").removeClass("active");
                //$("#edit").attr("data-subject", "");//remove existing



                //$("#properties").show();
                //$("#properties").addClass("active");
                //$("#effect").hide();
                //$("#effect").removeClass("active");


                //Show hide on basis of active object
                $('#show_scale').hide();
                $("#image_modify_box").show();
                //Fill Value as per active object

                /* PNG Image Color change Start Saunak 09-07-2025 */
                chk_grayscale.checked = false;
                chk_image_blend.checked = false;
                chk_image_brightness.checked = false;
                $('#div_image_blend').hide();
                $('#div_image_brightness').hide();

                document.getElementById("slider_brightness").value = parseInt(10);
                document.getElementById("slider_blend").value = parseInt(50);
                $("input#blend-fill-color").val('#2ecb25');

                if (activeObj.filters[0]) {
                    if (activeObj.filters[0].type == "Grayscale") {
                        chk_grayscale.checked = true;
                    }
                    if (activeObj.filters[0].type == "Brightness") { // embose
                        chk_image_brightness.checked = true;
                        $('#div_image_brightness').show();
                        if (activeObj.filters[0].brightness) {
                            document.getElementById("slider_brightness").value = parseInt(activeObj.filters[0].brightness * 100);
                        }
                    }
                    if (activeObj.filters[0].type == "Tint") {
                        $('#div_image_blend').show();
                        chk_image_blend.checked = true;
                        if (activeObj.filters[0].opacity) {
                            document.getElementById("slider_blend").value = parseInt(activeObj.filters[0].opacity * 100);
                            document.getElementById("slider_blend_text").value = parseInt(activeObj.filters[0].opacity * 100);
                            //console.log('blend_opacity '+ parseInt(activeObj.filters[0].opacity * 100));
                        }
                        if (activeObj.filters[0].color) {
                            $("input#blend-fill-color").val(activeObj.filters[0].color);
                        }
                    }
                }
                /* PNG Image Color change End Saunak 09-07-2025 */
            }

            if (activeObj && (activeObj.name === 'template1' || activeObj.name === 'template2' || activeObj.name === 'template3' || activeObj.name === 'template4')) {

                $("#div_menu_text_editor").show();
                $("#div_menu_design_top").show();
                $("#div_text_text_editor").hide();
                $("#div_shape_editor").hide();

                $("#div_shape_sec_bot_top_head").hide();
                $("#div_menu_sec_bot_top_head").show();
                $("#div_text_sec_bot_top_head").hide();
                $("#div_shapesvg_sec_bot_top_head").hide();
                $("#div_my_images_sec_bot_top_head").hide();
                $("#div_my_images").hide();
                $("#div_pos_images_sec_bot_top_head").hide();
                $("#div_pos_images").hide();

                $("#div_main_editor_options").show();
                $("#div_images_editor_gallery").hide();
                $("#div_images_sec_bot_top_head").hide();

                $("#menu-item-properties").hide();
                $("#menu-item-effect").hide();

                $('#hd_current_menu_id').val(activeObj.objectCustomID);

                if (clicktype == 2) {
                    $('#set_canvas_menu').show();
                }
                
                
                //Set default value 
                if (activeObj.opacity) {
                    $('#opacity').val(activeObj.opacity * 100);
                    $('#opacity_text').val(activeObj.opacity * 100);
                }
                else {
                    $('#opacity').val(100);
                    $('#opacity_text').val(100);
                }
                //$('#opacity').val(100);
                $('#text-line-hieght').val(100);

                $("#tab_edit").show();
                $("#tab_edit").addClass("active");
                $("#tab_properties").removeClass("active");
                $("#tab_effect").removeClass("active");
                //MenuItem Tab
                $('#tab_menu_item').show();
                $('#items').hide();
                $("#tab_menu_item").removeClass("active");
                $('#div_canvas_menu_done_button').show();
                $("#edit").show();
                $("#edit").addClass("active");

                $("#edit").attr("data-subject", "");//remove existing
                $("#edit").attr("data-subject", "menuContentEditor");// add for menu edit

                $("#text_edit_box").hide();
                $("#text_edit_box").removeClass("active");
                $("#shapeeditor").hide();
                $("#shapeeditor").removeClass("active");
                $("#menu_properties").show();
                $("#menu_properties").addClass("active");


                //Always Hide on Start
                $("#properties").hide();
                $("#properties").removeClass("active");
                $("#effect").hide();
                $("#effect").removeClass("active");
                $("#tab_effect").removeClass("active");
                $("#itemProperties").removeClass("active");

                //Show hide on basis of active object
                $('#show_scale').show();
                $("#image_modify_box").hide();


                //column_menu = 4;
                //loadTextGroupEditor(4);
                $('#change_price_colum_1').removeClass('btn-active')
                $('#change_price_colum_2').removeClass('btn-active')
                $('#change_price_colum_3').removeClass('btn-active')
                $('#change_price_colum_4').removeClass('btn-active')
                if (activeObj.name === 'template1') {
                    column_menu = 1;
                    $('#change_price_colum_1').addClass('btn-active')
                    $("#div_advance_price2").hide();
                    $("#div_advance_price3").hide();
                    $("#div_advance_price4").hide();
                    $("#div_menu_editor_menu_price2").hide();
                    $("#div_menu_editor_menu_price3").hide();
                    $("#div_menu_editor_menu_price4").hide();
                    $("#div_menu_editor_menu_price2_heading").hide();
                    $("#div_menu_editor_menu_price3_heading").hide();
                    $("#div_menu_editor_menu_price4_heading").hide();
                    loadTextGroupEditor(1);
                }
                if (activeObj.name === 'template2') {
                    column_menu = 2;
                    $('#change_price_colum_2').addClass('btn-active')
                    $("#div_advance_price2").show();
                    $("#div_advance_price3").hide();
                    $("#div_advance_price4").hide();
                    $("#div_menu_editor_menu_price2").show();
                    $("#div_menu_editor_menu_price3").hide();
                    $("#div_menu_editor_menu_price4").hide();
                    $("#div_menu_editor_menu_price2_heading").show();
                    $("#div_menu_editor_menu_price3_heading").hide();
                    $("#div_menu_editor_menu_price4_heading").hide();
                    loadTextGroupEditor(2);
                }
                if (activeObj.name === 'template3') {
                    column_menu = 3;
                    $('#change_price_colum_3').addClass('btn-active')
                    $("#div_advance_price2").show();
                    $("#div_advance_price3").show();
                    $("#div_advance_price4").hide();
                    $("#div_menu_editor_menu_price2").show();
                    $("#div_menu_editor_menu_price3").show();
                    $("#div_menu_editor_menu_price4").hide();
                    $("#div_menu_editor_menu_price2_heading").show();
                    $("#div_menu_editor_menu_price3_heading").show();
                    $("#div_menu_editor_menu_price4_heading").hide();
                    loadTextGroupEditor(3);
                }
                if (activeObj.name === 'template4') {
                    column_menu = 4;
                    $('#change_price_colum_4').addClass('btn-active')
                    $("#div_advance_price2").show();
                    $("#div_advance_price3").show();
                    $("#div_advance_price4").show();
                    $("#div_menu_editor_menu_price2").show();
                    $("#div_menu_editor_menu_price3").show();
                    $("#div_menu_editor_menu_price4").show();
                    $("#div_menu_editor_menu_price2_heading").show();
                    $("#div_menu_editor_menu_price3_heading").show();
                    $("#div_menu_editor_menu_price4_heading").show();
                    loadTextGroupEditor(4);
                }

                //if (activeObj.scaleX > 0) {
                //    var setScalevalue = parseInt(activeObj.scaleX * 100, 0);
                //    //$('#slider_scale').val(setScalevalue);
                //    document.getElementById("slider_scale").value = setScalevalue;
                //    //$('#slider_scale_div').attr('data-value', setScalevalue);
                //    console.log(activeObj.scaleX);
                //}
                if (activeObj.scaleX > 0) {
                    var setScalevalue = parseInt(activeObj.scaleX * 100, 0);
                    document.getElementById("slider_scale").value = setScalevalue;
                    console.log(activeObj.scaleX);
                }
                if (clicktype == 1) {
                    menu_edit_flag = false
                }
                
            }

            if (activeObj && (activeObj.type == "rect" || activeObj.type == "line" || activeObj.type == "triangle" || activeObj.type == "circle" || activeObj.type == "path" || activeObj.type == "polygon" || activeObj.type == "path-group")) {
                if (activeObj.type == "rect") {
                    $("#div_curvature").show();
                }
                else {
                    $("#div_curvature").hide();
                }
                if (activeObj.type == "line") {
                    $("#div_fill").hide();
                    $("#div_gradient_show").hide();
                }
                else {
                    $("#div_fill").show();
                    $("#div_gradient_show").show();
                }
                document.getElementById("show_gradient_text").checked = false;
                if (activeObj.fill.type != null) {
                    if (activeObj.fill.type == 'linear') {
                        document.getElementById("show_gradient_text").checked = true;
                    }
                }
                var Chk_gradient = $("#show_gradient_text").is(":checked");
                if (Chk_gradient == true) {

                    $("#div_Chk_gradient_show").show();
                }
                else {

                    $("#div_Chk_gradient_show").hide();
                }

                //$("#pop_settings").hide();
                $("#div_menu_text_editor").hide();
                $("#div_text_text_editor").hide();
                $("#div_shape_editor").show();

                $("#div_shapesvg_sec_bot_top_head").hide();
                $("#div_background_sec_bot_top_head").hide();
                $("#div_menu_sec_bot_top_head").show();
                $("#div_text_sec_bot_top_head").hide();
                $("#div_my_images_sec_bot_top_head").hide();
                $("#div_my_images").hide();
                $("#div_pos_images_sec_bot_top_head").hide();
                $("#div_pos_images").hide();

                $("#div_shape_sec_bot_top_head").show();

                $("#div_images_editor_gallery").hide();
                $("#div_images_sec_bot_top_head").hide();
                $("#div_main_editor_options").show();
                //Haraprasad add dt:06.12.2023
                if (activeObj.type === "path-group") {
                    $("input#line-fill-color").val(activeObj.paths[0].fill);
                    $("input#line-stroke-color").val(activeObj.paths[0].stroke);
                    $("#sel_stroke_width").val(activeObj.paths[0].strokeWidth);
                    if (activeObj.paths[0].strokeDashArray == null) {
                        $("#sel_stroke_type").val(1);
                        $("#label_stroke_dashed").hide();
                    } else {
                        $("#sel_stroke_type").val(2);
                        $("#label_stroke_dashed").show();
                        $('#sel_stroke_dashed1').val(activeObj.strokeDashArray[0]);
                        $('#sel_stroke_dashed2').val(activeObj.strokeDashArray[1]);

                    }
                    if (activeObj.paths[0].fill != '') {

                        $("#line_fill_no_color").removeClass('btn-active');
                        $("#line-fill-color").addClass('btn-active');
                    }
                    else {
                        $("#line_fill_no_color").addClass('btn-active');
                        $("#line-fill-color").removeClass('btn-active');
                    }


                    if (activeObj.paths[0].stroke != '' && activeObj.paths[0].stroke != null) {

                        $("#line_stroke_no_color").removeClass('btn-active');
                        $("#line-stroke-color").addClass('btn-active');
                    }
                    else {
                        $("#line_stroke_no_color").addClass('btn-active');
                        $("#line-stroke-color").removeClass('btn-active');
                    }
                }
                else {
                    $("input#line-fill-color").val(activeObj.fill);
                    $("input#line-stroke-color").val(activeObj.stroke);
                    $("#sel_stroke_width").val(activeObj.strokeWidth);
                    if (activeObj.strokeDashArray == null) {
                        $("#sel_stroke_type").val(1);
                        $("#label_stroke_dashed").hide();
                    } else {
                        $("#sel_stroke_type").val(2);
                        $("#label_stroke_dashed").show();
                        $('#sel_stroke_dashed1').val(activeObj.strokeDashArray[0]);
                        $('#sel_stroke_dashed2').val(activeObj.strokeDashArray[1]);

                    }

                    if (activeObj.fill != '') {

                        $("#line_fill_no_color").removeClass('btn-active');
                        $("#line-fill-color").addClass('btn-active');
                    }
                    else {
                        $("#line_fill_no_color").addClass('btn-active');
                        $("#line-fill-color").removeClass('btn-active');
                    }


                    if (activeObj.stroke != '' && activeObj.stroke != null) {

                        $("#line_stroke_no_color").removeClass('btn-active');
                        $("#line-stroke-color").addClass('btn-active');
                    }
                    else {
                        $("#line_stroke_no_color").addClass('btn-active');
                        $("#line-stroke-color").removeClass('btn-active');
                    }
                }
                //Haraprasad end dt:06.12.2023


                //(activeObject || activeGroup).paths[0].setFill(this.value);




                //$("#shape_modify_box").show();
                //console.log(activeObj.name); sunil on 02.10.2023
                if (activeObj.name == 'shape_blob' || activeObj.name == 'shape_circle' || activeObj.name == 'shape_triangle' || activeObj.name == 'shape_heartcard' || activeObj.name == 'shape_hexagon' || activeObj.name == 'shape_rounded_rectangle' || activeObj.name == 'shape4' || activeObj.name == 'shape5' || activeObj.name == 'shape6' || activeObj.name == 'shape7' || activeObj.name == 'shape8' || activeObj.name == 'shape9' || activeObj.name == 'shape10') {
                    //showmodelform('modal_for_set_masking_img');
                    $('#div_shape_sec_bot_top_head').hide();
                    $('#div_shape_editor').hide();
                    $('#div_masking_shape_editor').show();
                    $('#div_masking_img_sec_bot_top_head').show();
                    $("#div_gradient_show").hide();//Haraprasad dt:02.12.2023

                    //$('#modal_for_set_masking_img').addClass('show');
                    //$('#modal_for_set_masking_img').show();
                    //$('#div_main_canvas_body').addClass('modal-open');
                    //$('#div_main_canvas_body').attr('style', 'overflow: hidden; padding-right: 0px;');
                    //$('#div_main_canvas_body_end').show();

                    if (activeObj.name == 'shape_circle')
                        localStorage.setItem("SVG", "1");
                    else if (activeObj.name == 'shape_blob')
                        localStorage.setItem("SVG", "2");
                    else if (activeObj.name == 'shape_rounded_rectangle')
                        localStorage.setItem("SVG", "3");
                    else if (activeObj.name == 'shape4')
                        localStorage.setItem("SVG", "4");
                    else if (activeObj.name == 'shape5')
                        localStorage.setItem("SVG", "5");
                    else if (activeObj.name == 'shape6')
                        localStorage.setItem("SVG", "6");
                    else if (activeObj.name == 'shape7')
                        localStorage.setItem("SVG", "7");
                    else if (activeObj.name == 'shape8')
                        localStorage.setItem("SVG", "8");
                    else if (activeObj.name == 'shape9')
                        localStorage.setItem("SVG", "9");
                    else if (activeObj.name == 'shape10')
                        localStorage.setItem("SVG", "10");


                    //$('#pop_setting_caption').html('Design Shape');
                    //$('#lbl_fill_color').hide();
                    //$('#label_curvature').hide();
                    //$('#div_strok').hide();
                    //$('#design_shape').show()
                }
                else {
                    //$('#pop_setting_caption').html('Shape');
                    //$('#div_strok').show();
                    //$('#design_shape').hide();
                    //if (activeObj.type == "line") {
                    //    $('#lbl_fill_color').hide();
                    //}
                    // else {
                    //    $('#lbl_fill_color').show();
                    //}
                    if (activeObj.type == "rect") {
                       $('#label_curvature').show();
                      document.getElementById('sel_curvature').value = activeObj.rx;
                    }
                    else {
                        $('#label_curvature').hide();
                    document.getElementById('sel_curvature').value = 0;
                    }
                }

                //$("#pop_settings").css("top", posy);
                //$("#pop_settings").css("left", posx);
                //$("#tab_edit").show();
                //$("#tab_edit").addClass("active");
                //$("#tab_properties").removeClass("active");
                //$("#tab_effect").removeClass("active");

                //$("#edit").show();
                //$("#edit").addClass("active");

                $("#edit").attr("data-subject", "");//remove existing
                $("#edit").attr("data-subject", "shapeContentEditor");// add for shape edit

                //$("#text_edit_box").hide();
                //$("#text_edit_box").removeClass("active");
                //$("#shapeeditor").show();
                //$("#shapeeditor").addClass("active");
                //$("#menu_properties").hide();
                //$("#menu_properties").removeClass("active");


                //Always Hide on Start
                $("#properties").hide();
                $("#properties").removeClass("active");
                $("#effect").hide();
                $("#effect").removeClass("active");

                //Show hide on basis of active object
                $('#show_scale').hide();
                $("#image_modify_box").hide();
                //Fill Value as per active object
                //if (activeObj.get('fill')) {
                //    document.getElementById('line-fill-color').value = activeObj.get('fill');
                //    document.getElementById('chk_fill_color').checked = true;
                //}
                //else {
                //    document.getElementById('chk_fill_color').checked = false;
                //}
                //if (activeObj.get('stroke')) {
                //    document.getElementById('line-stroke-color').value = activeObj.get('stroke');
                //    document.getElementById('chk_stroke_color').checked = true;
                //    $('#div_stroke_properties').show();
                //}
                //else {
                //    document.getElementById('chk_stroke_color').checked = false;
                //    $('#div_stroke_properties').hide();
                //}
                //document.getElementById('sel_stroke_width').value = activeObj.get('strokeWidth');





                //if (activeObj.get('strokeDashArray') != null && activeObj.get('strokeDashArray')[0] > 0 && activeObj.get('strokeDashArray')[1] > 0) {
                //    document.getElementById('sel_stroke_dashed1').value = activeObj.get('strokeDashArray')[0];
                //    document.getElementById('sel_stroke_dashed2').value = activeObj.get('strokeDashArray')[1];
                //    document.getElementById('sel_stroke_type').value = 2;
                //    $('#label_stroke_dashed').show();
                //}
                //else {
                //    document.getElementById('sel_stroke_dashed1').value = 0;
                //    document.getElementById('sel_stroke_dashed2').value = 0;
                //    document.getElementById('sel_stroke_type').value = 1;
                //    $('#label_stroke_dashed').hide();
                //}

            }
            //if (activeObj && activeObj.type == "path-group") {

            //    $("#tab_edit").show();//sourav

            //    $("#pop_settings").css("top", posy);
            //    $("#pop_settings").css("left", posx);
            //    $("#shape_modify_box").show();

            //    if (activeObj.paths[0].getFill()) {
            //        document.getElementById('line-fill-color').value = activeObj.paths[0].getFill();
            //        document.getElementById('chk_fill_color').checked = true;
            //    }
            //    else {
            //        document.getElementById('chk_fill_color').checked = false;
            //    }
            //    if (activeObj.paths[0].getStroke()) {
            //        document.getElementById('line-stroke-color').value = activeObj.paths[0].getStroke();
            //        document.getElementById('chk_stroke_color').checked = true;
            //        $('#div_stroke_properties').show();
            //    }
            //    else {
            //        document.getElementById('chk_stroke_color').checked = false;
            //        $('#div_stroke_properties').hide();
            //    }
            //    document.getElementById('sel_stroke_width').value = activeObj.paths[0].getStrokeWidth();
            //    $('#lbl_fill_color').show();

            //    if (activeObj.paths[0].getStrokeDashArray() != null && activeObj.paths[0].getStrokeDashArray()[0] > 0 && activeObj.paths[0].getStrokeDashArray()[1] > 0) {
            //        document.getElementById('sel_stroke_dashed1').value = activeObj.paths[0].getStrokeDashArray()[0];
            //        document.getElementById('sel_stroke_dashed2').value = activeObj.paths[0].getStrokeDashArray()[1];
            //        document.getElementById('sel_stroke_type').value = 2;
            //        $('#label_stroke_dashed').show();
            //    }
            //    else {
            //        document.getElementById('sel_stroke_dashed1').value = 0;
            //        document.getElementById('sel_stroke_dashed2').value = 0;
            //        document.getElementById('sel_stroke_type').value = 1;
            //        $('#label_stroke_dashed').hide();
            //    }

            //}

            /*start sourav*/

            //var pop_settings = document.getElementById("pop_settings");
            //var pop_settings_position = pop_settings.getBoundingClientRect();
            //var pop_height = pop_settings_position.height;
            //if(parseInt(pop_height+posy) > canvas.height){
            //	var settop = parseInt(canvas.height - (pop_height))+10;
            //	$("#pop_settings").css("top",(settop));
            //}
                /*end sourav*/
            }
            catch {

            }
        }
        //*****************


        // for single click
        $(".upper-canvas").click(function (e) {
           /* if (!e.ctrlKey) {*/
                //showEditMenu(1);
            //}
            //else {
            //    canvas.selection = true;
            //    //alert('select');
            //}
            showEditMenu(1);

        });

        function showEditMenu_singleclick(posx, posy, clicktype) {

            var activeObj = canvas.getActiveObject();
            if (activeObj) {

                console.log(activeObj.type);
                if (activeObj && (activeObj.name === 'template1' || activeObj.name === 'template2' || activeObj.name === 'template3' || activeObj.name === 'template4')) {


                    //Set default value 
                    if (activeObj.opacity) {
                        $('#opacity').val(activeObj.opacity * 100);
                        $('#opacity_text').val(activeObj.opacity * 100);
                    }
                    else {
                        $('#opacity').val(100);
                        $('#opacity_text').val(100);
                    }
                    //if (activeObj.tableLineHieght) {
                    //    $('#template_line_height').val(activeObj.tableLineHieght);
                    //}
                    //else {
                    //    $('#template_line_height').val(.5);
                    //}


                    if (activeObj.name === 'template1') {
                        column_menu = 1;
                        loadTextGroupEditor(1);
                    }
                    if (activeObj.name === 'template2') {
                        column_menu = 2;
                        loadTextGroupEditor(2);
                    }
                    if (activeObj.name === 'template3') {
                        column_menu = 3;
                        loadTextGroupEditor(3);
                    }
                    if (activeObj.name === 'template4') {
                        column_menu = 4;
                        loadTextGroupEditor(4);
                    }

                    if (activeObj.scaleX > 0) {
                        var setScalevalue = parseInt(activeObj.scaleX * 100, 0);
                        document.getElementById("slider_scale").value = setScalevalue;
                        console.log(activeObj.scaleX);
                    }
                }
            }
        }


        //Code for Right Side Control Panel Show Hide
        // *********   Start  **************

        // added by sunil 

        $('#set_menu_prie_colum').click(function () {
            deselectMenudiv();
            $(".set-menu-prie-colum-content-h").show();
            $("#set_menu_prie_colum_content").show();
            $("#set_menu_prie_colum").addClass('active');
        });

        $('#set_menu_template_colum').click(function () {
            deselectMenudiv();
            $(".set-menu-prie-colum-content-h").show();
            $("#set_menu_template_colum_content").show();
            $("#set_menu_template_colum").addClass('active');
        });

        $('#set_menu_desc_colum').click(function () {
            deselectMenudiv();
            $(".set-menu-prie-colum-content-h").show();
            $("#set_menu_desc_colum_content").show();
            $("#set_menu_desc_colum").addClass('active');
        });

        //document.getElementById("tab_effect").onclick = function() {
        //  $("#menu_properties").hide();
        //  $("#tab_effect").addClass("active");
        //  $("#effect").show();
        //  $("#edit").hide();
        //  $("#properties").hide();
        //  $("#tab_properties").removeClass("active");
        //  $("#tab_edit").removeClass("active");
        //};

        function deselectMenudiv() {
            $("#set_menu_template_colum").removeClass('active');
            $("#set_menu_desc_colum").removeClass('active');
            $("#set_menu_prie_colum").removeClass('active');
            $("#menu-item-text-tab").removeClass('active');
            $("#menu-item-properties-tab").removeClass('active');
            $("#menu-item-effect-tab").removeClass('active');

            $("#menu-item-properties").hide();
            $('#menu-item-text').hide();
            $("#div_text_text_editor").hide();
            $('#div_shape_editor').hide();
            $('#div_menu_text_editor').hide();
            $("#menu-item-effect").hide();
            $("#div_masking_shape_editor").hide();

            $(".set-menu-prie-colum-content-h").hide();
            $("#set_menu_template_colum_content").hide();
            $("#set_menu_prie_colum_content").hide();
            $("#set_menu_desc_colum_content").hide();

        }


        // **********  End  **************


        // New Model  Open Function for new interface
        function showmodelform(modelId) {
            $('#div_main_canvas_body').addClass('modal-open');
            $('#div_main_canvas_body').attr('style', 'overflow: hidden; padding-right: 0px;');
            $('#div_main_canvas_body_end').show();
            $('#' + modelId).addClass('show');
            $('#' + modelId).show();
        }
        $("#canvas_container").click(function () {
            if (!menu_edit_flag && !my_menu_popup_flag) {
                $(".pop_container").hide();
                menu_edit_flag = false;
                canvasModified();
            }
        });

        $("#pop_container_close").click(function () {
            menu_edit_flag = false;
            my_menu_popup_flag = false;
        });
        $("#my_menu_gallery_close").click(function () {
            my_menu_popup_flag = false;
        });

        $("#asssignShadow").click(function () {
            var checkShadow = $('#asssignShadow').is(":checked");//haraprasad date:11:11:2023
            if (checkShadow == true) {//haraprasad date:11:11:2023
                $('#chk_shadow').show();//haraprasad date:11:11:2023
                objectShadow();
                $("#shadow_no_color").removeClass('btn-active');//Haraprasad dt. 30.11.2023
                $("#shadow_color").addClass('btn-active');
            }
            else {
                $('#chk_shadow').hide();//haraprasad date:11:11:2023
                objectShadow()
            }

        });

        $("#properties img").click(function () {
            var clickedAction = $(this).attr('property-class'),
                activeObject = canvas.getActiveObject();
            switch (clickedAction) {
                case "remove": {
                    remove_object();
                }
                    break;
                case "bring_forward": {
                    pushUndo();
                    canvas.bringForward(canvas.getActiveObject());
                    canvas.renderAll();
                }
                    break;
                case "bring_to_front": {
                    pushUndo();
                    canvas.bringToFront(canvas.getActiveObject());

                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "send_backwards": {
                    pushUndo();
                    canvas.sendBackwards(canvas.getActiveObject());
                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "send_to_back": {
                    pushUndo();
                    canvas.sendToBack(canvas.getActiveObject());
                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "clone": {
                    clone_object();
                }
                    break;
                case "horizontal_image": {
                    if (activeObject.flipY == 1) {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipY = 0;
                    }
                    else {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipY = 1;
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "vertical_image": {
                    if (activeObject.flipX == 1) {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipX = 0;
                    }
                    else {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipX = 1;
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "rotate_90_clock": {
                    pushUndo();
                    activeObject.set({ originX: 'center', originY: 'center' });
                    activeObject.set({ angle: (activeObject.angle + 90) });
                    canvas.renderAll();
                    activeObject.setCoords();
                    canvas.calcOffset();
                }
                    break;
                case "lock_object": {
                    activeObject.set('hasControls', false);
                    activeObject.set('lockMovementX', true);
                    activeObject.set('lockMovementY', true);
                    canvas.renderAll();
                    canvas.calcOffset();
                    $("#li_lock_object").addClass('properties-active');
                }
                    break;
                case "unlock_object": {
                    activeObject.set('hasControls', true);
                    activeObject.set('lockMovementX', false);
                    activeObject.set('lockMovementY', false);
                    canvas.renderAll();
                    canvas.calcOffset();
                    $("#li_lock_object").removeClass('properties-active');
                }
                    break;
                case "reset": {
                    pushUndo();
                    activeObject.set('hasControls', true);
                    activeObject.set('lockMovementX', false);
                    activeObject.set('lockMovementY', false);
                    $("#li_lock_object").removeClass('properties-active');

                    activeObject.shadow = null;
                    $("#li_shadow").removeClass('properties-active');

                    activeObject.set({ angle: 0 });
                    activeObject.flipY = 0;
                    activeObject.flipX = 0;
                    activeObject.opacity = 1;
                    document.getElementById("opacity").value = 100;

                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "copy_propertise": {
                    pushUndo();
                    objPropertise = activeObject;
                    canvas.renderAll();
                    canvas.calcOffset();
                    $('#pop_settings').hide();
                }
                    break;
                case "paste_propertise": {
                    pushUndo();
                    if (activeObject && (activeObject.name === 'template1' || activeObject.name === 'template2' || activeObject.name === 'template3' || activeObject.name === 'template4') && (objPropertise.name === 'template1' || objPropertise.name === 'template2' || objPropertise.name === 'template3' || objPropertise.name === 'template4')) {
                        changeMenuPropertise();
                    }
                    if (activeObject && (activeObject.type === 'text') && objPropertise.type === 'text') {
                        activeObject.set('fill', objPropertise.fill);   // sudip 7-1-2025
                        //activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.backgroundColor = objPropertise.backgroundColor;
                        activeObject.fillRule = objPropertise.fillRule;
                        activeObject.fontSize = objPropertise.fontSize;
                        activeObject.fontWeight = objPropertise.fontWeight;
                        activeObject.fontFamily = objPropertise.fontFamily;
                        activeObject.fontStyle = objPropertise.fontStyle;
                        activeObject.lineHeight = objPropertise.lineHeight;
                        activeObject.textDecoration = objPropertise.textDecoration;
                        activeObject.textAlign = objPropertise.textAlign;
                        activeObject.textBackgroundColor = objPropertise.textBackgroundColor;

                    }

                    if (activeObject && activeObject.type == "path-group" && objPropertise.type == "path-group") {
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.paths[0].fill = objPropertise.paths[0].fill;
                        activeObject.paths[0].stroke = objPropertise.paths[0].stroke;
                        activeObject.paths[0].strokeWidth = objPropertise.paths[0].strokeWidth;
                        activeObject.paths[0].strokeDashArray = objPropertise.paths[0].strokeDashArray;
                    }
                    if (activeObject && activeObject.type === 'image' && objPropertise.type == "image") {
                        activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.filters = objPropertise.filters;
                        activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    }
                    if (activeObject && (activeObject.type == "rect" || activeObject.type == "line" || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                        activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;

                        if (activeObject && activeObject.type === 'line' && objPropertise.type == "line") {
                            activeObject.width = objPropertise.width;
                        }
                        if (activeObject && activeObject.type === 'rect' && objPropertise.type == "rect") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                            activeObject.rx = objPropertise.rx;
                            activeObject.ry = objPropertise.ry;
                        }
                        if (activeObject && activeObject.type === 'circle' && objPropertise.type == "circle") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                            activeObject.radius = objPropertise.radius;
                            activeObject.startAngle = objPropertise.startAngle;
                            activeObject.endAngle = objPropertise.endAngle;
                        }
                        if (activeObject && activeObject.type === 'triangle' && objPropertise.type == "triangle") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                        if (activeObject && activeObject.type === 'polygon' && objPropertise.type == "polygon") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                        if (activeObject && activeObject.type === 'path' && objPropertise.type == "path") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                    }
                    activeObject.setCoords();
                    canvas.renderAll();
                    canvas.calcOffset();
                    canvas.renderAll.bind(canvas);
                    $('#pop_settings').hide();
                }
                    break;
            }
        });
        

        //canvas.on('object:selected', function (event) {
        //    var object = event.target;
        //    canvas.sendToBack(object);
        //    //object.sendToBack();
        //    console.log("Selected");
        //});

        /* EDIT IMAGE FILTER START */
        /*PNG Image Color change Start Saunak 09-07-2025 */
        var chk_grayscale = document.getElementById('chk_grayscale');
        var chk_image_blend = document.getElementById('chk_image_blend');
        var blend_fill_color = document.getElementById('blend-fill-color');
        var slider_blend = document.getElementById('slider_blend');
        var chk_image_brightness = document.getElementById('chk_image_brightness');
        var slider_brightness = document.getElementById('slider_brightness');

        chk_image_brightness.onchange = function () {
            imageBrightness();
        };
        slider_brightness.onchange = function () {
            imageBrightness();
        };

        function imageBrightness() {
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'image') {
                pushUndo();

                $('#div_image_blend').hide();
                chk_image_blend.checked = false;
                chk_grayscale.checked = false;
                if (chk_image_brightness.checked) {
                    activeObject.filters[0] = null;
                    activeObject.applyFilters(canvas.renderAll.bind(canvas));

                    $('#div_image_brightness').show();
                    var opacity = document.getElementById("slider_brightness").value;
                    opacity = parseFloat(opacity) / 100;
                    var brightness = new fabric.Image.filters.Brightness({
                        brightness: parseFloat(opacity, 10)
                    });


                    activeObject.filters[0] = brightness;
                    ////activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    ////activeObject.filters[0].brightness = parseFloat(opacity,10);
                    activeObject.applyFilters();
                    canvas.renderAll();
                    console.log('brightness_opacity: ' + opacity);
                }
                else {
                    activeObject.filters[0] = null;
                    //activeObject.applyFilters(function () {
                    //    canvas.renderAll();
                    //});
                    //activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    activeObject.applyFilters();
                    canvas.renderAll();
                }
            }
        }

        chk_image_blend.onchange = function () {
            imageBlend();
        };
        blend_fill_color.onchange = function () {
            imageBlend();
        };
        slider_blend.onchange = function () {
            imageBlend();
        };

        function imageBlend() {
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'image') {
                pushUndo();
                chk_grayscale.checked = false;
                chk_image_brightness.checked = false;
                $('#div_image_brightness').hide();
                if (chk_image_blend.checked) {
                    $('#div_image_blend').show();
                    var color = $("input#blend-fill-color").val();
                    var opacity = document.getElementById("slider_blend").value / 100;
                    var blend = new fabric.Image.filters.Tint({
                        color: color,
                        opacity: opacity
                    });
                    //var blend = new fabric.Image.filters.Blend({
                    //    color: color,
                    //    mode: 'tint',
                    //    alpha: opacity
                    //});
                    activeObject.filters[0] = blend;
                    activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    //activeObject.filters[0].push(filter);
                    //activeObject.applyFilters();
                    //canvas.renderAll();
                }
                else {
                    $('#div_image_blend').hide();
                    activeObject.filters[0] = null;
                    //activeObject.applyFilters(function () {
                    //    canvas.renderAll();
                    //});
                    activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    //canvas.renderAll();
                }
            }


            ///// Indranil changes

            //$('#div_image_blend').show();

            //var activeObject = canvas.getActiveObject();

            //if (activeObject && activeObject.type === 'image') {
            //    $('#div_image_blend').show();

            //    var blendColor = $('input#blend-fill-color').val(); // Get the blend color from an input field

            //    // Create a Tint filter with the specified blend color
            //    var tintFilter = new fabric.Image.filters.Tint({
            //        color: blendColor,
            //        opacity: 0.5 // Adjust opacity based on your preference
            //    });

            //    // Apply the filter to the image
            //    activeObject.filters = [tintFilter];

            //    // Apply changes and render the canvas
            //    activeObject.applyFilters();
            //    canvas.renderAll();
            //}
        }


        function throttle(func, delay) {
            let lastCall = 0;

            return function (...args) {
                const now = Date.now();

                if (now - lastCall >= delay) {
                    lastCall = now;
                    func.apply(this, args);
                }
            };
        }
        function debounce(func, delay) {
            let timeoutId;

            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        }

        var throttleColorChange = throttle(function (color) {
            var activeObject = canvas.getActiveObject();

            if (activeObject && activeObject.type === 'image') {
                $('#div_image_blend').show();


                var blendColor = color; // Get the blend color from an input field

                // Create a Tint filter with the specified blend color
                var tintFilter = new fabric.Image.filters.Tint({
                    color: blendColor,
                    opacity: 0.5 // Adjust opacity based on your preference
                });

                //const whiteOutFilter = new fabric.Image.filters.Tint({
                //    color: '#ffffff',
                //    mode: 'tint',
                //    alpha: 1
                //});

                //activeObject.filters = [whiteOutFilter];



                // Apply the filter to the image
                activeObject.filters = [tintFilter];
                (activeObject).set('opacity', 1);

                // Apply changes and render the canvas
                activeObject.applyFilters();
                canvas.renderAll();
            }
        }, 0); // Adjust the throttle interval as needed

          // Attach the throttled function to the color change event
        $('#blend-fill-color').on('change', function () {
            //Set default value 
            $('#slider_blend').val(50);
            $('#slider_blend_text').val(50);
            
        });



        /// Indranil changes

        $('#blend-fill-color').on('input', debounce(function () {
            var selectedColor = $(this).val();
            throttleColorChange(selectedColor);
        }, 300));


        var colorPickerTimeout;

        $('#blend-fill-color').on('input', function () {
            clearTimeout(colorPickerTimeout);

            colorPickerTimeout = setTimeout(function () {
                var activeObject = canvas.getActiveObject();

                if (activeObject && activeObject.type === 'image') {
                    $('#div_image_blend').show();

                    var blendColor = $('#blend-fill-color').val();

                    // Create a Tint filter with the specified blend color
                    var tintFilter = new fabric.Image.filters.Tint({
                        color: blendColor,
                        opacity: 0.5
                    });

                    // Apply the filter to the image
                    activeObject.filters = [tintFilter];

                    // Apply changes and render the canvas
                    activeObject.applyFilters();
                    canvas.renderAll(); // Use requestRenderAll to trigger rendering
                }
            }, 200); // Adjust the timeout value based on your preference
        });













        chk_grayscale.onchange = function () {
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'image') {
                pushUndo();
                $('#div_image_blend').hide();
                $('#div_image_brightness').hide();
                chk_image_blend.checked = false;
                chk_image_brightness.checked = false;

                if (chk_grayscale.checked) {
                    activeObject.filters[0] = new fabric.Image.filters.Grayscale();///Haraprasad date:29.11.2023

                    // activeObject.applyFilters(function () {
                    //canvas.renderAll();
                    // });
                    activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    //canvas.renderAll();
                }
                else {

                    activeObject.filters[0] = null;///Haraprasad date:29.11.2023
                    //activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    //canvas.renderAll();
                }
            }
        };
        /* start sourav */
        //	document.getElementById("shadow_color").addEventListener("input", function() {
        //			var activeObject = canvas.getActiveObject(),
        //		activeGroup = canvas.getActiveGroup();
        //		var shadow_col = $("#shadow_color").val();
        //			var shadow_opacity = $("#txt_shadow_opacity").val();
        //    	//var shadow_opacity = (this.value);
        //    	var opacity_val = 0;
        //    	if(shadow_opacity >= 0 && shadow_opacity<10){
        //    		opacity_val = 0+(shadow_opacity);
        //    		//console.log(opacity_val);
        //    	}
        //    	else{
        //    		opacity_val = (shadow_opacity);
        //    	}
        //    	if(shadow_opacity == 100){
        //    		opacity_val = (shadow_opacity - 1);
        //    	}

        //		if (activeObject || activeGroup) {
        //          (activeObject|| activeGroup).setShadow({
        //          	color:shadow_opacity ==100 ?shadow_col : shadow_col+opacity_val,
        //						blur: activeObject.shadow.blur,
        //						offsetX: activeObject.shadow.offsetX,
        //						offsetY: activeObject.shadow.offsetY,
        //          });
        //        };
        //		canvas.renderAll();
        //});
        /* end sourav */

        /* EDIT IMAGE FILTER END */


        $('#slider_blend').val(50);
        $('#slider_blend_text').val(50);
        var blend_opacity = document.getElementById('slider_blend');
        blend_opacity.oninput  = function () {
            var activeObject = canvas.getActiveObject();

            var current_opacity = parseInt(this.value, 10) / 100;
            //console.log('current_opacity: '+current_opacity);
            var blendColor = $('#blend-fill-color').val();

            // Create a Tint filter with the specified blend color
            var tintFilter = new fabric.Image.filters.Tint({
                color: blendColor,
                opacity: current_opacity
            });

            // Apply the filter to the image
            activeObject.filters = [tintFilter];

            // Apply changes and render the canvas
            activeObject.applyFilters(canvas.renderAll.bind(canvas) );
        };
        $('#slider_blend_plus').on('click',
            function () {
                var blendColor = $('#blend-fill-color').val();
                var activeObject = canvas.getActiveObject();
                if (activeObject) {
                    var blendopacityplus = $("#slider_blend_text").val();
                    var current_opacity = parseInt(blendopacityplus, 10) / 100;
                    blendopacityplus++;
                    if (blendopacityplus <= 100) {
                        // Create a Tint filter with the specified blend color
                        var tintFilter = new fabric.Image.filters.Tint({
                            color: blendColor,
                            opacity: current_opacity
                        });

                        // Apply the filter to the image
                        activeObject.filters = [tintFilter];

                        // Apply changes and render the canvas
                        activeObject.applyFilters(canvas.renderAll.bind(canvas));

                        $("#slider_blend_text").val(blendopacityplus);
                        $("#slider_blend").val(blendopacityplus);
                    }
                }
            }
        );
        $('#slider_blend_minus').on('click',
            function () {
                var blendColor = $('#blend-fill-color').val();
                var activeObject = canvas.getActiveObject();

                if (activeObject) {
                    var blendopacityminus = $("#slider_blend_text").val();
                    var current_opacity = parseInt(blendopacityminus, 10) / 100;
                    blendopacityminus--;
                    if (blendopacityminus > 0) {

                        // Create a Tint filter with the specified blend color
                        var tintFilter = new fabric.Image.filters.Tint({
                            color: blendColor,
                            opacity: current_opacity
                        });

                        // Apply the filter to the image
                        activeObject.filters = [tintFilter];

                        // Apply changes and render the canvas
                        activeObject.applyFilters(canvas.renderAll.bind(canvas));

                        $("#slider_blend_text").val(blendopacityminus);
                        $("#slider_blend").val(blendopacityminus);
                    }
                }
            }
        );
        /* PNG Image Color change End Saunak 09-07-2025 */

        var controls_opacity = document.getElementById('opacity');
        controls_opacity.onchange = function () {
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();

            if (activeObject || activeGroup) {
                (activeObject || activeGroup).set('opacity', parseInt(this.value, 10) / 100);
                canvas.renderAll();
            }
        };

        $('#opacity_plus').on('click',
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup) {
                    var opacityplus = $("#opacity_text").val();//haraprasad date:15.11.2023 
                    opacityplus++;//haraprasad date:15.11.2023 
                    if (opacityplus <= 100) {//haraprasad date:16.11.2023 
                        (activeObject || activeGroup).set('opacity', parseInt(opacityplus, 10) / 100);
                        $("#opacity_text").val(opacityplus);
                        $("#opacity").val(opacityplus);
                    }
                    canvas.renderAll();
                }
            }
        );
        $('#opacity_minus').on('click',
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();

                if (activeObject || activeGroup) {
                    var opacityminus = $("#opacity_text").val();//haraprasad date:15.11.2023 
                    opacityminus--;//haraprasad date:15.11.2023 
                    if (opacityminus > 0) {
                        (activeObject || activeGroup).set('opacity', parseInt(opacityminus, 10) / 100);
                        $("#opacity_text").val(opacityminus);
                        $("#opacity").val(opacityminus);
                    }

                    canvas.renderAll();
                }
            }
        );



        ///Start haraprasad date: 11.11.2023

        $('#slider_scale').on('input',
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup.length > 0) {
                    (activeObject || activeGroup).set('scaleX', parseInt(this.value, 10) / 100);
                    (activeObject || activeGroup).set('scaleY', parseInt(this.value, 10) / 100);
                    (activeObject || activeGroup).setCoords();
                    canvas.renderAll();
                }
            }
        );
        $('#slider_scale_plus').on('click',
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup.length > 0) {
                    var sliderscaleplus = $("#slider_scale").val();
                    sliderscaleplus++;
                    (activeObject || activeGroup).set('scaleX', parseInt(sliderscaleplus, 10) / 100);
                    (activeObject || activeGroup).set('scaleY', parseInt(sliderscaleplus, 10) / 100);
                    (activeObject || activeGroup).setCoords();
                    $("#slider_scale").val(sliderscaleplus);
                    canvas.renderAll();
                }
            }
        );
        $('#slider_scale_minus').on('click',
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup.length > 0) {
                    var sliderscaleminus = $("#slider_scale").val();
                    sliderscaleminus--;
                    if (sliderscaleminus >= 0) {
                        (activeObject || activeGroup).set('scaleX', parseInt(sliderscaleminus, 10) / 100);
                        (activeObject || activeGroup).set('scaleY', parseInt(sliderscaleminus, 10) / 100);
                        (activeObject || activeGroup).setCoords();
                        $("#slider_scale").val(sliderscaleminus);
                    }

                    canvas.renderAll();
                }
            }
        );
        $("#menu-item-text-tab").click(function () {
            showEditMenu();
        });

        $("#menu-item-properties-tab").click(function () {
            deselectMenudiv();
            $("#menu-item-properties").show();
            $("#menu-item-properties-tab").addClass('active');
        });

        $("#menu-item-effect-tab").click(function () {
            deselectMenudiv();
            $("#menu-item-effect").show();
            $("#menu-item-effect-tab").addClass('active');
        });

        $("#menu-item-properties li").click(function () {//haraprasad date: 11.11.2023

            var clickedAction = $(this).attr('property-class'),
                activeObject = canvas.getActiveObject();
            switch (clickedAction) {
                case "remove": {
                    remove_object();
                }
                    break;
                case "bring_forward": {
                    pushUndo();
                    canvas.bringForward(canvas.getActiveObject());
                    canvas.renderAll();
                }
                    break;
                case "bring_to_front": {
                    pushUndo();
                    canvas.bringToFront(canvas.getActiveObject());
                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "send_backwards": {
                    pushUndo();
                    canvas.sendBackwards(canvas.getActiveObject());
                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "send_to_back": {
                    pushUndo();
                    canvas.sendToBack(canvas.getActiveObject());
                    //canvas.discardActiveObject();
                    canvas.renderAll();
                }
                    break;
                case "clone": {
                    clone_object();
                }
                    break;
                case "horizontal_image": {
                    if (activeObject.flipY == 1) {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipY = 0;
                    }
                    else {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipY = 1;
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "vertical_image": {
                    if (activeObject.flipX == 1) {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipX = 0;
                    }
                    else {
                        activeObject = canvas.getActiveObject();
                        activeObject.flipX = 1;
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "rotate_45_clock": {//haraprasad date: 11.11.2023
                    pushUndo();
                    activeObject.set({ originX: 'center', originY: 'center' });
                    activeObject.set({ angle: (activeObject.angle + 45) });
                    canvas.renderAll();
                    activeObject.setCoords();
                    canvas.calcOffset();
                }
                    break;
                case "rotate_90_clock": {
                    pushUndo();
                    activeObject.set({ originX: 'center', originY: 'center' });
                    activeObject.set({ angle: (activeObject.angle + 90) });
                    canvas.renderAll();
                    activeObject.setCoords();
                    canvas.calcOffset();
                }
                    break;
                case "lock_object": {
                    activeObject.set('hasControls', false);
                    activeObject.set('lockMovementX', true);
                    activeObject.set('lockMovementY', true);
                    canvas.renderAll();
                    canvas.calcOffset();
                    $("#li_lock_object").addClass('properties-active');

                }
                    break;
                case "unlock_object": {
                    activeObject.set('hasControls', true);
                    activeObject.set('lockMovementX', false);
                    activeObject.set('lockMovementY', false);
                    canvas.renderAll();
                    canvas.calcOffset();
                    $("#li_lock_object").removeClass('properties-active');

                }
                    break;
                case "reset": {
                    pushUndo();
                    activeObject.set('hasControls', true);
                    activeObject.set('lockMovementX', false);
                    activeObject.set('lockMovementY', false);
                    $("#li_lock_object").removeClass('properties-active');

                    activeObject.shadow = null;
                    $("#li_shadow").removeClass('properties-active');

                    activeObject.set({ angle: 0 });
                    activeObject.flipY = 0;
                    activeObject.flipX = 0;
                    activeObject.opacity = 1;
                    document.getElementById("opacity").value = 100;

                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "copy_propertise": {
                    pushUndo();
                    objPropertise = activeObject;
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                    break;
                case "paste_propertise": {
                    pushUndo();
                    if (activeObject && (activeObject.name === 'template1' || activeObject.name === 'template2' || activeObject.name === 'template3' || activeObject.name === 'template4') && (objPropertise.name === 'template1' || objPropertise.name === 'template2' || objPropertise.name === 'template3' || objPropertise.name === 'template4')) {
                        changeMenuPropertise();
                        var template_line_height = objPropertise.tableLineHieght;
                        $('#template_line_height').val(template_line_height).trigger('input').trigger('change');  // Saunak date: 11-08-2025
                    }
                    if (activeObject && (activeObject.type === 'text') && objPropertise.type === 'text') {
                        //activeObject.fill = objPropertise.fill;
                        activeObject.set('fill', objPropertise.fill);   // sudip 7-1-2025
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.backgroundColor = objPropertise.backgroundColor;
                        activeObject.fillRule = objPropertise.fillRule;
                        activeObject.fontSize = objPropertise.fontSize;
                        activeObject.fontWeight = objPropertise.fontWeight;
                        activeObject.fontFamily = objPropertise.fontFamily;
                        activeObject.fontStyle = objPropertise.fontStyle;
                        activeObject.lineHeight = objPropertise.lineHeight;
                        activeObject.textDecoration = objPropertise.textDecoration;
                        activeObject.textAlign = objPropertise.textAlign;
                        activeObject.textBackgroundColor = objPropertise.textBackgroundColor;

                        //Indranil Changes

                        //// INDRANIL CHANGES

                        if (objPropertise && objPropertise.fill instanceof fabric.Gradient) {

                            // Get color stops from the first object's gradient
                            var colorStops1 = objPropertise.fill.colorStops;

                            // Create a new gradient with the same color stops
                            var newGradient = new fabric.Gradient({
                                type: 'linear', // or 'radial' based on your needs
                                coords: objPropertise.fill.coords, // use the same coordinates
                                colorStops: colorStops1,
                                angle: objPropertise.fill.angle // use the same angle
                            });

                            // Set the new gradient as the fill of the second object
                            activeObject.set('fill', newGradient);

                            // Update the canvas to see the changes
                            canvas.renderAll();
                        }
                    }
                    //Haraprasad dt:12.12.2023
                    if (activeObject && (activeObject.type === 'curvedText') && objPropertise.type === 'curvedText') {
                        activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.backgroundColor = objPropertise.backgroundColor;
                        activeObject.fillRule = objPropertise.fillRule;
                        activeObject.fontSize = objPropertise.fontSize;
                        activeObject.fontWeight = objPropertise.fontWeight;
                        activeObject.fontFamily = objPropertise.fontFamily;
                        activeObject.fontStyle = objPropertise.fontStyle;
                        activeObject.lineHeight = objPropertise.lineHeight;
                        activeObject.textDecoration = objPropertise.textDecoration;
                        activeObject.textAlign = objPropertise.textAlign;
                        activeObject.textBackgroundColor = objPropertise.textBackgroundColor;
                        CreateCurveText(activeObject, activeObject.color, activeObject.radius, activeObject.angle, activeObject.fontFamily, activeObject.spacing);
                        canvas.getActiveObject().set({ fill: activeObject.get('fill') });
                        canvas.getActiveObject().set({ top: activeObject.top });
                        canvas.getActiveObject().set({ left: activeObject.left });
                        canvas.getActiveObject().set({ scaleX: activeObject.scaleX });
                        canvas.getActiveObject().set({ scaleY: activeObject.scaleY });
                        //Indranil Changes


                        //// INDRANIL CHANGES

                        if (objPropertise && objPropertise.fill instanceof fabric.Gradient) {

                            // Get color stops from the first object's gradient
                            var colorStops1 = objPropertise.fill.colorStops;

                            // Create a new gradient with the same color stops
                            var newGradient = new fabric.Gradient({
                                type: 'linear', // or 'radial' based on your needs
                                coords: objPropertise.fill.coords, // use the same coordinates
                                colorStops: colorStops1,
                                angle: objPropertise.fill.angle // use the same angle
                            });

                            // Set the new gradient as the fill of the second object
                            activeObject.set('fill', newGradient);

                            // Update the canvas to see the changes
                            canvas.renderAll();
                        }


                    }
                    //Haraprasad dt:12.12.2023 end
                    if (activeObject && activeObject.type == "path-group" && objPropertise.type == "path-group") {
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.paths[0].set('fill', objPropertise.paths[0].fill);    //sudip 9122024
                        //activeObject.paths[0].fill = objPropertise.paths[0].fill;
                        activeObject.paths[0].stroke = objPropertise.paths[0].stroke;
                        activeObject.paths[0].strokeWidth = objPropertise.paths[0].strokeWidth;
                        activeObject.paths[0].strokeDashArray = objPropertise.paths[0].strokeDashArray;




                        //// INDRANIL CHANGES

                        if (objPropertise && objPropertise.fill instanceof fabric.Gradient) {

                            // Get color stops from the first object's gradient
                            var colorStops1 = objPropertise.fill.colorStops;

                            // Create a new gradient with the same color stops
                            var newGradient = new fabric.Gradient({
                                type: 'linear', // or 'radial' based on your needs
                                coords: objPropertise.fill.coords, // use the same coordinates
                                colorStops: colorStops1,
                                angle: objPropertise.fill.angle // use the same angle
                            });

                            // Set the new gradient as the fill of the second object
                            activeObject.set('fill', newGradient);

                            // Update the canvas to see the changes
                            canvas.renderAll();
                        }


                    }
                    if (activeObject && activeObject.type === 'image' && objPropertise.type == "image") {
                        activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;
                        activeObject.filters = objPropertise.filters;
                        activeObject.applyFilters(canvas.renderAll.bind(canvas));
                    }
                    if (activeObject && (activeObject.type == "rect" || activeObject.type == "line" || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {


                        activeObject.set('fill', objPropertise.fill);    //sudip 9122024
                        //activeObject.fill = objPropertise.fill;
                        activeObject.stroke = objPropertise.stroke;
                        activeObject.strokeWidth = objPropertise.strokeWidth;
                        activeObject.strokeDashArray = objPropertise.strokeDashArray;
                        activeObject.scaleX = objPropertise.scaleX;
                        activeObject.scaleY = objPropertise.scaleY;
                        activeObject.angle = objPropertise.angle;
                        activeObject.flipX = objPropertise.flipX;
                        activeObject.flipY = objPropertise.flipY;
                        activeObject.opacity = objPropertise.opacity;
                        activeObject.shadow = objPropertise.shadow;




                        //// INDRANIL CHANGES

                        if (objPropertise && objPropertise.fill instanceof fabric.Gradient) {

                            // Get color stops from the first object's gradient
                            var colorStops1 = objPropertise.fill.colorStops;

                            // Create a new gradient with the same color stops
                            var newGradient = new fabric.Gradient({
                                type: 'linear', // or 'radial' based on your needs
                                coords: objPropertise.fill.coords, // use the same coordinates
                                colorStops: colorStops1,
                                angle: objPropertise.fill.angle // use the same angle
                            });

                            // Set the new gradient as the fill of the second object
                            activeObject.set('fill', newGradient);

                            // Update the canvas to see the changes
                            canvas.renderAll();
                        }





                        if (activeObject && activeObject.type === 'line' && objPropertise.type == "line") {
                            activeObject.width = objPropertise.width;
                        }
                        if (activeObject && activeObject.type === 'rect' && objPropertise.type == "rect") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                            activeObject.rx = objPropertise.rx;
                            activeObject.ry = objPropertise.ry;
                        }
                        if (activeObject && activeObject.type === 'circle' && objPropertise.type == "circle") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                            activeObject.radius = objPropertise.radius;
                            activeObject.startAngle = objPropertise.startAngle;
                            activeObject.endAngle = objPropertise.endAngle;
                        }
                        if (activeObject && activeObject.type === 'triangle' && objPropertise.type == "triangle") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                        if (activeObject && activeObject.type === 'polygon' && objPropertise.type == "polygon") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                        if (activeObject && activeObject.type === 'path' && objPropertise.type == "path") {
                            activeObject.width = objPropertise.width;
                            activeObject.height = objPropertise.height;
                        }
                    }
                    activeObject.setCoords();
                    canvas.renderAll();
                    canvas.calcOffset();
                    canvas.renderAll.bind(canvas);
                    ////update sudip menustyle holding 27-11-2024
                    if (objPropertise.menuStyle != null && objPropertise.menuStyle != "") {
                        $(".template-gallery-list li").removeClass("active-menu-gallery");
                        $('.menu-style-imgs li').removeClass('active-menu-gallery');
                        $('#' + objPropertise.menuStyle).addClass('active-menu-gallery');
                    }
                    //                        //update end
                }
                    break;
                
            }
        });
        $('#shadow_color').on('input',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();

                //sunil : for shadow opecity on dt. 19.06.2024
                //start
                var shadow_opacity = $("#shadow_opacity_text").val();
                var opacity_val = 0;
                if (shadow_opacity >= 0 && shadow_opacity < 10) {
                    opacity_val = 0 + (shadow_opacity);
                }
                else {
                    opacity_val = shadow_opacity;
                }
                if (shadow_opacity == 100) {
                    opacity_val = (shadow_opacity - 1);
                }
                var shadow_color = $("#shadow_color").val() + opacity_val;


                // end


                activeObject.set('shadow', {
                    //color: $("#shadow_color").val(),
                    color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color, // sunil dt. 19.06.2024
                    blur: activeObject.shadow.blur,
                    offsetX: activeObject.shadow.offsetX,
                    offsetY: activeObject.shadow.offsetY,
                    shadow_opacity: $("#shadow_opacity_text").val()
                });
                $("#shadow_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                $("#shadow_color").addClass('btn-active');
                canvas.renderAll();
            }
        );
        $('#shadow_no_color').on('click',//Haraprasad dt. 14.11.2023
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject();
                if (activeObject.shadow.color != '') {
                    activeObject.set('shadow', {
                        color: '',
                        blur: activeObject.shadow.blur,
                        offsetX: activeObject.shadow.offsetX,
                        offsetY: activeObject.shadow.offsetY
                    });
                    $("#shadow_no_color").addClass('btn-active');//Haraprasad dt. 07.11.2023
                    $("#shadow_color").removeClass('btn-active');
                }
                else {
                    activeObject.set('shadow', {
                        color: $("#shadow_color").val(),
                        blur: activeObject.shadow.blur,
                        offsetX: activeObject.shadow.offsetX,
                        offsetY: activeObject.shadow.offsetY
                    });
                    $("#shadow_no_color").removeClass('btn-active');//Haraprasad dt. 07.11.2023
                    $("#shadow_color").addClass('btn-active');
                }

                canvas.renderAll();
            }
        );
        ///End haraprasad date: 11.11.2023

        //var controls_scale = document.getElementById('slider_scale');
        //controls_scale.onchange = function () {
        //    var activeObject = canvas.getActiveObject(),
        //        activeGroup = canvas.getActiveObjects();
        //    if (activeObject || activeGroup.length > 0) {
        //        (activeObject || activeGroup).set('scaleX', parseInt(this.value, 10) / 100);
        //        (activeObject || activeGroup).set('scaleY', parseInt(this.value, 10) / 100);
        //        (activeObject || activeGroup).setCoords();
        //        canvas.renderAll();
        //    }
        //};

        var slider_shadow = document.getElementById('shadow');
        slider_shadow.onchange = function () {
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject || activeGroup) {
                (activeObject || activeGroup).set('shadow', {
                    offsetX: parseFloat((this.value * 20) / 100).toFixed(2),
                    offsetY: parseFloat((this.value * 20) / 100).toFixed(2),
                    blur: activeObject.shadow.blur,
                    color: activeObject.shadow.color,
                    shadow_offset: this.value,
                    shadow_blur: activeObject.shadow.shadow_blur,
                    shadow_opacity: activeObject.shadow.shadow_opacity
                });
            }
            canvas.renderAll();
        };
        $('#shadow_plus').on('click',//Haraprasad dt. 16.11.2023
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup) {
                    var shadowplus = $("#shadow_text").val();//haraprasad date:16.11.2023 
                    shadowplus++;//haraprasad date:16.11.2023 
                    (activeObject || activeGroup).set('shadow', {
                        offsetX: parseFloat((shadowplus * 20) / 100).toFixed(2),
                        offsetY: parseFloat((shadowplus * 20) / 100).toFixed(2),
                        blur: activeObject.shadow.blur,
                        color: activeObject.shadow.color,
                        shadow_offset: this.value,
                        shadow_blur: activeObject.shadow.shadow_blur,
                        shadow_opacity: activeObject.shadow.shadow_opacity
                    });
                    $("#shadow_text").val(shadowplus);
                    $("#shadow").val(shadowplus);
                }
                canvas.renderAll();
            }
        );
        $('#shadow_minus').on('click',//Haraprasad dt. 14.11.2023
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup) {
                    var shadowminus = $("#shadow_text").val();//haraprasad date:15.11.2023 
                    shadowminus--;//haraprasad date:15.11.2023 
                    if (shadowminus > 0) {
                        (activeObject || activeGroup).set('shadow', {
                            offsetX: parseFloat((shadowminus * 20) / 100).toFixed(2),
                            offsetY: parseFloat((shadowminus * 20) / 100).toFixed(2),
                            blur: activeObject.shadow.blur,
                            color: activeObject.shadow.color,
                            shadow_offset: this.value,
                            shadow_blur: activeObject.shadow.shadow_blur,
                            shadow_opacity: activeObject.shadow.shadow_opacity
                        });
                        $("#shadow_text").val(shadowminus);
                        $("#shadow").val(shadowminus);
                    }
                }
                canvas.renderAll();
            }
        );

        var slider_shadow_blur = document.getElementById('shadow_blur');
        slider_shadow_blur.onchange = function () {
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject || activeGroup) {
                (activeObject || activeGroup).set('shadow', {
                    blur: parseFloat((this.value * 20) / 100).toFixed(2),
                    color: activeObject.shadow.color,
                    offsetX: activeObject.shadow.offsetX,
                    offsetY: activeObject.shadow.offsetY,
                    shadow_offset: activeObject.shadow.shadow_offset,
                    shadow_opacity: activeObject.shadow.shadow_opacity,
                    shadow_blur: this.value
                });

            }
            canvas.renderAll();
        };
        $('#shadow_blur_plus').on('click',//Haraprasad dt. 14.11.2023
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup) {
                    var shadowblurplus = $("#shadow_blur_text").val();//haraprasad date:15.11.2023 
                    shadowblurplus++;//haraprasad date:15.11.2023 
                    if (shadowblurplus <= 100) {
                        (activeObject || activeGroup).set('shadow', {
                            blur: parseFloat((shadowblurplus * 20) / 100).toFixed(2),
                            color: activeObject.shadow.color,
                            offsetX: activeObject.shadow.offsetX,
                            offsetY: activeObject.shadow.offsetY,
                            shadow_offset: activeObject.shadow.shadow_offset,
                            shadow_opacity: activeObject.shadow.shadow_opacity,
                            shadow_blur: this.value
                        });
                        $("#shadow_blur_text").val(shadowblurplus);
                        $("#shadow_blur").val(shadowblurplus);
                    }
                }
                canvas.renderAll();
            }
        );
        $('#shadow_blur_minus').on('click',//Haraprasad dt. 14.11.2023
            function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject || activeGroup) {
                    var shadowblurminus = $("#shadow_blur_text").val();//haraprasad date:15.11.2023 
                    shadowblurminus--;//haraprasad date:15.11.2023 
                    if (shadowblurminus > 0) {
                        (activeObject || activeGroup).set('shadow', {
                            blur: parseFloat((shadowblurminus * 20) / 100).toFixed(2),
                            color: activeObject.shadow.color,
                            offsetX: activeObject.shadow.offsetX,
                            offsetY: activeObject.shadow.offsetY,
                            shadow_offset: activeObject.shadow.shadow_offset,
                            shadow_opacity: activeObject.shadow.shadow_opacity,
                            shadow_blur: this.value
                        });
                        $("#shadow_blur_text").val(shadowblurminus);
                        $("#shadow_blur").val(shadowblurminus);
                    }

                }
                canvas.renderAll();
            }
        );

        var slider_shadow_opacity = document.getElementById('shadow_opacity');
        slider_shadow_opacity.onchange = function () {
            var shadow_opacity = (this.value);
            var opacity_val = 0;
            if (shadow_opacity >= 0 && shadow_opacity < 10) {
                opacity_val = 0 + (this.value);
            }
            else {
                opacity_val = (this.value);
            }
            if (shadow_opacity == 100) {
                opacity_val = (this.value - 1);
            }
            var shadow_color = $("#shadow_color").val() + opacity_val;
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject || activeGroup) {
                (activeObject || activeGroup).set('shadow', {
                    blur: activeObject.shadow.blur,
                    color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color,
                    offsetX: activeObject.shadow.offsetX,
                    offsetY: activeObject.shadow.offsetY,
                    shadow_offset: activeObject.shadow.shadow_offset,
                    shadow_blur: activeObject.shadow.shadow_blur,
                    shadow_opacity: this.value
                });
            }
            canvas.renderAll();
        };

        $('#shadow_opacity_minus').on('click',//Haraprasad dt. 14.11.2023
            function () {
                var shadow_opacityminus = $("#shadow_opacity_text").val();//haraprasad date:15.11.2023 
                shadow_opacityminus--;//haraprasad date:15.11.2023 
                if (shadow_opacityminus > 0) {

                    var shadow_opacity = (shadow_opacityminus);
                    var opacity_val = 0;
                    if (shadow_opacity >= 0 && shadow_opacity < 10) {
                        opacity_val = 0 + (shadow_opacityminus);
                    }
                    else {
                        opacity_val = (shadow_opacityminus);
                    }
                    if (shadow_opacity == 100) {
                        opacity_val = (shadow_opacityminus - 1);
                    }
                    var shadow_color = $("#shadow_color").val() + opacity_val;
                    var activeObject = canvas.getActiveObject(),
                        activeGroup = canvas.getActiveObjects();
                    if (activeObject || activeGroup) {
                        (activeObject || activeGroup).set('shadow', {
                            blur: activeObject.shadow.blur,
                            color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color,
                            offsetX: activeObject.shadow.offsetX,
                            offsetY: activeObject.shadow.offsetY,
                            shadow_offset: activeObject.shadow.shadow_offset,
                            shadow_blur: activeObject.shadow.shadow_blur,
                            shadow_opacity: this.value
                        });
                    }
                    $("#shadow_opacity_text").val(shadow_opacityminus);
                    $("#shadow_opacity").val(shadow_opacityminus);
                }
                canvas.renderAll();
            }
        );
        $('#shadow_opacity_plus').on('click',//Haraprasad dt. 14.11.2023
            function () {
                var shadow_opacityplus = $("#shadow_opacity_text").val();//haraprasad date:15.11.2023 
                shadow_opacityplus++;//haraprasad date:15.11.2023 
                if (shadow_opacityplus <= 100) {

                    var shadow_opacity = (shadow_opacityplus);
                    var opacity_val = 0;
                    if (shadow_opacity >= 0 && shadow_opacity < 10) {
                        opacity_val = 0 + (shadow_opacityplus);
                    }
                    else {
                        opacity_val = (shadow_opacityplus);
                    }
                    if (shadow_opacity == 100) {
                        opacity_val = (shadow_opacityplus - 1);
                    }
                    var shadow_color = $("#shadow_color").val() + opacity_val;
                    var activeObject = canvas.getActiveObject(),
                        activeGroup = canvas.getActiveObjects();
                    if (activeObject || activeGroup) {
                        (activeObject || activeGroup).set('shadow', {
                            blur: activeObject.shadow.blur,
                            color: shadow_opacity == 100 ? shadow_color.slice(0, -2) : shadow_color,
                            offsetX: activeObject.shadow.offsetX,
                            offsetY: activeObject.shadow.offsetY,
                            shadow_offset: activeObject.shadow.shadow_offset,
                            shadow_blur: activeObject.shadow.shadow_blur,
                            shadow_opacity: this.value
                        });
                    }
                    $("#shadow_opacity_text").val(shadow_opacityplus);
                    $("#shadow_opacity").val(shadow_opacityplus);
                }
                canvas.renderAll();
            }
        );

        ////function UpdateOpacity(type) {
        ////    //if (type == 'opacity') {
        ////    //    var activeObject = canvas.getActiveObject(),
        ////    //        activeGroup = canvas.getActiveGroup();
        ////    //    if (activeObject || activeGroup) {
        ////    //        if (parseInt($('#input_show_opacity').val()) <= 100) {
        ////    //            (activeObject || activeGroup).setOpacity(parseInt($('#input_show_opacity').val(), 10) / 100);
        ////    //            $('#opacity').val(parseInt($('#input_show_opacity').val()));
        ////    //            canvas.renderAll();
        ////    //        } else {
        ////    //            alert('Please enter less than or equals to 100');
        ////    //        }
        ////    //    }
        ////    //}
        ////    //if (type == 'scale') {
        ////    //    var activeObject = canvas.getActiveObject(),
        ////    //        activeGroup = canvas.getActiveGroup();
        ////    //    if (activeObject || activeGroup) {
        ////    //        if (parseInt($('#input_show_scale').val()) <= 300) {
        ////    //            (activeObject || activeGroup).setScaleX(parseInt($('#input_show_scale').val(), 10) / 100);
        ////    //            (activeObject || activeGroup).setScaleY(parseInt($('#input_show_scale').val(), 10) / 100);
        ////    //            $('#scale').val(parseInt($('#input_show_scale').val()));
        ////    //            (activeObject || activeGroup).setCoords();
        ////    //            canvas.renderAll();
        ////    //        } else {
        ////    //            alert('Please enter less than or equals to 300');
        ////    //        }
        ////    //    }
        ////    //}
        ////}





        function clone_object() {
            pushUndo();
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject) {
                //alert(activeObject.type);
                if (activeObject.type == "text" || activeObject.type == "rect" || activeObject.type == "line" || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon") {
                    if (fabric.util.getKlass(activeObject.type).async) {
                        activeObject.clone(function (clone) {
                            clone.set({ left: activeObject.left + 30, top: activeObject.top + 30 });
                            canvas.add(clone);
                        });
                    }
                    else {
                        activeObject.clone(function (obj) {
                            obj.left = activeObject.left + 30;
                            obj.top = activeObject.top + 30;
                            canvas.add(obj);
                            canvasModified();
                            canvas.renderAll();
                            canvas.calcOffset();
                        }, {});
                        //canvas.add(activeObject.clone().set({ left: activeObject.left + 30, top: activeObject.top + 30 }));
                    }
                    canvasModified();
                    canvas.renderAll();
                    canvas.calcOffset();
                }
                else if (activeObject.name === 'template1' || activeObject.name === 'template2' || activeObject.name === 'template3' || activeObject.name === 'template4') {
                    var menu_token = Math.floor(Math.random() * (999 - 100 + 1) + 100);
                    menu_token = Date.now() + menu_token;

                    activeObject.clone(function (obj) {
                        obj.left = activeObject.left + 30;
                        obj.top = activeObject.top + 30;
                        obj.objectCustomID = menu_token;
                        canvas.add(obj);
                        canvasModified();
                        canvas.renderAll();
                        canvas.calcOffset();
                    }, {});
                }
                else {
                    activeObject.clone(function (obj) {
                        obj.left = activeObject.left + 30;
                        obj.top = activeObject.top + 30;
                        canvas.add(obj);
                        canvasModified();
                        canvas.renderAll();
                        canvas.calcOffset();
                    }, {});
                }
            } else if (activeGroup) {
                activeGroup.clone(function (obj) {
                    obj.left = activeGroup.left + 30;
                    obj.top = activeGroup.top + 30;
                    canvas.add(obj);
                    canvasModified();
                    canvas.renderAll();
                    canvas.calcOffset();
                }, {});
            }
        };


        








        /* EDIT COLOUR START */
        var fillColorField = document.getElementById('line-fill-color');
        //var chk_fill_color = document.getElementById('chk_fill_color');
        var lineStrokeColor = document.getElementById('line-stroke-color');
        //var chk_stroke_color = document.getElementById('chk_stroke_color');
        var sel_stroke_width = document.getElementById('sel_stroke_width');
        var sel_stroke_dashed1 = document.getElementById('sel_stroke_dashed1');
        var sel_stroke_dashed2 = document.getElementById('sel_stroke_dashed2');
        var sel_stroke_type = document.getElementById('sel_stroke_type');
        var sel_curvature = document.getElementById('sel_curvature');

        sel_curvature.onchange = function () {
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject && (activeObject.type === 'rect')) {
                pushUndo();
                //(activeObject || activeGroup).rx = $('#sel_curvature').val();
                //(activeObject || activeGroup).ry = $('#sel_curvature').val();
                (activeObject || activeGroup).set('rx', $('#sel_curvature').val());
                (activeObject || activeGroup).set('ry', $('#sel_curvature').val());

                canvas.calcOffset();
                canvas.renderAll();
            }
        };

        sel_stroke_type.onchange = function () {
            if ($('#sel_stroke_type').val() == 1) {
                $('#sel_stroke_dashed1').val(0);
                $('#sel_stroke_dashed2').val(0);
                $('#label_stroke_dashed').hide();
            }
            else {
                $('#sel_stroke_dashed1').val(2);
                $('#sel_stroke_dashed2').val(2);
                $('#label_stroke_dashed').show();
            }
            change_dashed_stroke();
        };
        sel_stroke_dashed1.onchange = function () {
            change_dashed_stroke();
        };
        sel_stroke_dashed2.onchange = function () {
            change_dashed_stroke();
        };
        function change_dashed_stroke() {
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                pushUndo();
                //(activeObject || activeGroup).strokeDashArray = [$('#sel_stroke_dashed1').val(), $('#sel_stroke_dashed2').val()];
                (activeObject || activeGroup).set('strokeDashArray', [$('#sel_stroke_dashed1').val(), $('#sel_stroke_dashed2').val()]);
                canvas.renderAll();
            }
            if (activeObject && (activeObject.type == "path-group")) {
                pushUndo();
                (activeObject || activeGroup).paths[0].strokeDashArray = [$('#sel_stroke_dashed1').val(), $('#sel_stroke_dashed2').val()];
                canvas.renderAll();
            }
        }
        $('#line-fill-color').on('input', ///Haraprasad date: 09.11.2023
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                    pushUndo();
                    (activeObject || activeGroup).set('fill', this.value);
                    $("#line_fill_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    $("#line-fill-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    //chk_fill_color.checked = true;
                    canvas.renderAll();
                }
                if (activeObject && (activeObject.type == "path-group")) {
                    pushUndo();
                    activeObject.fill = '';
                    (activeObject || activeGroup).paths[0].setFill(this.value);
                    $("#line_fill_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    $("#line-fill-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    //chk_fill_color.checked = true;
                    canvas.renderAll();
                }

            }
        );
        $('#line_fill_no_color').on('click',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                    pushUndo();
                    if (activeObject.fill != '') {
                        (activeObject || activeGroup).set('fill', '');//Haraprasad dt. 09.11.2023
                        $("#line_fill_no_color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                        $("#line-fill-color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    }
                    else {
                        (activeObject || activeGroup).set('fill', $("#line-fill-color").val());
                        $("#line_fill_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                        $("#line-fill-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    }

                    //chk_fill_color.checked = true;
                    canvas.renderAll();
                }
                if (activeObject && (activeObject.type == "path-group")) {
                    pushUndo();
                    (activeObject || activeGroup).paths[0].setFill(this.value);
                    //chk_fill_color.checked = true;
                    canvas.renderAll();
                }

            }
        );
        //fillColorField.onchange = function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject(),
        //        activeGroup = canvas.getActiveObjects();
        //    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
        //        pushUndo();
        //        (activeObject || activeGroup).set('fill', this.value);
        //        chk_fill_color.checked = true;
        //        canvas.renderAll();
        //    }
        //    if (activeObject && (activeObject.type == "path-group")) {
        //        pushUndo();
        //        (activeObject || activeGroup).paths[0].setFill(this.value);
        //        chk_fill_color.checked = true;
        //        canvas.renderAll();
        //    }
        //};


        //chk_fill_color.onchange = function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject(),
        //        activeGroup = canvas.getActiveObjects();
        //    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
        //        pushUndo();
        //        if (chk_fill_color.checked) {
        //            (activeObject || activeGroup).set('fill', fillColorField.value);
        //        }
        //        else {
        //            (activeObject || activeGroup).set('fill', '');
        //        }
        //        canvas.renderAll();
        //    }

        //    if (activeObject && (activeObject.type == "path-group")) {
        //        pushUndo();
        //        if (chk_fill_color.checked) {
        //            (activeObject || activeGroup).paths[0].set('fill', fillColorField.value);
        //        }
        //        else {
        //            (activeObject || activeGroup).paths[0].set('fill', '');
        //        }
        //        canvas.renderAll();
        //    }
        //};

        //lineStrokeColor.onchange = function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject(),
        //        activeGroup = canvas.getActiveObjects();
        //    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
        //        pushUndo();
        //        //(activeObject || activeGroup).stroke = this.value;
        //        (activeObject || activeGroup).set('stroke', this.value);
        //        chk_stroke_color.checked = true;
        //        $('#div_stroke_properties').show();
        //        canvas.renderAll();
        //    }
        //    if (activeObject && (activeObject.type == "path-group")) {
        //        pushUndo();
        //        //(activeObject || activeGroup).paths[0].stroke = this.value;
        //        (activeObject || activeGroup).paths[0].set('stroke', this.value);
        //        chk_stroke_color.checked = true;
        //        $('#div_stroke_properties').show();
        //        canvas.renderAll();
        //    }
        //};

        $('#line-stroke-color').on('input',///Haraprasad date:09.11.2023
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                    pushUndo();
                    //(activeObject || activeGroup).stroke = this.value;
                    (activeObject || activeGroup).set('stroke', this.value);
                    $("#line_stroke_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    $("#line-stroke-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    //chk_stroke_color.checked = true;
                    $('#div_stroke_properties').show();
                    canvas.renderAll();
                }
                if (activeObject && (activeObject.type == "path-group")) {
                    pushUndo();
                    //(activeObject || activeGroup).paths[0].stroke = this.value;
                    (activeObject || activeGroup).paths[0].set('stroke', this.value);
                    $("#line_stroke_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    $("#line-stroke-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    // chk_stroke_color.checked = true;
                    $('#div_stroke_properties').show();
                    canvas.renderAll();
                }

            }
        );
        $('#line_stroke_no_color').on('click',
            function () {
                pushUndo();
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveObjects();
                if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                    pushUndo();
                    //(activeObject || activeGroup).stroke = this.value;
                    if (activeObject.stroke != '') {
                        (activeObject || activeGroup).set('stroke', '');
                        $("#line_stroke_no_color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                        $("#line-stroke-color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                    }
                    else {
                        (activeObject || activeGroup).set('stroke', $("#line-stroke-color").val());
                        $("#line_stroke_no_color").removeClass('btn-active');//Haraprasad dt. 09.11.2023
                        $("#line-stroke-color").addClass('btn-active');//Haraprasad dt. 09.11.2023
                    }
                    // chk_stroke_color.checked = true;
                    $('#div_stroke_properties').show();
                    canvas.renderAll();
                }
                if (activeObject && (activeObject.type == "path-group")) {
                    pushUndo();
                    //(activeObject || activeGroup).paths[0].stroke = this.value;
                    (activeObject || activeGroup).paths[0].set('stroke', this.value);

                    //chk_stroke_color.checked = true;
                    $('#div_stroke_properties').show();
                    canvas.renderAll();
                }

            }

        );
        //chk_stroke_color.onchange = function () {
        //    pushUndo();
        //    var activeObject = canvas.getActiveObject(),
        //        activeGroup = canvas.getActiveObjects();
        //    if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
        //        pushUndo();
        //        if (chk_stroke_color.checked) {
        //            (activeObject || activeGroup).stroke = lineStrokeColor.value;
        //            (activeObject || activeGroup).set('stroke', lineStrokeColor.value);
        //            $('#div_stroke_properties').show();
        //        }
        //        else {
        //            (activeObject || activeGroup).stroke = '';
        //            (activeObject || activeGroup).set('stroke', '');
        //            $('#div_stroke_properties').hide();
        //        }
        //        canvas.renderAll();
        //    }
        //    if (activeObject && (activeObject.type == "path-group")) {
        //        pushUndo();
        //        if (chk_stroke_color.checked) {
        //            (activeObject || activeGroup).paths[0].stroke = lineStrokeColor.value;
        //            (activeObject || activeGroup).paths[0].set('stroke', lineStrokeColor.value);
        //            $('#div_stroke_properties').show();
        //        }
        //        else {
        //            (activeObject || activeGroup).paths[0].stroke = '';
        //            (activeObject || activeGroup).paths[0].set('stroke', '');
        //            $('#div_stroke_properties').hide();
        //        }
        //        canvas.renderAll();
        //    }
        //};

        sel_stroke_width.onchange = function () {
            pushUndo();
            var activeObject = canvas.getActiveObject(),
                activeGroup = canvas.getActiveObjects();
            if (activeObject && (activeObject.type === 'rect' || activeObject.type === 'line' || activeObject.type == "triangle" || activeObject.type == "circle" || activeObject.type == "path" || activeObject.type == "polygon")) {
                pushUndo();
                activeObject.set('strokeWidth', parseInt(this.value));
                activeObject.setCoords();
                canvas.renderAll();
                canvas.calcOffset();
            }
            if (activeObject && (activeObject.type == "path-group")) {
                pushUndo();
                activeObject.paths[0].set('strokeWidth', parseInt(this.value));
                activeObject.setCoords();
                canvas.renderAll();
                canvas.calcOffset();
            }
        };
        /* EDIT COLOUR END */





        /* SELECT BACKGROUND START */
        $("#btn-canvas").click(function () {
            menu_edit_flag = false;
            //console.log($("input#background_id").val());
            //console.log($("input#img_path").val());
            if ($("input#background_id").val() < 1) {
                document.getElementById('background-fill-color').value = $("input#img_path").val();
            }
            $(".pop_container").hide();
            $('#add_background').addClass('active');
            $('#add_background').show();
            $(".txt-img").removeClass('active');
            $(this).addClass('active');
        });

        //var fillColorFieldBackground = document.getElementById('background-fill-color');
        //console.log(fillColorFieldBackground);
        //if (fillColorFieldBackground) {
        //    fillColorFieldBackground.input = function () {
        //        console.log(this.value);
        //        pushUndo();
        //        $("input#background_id").val("0");
        //        $("input#img_path").val(this.value);
        //        $("div#canvas_container").css('background-image', '');
        //        $("div#canvas_container").css('background-color', this.value);

        //        canvas.renderAll();
        //        updateCanvasArea();
        //    };
        //}
        //if (fillColorFieldBackground) {
        //    fillColorFieldBackground.onchange = function () {
        //        pushUndo();
        //        $("input#background_id").val("0");
        //        $("input#img_path").val(this.value);
        //        $("div#canvas_container").css('background-image', '');
        //        $("div#canvas_container").css('background-color', this.value);

        //        canvas.renderAll();
        //        updateCanvasArea();
        //    };
        //}

        //$(document).on('change', '#background-fill-color', function (e) {
        //    alert(this.value);
        //    pushUndo();
        //    $("input#background_id").val("0");
        //    $("input#img_path").val(this.value);
        //    $("div#canvas_container").css('background-image', '');
        //    $("div#canvas_container").css('background-color', this.value);

        //    canvas.renderAll();
        //    updateCanvasArea();
        //});

        $('#background-fill-color').on('input',
            function () {
                pushUndo();
                $("input#background_id").val("0");
                $("input#img_path").val(this.value);
                $("div#canvas_container").css('background-image', '');
                $("div#canvas_container").css('background-color', this.value);

                canvas.renderAll();
                updateCanvasArea();
            }
        );

        //$(".stlectTheme").click(function () {
        //    var themId = $(this).attr("data-index");
        //    if (themId) {
        //        $('#sub_themesModal').attr('data-themeIndex', themId);

        //        $.ajax({
        //            type: "GET",
        //            url: '/Canvas/getbackgroundcolourthem',
        //            data: { colorId: parseInt(themId) },
        //            success: function (data) {
        //                if (data != null) {
        //                    $('#sub_themesModal_data').empty();
        //                    $('#sub_themesModal_data').append(data);
        //                }
        //            },
        //            error: function (error) {
        //                console.log(error);
        //            }
        //        });
        //    }
        //});
        //$(document).on('click', '.stageArea', function (e) {
        //    var background_id = $(this).siblings(".themeThumbnail_Box").children('.themeThumbnail.active').attr("data-id");

        //    var img_path = $(this).siblings(".themeThumbnail_Box").children('.themeThumbnail.active').attr("data-image");
        //    $('#canvas_modified').val(1);
        //    $('#background_id').val(background_id);
        //    $('#img_path').val(img_path);
        //    canvas.renderAll();
        //    updateCanvasArea();
        //});

        //$(".stageArea").click(function () {
        //    var background_id = $(".themeThumbnail active").attr("data-id");
        //    var img_path = $(".themeThumbnail active").attr("data-image");
        //    $('#canvas_modified').val(1);
        //    $('#background_id').val(background_id);
        //    $('#img_path').val(img_path);
        //    updateCanvasArea();
        //});

        // This is for Colour theme
        //var lastTheme = '';
        //function setTheme(id) {
        //    if (lastTheme != "") {
        //        $('#divColourTheme-' + lastTheme).removeClass("bg-option-active");
        //    }
        //    lastTheme = id;
        //    $('#divColourTheme-' + lastTheme).addClass("bg-option-active");

        //    $('#selColourTheme').val(id);
        //    $('#selBackground').val('');
        //    setColourTheme();
        //}

        // Ajax for get background

        //function setColourTheme() {
        //    if ($('#selColourTheme').val() == "") {
        //        alert('Please select colour theme!');
        //        $('#selColourTheme').focus();
        //        return false;
        //    }

        //    $.ajax({
        //        type: "POST",
        //        url: "ajax-get-background.php",
        //        data: "width=" + $('#canvas_w').val() + "&height=" + $('#canvas_h').val() + "&ColourTheme=" + $('#selColourTheme').val() + '&action=list_bg_thumbs',
        //        success: function (msg) {
        //            //alert( "Data Saved: " + msg );
        //            $('#allBackground').html(msg);

        //            $("#allBackground .thumb-box img").click(function () {
        //                $('#canvas_modified').val(1);
        //                $('#background_id').val(this.id);
        //                $('#img_path').val(this.lang);
        //                $(".thumb-box").removeClass('bg-options-active');
        //                $("#li_background_" + this.id).addClass('bg-options-active');
        //                updateCanvasArea();
        //            });
        //            return true;
        //        }
        //    });
        //    return false;
        //}
        /* SELECT BACKGROUND END */

        /* IMAGE ƒ START */

        function handleDragStart(e) {
            //alert('start');
            //var images = document.querySelectorAll('.canvas-img-list-box img');
            var images = document.querySelectorAll('.galleryBox img');
            //console.log(images);
            [].forEach.call(images, function (img) {
                img.classList.remove('img_dragging');
            });
            this.classList.add('img_dragging');
        }

        function handleDragOver(e) {
            //alert('end');
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'copy';
        }

        function handleDragEnter(e) {
            this.classList.add('over');

        }

        function handleDragLeave(e) {
            this.classList.remove('over');

        }

        function handleDrop(e) {
            e.stopPropagation(); // Stops some browsers from redirecting.
            e.preventDefault(); // Stops some browsers from redirecting.
            //var img = document.querySelector('.canvas-img-list-box img.img_dragging');
            var img = document.querySelector('.galleryBox img.img_dragging');
            if (img === null) {
                return false;
            }

            $('#template_loader').show();
            $.get(img.id).done(function () {

                if (img.lang != "svg") {
                    pushUndo();
                    fabric.Image.fromURL(img.id, function (image) {
                        //Haraprasad add dt:07.05.2024
                        var canvasZoom = canvas.getZoom();
                        var canvasCoords = canvas.getPointer(e);
                        var left = canvasCoords.x / canvasZoom;
                        var top = canvasCoords.y / canvasZoom;
                         //Haraprasad end dt:07.05.2024
                        image.set({
                            objectName: img.alt,
                            left: left,//e.layerX,      //Haraprasad add dt:07.05.2024
                            top: top,//e.layerY,        //Haraprasad add dt:07.05.2024
                            originX: 'left',
                            originY: 'top',
                            angle: 0,
                            padding: 0,
                            cornersize: 10,
                            opacity: 1,
                            zindex: ++z_index,
                            scaleX: image.scaleX * multiplier_ratio,
                            scaleY: image.scaleY * multiplier_ratio,
                            //lockUniScaling: true,


                        });
                        image.scaleToHeight(image.height * multiplier_ratio);
                        image.scaleToWidth(image.width * multiplier_ratio);
                        image.scale(multiplier_ratio).setCoords();
                        //image.setCoords();
                        /*start sourav*/
                        //image.setScaleX(image.scaleX - 0.00000001);
                        //image.setScaleY(image.scaleY - 0.00000001);
                        /*end sourav*/
                        //image.scaleToWidth(canvas.getWidth());
                        canvas.add(image);
                        canvasModified();
                        canvas.renderAll();
                        $('#template_loader').hide();
                    }, { crossOrigin: 'anonymous' });
                }
                else {
                    pushUndo();

                    //var svgString = '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>';

                    //fabric.loadSVGFromString(svgString, function (objects, options) {
                    //    var svg = fabric.util.groupSVGElements(objects, options);
                    //    canvas.add(svg);
                    //    canvas.renderAll();
                    //});

                    //var imagepath = "G:/SunilWork/ProMenu_Main/proMenu/wwwroot" + ;

                    fabric.loadSVGFromURL(img.id, function (objects, options) {
                        var loadedObject = fabric.util.groupSVGElements(objects, options);
                        //Haraprasad add dt:07.05.2024
                        var canvasZoom = canvas.getZoom();
                        var canvasCoords = canvas.getPointer(e);
                        var left = canvasCoords.x / canvasZoom;
                        var top = canvasCoords.y / canvasZoom;
                         //Haraprasad end dt:07.05.2024
                        loadedObject.set({
                            objectName: img.alt,
                            left: left,//e.layerX,      //Haraprasad add dt:07.05.2024
                            top: top,//e.layerY,    
                            originX: 'center',
                            originY: 'center',
                            angle: 0,
                            padding: 0,
                            cornersize: 10,
                            opacity: 1,
                            zindex: ++z_index,
                            //lockUniScaling: true

                        });


                        //fabric.loadSVGFromURL(img.id, function (objects, options) {
                        //    //console.log('Object', objects);
                        //    const loadedObject = fabric.util.groupSVGElements(objects, options);
                        //    loadedObject.set({
                        //        objectName: img.alt,
                        //        left: e.layerX,
                        //        top: e.layerY,
                        //        originX: 'center',
                        //        originY: 'center',
                        //        angle: 0,
                        //        padding: 0,
                        //        cornersize: 10,
                        //        opacity: 4,
                        //        zindex: ++z_index,
                        //    });
                        loadedObject.scale(multiplier_ratio).setCoords();
                        /*start sourav*/
                        //loadedObject.setScaleX(loadedObject.scaleX - 0.00000001);
                        //loadedObject.setScaleY(loadedObject.scaleY - 0.00000001);
                        /*end sourav*/
                        canvas.add(loadedObject);
                        canvasModified();
                        canvas.renderAll();
                        $('#template_loader').hide();

                    });
                }
            }).fail(function () {
                $('#template_loader').hide();
                alert("Image not exists. Please try another image.");
            });
            return false;
        }

        function handleDragEnd(e) {
            var images = document.querySelectorAll('.galleryBox img');
            // this/e.target is the source node.
            [].forEach.call(images, function (img) {
                img.classList.remove('img_dragging');
            });
        }

        window.updateDragHandlerAll = function updateDragHandlerAll() {
            updateDragHandler();
        }

        function updateDragHandler() {
            var images = document.querySelectorAll('.galleryBox img');
            [].forEach.call(images, function (img) {
                img.addEventListener('dragstart', handleDragStart, false);
                img.addEventListener('dragend', handleDragEnd, false);
            });
            // Bind the event listeners for the canvas
            var canvasContainer = document.getElementById('canvas_container');
            canvasContainer.addEventListener('dragenter', handleDragEnter, false);
            canvasContainer.addEventListener('dragover', handleDragOver, false);
            canvasContainer.addEventListener('dragleave', handleDragLeave, false);
            canvasContainer.addEventListener('drop', handleDrop, false);
        }

        if (Modernizr.draganddrop) {
            // Browser supports HTML5 DnD.

            // Bind the event listeners for the image elements
            updateDragHandler();
            //var images = document.querySelectorAll('.galleryBox img');
            //[].forEach.call(images, function (img) {
            //    img.addEventListener('dragstart', handleDragStart, false);
            //    img.addEventListener('dragend', handleDragEnd, false);
            //});
            //// Bind the event listeners for the canvas
            //var canvasContainer = document.getElementById('canvas_container');
            //canvasContainer.addEventListener('dragenter', handleDragEnter, false);
            //canvasContainer.addEventListener('dragover', handleDragOver, false);
            //canvasContainer.addEventListener('dragleave', handleDragLeave, false);
            //canvasContainer.addEventListener('drop', handleDrop, false);
        } else {
            // Replace with a fallback to a library solution.
            alert("This browser doesn't support the HTML5 Drag and Drop API.");
        }


        ///* IMAGE DRAG END */

        ///* SEARCH IMAGE START */
        //$(".image-drop a").click(function () {
        //    if (this.id == 'add-my-image') {
        //        if ($('#user_commands').text() == "No image found!") {
        //            $("#user_commands").html('');
        //            $("input#user_image_search_text").val('');
        //        }
        //        cmd_user_image_search('user_image_search', '$("input#user_image_search_text").val()', 1);
        //    }
        //    else if (this.id == 'sel-template-from-gallery') {
        //        if ($('#commands_template').text() == "There is no gallery template compatable to canvas size.") {
        //            $("#commands_template").html('');
        //            $("input#gallery_search_text").val('');
        //        }
        //        searchTemplate('', '', 1);
        //    }
        //    else if (this.id == 'import_my_menuboard') {
        //        if ($('#commands_my_menuboard').text() == "There is no menuboard compatable to canvas size.") {
        //            $("#commands_my_menuboard").html('');
        //            $("input#my_menuboard_search_text").val('');
        //        }
        //        searchMyMenuboard('', '', 1);
        //    }
        //    else {
        //        $("input#image_search_text_" + this.id).val('');
        //        cmd_image_search(this.id, '', 1);
        //    }
        //});

        //cmd_image_search(1, '', 1);
        //function cmd_image_search(cat, image_search_text, page) {
        //    if ($("#session_authentication").val() == 'error_session') {
        //        $("#pop_settings_login").show();
        //        document.getElementById('txtE_popup').focus();
        //        return false;
        //    }

        //    var action = 'image_search';
        //    var image_search_text = $("input#image_search_text_" + cat).val();

        //    $("div#commands_" + cat).html('<div class="thumb"><img src="img/ajax-loader.gif" width="30px" alt="" /></div>');
        //    //    $.get("ajax-get-image.php?action="+action+"&page="+page+"&st=" + image_search_text+"&cat=" + cat, function(d) {
        //    //if(d != 'error') {
        //    //  $('.image-search').hide();
        //    //  $('.canvas-img-list-box').hide();
        //    //  $('#image_selector_'+cat).show();
        //    //  $('#image_container_'+cat).show();
        //    //  $("div#commands_"+cat).html(d);
        //    //  updateDragHandler();
        //    //}
        //    //    });
        //}

        //function cmd_user_image_search(cat, image_search_text, page) {
        //    if ($("#session_authentication").val() == 'error_session') {
        //        $("#pop_settings_login").show();
        //        document.getElementById('txtE_popup').focus();
        //        return false;
        //    }

        //    $('.image-search').hide();
        //    $('.canvas-img-list-box').hide();
        //    $('#user_image_selector').show();
        //    $('#image_container_user').show();

        //    // $.get("ajax-get-image.php?action=user_image_search&st=" + $("input#user_image_search_text").val()+"&page="+page+"&canvas_user_id=" + $("#canvas_user_id").val(), function(d) {
        //    //if(d != "error") {
        //    //  $("div#user_commands").html(d);
        //    //  updateDragHandler();

        //    //  $("div#user_commands .img-thumb .edit").click(function() {
        //    //	var image_id = $(this).parent().parent().attr('rel');
        //    //	var name = prompt("Enter image caption:", $('#my_image_caption_'+image_id).html());

        //    //	if(name !== false && name !== null && name != "") {
        //    //	  $.get("ajax-image-manage.php?action=image_rename&name=" + name + "&image_id=" + image_id,
        //    //		function(d) {
        //    //		  $('#my_image_caption_'+image_id).html(name);
        //    //		}
        //    //	  );
        //    //	}
        //    //  });

        //    //  $("div#user_commands .img-thumb .del").click(function() {
        //    //	if(confirm('Are you sure to delete image?')){
        //    //	  var image_id = $(this).parent().parent().attr('rel');
        //    //	  $.get("ajax-image-manage.php?action=image_delete&image_id=" + image_id,
        //    //		function(d) {
        //    //		  $('#my_image_'+image_id).hide();
        //    //		}
        //    //	  );
        //    //	}
        //    //  });
        //    //}
        //    // });
        //}


        //$("#cmd_user_image_search").click(function () {
        //    cmd_user_image_search('user_image_search', '$("input#user_image_search_text").val()', 1);
        //});

        //$(".image_search_button").click(function () {
        //    var image_search_text = $("input#image_search_text_" + this.id).val();
        //    cmd_image_search(this.id, 'image_search_text', 1);
        //});

        //$("#cmd_gallery_search").click(function () {
        //    searchTemplate('', '', 1);
        //});

        //$("#cmd_my_menuboard_search").click(function () {
        //    searchMyMenuboard('', '', 1);
        //});


        //window.listAllUserImagesDrag = function listAllUserImagesDrag() {
        //    cmd_user_image_search('user_image_search', '', 1);
        //}

        //window.doPagination = function doPagination(param1, param2, param3, page) {
        //    if (param1 == "image_search") {
        //        cmd_image_search(param2, param3, page);
        //    }
        //    if (param1 == "user_image_search") {
        //        cmd_user_image_search(param2, param3, page);
        //    }
        //    if (param1 == "template_gallery") {
        //        searchTemplate(param2, param3, page);
        //    }
        //    if (param1 == "template_my_menuboard") {
        //        searchMyMenuboard(param2, param3, page);
        //    }
        //}
        ///* SEARCH IMAGE END */

        ///* TEMPLATE SEARCH START */
        //function searchTemplate(cat, image_search_text, page) {

        //    if ($("#session_authentication").val() == 'error_session') {
        //        $("#pop_settings_login").show();
        //        document.getElementById('txtE_popup').focus();
        //        return false;
        //    }
        //    $('.image-search').hide();
        //    $('.canvas-img-list-box').hide();
        //    $('#image_selector_template').show();
        //    $('#image_container_template').show();

        //    image_search_text = $("input#gallery_search_text").val();
        //    var size = $('#canvas_w').val() + "x" + $('#canvas_h').val();

        //    $("div#commands_template").html('<div class="thumb"><img src="img/ajax-loader.gif" width="30px" alt="" /></div>');
        //    $.get("ajax-get-template.php?action=template_gallery&size_id=" + size + "&st=" + image_search_text + "&page=" + page, function (d) {
        //        $("div#commands_template").html(d);

        //        $("div#commands_template a.thumb_container").click(function () {
        //            if (confirm('Present nemu will be over written by template data! Are your sure to continue?')) {

        //                $('#template_loader').show();
        //                var id = $(this).attr("rel");
        //                $.get('ajax-get-background.php?action=get_template_data&id=' + id,
        //                    function (data) {
        //                        if (data != 'error') {
        //                            pushUndo();
        //                            canvas.clear();
        //                            data = $.parseJSON(data);

        //                            $("input#background_id").val(data.background_id);
        //                            $("input#img_path").val(data.img_path);
        //                            $("input#canvas_w").val(data.canvas_w);
        //                            $("input#canvas_h").val(data.canvas_h);
        //                            $("input#canvas_modified").val("1");

        //                            updateCanvasArea();
        //                            $("textarea#canvas_data").val(data.canvas);
        //                            canvas.loadFromJSON(data.canvas);
        //                            canvas.renderAll();
        //                            canvas.calcOffset();
        //                            manualRenderCanvasFlag = true;
        //                            manualRenderCanvas();

        //                            $('#template_loader').hide();
        //                        }
        //                    }
        //                );
        //            }
        //        });
        //    });
        //}
        ///* TEMPLATE SEARCH END */

        ///* MY MENUBOARD SEARCH START */
        ////function searchMyMenuboard(cat, image_search_text, page) {

        ////    if ($("#session_authentication").val() == 'error_session') {
        ////        $("#pop_settings_login").show();
        ////        document.getElementById('txtE_popup').focus();
        ////        return false;
        ////    }
        ////    $('.image-search').hide();
        ////    $('.canvas-img-list-box').hide();
        ////    $('#image_selector_my_menuboard').show();
        ////    $('#image_container_user_menu').show();

        ////    image_search_text = $("input#my_menuboard_search_text").val();
        ////    var size = $('#canvas_w').val() + "x" + $('#canvas_h').val();

        ////    $("div#commands_my_menuboard").html('<div class="thumb"><img src="img/ajax-loader.gif" width="30px" alt="" /></div>');
        ////    $.get("ajax-get-template.php?action=template_my_menuboard&size_id=" + size + "&st=" + image_search_text + "&page=" + page + "&user_id=" + $("input#canvas_user_id").val(), function (d) {
        ////        $("div#commands_my_menuboard").html(d);
        ////        //alert(d);

        ////        $("div#commands_my_menuboard a.thumb_container").click(function () {
        ////            if (confirm('Present nemu will be over written by template data! Are your sure to continue?')) {

        ////                $('#template_loader').show();
        ////                var id = $(this).attr("rel");
        ////                $.get('ajax-get-background.php?action=get_my_menu_data&id=' + id + "&user_id=" + $("input#canvas_user_id").val(),
        ////                    function (data) {
        ////                        if (data != 'error') {
        ////                            pushUndo();
        ////                            canvas.clear();
        ////                            data = $.parseJSON(data);

        ////                            $("input#background_id").val(data.background_id);
        ////                            $("input#img_path").val(data.img_path);
        ////                            $("input#canvas_w").val(data.canvas_w);
        ////                            $("input#canvas_h").val(data.canvas_h);
        ////                            $("input#canvas_modified").val("1");

        ////                            updateCanvasArea();
        ////                            $("textarea#canvas_data").val(data.canvas);
        ////                            canvas.loadFromJSON(data.canvas);
        ////                            canvas.renderAll();
        ////                            canvas.calcOffset();
        ////                            manualRenderCanvasFlag = true;
        ////                            manualRenderCanvas();

        ////                            $('#template_loader').hide();
        ////                        }
        ////                    }
        ////                );
        ////            }
        ////        });
        ////    });
        ////}
        ///* MY MENUBOARD SEARCH END */

        ///* MENU TABLE MANAGEMENT START */

        var active_edit_menu_count = 0;
        //document.getElementById("add_menu_template").onclick = function (e) {

        //    $("#pop_settings").show();
        //    $("#pop_settings").addClass("active");
        //    $('#pop_setting_caption').html('Menu');
        //    var pointer = canvas.getPointer(e);
        //    //var posx = pointer.x + 100;
        //    //var posy = pointer.y + 100;
        //    var posx = 432;
        //    var posy = 70;
        //    $("#pop_settings").css("top", posy);
        //    $("#pop_settings").css("left", posx);

        //    $("#tab_edit").show();
        //    $("#tab_edit").addClass("active");
        //    $("#tab_properties").removeClass("active");
        //    $("#tab_effect").removeClass("active");

        //    $("#edit").show();
        //    $("#edit").addClass("active");

        //    $("#edit").attr("data-subject", "");//remove existing
        //    $("#edit").attr("data-subject", "menuContentEditor");// add for menu edit

        //    $("#text_edit_box").hide();
        //    $("#text_edit_box").removeClass("active");
        //    $("#shapeeditor").hide();
        //    $("#shapeeditor").removeClass("active");
        //    $("#menu_properties").show();
        //    $("#menu_properties").addClass("active");


        //    //Always Hide on Start
        //    $("#properties").hide();
        //    $("#properties").removeClass("active");
        //    $("#effect").hide();
        //    $("#effect").removeClass("active");

        //    //Show hide on basis of active object
        //    $('#show_scale').show();
        //    $("#image_modify_box").hide();
        //    //Fill Value as per active object

        //    //MenuItem Tab
        //    $('#tab_menu_item').show();
        //    $("#tab_menu_item").removeClass("active");
        //    $('#div_canvas_menu_done_button').show();
        //    $('#items').hide();
        //    $('#selected_item_table_body').empty();
        //    $('.toolsModal').removeClass("active");
        //    $('.toolItem').removeClass("active");

        //    //set default value when new menu click -- added by sunil

        //    $('#slider_scale').val(100);

        //    column_menu = 1;
        //    addNewMenuWindow(column_menu, false);


        //}


        //// reset advanced style
        ////document.getElementById("advanced_style_reset").onclick = function(){
        ////  resetAdvencedStyle();
        ////}
        function resetAdvencedStyle() {
           
            $('#advance_heading_bg_fill_color').prop('checked',false);
            $('#advance_heading_bg_line_color').val( '#00bff3');
            $('#advance_heading_bg_curvature').val( 0);
            $('#advance_heading_bg_stroke_show').prop('checked', false);
            $('#advance_heading_bg_stroke_color').val('#000000');
            $('#advance_heading_bg_stroke_width').val(1);
            $('#advance_heading_bg_stroke_type').val('line');

            $('#advance_description_bg_fill_color').prop('checked', false);
            $('#advance_description_bg_line_color').val('#00bff3');
            $('#advance_description_bg_curvature').val(0);
            $('#advance_description_bg_stroke_show').prop('checked',false);
            $('#advance_description_bg_stroke_color').val('#000000');
            $('#advance_description_bg_stroke_width').val(1);
            $('#advance_description_bg_stroke_type').val('line');

            $('#advance_price1_bg_fill_color').prop('checked',false);
            $('#advance_price1_bg_line_color').val('#00bff3');
            $('#advance_price1_bg_curvature').val(0);
            $('#advance_price1_bg_stroke_show').prop('checked',false);
            $('#advance_price1_bg_stroke_color').val('#000000');
            $('#advance_price1_bg_stroke_width').val(1);
            $('#advance_price1_bg_stroke_type').val('line');

            $('#advance_price2_bg_fill_color').prop('checked', false);
            $('#advance_price2_bg_line_color').val('#00bff3');
            $('#advance_price2_bg_curvature').val(0);
            $('#advance_price2_bg_stroke_show').prop('checked', false);
            $('#advance_price2_bg_stroke_color').val('#000000');
            $('#advance_price2_bg_stroke_width').val(1);
            $('#advance_price2_bg_stroke_type').val('line');

            $('#advance_price3_bg_fill_color').prop('checked', false);
            $('#advance_price3_bg_line_color').val('#00bff3');
            $('#advance_price3_bg_curvature').val(0);
            $('#advance_price3_bg_stroke_show').prop('checked', false);
            $('#advance_price3_bg_stroke_color').val('#000000');
            $('#advance_price3_bg_stroke_width').val(1);
            $('#advance_price3_bg_stroke_type').val('line');

            $('#advance_price4_bg_fill_color').prop('checked', false);
            $('#advance_price4_bg_line_color').val('#00bff3');
            $('#advance_price4_bg_curvature').val(0);
            $('#advance_price4_bg_stroke_show').prop('checked', false);
            $('#advance_price4_bg_stroke_color').val('#000000');
            $('#advance_price4_bg_stroke_width').val(1);
            $('#advance_price4_bg_stroke_type').val('line');
        }
        // autocheck advanced bg color
        $("#advanced_style_heading .bg_color").change(function () {
            $('#advanced_style_heading .bg_show')[0].checked = true;
        });
        $("#advanced_style_description .bg_color").change(function () {
            $('#advanced_style_description .bg_show')[0].checked = true;
        });
        $("#advanced_style_price1 .bg_color").change(function () {
            $('#advanced_style_price1 .bg_show')[0].checked = true;
        });
        $("#advanced_style_price2 .bg_color").change(function () {
            $('#advanced_style_price2 .bg_show')[0].checked = true;
        });
        $("#advanced_style_price3 .bg_color").change(function () {
            $('#advanced_style_price3 .bg_show')[0].checked = true;
        });
        $("#advanced_style_price4 .bg_color").change(function () {
            $('#advanced_style_price4 .bg_show')[0].checked = true;
        });
        // Autocheck advanced bg stroke
        $("#advanced_style_heading .bg_stroke_color").change(function () {
            $('#advanced_style_heading .bg_stroke_show')[0].checked = true;
        });
        $("#advanced_style_description .bg_stroke_color").change(function () {
            $('#advanced_style_description .bg_stroke_show')[0].checked = true;
        });
        $("#advanced_style_price1 .bg_stroke_color").change(function () {
            $('#advanced_style_price1 .bg_stroke_show')[0].checked = true;
        });
        $("#advanced_style_price2 .bg_stroke_color").change(function () {
            $('#advanced_style_price2 .bg_stroke_show')[0].checked = true;
        });
        $("#advanced_style_price3 .bg_stroke_color").change(function () {
            $('#advanced_style_price3 .bg_stroke_show')[0].checked = true;
        });
        $("#advanced_style_price4 .bg_stroke_color").change(function () {
            $('#advanced_style_price4 .bg_stroke_show')[0].checked = true;
        });

        function breakLines(text, linelength) {
            var linebreak = "\n";
            var counter = 0;
            var line = '';
            var returntext = '';
            var bMatchFound = false;
            var linelen = 50; // 50 characters per line is default

            if (linelength) {
                linelen = linelength;
            }

            if (!text) { return ''; }
            if (text.length < linelen + 1) { return $.trim(text); }

            while (counter < text.length) {
                line = text.substr(counter, linelen);
                bMatchFound = false;
                if (line.length == linelen) {
                    for (var i = line.length; i > -1; i--) {
                        if (line.substr(i, 1) == ' ') {
                            counter += line.substr(0, i).length + 1;
                            line = $.trim(line.substr(0, i)) + linebreak;
                            returntext += line;
                            bMatchFound = true;
                            break;
                        }
                    }
                    if (!bMatchFound) {
                        counter += line.length + 1;
                        line = $.trim(line) + linebreak;
                        returntext += line;
                    }
                } else {
                    returntext += $.trim(line);
                    break; // We're breaking out of the the while(), not the for()
                }
            }
            return returntext;
        }

        function changeMenuPropertise() {
            menu_line_colour_flag = false;  /* Saunak 30-07-2025 */
            resetAdvencedStyle();
            var objs = objPropertise.getObjects();
            var headingStyle = {},
                bottomLineStyle = {},
                headingpriceStyle = {},
                headingpriceStyle2 = {},
                headingpriceStyle3 = {},
                headingpriceStyle4 = {},
                priceStyle = {},
                priceStyle2 = {},
                priceStyle3 = {},
                priceStyle4 = {},
                subHeadingStyle = {};
            array_advanced_style = new Array();
            var column = 1;
            if (objPropertise.name === 'template1') {
                column = 1;
            }
            if (objPropertise.name === 'template2') {
                column = 2;
            }
            if (objPropertise.name === 'template3') {
                column = 3;
            }
            if (objPropertise.name === 'template4') {
                column = 4;
            }

            if (objPropertise.menuStyle != "") {
                menu_dispaly_style = objPropertise.menuStyle;
            }

            if (objPropertise.menuLayout != "") {
                menu_layout = objPropertise.menuLayout;
            }

            for (var i = 0; i < objs.length; i++) {
                if (objs[i].type == 'text' && (objs[i].name == 'heading')) {
                    headingStyle = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].get('fill')
                    };

                } else if (objs[i].type == 'line' && (objs[i].name == 'line')) {
                    if (objs[i].get('opacity') == 100 && menu_line_colour_flag == false) {
                        menu_line_colour_flag = true;
                    } else { menu_line_colour_flag = false; } /* Saunak 30-07-2025 */
                    if (objs[i].getStrokeDashArray() != null && objs[i].getStrokeDashArray()[0] > 0 && objs[i].getStrokeDashArray()[1] > 0) {
                        menu_line_type = "dotted";
                    }

                    bottomLineStyle = {
                        'background': objs[i].get('stroke')
                    };
                } else if (objs[i].type == 'text' && objs[i].name == 'headingprice') {
                    headingpriceStyle = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && (objs[i].name == 'price')) {
                    priceStyle = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && objs[i].name == 'headingprice2' && column > 1) {
                    headingpriceStyle2 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && column > 1 && (objs[i].name == 'price2')) {
                    priceStyle2 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && objs[i].name == 'headingprice3' && column > 2) {
                    headingpriceStyle3 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && column > 2 && (objs[i].name == 'price3')) {
                    priceStyle3 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && objs[i].name == 'headingprice4' && column > 3) {
                    headingpriceStyle4 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && column > 3 && (objs[i].name == 'price4')) {
                    priceStyle4 = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].type == 'text' && (objs[i].name == 'subheading')) {
                    subHeadingStyle = {
                        'fontFamily': objs[i].fontFamily,
                        'fontSize': objs[i].fontSize,
                        'fontWeight': objs[i].fontWeight,
                        'fontStyle': objs[i].fontStyle,
                        'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                        'textAlign': objs[i].textAlign,
                        'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                        'color': objs[i].fill
                    };
                } else if (objs[i].name == 'advanced_style_heading') {
                    array_advanced_style["advanced_style_heading"] = new Array();
                    array_advanced_style["advanced_style_heading"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_heading"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_heading"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_heading"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_heading"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_heading"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'advanced_style_description') {
                    array_advanced_style["advanced_style_description"] = new Array();
                    array_advanced_style["advanced_style_description"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_description"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_description"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_description"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_description"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_description"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'advanced_style_price1') {
                    array_advanced_style["advanced_style_price1"] = new Array();
                    array_advanced_style["advanced_style_price1"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_price1"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_price1"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_price1"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_price1"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_price1"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'advanced_style_price2') {
                    array_advanced_style["advanced_style_price2"] = new Array();
                    array_advanced_style["advanced_style_price2"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_price2"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_price2"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_price2"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_price2"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_price2"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'advanced_style_price3') {
                    array_advanced_style["advanced_style_price3"] = new Array();
                    array_advanced_style["advanced_style_price3"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_price3"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_price3"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_price3"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_price3"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_price3"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'advanced_style_price4') {
                    array_advanced_style["advanced_style_price4"] = new Array();
                    array_advanced_style["advanced_style_price4"]["fill"] = objs[i].fill;
                    array_advanced_style["advanced_style_price4"]["rx"] = objs[i].rx;
                    array_advanced_style["advanced_style_price4"]["ry"] = objs[i].ry;
                    array_advanced_style["advanced_style_price4"]["stroke"] = objs[i].stroke;
                    array_advanced_style["advanced_style_price4"]["strokeWidth"] = objs[i].strokeWidth;
                    array_advanced_style["advanced_style_price4"]["strokeDashArray"] = objs[i].strokeDashArray;
                } else if (objs[i].name == 'new_menu') {
                    break;
                }
            }

            // Set advanced style
            resetAdvencedStyle();
            if ($.isArray(array_advanced_style["advanced_style_heading"])) {
                if (array_advanced_style["advanced_style_heading"]["fill"] != "" && array_advanced_style["advanced_style_heading"]["fill"] != "undefined") {
                    $('#advance_heading_bg_line_color').val(array_advanced_style["advanced_style_heading"]["fill"]);
                    $('#advance_heading_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_heading"]["rx"] > 0) {
                    $('#advance_heading_bg_curvature').val(array_advanced_style["advanced_style_heading"]["rx"]);
                }
                if (array_advanced_style["advanced_style_heading"]["stroke"] != "" && array_advanced_style["advanced_style_heading"]["stroke"] != "undefined") {
                    $('#advance_heading_bg_stroke_color').val(array_advanced_style["advanced_style_heading"]["stroke"]);
                    $('#advance_heading_bg_stroke_show').prop('checked', true);
                    $('#advance_heading_bg_stroke_width').val(array_advanced_style["advanced_style_heading"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_heading"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_heading"]["strokeDashArray"][0] > 0)
                        $('#advance_heading_bg_stroke_type').val('dotted');
                }
            }


            if ($.isArray(array_advanced_style["advanced_style_description"])) {
                if (array_advanced_style["advanced_style_description"]["fill"] != "" && array_advanced_style["advanced_style_description"]["fill"] != "undefined") {
                    $('#advance_description_bg_line_color').val(array_advanced_style["advanced_style_description"]["fill"]);
                    $('#advance_description_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_description"]["rx"] > 0) {
                    $('#advance_description_bg_curvature').val(array_advanced_style["advanced_style_description"]["rx"]);
                }
                if (array_advanced_style["advanced_style_description"]["stroke"] != "" && array_advanced_style["advanced_style_description"]["stroke"] != "undefined") {
                    $('#advance_description_bg_stroke_color').val(array_advanced_style["advanced_style_description"]["stroke"]);
                    $('#advance_description_bg_stroke_show').prop('checked', true);
                    $('#advance_description_bg_stroke_width').val(array_advanced_style["advanced_style_description"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_description"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_description"]["strokeDashArray"][0] > 0)
                        $('#advance_description_bg_stroke_type').val('dotted');
                }
            }

            if ($.isArray(array_advanced_style["advanced_style_price1"])) {
                if (array_advanced_style["advanced_style_price1"]["fill"] != "" && array_advanced_style["advanced_style_price1"]["fill"] != "undefined") {
                    $('#advance_price1_bg_line_color').val(array_advanced_style["advanced_style_price1"]["fill"]);
                    $('#advance_price1_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price1"]["rx"] > 0) {
                    $('#advance_price1_bg_curvature').val(array_advanced_style["advanced_style_price1"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price1"]["stroke"] != "" && array_advanced_style["advanced_style_price1"]["stroke"] != "undefined") {
                    $('#advance_price1_bg_stroke_color').val(array_advanced_style["advanced_style_price1"]["stroke"]);
                    $('#advance_price1_bg_stroke_show').prop('checked', true);
                    $('#advance_price1_bg_stroke_width').val(array_advanced_style["advanced_style_price1"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price1"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price1"]["strokeDashArray"][0] > 0)
                        $('#advance_price1_bg_stroke_type').val('dotted');
                }
            }

            if ($.isArray(array_advanced_style["advanced_style_price2"])) {
                if (array_advanced_style["advanced_style_price2"]["fill"] != "" && array_advanced_style["advanced_style_price2"]["fill"] != "undefined") {
                    $('#advance_price2_bg_line_color').val(array_advanced_style["advanced_style_price2"]["fill"]);
                    $('#advance_price2_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price2"]["rx"] > 0) {
                    $('#advance_price2_bg_curvature').val(array_advanced_style["advanced_style_price2"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price2"]["stroke"] != "" && array_advanced_style["advanced_style_price2"]["stroke"] != "undefined") {
                    $('#advance_price2_bg_stroke_color').val(array_advanced_style["advanced_style_price2"]["stroke"]);
                    $('#advance_price2_bg_stroke_show').prop('checked', true);
                    $('#advance_price2_bg_stroke_width').val(array_advanced_style["advanced_style_price2"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price2"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price2"]["strokeDashArray"][0] > 0)
                        $('#advance_price2_bg_stroke_type').val('dotted');
                }
            }
            if ($.isArray(array_advanced_style["advanced_style_price3"])) {
                if (array_advanced_style["advanced_style_price3"]["fill"] != "" && array_advanced_style["advanced_style_price3"]["fill"] != "undefined") {
                    $('#advance_price3_bg_line_color').val(array_advanced_style["advanced_style_price3"]["fill"]);
                    $('#advance_price3_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price3"]["rx"] > 0) {
                    $('#advance_price3_bg_curvature').val(array_advanced_style["advanced_style_price3"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price3"]["stroke"] != "" && array_advanced_style["advanced_style_price3"]["stroke"] != "undefined") {
                    $('#advance_price3_bg_stroke_color').val(array_advanced_style["advanced_style_price3"]["stroke"]);
                    $('#advance_price3_bg_stroke_show').prop('checked', true);
                    $('#advance_price3_bg_stroke_width').val(array_advanced_style["advanced_style_price3"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price3"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price3"]["strokeDashArray"][0] > 0)
                        $('#advance_price3_bg_stroke_type').val('dotted');
                }
            }
            if ($.isArray(array_advanced_style["advanced_style_price4"])) {
                if (array_advanced_style["advanced_style_price4"]["fill"] != "" && array_advanced_style["advanced_style_price4"]["fill"] != "undefined") {
                    $('#advance_price4_bg_line_color').val(array_advanced_style["advanced_style_price4"]["fill"]);
                    $('#advance_price4_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price4"]["rx"] > 0) {
                    $('#advance_price4_bg_curvature').val(array_advanced_style["advanced_style_price4"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price4"]["stroke"] != "" && array_advanced_style["advanced_style_price4"]["stroke"] != "undefined") {
                    $('#advance_price4_bg_stroke_color').val(array_advanced_style["advanced_style_price4"]["stroke"]);
                    $('#advance_price4_bg_stroke_show').prop('checked', true);
                    $('#advance_price4_bg_stroke_width').val(array_advanced_style["advanced_style_price4"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price4"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price4"]["strokeDashArray"][0] > 0)
                        $('#advance_price4_bg_stroke_type').val('dotted');
                }
            }


            document.getElementById("opacity").value = objPropertise.opacity * 100;
            //document.getElementById("input_show_opacity").value = document.getElementById("opacity").value;
            document.getElementById("slider_scale").value = objPropertise.scaleX * 100;
            //document.getElementById("input_show_scale").value = document.getElementById("scale").value;

            // for the line
            $('.menu-line').css(style_nemu_line_color, bottomLineStyle.background);
            $("input#menu-line-fill-color").val(rgb2hex($("#text_table .menu-line").css(style_nemu_line_color)));
            if (menu_line_colour_flag) {
                $("#is_menu_line_color").prop("checked", true);
                console.log('menu_line_colour_flag ', menu_line_colour_flag);
            }
            else {
                $("#is_menu_line_color").prop("checked", false);
                console.log('menu_line_colour_flag ', menu_line_colour_flag);
            }
            if (menu_line_type == "dotted") {
                $("input[name=menu_line_type][value='solid']").prop("checked", false);
                $("input[name=menu_line_type][value='dotted']").prop("checked", true);
            }
            else {
                $("input[name=menu_line_type][value='dotted']").prop("checked", false);
                $("input[name=menu_line_type][value='solid']").prop("checked", true);
            }

            if (menu_layout == "horizontal") {
                $("input[name=menu_layout][value='vartical']").prop("checked", false);
                $("input[name=menu_layout][value='horizontal']").prop("checked", true);
                $('.img_menu_verical').hide();
                $('.img_menu_horizontal').show();
            }
            else {
                $("input[name=menu_layout][value='horizontal']").prop("checked", false);
                $("input[name=menu_layout][value='vartical']").prop("checked", true);
                $('.img_menu_horizontal').hide();
                $('.img_menu_verical').show();
            }

            $('.text-heading-price,.text-heading-price2,.text-heading-price3,.text-heading-price4').css({
                "font-family": headingpriceStyle.fontFamily,
                "font-size": headingpriceStyle.fontSize + "px",
                "font-weight": headingpriceStyle.fontWeight,
                "font-style": headingpriceStyle.fontStyle,
                "text-decoration": headingpriceStyle.textDecoration,
                "text-align": headingpriceStyle.textAlign,
                "color": headingpriceStyle.color,
                "background": headingpriceStyle.background
            });
            $('.text-heading').css({
                "font-family": headingStyle.fontFamily,
                "font-size": headingStyle.fontSize + "px",
                "font-weight": headingStyle.fontWeight,
                "font-style": headingStyle.fontStyle,
                "text-decoration": headingStyle.textDecoration,
                "text-align": headingStyle.textAlign,
                "color": headingStyle.color,
                "background": headingStyle.background
            });
            $('.sub-heading').css({
                "font-family": subHeadingStyle.fontFamily,
                "font-size": subHeadingStyle.fontSize + "px",
                "font-weight": subHeadingStyle.fontWeight,
                "font-style": subHeadingStyle.fontStyle,
                "text-decoration": subHeadingStyle.textDecoration,
                "text-align": subHeadingStyle.textAlign,
                "color": subHeadingStyle.color,
                "background": subHeadingStyle.background
            });
            $('.price').css({
                "font-family": priceStyle.fontFamily,
                "font-size": priceStyle.fontSize + "px",
                "font-weight": priceStyle.fontWeight,
                "font-style": priceStyle.fontStyle,
                "text-decoration": priceStyle.textDecoration,
                "text-align": priceStyle.textAlign,
                "color": priceStyle.color,
                "background": priceStyle.background
            });
            $('.price2').css({
                "font-family": priceStyle2.fontFamily,
                "font-size": priceStyle2.fontSize + "px",
                "font-weight": priceStyle2.fontWeight,
                "font-style": priceStyle2.fontStyle,
                "text-decoration": priceStyle2.textDecoration,
                "text-align": priceStyle2.textAlign,
                "color": priceStyle2.color,
                "background": priceStyle2.background
            });
            $('.price3').css({
                "font-family": priceStyle3.fontFamily,
                "font-size": priceStyle3.fontSize + "px",
                "font-weight": priceStyle3.fontWeight,
                "font-style": priceStyle3.fontStyle,
                "text-decoration": priceStyle3.textDecoration,
                "text-align": priceStyle3.textAlign,
                "color": priceStyle3.color,
                "background": priceStyle3.background
            });
            $('.price4').css({
                "font-family": priceStyle4.fontFamily,
                "font-size": priceStyle4.fontSize + "px",
                "font-weight": priceStyle4.fontWeight,
                "font-style": priceStyle4.fontStyle,
                "text-decoration": priceStyle4.textDecoration,
                "text-align": priceStyle4.textAlign,
                "color": priceStyle4.color,
                "background": priceStyle4.background
            });

            $('#modify_into_canvas').click();
        }

        function loadTextGroupFormatModifier(column) {
            $("#menu_format_edit_box").show();
            $(".format-price2").hide();
            $(".format-price3").hide();
            $(".format-price4").hide();
            $("#price2-heading").hide();
            $("#price3-heading").hide();
            $("#price4-heading").hide();

            // Advanced style
            $("#li_advanced_style_price2").hide();
            $("#li_advanced_style_price3").hide();
            $("#li_advanced_style_price4").hide();

            // for heading for old interface
            //$(".format-text-heading .font-family").val($("#text_table .text-heading").css("font-family").replace(/("|')/g, ''));
            //$(".format-text-heading .font-size").val($("#text_table .text-heading").css("font-size").replace("px", ""));
            //$(".format-text-heading .text-font-color").val(rgb2hex($("#text_table .text-heading").css("color")));
            //Added by sunil for new interface
            console.log(rgb2hex($("#text_table .headingText").css("color")));
            //$("#menu_editor_menu_heading").val($("#text_table .headingText").css("font-family").replace(/("|')/g, ''));
            //if ($("#menu_editor_menu_heading").val() == '' || $("#menu_editor_menu_heading").val() == null) {
            //    $("#menu_editor_menu_heading").val('Helvetica');
            //}
            const currentFont1 = $("#text_table .headingText").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
            sBtn_text1.textContent = $("#text_table .headingText").css("font-family").replace(/("|')/g, '');
            sBtn_text1.className = `sBtn-text1 ${currentFont1}`;
            //text_options1.forEach(opt => opt.classList.remove("active"));

            $("#menu_editor_menu_heading_font_size").val($("#text_table .headingText").css("font-size").replace("px", ""));
            $("#menu_editor_menu_heading_font_color").val(rgb2hex($("#text_table .headingText").css("color")));

            // for heading price
            //$(".format-text-heading-price .font-family").val($("#text_table .text-heading-price").css("font-family").replace(/("|')/g, ''));
            //$(".format-text-heading-price .font-size").val($("#text_table .text-heading-price").css("font-size").replace("px", ""));
            //$(".format-text-heading-price .text-font-color").val(rgb2hex($("#text_table .text-heading-price").css("color")));
            //Added by Sunil for new interface
            //$("#menu_editor_menu_price_heading").val($("#text_table .text-heading-price").css("font-family").replace(/("|')/g, ''));
            //if ($("#menu_editor_menu_price_heading").val() == '' || $("#menu_editor_menu_price_heading").val() == null) {
            //    $("#menu_editor_menu_price_heading").val('Helvetica');
            //}
            const currentFont7 = $("#text_table .text-heading-price").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
            sBtn_text7.textContent = $("#text_table .text-heading-price").css("font-family").replace(/("|')/g, '');
            sBtn_text7.className = `sBtn-text7 ${currentFont7}`;
            $("#menu_editor_menu_price_heading_font_size").val($("#text_table .text-heading-price").css("font-size").replace("px", ""));
            $("#menu_editor_menu_price_heading_font_color").val(rgb2hex($("#text_table .text-heading-price").css("color")));



            // for price
            //$(".format-price .font-family").val($("#text_table .price").css("font-family").replace(/("|')/g, ''));
            //$(".format-price .font-size").val($("#text_table .price").css("font-size").replace("px", ""));
            //$(".format-price .text-font-color").val(rgb2hex($("#text_table .price").css("color")));
            //Added by Sunil for new interface
            //$("#menu_editor_menu_price").val($("#text_table .price").css("font-family").replace(/("|')/g, ''));
            //if ($("#menu_editor_menu_price").val() == '' || $("#menu_editor_menu_price").val() == null) {
            //    $("#menu_editor_menu_price").val('Helvetica');
            //}
            const currentFont3 = $("#text_table .price").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
            sBtn_text3.textContent = $("#text_table .price").css("font-family").replace(/("|')/g, '');
            sBtn_text3.className = `sBtn-text3 ${currentFont3}`;
            $("#menu_editor_menu_price_font_size").val($("#text_table .price").css("font-size").replace("px", ""));
            $("#menu_editor_menu_price_font_color").val(rgb2hex($("#text_table .price").css("color")));


            // for Description
            //$("#menu_editor_menu_description").val($("#text_table .sub-heading").css("font-family").replace(/("|')/g, ''));
            //if ($("#menu_editor_menu_description").val() == '' || $("#menu_editor_menu_description").val() == null) {
            //    $("#menu_editor_menu_description").val('Helvetica');
            //}
            const currentFont2 = $("#text_table .sub-heading").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
            sBtn_text2.textContent = $("#text_table .sub-heading").css("font-family").replace(/("|')/g, '');
            sBtn_text2.className = `sBtn-text2 ${currentFont2}`;
            $("#menu_editor_menu_description_font_size").val($("#text_table .sub-heading").css("font-size").replace("px", ""));
            $("#menu_editor_menu_description_font_color").val(rgb2hex($("#text_table .sub-heading").css("color")));


            if (column > 1) {
                // for heading price2
                //$(".format-text-heading-price2 .font-family").val($("#text_table .text-heading-price2").css("font-family").replace(/("|')/g, ''));
                //$(".format-text-heading-price2 .font-size").val($("#text_table .text-heading-price2").css("font-size").replace("px", ""));
                //$(".format-text-heading-price2 .text-font-color").val(rgb2hex($("#text_table .text-heading-price2").css("color")));
                // for price2
                //$(".format-price2 .font-family").val($("#text_table .price2").css("font-family").replace(/("|')/g, ''));
                //$(".format-price2 .font-size").val($("#text_table .price2").css("font-size").replace("px", ""));
                //$(".format-price2 .text-font-color").val(rgb2hex($("#text_table .price2").css("color")));

                //Added by Sunil for new interface
                // for heading price2
                //$("#menu_editor_menu_price2_heading").val($("#text_table .text-heading-price2").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price2_heading").val() == '' || $("#menu_editor_menu_price2_heading").val() == null) {
                //    $("#menu_editor_menu_price2_heading").val('Helvetica');
                //}
                const currentFont8 = $("#text_table .text-heading-price2").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text8.textContent = $("#text_table .text-heading-price2").css("font-family").replace(/("|')/g, '');
                sBtn_text8.className = `sBtn-text8 ${currentFont8}`;
                $("#menu_editor_menu_price2_heading_font_size").val($("#text_table .text-heading-price2").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price2_heading_font_color").val(rgb2hex($("#text_table .text-heading-price2").css("color")));
                // for price2
                //$("#menu_editor_menu_price2").val($("#text_table .price2").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price2").val() == '' || $("#menu_editor_menu_price2").val() == null) {
                //    $("#menu_editor_menu_price2").val('Helvetica');
                //}
                const currentFont4 = $("#text_table .price2").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text4.textContent = $("#text_table .price2").css("font-family").replace(/("|')/g, '');
                sBtn_text4.className = `sBtn-text4 ${currentFont4}`;
                $("#menu_editor_menu_price2_font_size").val($("#text_table .price2").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price2_font_color").val(rgb2hex($("#text_table .price2").css("color")));


                $(".format-price2").show();
                $("#price2-heading").show();






                // Advanced
                $("#li_advanced_style_price2").show();
            }
            if (column > 2) {
                // for heading price3
                //$("#menu_editor_menu_price3_heading").val($("#text_table .text-heading-price3").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price3_heading").val() == '' || $("#menu_editor_menu_price3_heading").val() == null) {
                //    $("#menu_editor_menu_price3_heading").val('Helvetica');
                //}
                const currentFont9 = $("#text_table .text-heading-price3").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text9.textContent = $("#text_table .text-heading-price3").css("font-family").replace(/("|')/g, '');
                sBtn_text9.className = `sBtn-text9 ${currentFont9}`;
                $("#menu_editor_menu_price3_heading_font_size").val($("#text_table .text-heading-price3").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price3_heading_font_color").val(rgb2hex($("#text_table .text-heading-price3").css("color")));
                // for price3
                //$("#menu_editor_menu_price3").val($("#text_table .price3").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price3").val() == '' || $("#menu_editor_menu_price3").val() == null) {
                //    $("#menu_editor_menu_price3").val('Helvetica');
                //}
                const currentFont5 = $("#text_table .price3").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text5.textContent = $("#text_table .price3").css("font-family").replace(/("|')/g, '');
                sBtn_text5.className = `sBtn-text5 ${currentFont5}`;
                $("#menu_editor_menu_price3_font_size").val($("#text_table .price3").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price3_font_color").val(rgb2hex($("#text_table .price3").css("color")));
                $(".format-price3").show();
                $("#price3-heading").show();

                // Advanced
                $("#li_advanced_style_price3").show();
            }
            if (column > 3) {
                // for heading price4
                //$("#menu_editor_menu_price4_heading").val($("#text_table .text-heading-price4").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price4_heading").val() == '' || $("#menu_editor_menu_price4_heading").val() == null) {
                //    $("#menu_editor_menu_price4_heading").val('Helvetica');
                //}
                const currentFont10 = $("#text_table .text-heading-price4").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text10.textContent = $("#text_table .text-heading-price4").css("font-family").replace(/("|')/g, '');
                sBtn_text10.className = `sBtn-text10 ${currentFont10}`;
                $("#menu_editor_menu_price4_heading_font_size").val($("#text_table .text-heading-price4").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price4_heading_font_color").val(rgb2hex($("#text_table .text-heading-price4").css("color")));
                // for price4
                //$("#menu_editor_menu_price4").val($("#text_table .price4").css("font-family").replace(/("|')/g, ''));
                //if ($("#menu_editor_menu_price4").val() == '' || $("#menu_editor_menu_price4").val() == null) {
                //    $("#menu_editor_menu_price4").val('Helvetica');
                //}
                const currentFont6 = $("#text_table .price4").css("font-family").replace(/("|')/g, '').split(',')[0].trim().replace(/\s+/g, '');
                sBtn_text6.textContent = $("#text_table .price4").css("font-family").replace(/("|')/g, '');
                sBtn_text6.className = `sBtn-text6 ${currentFont6}`;
                $("#menu_editor_menu_price4_font_size").val($("#text_table .price4").css("font-size").replace("px", ""));
                $("#menu_editor_menu_price4_font_color").val(rgb2hex($("#text_table .price4").css("color")));
                $(".format-price4").show();
                $("#price4-heading").show();

                // Advanced
                $("#li_advanced_style_price4").show();
            }
            // Advanced
            $("#a_advanced_style_heading").click();
            $("#ul_advanced_style li").removeClass("ui-tabs-active ui-state-active ui-state-focus");
            $("#li_advanced_style_heading").addClass("ui-tabs-active ui-state-active ui-state-focus");


            // for sub-heading
            if ($("#text_table .sub-heading").css("font-family") == "undefined") {
                $(".format-sub-heading .font-family").val('Helvetica');
            }
            else {
                $(".format-sub-heading .font-family").val($("#text_table .sub-heading").css("font-family").replace(/("|')/g, ''));
            }
            $(".format-sub-heading .font-size").val($("#text_table .sub-heading").css("font-size").replace("px", ""));
            $(".format-sub-heading .text-font-color").val(rgb2hex($("#text_table .sub-heading").css("color")));

            // for the line
            //$('.menu-line').css(style_nemu_line_color, bottomLineStyle.background);
            $("input#menu-line-fill-color").val(rgb2hex($("#text_table .menu-line").css(style_nemu_line_color)));
            if (menu_line_colour_flag) {
                $("#is_menu_line_color").prop("checked", true);
            }
            else {
                $("#is_menu_line_color").prop("checked", false);
            }
            if (menu_line_type == "dotted") {
                $("input[name=menu_line_type][value='solid']").prop("checked", false);
                $("input[name=menu_line_type][value='dotted']").prop("checked", true);
            }
            else {
                $("input[name=menu_line_type][value='dotted']").prop("checked", false);
                $("input[name=menu_line_type][value='solid']").prop("checked", true);
            }
            $(".template-gallery-list li").removeClass("active-menu-gallery");
            $('.menu-style-imgs li').removeClass('active-menu-gallery');
            $('#' + menu_dispaly_style).addClass('active-menu-gallery');

            if (menu_layout == "horizontal") {
                $("input[name=menu_layout][value='vartical']").prop("checked", false);
                $("input[name=menu_layout][value='horizontal']").prop("checked", true);
                $('.img_menu_verical').hide();
                $('.img_menu_horizontal').show();
            }
            else {
                $("input[name=menu_layout][value='horizontal']").prop("checked", false);
                $("input[name=menu_layout][value='vartical']").prop("checked", true);
                $('.img_menu_horizontal').hide();
                $('.img_menu_verical').show();
            }

            $("select.font-family").unbind();
            $("select.font-family").change(function () {
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-family", $(this).val());
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("font-family", $(this).val());
                    $("#text_table .text-heading-price3").css("font-family", $(this).val());
                    $("#text_table .text-heading-price4").css("font-family", $(this).val());
                }
            });
            $("select.font-size").unbind();
            $("select.font-size").change(function () {
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-size", $(this).val() + "px");
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("font-size", $(this).val() + "px");
                    $("#text_table .text-heading-price3").css("font-size", $(this).val() + "px");
                    $("#text_table .text-heading-price4").css("font-size", $(this).val() + "px");
                }
            });
            $(".text-font-color").unbind();
            $(".text-font-color").change(function () {
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("color", $(this).val());
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("background", hex2rgb($(this).val()));
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("color", $(this).val());
                    $("#text_table .text-heading-price2").css("background", hex2rgb($(this).val()));
                    $("#text_table .text-heading-price3").css("color", $(this).val());
                    $("#text_table .text-heading-price3").css("background", hex2rgb($(this).val()));
                    $("#text_table .text-heading-price4").css("color", $(this).val());
                    $("#text_table .text-heading-price4").css("background", hex2rgb($(this).val()));
                }
            });
            $("#menu_format_edit_box .btn_bold").unbind();
            $("#menu_format_edit_box .btn_bold").click(function () {
                var weight = 'normal';
                if ($("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-weight") <= 500) {
                    var weight = 'bold';
                }
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-weight", weight);
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("font-weight", weight);
                    $("#text_table .text-heading-price3").css("font-weight", weight);
                    $("#text_table .text-heading-price4").css("font-weight", weight);
                }
            });
            $("#menu_format_edit_box .btn_italic").unbind();
            $("#menu_format_edit_box .btn_italic").click(function () {
                var style = 'italic';
                if ($("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-style") == "italic") {
                    var style = 'normal';
                }
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("font-style", style);
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("font-style", style);
                    $("#text_table .text-heading-price3").css("font-style", style);
                    $("#text_table .text-heading-price4").css("font-style", style);
                }
            });
            $("#menu_format_edit_box .btn_underline").unbind();
            $("#menu_format_edit_box .btn_underline").click(function () {
                var decoration = 'underline';
                if ($("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("text-decoration").split(" ")[0] == "underline") {
                    var decoration = 'none';
                }
                $("#text_table ." + $(this).parent().parent().parent().attr("rel")).css("text-decoration", decoration);
                if ($(this).parent().parent().parent().attr("rel") == 'text-heading-price') {
                    $("#text_table .text-heading-price2").css("text-decoration", decoration);
                    $("#text_table .text-heading-price3").css("text-decoration", decoration);
                    $("#text_table .text-heading-price4").css("text-decoration", decoration);
                }
            });
            $("#input#menu-line-fill-color").unbind();
            $("input#menu-line-fill-color").change(function () {
                $("#text_table .menu-line").css("border-color", $(this).val());
                Menueditorpropertiessettingupdate();
            });



            // Set advanced style
            //if ($.isArray(array_advanced_style["advanced_style_heading"])) {
            //    if (array_advanced_style["advanced_style_heading"]["fill"] != "" && array_advanced_style["advanced_style_heading"]["fill"] != "undefined") {
            //        $('#advanced_style_heading .bg_color')[0].value = array_advanced_style["advanced_style_heading"]["fill"];
            //        $('#advanced_style_heading .bg_show')[0].checked = true;
            //    }
            //    if (array_advanced_style["advanced_style_heading"]["rx"] > 0) {
            //        $('#advanced_style_heading .bg_curvature')[0].value = array_advanced_style["advanced_style_heading"]["rx"];
            //    }
            //    if (array_advanced_style["advanced_style_heading"]["stroke"] != "" && array_advanced_style["advanced_style_heading"]["stroke"] != "undefined") {
            //        $('#advanced_style_heading .bg_stroke_color')[0].value = array_advanced_style["advanced_style_heading"]["stroke"];
            //        $('#advanced_style_heading .bg_stroke_show')[0].checked = true;
            //        $('#advanced_style_heading .bg_stroke_width')[0].value = array_advanced_style["advanced_style_heading"]["strokeWidth"];
            //    }
            //    if ($.isArray(array_advanced_style["advanced_style_heading"]["strokeDashArray"])) {
            //        if (array_advanced_style["advanced_style_heading"]["strokeDashArray"][0] > 0)
            //            $('#advanced_style_heading .bg_stroke_type')[0].value = 'dotted';
            //    }
            //}
            resetAdvencedStyle();
            if ($.isArray(array_advanced_style["advanced_style_heading"])) {
                if (array_advanced_style["advanced_style_heading"]["fill"] != "" && array_advanced_style["advanced_style_heading"]["fill"] != "undefined") {
                    $('#advance_heading_bg_line_color').val( array_advanced_style["advanced_style_heading"]["fill"]);
                    $('#advance_heading_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_heading"]["rx"] > 0) {
                    $('#advance_heading_bg_curvature').val(array_advanced_style["advanced_style_heading"]["rx"]);
                }
                if (array_advanced_style["advanced_style_heading"]["stroke"] != "" && array_advanced_style["advanced_style_heading"]["stroke"] != "undefined") {
                    $('#advance_heading_bg_stroke_color').val(array_advanced_style["advanced_style_heading"]["stroke"]);
                    $('#advance_heading_bg_stroke_show').prop('checked', true);
                    $('#advance_heading_bg_stroke_width').val(array_advanced_style["advanced_style_heading"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_heading"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_heading"]["strokeDashArray"][0] > 0)
                        $('#advance_heading_bg_stroke_type').val('dotted');
                }
            }


            if ($.isArray(array_advanced_style["advanced_style_description"])) {
                if (array_advanced_style["advanced_style_description"]["fill"] != "" && array_advanced_style["advanced_style_description"]["fill"] != "undefined") {
                    $('#advance_description_bg_line_color').val(array_advanced_style["advanced_style_description"]["fill"]);
                    $('#advance_description_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_description"]["rx"] > 0) {
                    $('#advance_description_bg_curvature').val(array_advanced_style["advanced_style_description"]["rx"]);
                }
                if (array_advanced_style["advanced_style_description"]["stroke"] != "" && array_advanced_style["advanced_style_description"]["stroke"] != "undefined") {
                    $('#advance_description_bg_stroke_color').val(array_advanced_style["advanced_style_description"]["stroke"]);
                    $('#advance_description_bg_stroke_show').prop('checked',true);
                    $('#advance_description_bg_stroke_width').val(array_advanced_style["advanced_style_description"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_description"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_description"]["strokeDashArray"][0] > 0)
                        $('#advance_description_bg_stroke_type').val('dotted');
                }
            }

            if ($.isArray(array_advanced_style["advanced_style_price1"])) {
                if (array_advanced_style["advanced_style_price1"]["fill"] != "" && array_advanced_style["advanced_style_price1"]["fill"] != "undefined") {
                    $('#advance_price1_bg_line_color').val(array_advanced_style["advanced_style_price1"]["fill"]);
                    $('#advance_price1_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price1"]["rx"] > 0) {
                    $('#advance_price1_bg_curvature').val(array_advanced_style["advanced_style_price1"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price1"]["stroke"] != "" && array_advanced_style["advanced_style_price1"]["stroke"] != "undefined") {
                    $('#advance_price1_bg_stroke_color').val(array_advanced_style["advanced_style_price1"]["stroke"]);
                    $('#advance_price1_bg_stroke_show').prop('checked',true);
                    $('#advance_price1_bg_stroke_width').val(array_advanced_style["advanced_style_price1"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price1"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price1"]["strokeDashArray"][0] > 0)
                        $('#advance_price1_bg_stroke_type').val('dotted');
                }
            }

            if ($.isArray(array_advanced_style["advanced_style_price2"])) {
                if (array_advanced_style["advanced_style_price2"]["fill"] != "" && array_advanced_style["advanced_style_price2"]["fill"] != "undefined") {
                    $('#advance_price2_bg_line_color').val(array_advanced_style["advanced_style_price2"]["fill"]);
                    $('#advance_price2_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price2"]["rx"] > 0) {
                    $('#advance_price2_bg_curvature').val(array_advanced_style["advanced_style_price2"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price2"]["stroke"] != "" && array_advanced_style["advanced_style_price2"]["stroke"] != "undefined") {
                    $('#advance_price2_bg_stroke_color').val(array_advanced_style["advanced_style_price2"]["stroke"]);
                    $('#advance_price2_bg_stroke_show').prop('checked', true);
                    $('#advance_price2_bg_stroke_width').val(array_advanced_style["advanced_style_price2"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price2"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price2"]["strokeDashArray"][0] > 0)
                        $('#advance_price2_bg_stroke_type').val('dotted');
                }
            }
            if ($.isArray(array_advanced_style["advanced_style_price3"])) {
                if (array_advanced_style["advanced_style_price3"]["fill"] != "" && array_advanced_style["advanced_style_price3"]["fill"] != "undefined") {
                    $('#advance_price3_bg_line_color').val(array_advanced_style["advanced_style_price3"]["fill"]);
                    $('#advance_price3_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price3"]["rx"] > 0) {
                    $('#advance_price3_bg_curvature').val(array_advanced_style["advanced_style_price3"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price3"]["stroke"] != "" && array_advanced_style["advanced_style_price3"]["stroke"] != "undefined") {
                    $('#advance_price3_bg_stroke_color').val(array_advanced_style["advanced_style_price3"]["stroke"]);
                    $('#advance_price3_bg_stroke_show').prop('checked', true);
                    $('#advance_price3_bg_stroke_width').val(array_advanced_style["advanced_style_price3"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price3"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price3"]["strokeDashArray"][0] > 0)
                        $('#advance_price3_bg_stroke_type').val('dotted');
                }
            }
            if ($.isArray(array_advanced_style["advanced_style_price4"])) {
                if (array_advanced_style["advanced_style_price4"]["fill"] != "" && array_advanced_style["advanced_style_price4"]["fill"] != "undefined") {
                    $('#advance_price4_bg_line_color').val(array_advanced_style["advanced_style_price4"]["fill"]);
                    $('#advance_price4_bg_fill_color').prop('checked', true);
                }
                if (array_advanced_style["advanced_style_price4"]["rx"] > 0) {
                    $('#advance_price4_bg_curvature').val(array_advanced_style["advanced_style_price4"]["rx"]);
                }
                if (array_advanced_style["advanced_style_price4"]["stroke"] != "" && array_advanced_style["advanced_style_price4"]["stroke"] != "undefined") {
                    $('#advance_price4_bg_stroke_color').val(array_advanced_style["advanced_style_price4"]["stroke"]);
                    $('#advance_price4_bg_stroke_show').prop('checked', true);
                    $('#advance_price4_bg_stroke_width').val(array_advanced_style["advanced_style_price4"]["strokeWidth"]);
                }
                if ($.isArray(array_advanced_style["advanced_style_price4"]["strokeDashArray"])) {
                    if (array_advanced_style["advanced_style_price4"]["strokeDashArray"][0] > 0)
                        $('#advance_price4_bg_stroke_type').val('dotted');
                }
            }

        }

        //$("#text_table").rowSorter({
        //    handler: ".drag_menu"
        //});

        

        function loadTextGroupEditor(column) {
            resetAdvencedStyle();
            canvasModified();
            pushUndo();
            menu_edit_flag = true;
            menu_line_colour_flag = false;
            menu_line_type = "solid";
            var style_display = "";

            $("#line-setting-cont").hide();
            $("#col-count-cont").hide();
            $("#font-setting-cont").hide();
            $("#menu-style-cont").hide();
            $("#manage_advanced_style").hide();
            $(".header-tabs li").removeClass('active');

            var group = canvas.getActiveObject();
            var objs = group.getObjects(),
                menuItemidObjs = [],
                headingObjs = [],
                bottomLineObjs = [],
                headingpriceObjs = [],
                headingpriceObjs2 = [],
                headingpriceObjs3 = [],
                headingpriceObjs4 = [],
                priceObjs = [],
                priceObjs2 = [],
                priceObjs3 = [],
                priceObjs4 = [],
                subHeadingObjs = [],
                h = 0,
                l = -1,
                p = -1,
                p2 = -1,
                p3 = -1,
                p4 = -1,
                headLeft = 0,
                headingpriceLeft = 0,
                headingpriceLeft2 = 0,
                headingpriceLeft3 = 0,
                headingpriceLeft4 = 0,
                priceLeft = 0,
                priceLeft2 = 0,
                priceLeft3 = 0,
                priceLeft4 = 0,
                headingStyle = {},
                bottomLineStyle = {},
                headingpriceStyle = {},
                headingpriceStyle2 = {},
                headingpriceStyle3 = {},
                headingpriceStyle4 = {},
                priceStyle = {},
                priceStyle2 = {},
                priceStyle3 = {},
                priceStyle4 = {},
                subHeadingStyle = {};


            menu_dispaly_style = group.menuStyle;
            if (menu_dispaly_style == "") {
                menu_dispaly_style = 'menu_style_1';
            }

            menu_layout = group.menuLayout;
            if (menu_layout == "") {
                menu_layout = 'vartical';
            }

            headingObjs[h] = "";
            subHeadingObjs[h] = "";
            array_advanced_style = new Array();

            if (group.menuStyle != "") {
                for (var i = 0; i < objs.length; i++) {
                    if (objs[i].type == 'text' && objs[i].name == 'heading') {
                        //headingObjs[h] = (headingObjs[h] + ' ' + objs[i].getText());
                        headingObjs[h] = (headingObjs[h] + ' ' + objs[i].text);
                        menuItemidObjs[h] = objs[i].menuItemid;
                        headingStyle = {
                            'menuItemid': objs[i].menuItemid,
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].get('fill')
                        };

                    } else if (objs[i].type == 'line' && objs[i].name == 'line') {
                        if (objs[i].get('opacity') == 100 && menu_line_colour_flag == false) {
                            menu_line_colour_flag = true;
                        }
                        //if (objs[i].getStrokeDashArray() != null && objs[i].getStrokeDashArray()[0] > 0 && objs[i].getStrokeDashArray()[1] > 0) {
                        //    menu_line_type = "dotted";
                        //}
                        if (objs[i].get('strokeDashArray') != null && objs[i].get('strokeDashArray')[0] > 0 && objs[i].get('strokeDashArray')[1] > 0) {
                            menu_line_type = "dotted";
                        }
                        bottomLineObjs[++l] = objs[i].get('width');
                        bottomLineStyle = {
                            'background': objs[i].get('stroke')
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice') {
                        //                        headingpriceObjs[0] = objs[i].getText();
                        headingpriceObjs[0] = objs[i].text;
                        headingpriceStyle = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'price') {
                        //priceObjs[++p] = objs[i].getText();
                        priceObjs[++p] = objs[i].text;
                        priceStyle = {
                            'menuItemid': menuItemidObjs[h],
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice2' && column > 1) {
                        //headingpriceObjs2[0] = objs[i].getText();
                        headingpriceObjs2[0] = objs[i].text;
                        headingpriceStyle2 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && column > 1 && objs[i].name == 'price2') {
                        //priceObjs2[++p2] = objs[i].getText();
                        priceObjs2[++p2] = objs[i].text;
                        priceStyle2 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice3' && column > 2) {
                        //headingpriceObjs3[0] = objs[i].getText();
                        headingpriceObjs3[0] = objs[i].text;
                        headingpriceStyle3 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && column > 2 && objs[i].name == 'price3') {
                        //priceObjs3[++p3] = objs[i].getText();
                        priceObjs3[++p3] = objs[i].text;
                        priceStyle3 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice4' && column > 3) {
                        //headingpriceObjs4[0] = objs[i].getText();
                        headingpriceObjs4[0] = objs[i].text;
                        headingpriceStyle4 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && column > 3 && objs[i].name == 'price4') {
                        //priceObjs4[++p4] = objs[i].getText();
                        priceObjs4[++p4] = objs[i].text;
                        priceStyle4 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'subheading') {
                        var sub_head_index = h;
                        //subHeadingObjs[sub_head_index] = (subHeadingObjs[sub_head_index] + ' ' + objs[i].getText());
                        subHeadingObjs[sub_head_index] = (subHeadingObjs[sub_head_index] + ' ' + objs[i].text);
                        subHeadingStyle = {
                            'menuItemid': objs[i].menuItemid,
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].name == 'advanced_style_heading') {
                        array_advanced_style["advanced_style_heading"] = new Array();
                        array_advanced_style["advanced_style_heading"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_heading"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_heading"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_heading"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_heading"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_heading"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'advanced_style_description') {
                        array_advanced_style["advanced_style_description"] = new Array();
                        array_advanced_style["advanced_style_description"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_description"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_description"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_description"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_description"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_description"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'advanced_style_price1') {
                        array_advanced_style["advanced_style_price1"] = new Array();
                        array_advanced_style["advanced_style_price1"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_price1"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_price1"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_price1"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_price1"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_price1"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'advanced_style_price2') {
                        array_advanced_style["advanced_style_price2"] = new Array();
                        array_advanced_style["advanced_style_price2"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_price2"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_price2"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_price2"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_price2"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_price2"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'advanced_style_price3') {
                        array_advanced_style["advanced_style_price3"] = new Array();
                        array_advanced_style["advanced_style_price3"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_price3"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_price3"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_price3"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_price3"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_price3"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'advanced_style_price4') {
                        array_advanced_style["advanced_style_price4"] = new Array();
                        array_advanced_style["advanced_style_price4"]["fill"] = objs[i].fill;
                        array_advanced_style["advanced_style_price4"]["rx"] = objs[i].rx;
                        array_advanced_style["advanced_style_price4"]["ry"] = objs[i].ry;
                        array_advanced_style["advanced_style_price4"]["stroke"] = objs[i].stroke;
                        array_advanced_style["advanced_style_price4"]["strokeWidth"] = objs[i].strokeWidth;
                        array_advanced_style["advanced_style_price4"]["strokeDashArray"] = objs[i].strokeDashArray;
                    } else if (objs[i].name == 'new_menu') {
                        h++;
                        headingObjs[h] = "";
                        subHeadingObjs[h] = "";
                    }
                }
            }
            else {
                for (var i = 0; i < objs.length; i++) {
                    console.log(objs[i].name);
                    if (objs[i].type == 'text' && (objs[i].name == 'heading' || group.menuStyle == "")
                        && (headingStyle.color === undefined
                            || (objs[i].fontSize == headingStyle.fontSize
                                && objs[i].fill == headingStyle.color
                                && objs[i].left == headLeft))) {
                        //headingObjs[h] = (headingObjs[h] + ' ' + objs[i].getText());
                        headingObjs[h] = (headingObjs[h] + ' ' + objs[i].text);
                        menuItemidObjs[h] = objs[i].menuItemid;
                        headingStyle = {
                            'menuItemid': objs[i].menuItemid,
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].get('fill')
                        };
                        headLeft = objs[i].left;

                    } else if (objs[i].type == 'line' && (objs[i].name == 'line' || group.menuStyle == "") && objs[i].name != 'new_line') {
                        if (group.menuStyle == "") {
                            h++;
                            headingObjs[h] = "";
                            subHeadingObjs[h] = "";
                        }
                        if (objs[i].get('opacity') == 100 && menu_line_colour_flag == false) {
                            menu_line_colour_flag = true;
                            //console.log(objs[i].get('opacity'));
                        }
                        if (objs[i].getStrokeDashArray() != null && objs[i].getStrokeDashArray()[0] > 0 && objs[i].getStrokeDashArray()[1] > 0) {
                            menu_line_type = "dotted";
                        }

                        bottomLineObjs[++l] = objs[i].get('width');
                        bottomLineStyle = {
                            'background': objs[i].get('stroke')
                        };
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice'
                        && (headingpriceStyle.color === undefined
                            || (objs[i].fontSize == headingpriceStyle.fontSize
                                && objs[i].fill == headingpriceStyle.color
                                && objs[i].left == headingpriceLeft))) {
                        //headingpriceObjs[0] = objs[i].getText();
                        headingpriceObjs[0] = objs[i].text;
                        headingpriceStyle = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        headingpriceLeft = headingpriceLeft;
                        //alert(objs[i].width);
                    } else if (objs[i].type == 'text' && (objs[i].name == 'price' || group.menuStyle == "")
                        && (priceStyle.color === undefined
                            || (objs[i].fontSize == priceStyle.fontSize
                                && objs[i].fill == priceStyle.color
                                && (objs[i].left == priceLeft || objs[i].name == 'price')))) {
                        //priceObjs[++p] = objs[i].getText();
                        priceObjs[++p] = objs[i].text;
                        priceStyle = {
                            'menuItemid': objs[i].menuItemid,
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        priceLeft = objs[i].left;
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice2' && column > 1
                        && (headingpriceStyle2.color === undefined
                            || (objs[i].fontSize == headingpriceStyle2.fontSize
                                && objs[i].fill == headingpriceStyle2.color
                                && objs[i].left == headingpriceLeft2))) {
                        //headingpriceObjs2[0] = objs[i].getText();
                        headingpriceObjs2[0] = objs[i].text;
                        headingpriceStyle2 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        headingpriceLeft2 = headingpriceLeft2;
                        //alert(objs[i].width);
                    } else if (objs[i].type == 'text' && column > 1 && (objs[i].name == 'price2' || group.menuStyle == "")
                        && (priceStyle2.color === undefined
                            || (objs[i].fontSize == priceStyle2.fontSize
                                && objs[i].fill == priceStyle2.color
                                && (objs[i].left == priceLeft2 || objs[i].name == 'price2')))) {
                        //priceObjs2[++p2] = objs[i].getText();
                        priceObjs2[++p2] = objs[i].text;
                        priceStyle2 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        priceLeft2 = objs[i].left;
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice3' && column > 2
                        && (headingpriceStyle3.color === undefined
                            || (objs[i].fontSize == headingpriceStyle3.fontSize
                                && objs[i].fill == headingpriceStyle3.color
                                && objs[i].left == headingpriceLeft3))) {
                        //headingpriceObjs3[0] = objs[i].getText();
                        headingpriceObjs3[0] = objs[i].text;
                        headingpriceStyle3 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        headingpriceLeft3 = headingpriceLeft3;
                        //alert(objs[i].width);
                    } else if (objs[i].type == 'text' && column > 2 && (objs[i].name == 'price3' || group.menuStyle == "")
                        && (priceStyle3.color === undefined
                            || (objs[i].fontSize == priceStyle3.fontSize
                                && objs[i].fill == priceStyle3.color
                                && (objs[i].left == priceLeft3 || objs[i].name == 'price3')))) {
                        //priceObjs3[++p3] = objs[i].getText();
                        priceObjs3[++p3] = objs[i].text;
                        priceStyle3 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        priceLeft3 = objs[i].left;
                    } else if (objs[i].type == 'text' && objs[i].name == 'headingprice4' && column > 3
                        && (headingpriceStyle4.color === undefined
                            || (objs[i].fontSize == headingpriceStyle4.fontSize
                                && objs[i].fill == headingpriceStyle4.color
                                && objs[i].left == headingpriceLeft4))) {
                        //headingpriceObjs4[0] = objs[i].getText();
                        headingpriceObjs4[0] = objs[i].text;
                        headingpriceStyle4 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        headingpriceLeft4 = headingpriceLeft4;
                        //alert(objs[i].width);
                    } else if (objs[i].type == 'text' && column > 3 && (objs[i].name == 'price4' || group.menuStyle == "")
                        && (priceStyle4.color === undefined
                            || (objs[i].fontSize == priceStyle4.fontSize
                                && objs[i].fill == priceStyle4.color
                                && (objs[i].left == priceLeft4 || objs[i].name == 'price4')))) {
                        //priceObjs4[++p4] = objs[i].getText();
                        priceObjs4[++p4] = objs[i].text;
                        priceStyle4 = {
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                        priceLeft4 = objs[i].left;
                    } else if (objs[i].type == 'text' && (objs[i].name == 'subheading' || group.menuStyle == "")
                        && (subHeadingStyle.color === undefined
                            || (objs[i].fontSize == subHeadingStyle.fontSize
                                && objs[i].fill == subHeadingStyle.color
                                && objs[i].left == headLeft))) {
                        if (group.menuStyle == "") {
                            var sub_head_index = h - 1;
                        }
                        else {
                            var sub_head_index = h;
                        }
                        //subHeadingObjs[sub_head_index] = (subHeadingObjs[sub_head_index] + ' ' + objs[i].getText());
                        subHeadingObjs[sub_head_index] = (subHeadingObjs[sub_head_index] + ' ' + objs[i].text);
                        subHeadingStyle = {
                            'menuItemid': objs[i].menuItemid,
                            'fontFamily': objs[i].fontFamily,
                            'fontSize': objs[i].fontSize,
                            'fontWeight': objs[i].fontWeight,
                            'fontStyle': objs[i].fontStyle,
                            'textDecoration': (objs[i].textDecoration.substring(0, 4) == 'none' ? 'none' : 'underline'),
                            'textAlign': objs[i].textAlign,
                            'background': hex2rgb(rgb2hex(objs[i].get('fill'))),
                            'color': objs[i].fill
                        };
                    } else if (objs[i].name == 'new_menu' && group.menuStyle != "") {
                        h++;
                        headingObjs[h] = "";
                        subHeadingObjs[h] = "";
                    }
                }
            }

            console.log('Start Model Creation');
            var drag_div_width = group.tableHeadingWidth;
            ini_drag_div_menu = drag_div_width;
            var template_line_height = group.tableLineHieght;
            var drag_div_heading_price_width = group.tableHeadingPriceWidth;
            var drag_div_price_width = group.tablePriceWidth;
            ini_drag_div_menu_price = drag_div_price_width;
            var drag_div_heading_price2_width = group.tableHeadingPrice2Width;
            var drag_div_price2_width = group.tablePrice2Width;
            ini_drag_div_menu_price2 = drag_div_price2_width;
            var drag_div_heading_price3_width = group.tableHeadingPrice3Width;
            var drag_div_price3_width = group.tablePrice3Width;
            ini_drag_div_menu_price3 = drag_div_price3_width;
            var drag_div_heading_price4_width = group.tableHeadingPrice4Width;
            var drag_div_price4_width = group.tablePrice4Width;
            ini_drag_div_menu_price4 = drag_div_price4_width;
            var price_text = '$0.00';
            var price_text2 = '$0.00';
            var price_text3 = '$0.00';
            var price_text4 = '$0.00';

            $(".change_price_colum").removeClass('select');
            $("#change_price_colum_" + column).addClass('select');
            $("#col-count-item img").attr('src', 'img/canvas/ico-' + column + 'x.png');


            active_edit_menu_count = 0;
            //var menu_html = '<tbody>';
            var menu_html = '<thead>';
            for (var i = 0; i < headingObjs.length - 1; i++) {
                active_edit_menu_count++;
                if (i == 0) {
                    //menu_html += '<tr class="menu-head"><td></td><td></td><td width="90"></td>';
                    menu_html += '<tr class="size-head"><th class="" style="width:20px;" ></th ><th class="text-heading containtBox" style="width:' + drag_div_width + 'px;"></th><th class="distainsLine" style="width:70px;border-color: ' + bottomLineStyle.background +';"></th>';
                    ////menu_html += '<tr class="set-menu-item size-head"><td class="drag_menu rowHandle"></td><td class="containtBox text-end"><div id="drag_div_menu" class="drag_div_menu" draggable="true"><img class="drag-menu-width" src="/images/canvas/properties/ico-arrow-left-right.svg" height="10" /></div></td><td class="bottom-line price-column distainsLine"></td>';
                    if (headingObjs[0].trim() == "Add heading text") {
                        headingpriceStyle = {
                            'fontFamily': 'Helvetica',
                            'fontSize': '14',
                            'fontWeight': 'normal',
                            'fontStyle': 'normal',
                            'textDecoration': 'none',
                            'textAlign': 'left',
                            'background': '#FFFFFF',
                            'color': '#000000'
                        };
                    } else {
                        if (headingpriceStyle.color == undefined && headingpriceStyle.fontSize == undefined && headingpriceStyle.fontFamily == undefined) {
                            headingpriceStyle = {
                                'fontFamily': 'Helvetica',
                                'fontSize': '14',
                                'fontWeight': 'normal',
                                'fontStyle': 'normal',
                                'textDecoration': 'none',
                                'textAlign': 'left',
                                'background': '#FFFFFF',
                                'color': '#000000'
                            };
                        }
                    }
                    
                    //console.log('Color :' + headingpriceStyle.color);
                    //menu_html += '<td class="td_price_heading_colum_1"  style="padding:0px 5px 0px 0px;"><textarea class="text-heading-price" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:33px;width:' + drag_div_price_width + 'px;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Small">' + $.trim(headingpriceObjs[i]) + '</textarea></td>';


                    //update sudip height size   27-11-2024
                    //menu_html += '<th class="td_price_heading_colum_1 catagoryBox" data-type="Catagory 1" style="width:80px;"><textarea class="text-heading-price" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Small">' + $.trim(headingpriceObjs[i]) + '</textarea></th>';



                    menu_html += '<th class="td_price_heading_colum_1 catagoryBox" data-type="Catagory 1" style="width:85px;"><textarea class="text-heading-price" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:40px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Small">' + $.trim(headingpriceObjs[i]) + '</textarea></th>';

                    //update sudip height size end


                    ////menu_html += '<td class="td_price_colum_1 catagoryBox " data-type="Catagory 1"><textarea class="headingprice text-heading-price" id="drag_div_menu_price1" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Small">' + $.trim(headingpriceObjs[i]) + '</textarea></td>';
                    ////menu_html += '<td class="actionBox text-end"> <div id="drag_div_menu_price" class="drag_div_menu_price" draggable="true"> <img class="drag-menu-width" src="/images/canvas/properties/ico-arrow-left-right.svg" height="10" /></td>'
                    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
                    //if (column > 1) { style_display = 'style="padding:0px 5px 0px 0px;"'; }
                    //menu_html += '<td class="td_price_heading_colum_2" ' + style_display + '><textarea class="text-heading-price2" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:33px;width:' + drag_div_price2_width + 'px;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Midium">' + $.trim(headingpriceObjs2[i]) + '</textarea></td>';
                    if (column > 1) {
                        style_display = 'style="width:85px;"';      // update 28-11-24 sudip
                        
                    } else {
                        style_display = 'style="display:none;width:85px;"';     // update 28-11-24 sudip
                        if (headingpriceStyle2.color == undefined && headingpriceStyle2.fontSize == undefined && headingpriceStyle2.fontFamily == undefined) {
                            headingpriceStyle2 = {
                                'fontFamily': 'Helvetica',
                                'fontSize': '14',
                                'fontWeight': 'normal',
                                'fontStyle': 'normal',
                                'textDecoration': 'none',
                                'textAlign': 'left',
                                'background': '#FFFFFF',
                                'color': '#000000'
                            };
                        }
                    }
                    menu_html += '<th class="td_price_heading_colum_2 catagoryBox" ' + style_display + ' data-type="Catagory 2"><textarea type="text" class="text-heading-price2" style="font-family:' + headingpriceStyle2.fontFamily + ';font-size:' + headingpriceStyle2.fontSize + 'px;font-weight:' + headingpriceStyle2.fontWeight + ';font-style:' + headingpriceStyle2.fontStyle + ';text-decoration:' + headingpriceStyle2.textDecoration + ';text-align:' + headingpriceStyle2.textAlign + ';height:40px;width:100%;box-sizing: border-box;color:' + headingpriceStyle2.color + ';background:' + headingpriceStyle2.background + ';" placeholder="Medium">' + $.trim(headingpriceObjs2[i]) + '</textarea></th>';
                    ////menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + ' data-type="Catagory 2"><textarea type="text" class="text-heading-price2" id="drag_div_menu_price2" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" >' + $.trim(headingpriceObjs2[i]) + '</textarea></td>';
                    ////menu_html += '<td class="actionBox text-end" ' + style_display + '> <div id="drag_div_menu_price2" class="drag_div_menu_price2" draggable="true"> <img class="drag-menu-width" src="/images/canvas/properties/ico-arrow-left-right.svg" height="10" /></td>'

                    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
                    //if (column > 2) { style_display = 'style="padding:0px 5px 0px 0px;"'; }
                    //menu_html += '<td class="td_price_heading_colum_3" ' + style_display + '><textarea class="text-heading-price3" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:33px;width:' + drag_div_price3_width + 'px;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="Large">' + $.trim(headingpriceObjs3[i]) + '</textarea></td>';
                    //style_display = 'style="display:none;width:85px;"';             // update 28-11-24 sudip
                    if (column > 2) {
                        style_display = 'style="width:85px;"';              // update 28-11-24 sudip
                    } else {
                        style_display = 'style="display:none;width:85px;"';             // update 28-11-24 sudip
                        if (headingpriceStyle3.color == undefined && headingpriceStyle3.fontSize == undefined && headingpriceStyle3.fontFamily == undefined) {
                            headingpriceStyle3 = {
                                'fontFamily': 'Helvetica',
                                'fontSize': '14',
                                'fontWeight': 'normal',
                                'fontStyle': 'normal',
                                'textDecoration': 'none',
                                'textAlign': 'left',
                                'background': '#FFFFFF',
                                'color': '#000000'
                            };
                        }
                    }
                    menu_html += '<th class="td_price_heading_colum_3 catagoryBox" ' + style_display + ' data-type="Catagory 3"><textarea type="text" class="text-heading-price3" style="font-family:' + headingpriceStyle3.fontFamily + ';font-size:' + headingpriceStyle3.fontSize + 'px;font-weight:' + headingpriceStyle3.fontWeight + ';font-style:' + headingpriceStyle3.fontStyle + ';text-decoration:' + headingpriceStyle3.textDecoration + ';text-align:' + headingpriceStyle3.textAlign + ';height:40px;width:100%;box-sizing: border-box;color:' + headingpriceStyle3.color + ';background:' + headingpriceStyle3.background + ';" placeholder="Large">' + $.trim(headingpriceObjs3[i]) + '</textarea></th>';
                    ////menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + ' data-type="Catagory 3"><textarea type="text" class="text-heading-price3" id="drag_div_menu_price3" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" >' + $.trim(headingpriceObjs3[i]) + '</textarea></td>';
                    ////menu_html += '<td class="actionBox text-end" ' + style_display + '> <div id="drag_div_menu_price3" class="drag_div_menu_price3" draggable="true"> <img class="drag-menu-width" src="/images/canvas/properties/ico-arrow-left-right.svg" height="10" /></td>'

                    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
                    //if (column > 3) { style_display = 'style="padding:0px 5px 0px 0px;"'; }
                    //menu_html += '<td class="td_price_heading_colum_4" ' + style_display + '><textarea class="text-heading-price4" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:33px;width:' + drag_div_price4_width + 'px;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" placeholder="X-Large">' + $.trim(headingpriceObjs4[i]) + '</textarea></td>';
                    if (column > 3) {
                        style_display = 'style="width:90px;"';                  // update 28-11-24 sudip
                    } else {
                        style_display = 'style="display:none;width:90px;"';             // update 28-11-24 sudip
                        if (headingpriceStyle4.color == undefined && headingpriceStyle4.fontSize == undefined && headingpriceStyle4.fontFamily == undefined) {
                            headingpriceStyle4 = {
                                'fontFamily': 'Helvetica',
                                'fontSize': '14',
                                'fontWeight': 'normal',
                                'fontStyle': 'normal',
                                'textDecoration': 'none',
                                'textAlign': 'left',
                                'background': '#FFFFFF',
                                'color': '#000000'
                            };
                        }
                    }
                    menu_html += '<th class="td_price_heading_colum_4 catagoryBox" ' + style_display + ' data-type="Catagory 4"><textarea type="text" class="text-heading-price4" style="font-family:' + headingpriceStyle4.fontFamily + ';font-size:' + headingpriceStyle4.fontSize + 'px;font-weight:' + headingpriceStyle4.fontWeight + ';font-style:' + headingpriceStyle4.fontStyle + ';text-decoration:' + headingpriceStyle4.textDecoration + ';text-align:' + headingpriceStyle4.textAlign + ';height:40px;width:100%;box-sizing: border-box;color:' + headingpriceStyle4.color + ';background:' + headingpriceStyle4.background + ';" placeholder="X-Large">' + $.trim(headingpriceObjs4[i]) + '</textarea></th>';       //update sudip 28-11-24



                    ////menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + ' data-type="Catagory 4"><textarea type="text" class="text-heading-price4" id="drag_div_menu_price4" style="font-family:' + headingpriceStyle.fontFamily + ';font-size:' + headingpriceStyle.fontSize + 'px;font-weight:' + headingpriceStyle.fontWeight + ';font-style:' + headingpriceStyle.fontStyle + ';text-decoration:' + headingpriceStyle.textDecoration + ';text-align:' + headingpriceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;color:' + headingpriceStyle.color + ';background:' + headingpriceStyle.background + ';" >' + $.trim(headingpriceObjs4[i]) + '</textarea></td>';
                    ////menu_html += '<td class="actionBox text-end" ' + style_display + '> <div id="drag_div_menu_price4" class="drag_div_menu_price4" draggable="true"> <img class="drag-menu-width" src="/images/canvas/properties/ico-arrow-left-right.svg" height="10" /></td>'
                    //menu_html += '<td></td></tr><tr><td></td>';
                    menu_html += '<th class="actionBox" style="width:60px;"></th></tr > '
                    menu_html += '<tr><th class="" style="width:20px;"></th >';
                    ////menu_html += '</tr>'
                    //menu_html += '<tr><th class="" style="padding: 0 .66rem;"></th >'; //14.11.23
                    menu_html += '<th class="containtBox resizable" style="width:' + drag_div_width + 'px;"><div id="drag_div_menu" align="right" style="box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th><th class="distainsLine" style="width:70px;"></th>';
                    //menu_html += '<td><div id="drag_div_menu" align="right" style="width:' + drag_div_width + 'px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png" ></div></td><td></td>';
                    //menu_html += '<th class="containtBox"><div id="drag_div_menu" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th><th class="distainsLine"></th>';//14.11.23

                    //menu_html += '<td class="td_price_colum_1" ><div id="drag_div_menu_price" align="right" style="width:' + drag_div_price_width + 'px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';
                    //style_display = 'style="display:none;"';
                    //if (column > 1) { style_display = ''; }
                    //menu_html += '<td class="td_price_colum_2" ' + style_display + '><div id="drag_div_menu_price2" align="right" style="width:' + drag_div_price2_width + 'px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';

                    //style_display = 'style="display:none;"';
                    //if (column > 2) { style_display = ''; }
                    //menu_html += '<td class="td_price_colum_3" ' + style_display + '><div id="drag_div_menu_price3" align="right" style="width:' + drag_div_price3_width + 'px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';

                    //style_display = 'style="display:none;"';
                    //if (column > 3) { style_display = '"'; }
                    //menu_html += '<td class="td_price_colum_4" ' + style_display + '><div id="drag_div_menu_price4" align="right" style="width:' + drag_div_price4_width + 'px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';

                    //menu_html += '</tr></thead><tbody class="wrap-table scrollbar">';


                    //menu_html += '<th class="td_price_colum_1 catagoryBox"><div id="drag_div_menu_price" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
                    //style_display = 'style="display:none;"';
                    //if (column > 1) { style_display = ''; }

                    //menu_html += '<th class="td_price_colum_2 catagoryBox" ' + style_display + '><div id="drag_div_menu_price2" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
                    //style_display = 'style="display:none;"';
                    //if (column > 2) { style_display = ''; }

                    //menu_html += '<th class="td_price_colum_3 catagoryBox" ' + style_display + '><div id="drag_div_menu_price3" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
                    //style_display = 'style="display:none;"';
                    //if (column > 3) { style_display = ''; }

                    //menu_html += '<th class="td_price_colum_4 catagoryBox" ' + style_display + '><div id="drag_div_menu_price4" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
                    //menu_html += '</tr >';
                    menu_html += '<th class="td_price_colum_1 catagoryBox" style="width:85px;"><div id="drag_div_menu_price" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"></div></th>';
                    style_display = 'style="display:none;width:80px;"';
                    if (column > 1) { style_display = 'style="width:80px;"'; }

                    menu_html += '<th class="td_price_colum_2 catagoryBox" ' + style_display + '><div id="drag_div_menu_price2" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"></div></th>';
                    style_display = 'style="display:none;width:80px;"';
                    if (column > 2) { style_display = 'style="width:80px;"'; }

                    menu_html += '<th class="td_price_colum_3 catagoryBox" ' + style_display + '><div id="drag_div_menu_price3" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"></div></th>';
                    style_display = 'style="display:none;width:80px;"';
                    if (column > 3) { style_display = 'style="width:80px;"'; }

                    menu_html += '<th class="td_price_colum_4 catagoryBox" ' + style_display + '><div id="drag_div_menu_price4" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"></div></th>';
                    menu_html += '<th class="actionBox" style="width:60px;"></th></tr ></thead><tbody> ';
                }
                //alert(headingStyle.fontFamily);
                //menu_html += '<tr style="background-color: #FFF;border-top: 2px solid #BDBDBD;" class="hover-color"><td class="drag_menu"><img src="/images/canvasImg/icons/icon-handle.png"/></td><td style="padding:2px 5px; min-width:217px;"><textarea class="text-heading" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';height:38px;width:' + drag_div_width + 'px;color:' + headingStyle.color + ';background:' + headingStyle.background + ';">' + $.trim(headingObjs[i]) + '</textarea></br><textarea class="sub-heading" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';color:' + rgb2hex(subHeadingStyle.color) + ';background:' + subHeadingStyle.background + ';width:' + drag_div_width + 'px;min-height:38px;">' + $.trim(subHeadingObjs[i]) + '</textarea></td><td class="bottom-line" valign="top" style="padding-top:22px;padding-right:12px;"><span class="menu-line" style="border-color: ' + bottomLineStyle.background + '"></span></td>';

                //menu_html += '<tbody><tr><td class="drag_menu rowHandle" > <span><img src="/images/canvasImg/icons/icon-handle.png" alt=""></span></td >' //
                menu_html += '<tr class=""><td draggable="true" ondragstart="dragit(event.target.parentNode)" ondragover="dragover(event.target.parentNode)" class="drag_menu rowHandle" style="width:20px;cursor: move;" > <span> •  •  •</span></td>' //
                var item_id = menuItemidObjs[i];

                // update height size sudip
/*                menu_html += '<td class="containtBox" style="width:' + drag_div_width + 'px;" ><input type="hidden" class="text-menu-item-id" value="' + $.trim(menuItemidObjs[i]) + '" /><textarea class="text-heading headingText" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';color:' + headingStyle.color + ';background:' + headingStyle.background + ';height:30px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + $.trim(headingObjs[i]) + '</textarea><textarea class="sub-heading addDescription" name="" id="" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';color:' + rgb2hex(subHeadingStyle.color) + ';background:' + subHeadingStyle.background + ';height:50px;width:100%;box-sizing: border-box;" placeholder="Add description here. This can be multi-line!">' + $.trim(subHeadingObjs[i]) + '</textarea></td > ';*/
                // update height size sudip end

                menu_html += '<td class="containtBox" style="width:' + drag_div_width + 'px;" ><input type="hidden" class="text-menu-item-id" value="' + $.trim(menuItemidObjs[i]) + '" /><textarea class="text-heading headingText" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';color:' + headingStyle.color + ';background:' + headingStyle.background + ';height:60px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + $.trim(headingObjs[i]) + '</textarea><textarea class="sub-heading addDescription" ondragstart="return false;" name="" id="" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';color:' + rgb2hex(subHeadingStyle.color) + ';background:' + subHeadingStyle.background + ';height:50px;width:100%;box-sizing: border-box;" placeholder="Add description here. This can be multi-line!" onfocus="this.select()">' + $.trim(subHeadingObjs[i]) + '</textarea></td > ';  // sudip changes select text 30-12-2024


                if (priceStyle.color == undefined && priceStyle.fontSize == undefined && priceStyle.fontFamily == undefined) {
                    priceStyle = {
                        'fontFamily': 'Helvetica',
                        'fontSize': '18',
                        'fontWeight': 'normal',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'textAlign': 'left',
                        'background': '#FFFFFF',
                        'color': '#000000'
                    };
                }
                price_text = $.trim(priceObjs[i]);
                //menu_html += '<td valign="top" class="td_price_colum_1" style="padding-top:2px;"><textarea class="price" style="font-family:' + priceStyle.fontFamily + ';font-size:' + priceStyle.fontSize + 'px;font-weight:' + priceStyle.fontWeight + ';font-style:' + priceStyle.fontStyle + ';text-decoration:' + priceStyle.textDecoration + ';text-align:' + priceStyle.textAlign + ';height:38px;width:' + drag_div_price_width + 'px;color:' + priceStyle.color + ';background:' + priceStyle.background + ';">' + price_text + '</textarea></td>';
                menu_html += '<td class="bottom-line price-column distainsLine" style="width:70px;"><span class="menu-line line" style="border-color: ' + bottomLineStyle.background +';"></span></td><td class="td_price_colum_1 catagoryBox" style="width:' + drag_div_price_width + 'px;" ><textarea class="price " style="font-family:' + priceStyle.fontFamily + ';font-size:' + priceStyle.fontSize + 'px;font-weight:' + priceStyle.fontWeight + ';font-style:' + priceStyle.fontStyle + ';text-decoration:' + priceStyle.textDecoration + ';text-align:' + priceStyle.textAlign + ';color:' + priceStyle.color + ';background:' + priceStyle.background + ';height:40px;width:100%;box-sizing: border-box;">' + price_text + '</textarea></td>';                //update sudip 28-11-24 height
                style_display = 'style="display:none;width:' + drag_div_price2_width + 'px"';
                if (column > 1) { style_display = ''; }



                //style_display = 'style="display:none;padding-top:2px;"';
                //if (column > 1) { style_display = 'style="padding-top:2px;"'; }
                if (priceStyle2.color == undefined && priceStyle2.fontSize == undefined && priceStyle2.fontFamily == undefined) {
                    priceStyle2 = {
                        'fontFamily': 'Helvetica',
                        'fontSize': '18',
                        'fontWeight': 'normal',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'textAlign': 'left',
                        'background': '#FFFFFF',
                        'color': '#000000'
                    };
                }
                //if ($.trim(priceObjs2[i]) != '') {
                    price_text2 = $.trim(priceObjs2[i]);
                //}
                //else {
                //    price_text2 = '';
                //}
                
                //menu_html += '<td valign="top" class="td_price_colum_2" ' + style_display + '><textarea class="price2" style="font-family:' + priceStyle2.fontFamily + ';font-size:' + priceStyle2.fontSize + 'px;font-weight:' + priceStyle2.fontWeight + ';font-style:' + priceStyle2.fontStyle + ';text-decoration:' + priceStyle2.textDecoration + ';text-align:' + priceStyle2.textAlign + ';height:38px;width:' + drag_div_price2_width + 'px;color:' + priceStyle2.color + ';background:' + priceStyle2.background + ';">' + price_text2 + '</textarea></td>';
                menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + '><textarea class="price2" style="font-family:' + priceStyle2.fontFamily + ';font-size:' + priceStyle2.fontSize + 'px;font-weight:' + priceStyle2.fontWeight + ';font-style:' + priceStyle2.fontStyle + ';text-decoration:' + priceStyle2.textDecoration + ';text-align:' + priceStyle2.textAlign + ';color:' + priceStyle2.color + ';background:' + priceStyle2.background + ';height:40px;width:100%;box-sizing: border-box;">' + price_text2 + '</textarea></td>';
                style_display = 'style="display:none;width:' + drag_div_price3_width + 'px;"';
                if (column > 2) { style_display = ''; }




                //style_display = 'style="display:none;padding-top:2px;"';
                //if (column > 2) { style_display = 'style="padding-top:2px;"'; }
                if (priceStyle3.color == undefined && priceStyle3.fontSize == undefined && priceStyle3.fontFamily == undefined) {
                    priceStyle3 = {
                        'fontFamily': 'Helvetica',
                        'fontSize': '18',
                        'fontWeight': 'normal',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'textAlign': 'left',
                        'background': '#FFFFFF',
                        'color': '#000000'
                    };
                }
                //if ($.trim(priceObjs3[i]) != '') {
                    price_text3 = $.trim(priceObjs3[i]);
                //}
                
                //menu_html += '<td valign="top" class="td_price_colum_3" ' + style_display + '><textarea class="price3" style="font-family:' + priceStyle3.fontFamily + ';font-size:' + priceStyle3.fontSize + 'px;font-weight:' + priceStyle3.fontWeight + ';font-style:' + priceStyle3.fontStyle + ';text-decoration:' + priceStyle3.textDecoration + ';text-align:' + priceStyle3.textAlign + ';height:38px;width:' + drag_div_price3_width + 'px;color:' + priceStyle3.color + ';background:' + priceStyle3.background + ';">' + price_text3 + '</textarea></td>';
                menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + '><textarea class="price3" style="font-family:' + priceStyle3.fontFamily + ';font-size:' + priceStyle3.fontSize + 'px;font-weight:' + priceStyle3.fontWeight + ';font-style:' + priceStyle3.fontStyle + ';text-decoration:' + priceStyle3.textDecoration + ';text-align:' + priceStyle3.textAlign + ';color:' + priceStyle3.color + ';background:' + priceStyle3.background + ';height:40px;width:100%;box-sizing: border-box;">' + price_text3 + '</textarea></td>';
                style_display = 'style="display:none;width:' + drag_div_price4_width + 'px;"';
                if (column > 3) { style_display = ''; }





                //style_display = 'style="display:none;padding-top:2px;"';
                //if (column > 3) { style_display = 'style="padding-top:2px;"'; }

                if (priceStyle4.color == undefined && priceStyle4.fontSize == undefined && priceStyle4.fontFamily == undefined) {
                    priceStyle4 = {
                        'fontFamily': 'Helvetica',
                        'fontSize': '18',
                        'fontWeight': 'normal',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'textAlign': 'left',
                        'background': '#FFFFFF',
                        'color': '#000000'
                    };
                }
                //if ($.trim(priceObjs4[i]) != '') {
                    price_text4 = $.trim(priceObjs4[i]);
                //}
                
                //menu_html += '<td valign="top" class="td_price_colum_4" ' + style_display + '><textarea class="price4" style="font-family:' + priceStyle4.fontFamily + ';font-size:' + priceStyle4.fontSize + 'px;font-weight:' + priceStyle4.fontWeight + ';font-style:' + priceStyle4.fontStyle + ';text-decoration:' + priceStyle4.textDecoration + ';text-align:' + priceStyle4.textAlign + ';height:38px;width:' + drag_div_price4_width + 'px;color:' + priceStyle4.color + ';background:' + priceStyle4.background + ';">' + price_text4 + '</textarea></td>';

                //menu_html += '<td valign="top"><a class="text_table_remove_row">✖</a></td>';
                //menu_html += '</tr>';


                menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + '><textarea class="price4" style="font-family:' + priceStyle4.fontFamily + ';font-size:' + priceStyle4.fontSize + 'px;font-weight:' + priceStyle4.fontWeight + ';font-style:' + priceStyle4.fontStyle + ';text-decoration:' + priceStyle4.textDecoration + ';text-align:' + priceStyle4.textAlign + ';color:' + priceStyle4.color + ';background:' + priceStyle4.background + ';height:40px;width:100%;box-sizing: border-box;">' + price_text4 + '</textarea></td>';
                menu_html += '<td class="actionBox" style="width:60px"><a class="text_table_remove_row removeRow">&times;</a></td>';
                menu_html += '</tr>';

            }
            menu_html += '</tbody>';

            $("table#text_table").html(menu_html);
            $('#template_line_height').val(template_line_height);
            $("#map_into_canvas").hide();
            $("#modify_into_canvas").show();
            $("#tab_edit").addClass("active");
            //$("#font-setting-cont").show();
            //$("#font-setting-item").addClass('active');;

            //$("#text_table").rowSorter({
            //    handler: ".drag_menu",
            //    disabledRowClass: "nodrag",
            //    dragClass: "sorting-row",
            //    onDragStart: null,
            //    onDrop: null
            //});

            //sunil temp comment
            //$("#text_table").rowSorter({
            //    handler: ".drag_menu"
            //});
            //$("#text_table").rowSorter();

            $("#menu_style_1").click(function () {
                menu_dispaly_style = "menu_style_1";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_2").click(function () {
                menu_dispaly_style = "menu_style_2";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_3").click(function () {
                menu_dispaly_style = "menu_style_3";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_4").click(function () {
                menu_dispaly_style = "menu_style_4";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_5").click(function () {
                menu_dispaly_style = "menu_style_5";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_6").click(function () {
                menu_dispaly_style = "menu_style_6";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_7").click(function () {
                menu_dispaly_style = "menu_style_7";
                menu_layout = "vartical";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_1_h").click(function () {
                menu_dispaly_style = "menu_style_1";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_2_h").click(function () {
                menu_dispaly_style = "menu_style_2";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_3_h").click(function () {
                menu_dispaly_style = "menu_style_3";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_4_h").click(function () {
                menu_dispaly_style = "menu_style_4";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_5_h").click(function () {
                menu_dispaly_style = "menu_style_5";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_6_h").click(function () {
                menu_dispaly_style = "menu_style_6";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });
            $("#menu_style_7_h").click(function () {
                menu_dispaly_style = "menu_style_7";
                menu_layout = "horizontal";
                Menueditorpropertiessettingupdate();
            });

            //$("#drag_div_menu").draggable({
            //    axis: "x",
            //    cursor: "move",
            //    drag: function () {
            //        drag_element();
            //    },
            //    stop: function () {
            //        var drag_div_left_width = $("#drag_div_menu").css("left").replace('px', '');
            //        var drag_div_right_width = $("#drag_div_menu").width();
            //        var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
            //        if (drag_div_width < 70) {
            //            $("#drag_div_menu").css({ "left": "0px" });
            //            $("#drag_div_menu").css({ "width": "70px" });
            //        } else {
            //            $("#drag_div_menu").css({ "left": "0px" });
            //            $("#drag_div_menu").css({ "width": drag_div_width + "px" });
            //        }
            //    }
            //});

            //function drag_element() {
            //    var drag_div_left_width = $("#drag_div_menu").css("left").replace('px', '');
            //    var drag_div_right_width = $("#drag_div_menu").width();
            //    var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
            //    if (drag_div_width > 70) {
            //        $("#text_table .text-heading").css("width", drag_div_width);
            //        $("#text_table .sub-heading").css("width", drag_div_width);
            //    }
            //}
            //$("#drag_div_menu_price").draggable({
            //    axis: "x",
            //    cursor: "move",
            //    drag: function () {
            //        drag_element_price();
            //    },
            //    stop: function () {
            //        var drag_div_price_left_width = $("#drag_div_menu_price").css("left").replace('px', '');
            //        var drag_div_price_right_width = $("#drag_div_menu_price").width();
            //        var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
            //        if (drag_div_price_width < 60) {
            //            $("#drag_div_menu_price").css({ "left": "0px" });
            //            $("#drag_div_menu_price").css({ "width": "60px" });
            //        } else {
            //            $("#drag_div_menu_price").css({ "left": "0px" });
            //            $("#drag_div_menu_price").css({ "width": drag_div_price_width + "px" });
            //        }
            //    }
            //});

            //function drag_element_price() {
            //    var drag_div_price_left_width = $("#drag_div_menu_price").css("left").replace('px', '');
            //    var drag_div_price_right_width = $("#drag_div_menu_price").width();
            //    var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
            //    if (drag_div_price_width > 60) {
            //        $("#text_table .price").css("width", drag_div_price_width);
            //        $("#text_table .text-heading-price").css("width", drag_div_price_width);
            //    }
            //}
            //$("#drag_div_menu_price2").draggable({
            //    axis: "x",
            //    cursor: "move",
            //    drag: function () {
            //        drag_element_price2();
            //    },
            //    stop: function () {
            //        var drag_div_price2_left_width = $("#drag_div_menu_price2").css("left").replace('px', '');
            //        var drag_div_price2_right_width = $("#drag_div_menu_price2").width();
            //        var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
            //        if (drag_div_price2_width < 60) {
            //            $("#drag_div_menu_price2").css({ "left": "0px" });
            //            $("#drag_div_menu_price2").css({ "width": "60px" });
            //        } else {
            //            $("#drag_div_menu_price2").css({ "left": "0px" });
            //            $("#drag_div_menu_price2").css({ "width": drag_div_price2_width + "px" });
            //        }
            //    }
            //});

            //function drag_element_price2() {
            //    var drag_div_price2_left_width = $("#drag_div_menu_price2").css("left").replace('px', '');
            //    var drag_div_price2_right_width = $("#drag_div_menu_price2").width();
            //    var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
            //    if (drag_div_price2_width > 60) {
            //        $("#text_table .price2").css("width", drag_div_price2_width);
            //        $("#text_table .text-heading-price2").css("width", drag_div_price2_width);
            //    }
            //}
            //$("#drag_div_menu_price3").draggable({
            //    axis: "x",
            //    cursor: "move",
            //    drag: function () {
            //        drag_element_price3();
            //    },
            //    stop: function () {
            //        var drag_div_price3_left_width = $("#drag_div_menu_price3").css("left").replace('px', '');
            //        var drag_div_price3_right_width = $("#drag_div_menu_price3").width();
            //        var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
            //        if (drag_div_price3_width < 60) {
            //            $("#drag_div_menu_price3").css({ "left": "0px" });
            //            $("#drag_div_menu_price3").css({ "width": "60px" });
            //        } else {
            //            $("#drag_div_menu_price3").css({ "left": "0px" });
            //            $("#drag_div_menu_price3").css({ "width": drag_div_price3_width + "px" });
            //        }
            //    }
            //});

            //function drag_element_price3() {
            //    var drag_div_price3_left_width = $("#drag_div_menu_price3").css("left").replace('px', '');
            //    var drag_div_price3_right_width = $("#drag_div_menu_price3").width();
            //    var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
            //    if (drag_div_price3_width > 60) {
            //        $("#text_table .price3").css("width", drag_div_price3_width);
            //        $("#text_table .text-heading-price3").css("width", drag_div_price3_width);
            //    }
            //}
            //$("#drag_div_menu_price4").draggable({
            //    axis: "x",
            //    cursor: "move",
            //    drag: function () {
            //        drag_element_price4();
            //    },
            //    stop: function () {
            //        var drag_div_price4_left_width = $("#drag_div_menu_price4").css("left").replace('px', '');
            //        var drag_div_price4_right_width = $("#drag_div_menu_price4").width();
            //        var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
            //        if (drag_div_price4_width < 60) {
            //            $("#drag_div_menu_price4").css({ "left": "0px" });
            //            $("#drag_div_menu_price4").css({ "width": "60px" });
            //        } else {
            //            $("#drag_div_menu_price4").css({ "left": "0px" });
            //            $("#drag_div_menu_price4").css({ "width": drag_div_price4_width + "px" });
            //        }
            //    }
            //});

            //function drag_element_price4() {
            //    var drag_div_price4_left_width = $("#drag_div_menu_price4").css("left").replace('px', '');
            //    var drag_div_price4_right_width = $("#drag_div_menu_price4").width();
            //    var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
            //    if (drag_div_price4_width > 60) {
            //        $("#text_table .price4").css("width", drag_div_price4_width);
            //        $("#text_table .text-heading-price4").css("width", drag_div_price4_width);
            //    }
            //}


            // New  commt by sunil on dt. 29122023
            ////////////var drag_div_menu = document.getElementById('drag_div_menu');
            ////////////drag_div_menu.draggable = true;
            ////////////drag_div_menu.addEventListener('drag', function (e) {
            ////////////    e.axis = 'x';
            ////////////    e.cursor = 'move';
            ////////////    drag_element(e.offsetX + 20); //20
            ////////////});
            ////////////function drag_element(drag_div_width) {
            ////////////    if (drag_div_width < 0) {
            ////////////        drag_div_width = 0;
            ////////////    }
            ////////////    //console.log(drag_div_width);
            ////////////    if (drag_div_width > 240) {
            ////////////        ini_drag_div_menu = drag_div_width;
            ////////////        $("#text_table tbody .text-heading").parent('th').css("width", drag_div_width);

            ////////////        $("#drag_div_menu").parent('th').css("width", drag_div_width);

            ////////////    }
            ////////////    else {
            ////////////        if (drag_div_width != 0) {
            ////////////            ini_drag_div_menu = 240;
            ////////////        }

            ////////////    }
            ////////////}

            document.querySelectorAll('.resizable').forEach(function (th) {
                th.addEventListener('mousedown', function (e) {
                    e.preventDefault(); // Prevent text selection during drag

                    let startX = e.pageX;
                    let startWidth = th.offsetWidth;

                    console.log('start point' + startWidth);

                    function dragMove(e) {
                        let newWidth = startWidth + (e.pageX - startX);
                        //th.style.width = newWidth + 'px';
                        //$("#drag_div_menu").parent('th').css("width", newWidth);
                        //$("#text_table tbody .text-heading").parent('th').css("width", newWidth);
                        if (newWidth > 160) {
                            $("#text_table thead .containtBox").css("width", newWidth);
                            $("#text_table tbody .containtBox").css("width", newWidth);
                            ini_drag_div_menu = newWidth;
                        }
                        
                        console.log(ini_drag_div_menu);
                    }

                    function dragEnd() {
                        document.removeEventListener('mousemove', dragMove);
                        document.removeEventListener('mouseup', dragEnd);
                    }

                    document.addEventListener('mousemove', dragMove);
                    document.addEventListener('mouseup', dragEnd);
                });
            });

            //var drag_div_menu_price = document.getElementById('drag_div_menu_price');
            //drag_div_menu_price.draggable = true;
            //drag_div_menu_price.addEventListener('drag', function (e) {
            //    e.axis = 'x';
            //    e.cursor = 'move';
            //    drag_element_price(e.offsetX + 20);
            //});
            //function drag_element_price(drag_div_price_width) {
            //    if (drag_div_price_width < 0) {
            //        drag_div_price_width = 0;
            //    }
            //    console.log(drag_div_price_width);
            //    if (drag_div_price_width > 100) {
            //        ini_drag_div_menu_price = drag_div_price_width;
            //        $("#text_table .price").parent('th').css("width", drag_div_price_width);
            //        //$("#text_table .text-heading-price").parent('th').css("width", drag_div_price_width);
            //        //$("#text_table thead .menu-head +tr .td_price_colum_1").css("width", drag_div_price_width);
            //        $("#drag_div_menu_price").parent('th').css("width", drag_div_price_width);
            //        //$("#text_table thead .menu-head +tr .td_price_colum_1").css("width", drag_div_price_width);
            //    }
            //    else {
            //        if (drag_div_price_width != 0) {
            //            ini_drag_div_menu_price = 100;
            //        }
            //    }
            //}

            //var drag_div_menu_price2 = document.getElementById('drag_div_menu_price2');
            //drag_div_menu_price2.draggable = true;
            //drag_div_menu_price2.addEventListener('drag', function (e) {
            //    e.axis = 'x';
            //    e.cursor = 'move';
            //    drag_element_price2(e.offsetX + 20);
            //});
            //function drag_element_price2(drag_div_price2_width) {
            //    if (drag_div_price2_width < 0) {
            //        drag_div_price2_width = 0;
            //    }
            //    if (drag_div_price2_width > 100) {
            //        ini_drag_div_menu_price2 = drag_div_price2_width;
            //        $("#text_table .price2").parent('th').css("width", drag_div_price2_width);
            //        $("#drag_div_menu_price2").parent('th').css("width", drag_div_price_width);
            //        //$("#text_table .text-heading-price2").parent('th').css("width", drag_div_price2_width);

            //        //$("#text_table thead .menu-head +tr .td_price_colum_2").css("width", drag_div_price2_width);
            //    }
            //    else {
            //        if (drag_div_price2_width != 0) {
            //            ini_drag_div_menu_price2 = 100;
            //        }

            //    }
            //}

            //var drag_div_menu_price3 = document.getElementById('drag_div_menu_price3');
            //drag_div_menu_price3.draggable = true;
            //drag_div_menu_price3.addEventListener('drag', function (e) {
            //    e.axis = 'x';
            //    e.cursor = 'move';
            //    drag_element_price3(e.offsetX + 20);
            //});
            //function drag_element_price3(drag_div_price3_width) {
            //    if (drag_div_price3_width < 0) {
            //        drag_div_price3_width = 0;
            //    }
            //    if (drag_div_price3_width > 100) {
            //        ini_drag_div_menu_price3 = drag_div_price3_width;
            //        $("#text_table .price3").parent('td').css("width", drag_div_price3_width);
            //        $("#text_table .text-heading-price3").parent('th').css("width", drag_div_price3_width);

            //        $("#text_table thead .menu-head +tr .td_price_colum_3").css("width", drag_div_price3_width);
            //    }
            //    else {
            //        if (drag_div_price3_width != 0) {
            //            ini_drag_div_menu_price3 = 100;
            //        }

            //    }
            //}

            //var drag_div_menu_price4 = document.getElementById('drag_div_menu_price4');
            //drag_div_menu_price4.draggable = true;
            //drag_div_menu_price4.addEventListener('drag', function (e) {
            //    e.axis = 'x';
            //    e.cursor = 'move';
            //    drag_element_price4(e.offsetX + 20);
            //});
            //function drag_element_price4(drag_div_price4_width) {
            //    if (drag_div_price4_width < 0) {
            //        drag_div_price4_width = 0;
            //    }
            //    if (drag_div_price4_width > 100) {
            //        ini_drag_div_menu_price4 = drag_div_price4_width;
            //        $("#text_table .price4").parent('td').css("width", drag_div_price4_width);
            //        $("#text_table .text-heading-price4").parent('th').css("width", drag_div_price4_width);
            //        $("#text_table thead .menu-head +tr .td_price_colum_4").css("width", drag_div_price4_width);
            //    }
            //    else {
            //        if (drag_div_price4_width != 0) {
            //            ini_drag_div_menu_price4 = 100;
            //        }

            //    }
            //}

            //var currentGroupTop = group.top;
            //var currentGroupLeft = group.left;
            //var currentGroupHeight = group.height;
            //var currentGroupWidth = group.width;
            //var currentGroupScale = group.scaleX;

            document.getElementById("modify_into_canvas").onclick = function () {
                menu_edit_flag = false;
                var text_gr = createMenuObject(column_menu, group.objectCustomID);

                //console.log(text_gr);
                $('#set_canvas_menu').hide();
                //$("table#text_table tbody").html("");
                //$("table#text_table tbody").html("");
                //$("#text_table").hide();
                //$("#manage_menu_item").hide();
                //$(".pop_container").hide();

                var currentGroupTop = group.top;
                var currentGroupLeft = group.left;
                //var currentGroupOpacity = parseInt($('#input_show_opacity').val(), 10) / 100;
                var currentGroupScale = parseInt($('#slider_scale').val(), 10) / 100;

                // adding the group text_gr to the canvas
                text_gr.scale(currentGroupScale);  //sunil
                //text_gr.setOpacity(currentGroupOpacity);
                text_gr.top = currentGroupTop;
                text_gr.left = currentGroupLeft;

                canvas.remove(group);
                canvas.add(text_gr);
                canvas.renderAll();
                canvas.calcOffset();
                canvas.getObjects().forEach(function (o) {
                    if (o.objectCustomID === group.objectCustomID) {
                        canvas.setActiveObject(o);
                    }
                });
                //$("#menu_format_edit_box").hide();
            }

            document.getElementById("text_table_add_row").onclick = function () {
                textTableAddRow(false);
                $('.menuTable-scroll').scrollTop($('.menuTable-scroll')[0].scrollHeight);     // add this for fixed scroll at bottom
            }

            $("a.text_table_remove_row").click(function () {
                textTableDelRow($(this));
            });


            //$('textarea.sub-heading').autosize();
            //$('textarea.text-heading').autosize();
            //$('textarea.text-heading-price').autosize();
            //$('textarea.price').autosize();
            //$('textarea.text-heading-price2').autosize();
            //$('textarea.price2').autosize();
            //$('textarea.text-heading-price3').autosize();
            //$('textarea.price3').autosize();
            //$('textarea.text-heading-price4').autosize();
            //$('textarea.price4').autosize();
            $("table#text_table").show();
            $("#manage_menu_item").show();
            //add new funtion for data retriv varibale menuItemidObjs[]
            //sunil pending
            var itemList = '';

            for (var i = 0; i < menuItemidObjs.length; i++) {
                var id = $.trim(menuItemidObjs[i]);
                if (id != '') {
                    itemList = itemList + id + ',';
                }
            }
            console.log(itemList);
            if (itemList != '') {
                itemList = itemList.substr(0, itemList.length - 1);
                loadselecteditem(itemList);
            }
            else {
                $('#selected_item_table_body').empty();
                var itemTable = document.getElementById('item_table');
                if (itemTable) {
                    // Remove "active" class from all <tr> elements within the table
                    var trElements = itemTable.getElementsByTagName('tr');
                    for (var i = 0; i < trElements.length; i++) {
                        trElements[i].classList.remove('row-selected');
                    }

                    // Remove "active" class from all <td> elements within the table
                    var tdElements = itemTable.getElementsByTagName('td');
                    for (var j = 0; j < tdElements.length; j++) {
                        tdElements[j].classList.remove('row-selected');
                    }
                    var checkboxes = itemTable.querySelectorAll('input[type="checkbox"]');

                    // Iterate through each checkbox and uncheck it
                    checkboxes.forEach(function (checkbox) {
                        checkbox.checked = false;
                    });
                }

            }


            loadTextGroupFormatModifier(column);
            console.log(bottomLineStyle.background);
        }


        function loadselecteditem(menuItemlist) {
            console.log(menuItemlist);
            var itemTable = document.getElementById('item_table');
            if (itemTable) {
                // Remove "active" class from all <tr> elements within the table
                var trElements = itemTable.getElementsByTagName('tr');
                for (var i = 0; i < trElements.length; i++) {
                    trElements[i].classList.remove('row-selected');
                }

                // Remove "active" class from all <td> elements within the table
                var tdElements = itemTable.getElementsByTagName('td');
                for (var j = 0; j < tdElements.length; j++) {
                    tdElements[j].classList.remove('row-selected');
                }
                var checkboxes = itemTable.querySelectorAll('input[type="checkbox"]');

                // Iterate through each checkbox and uncheck it
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = false;
                });
            }

            $.ajax({
                type: "GET",
                url: '/canvas/getselecteditemlist',
                data: { 'itemList': menuItemlist },
                success: function (response) {
                    if (response != null) {
                        //console.log(response);
                        $('#selected_item_table_body').empty();
                        for (var i = 0; i < response.length; i++) {
                            //var table_tr = '<tr class="menu-itm-import-itms" >';
                            //table_tr = table_tr + '<td data-th="" style="display:none;">' + response[i].id + '</td>';
                            //table_tr = table_tr + '<td data-th="Name">' + response[i].itemName + '</td>';
                            //table_tr = table_tr + '<td data-th="Description">' + response[i].itemDescription + '</td>';
                            //table_tr = table_tr + '<td data-th="Price 1">' + response[i].price1 + '</td>';
                            ////table_tr = table_tr + '<td data-th=""><button class="deleteBtn" onclick="javascript:deleteselecteditemrow(event);">Remove</button></td>';
                            //table_tr = table_tr + '<td data-th=""><button class="deleteBtn" onclick="javascript:deleteselecteditemrow(event);">&times;</button></td>';
                            //table_tr = table_tr + '</tr>';
                            //table_tr = table_tr + '<tr class="menu-itm-import-itms-blank">' + '<td style="background-color: #fff;">' + '</td>' + '<td style="background-color: #fff;">' + '</td>' + '<td style="background-color: #fff;">' + '</td>' + '<td style="background-color: #fff;">' + '</td>' + '<td style="background-color: #fff;">' + '</td>' + '</tr >';

                            //new
                            var table_tr = '<tr class="menu-itm-import-itms-trns row-heading" id="selected_item_row1_' + response[i].id + '" >';
                            table_tr = table_tr + '<td data-th="" style="display:none;">' + response[i].id + '</td>';
                            table_tr = table_tr + '<td data-th="Name">' + response[i].itemName + '</td>';
                            //table_tr = table_tr + '<td ></td>';
                            table_tr = table_tr + '<td data-th="Price 1">' + response[i].price1 + '</td>';
                            table_tr = table_tr + '<td data-th="Price 2">' + response[i].price2 + '</td>';
                            table_tr = table_tr + '<td data-th="Price 3">' + response[i].price3 + '</td>';
                            table_tr = table_tr + '<td data-th="Price 4">' + response[i].price4 + '</td>';
                            table_tr = table_tr + '<td data-th="" rowspan="$"><button class="deleteBtn" onclick="javascript:deleteselecteditemrow(' + response[i].id + ');">&times;</button></td>';
                            table_tr = table_tr + '</tr>';
                            table_tr = table_tr + '<tr class="menu-itm-import-itms row-description-trns" id="selected_item_row2_' + response[i].id + '">';
                            table_tr = table_tr + '<td data-th="" style="display:none;"></td>';
                            //table_tr = table_tr + '<td ></td>';
                            table_tr = table_tr + '<td data-th="Description">' + response[i].itemDescription + '</td>';
                            table_tr = table_tr + '<td ></td>';
                            //table_tr = table_tr + '<td data-th=""><button class="deleteBtn" onclick="javascript:deleteselecteditemrow(event);">&times;</button></td>';
                            table_tr = table_tr + '</tr>';

                            table_tr = table_tr + '<tr class="menu-itm-import-itms-blank" id="selected_item_row3_' + response[i].id + '"><td style="background-color: #fff;"></td><td style="background-color: #fff;"></td><td style="background-color: #fff;"></td><td style="background-color: #fff;"></td></tr >';

                            $('#selected_item_table_body').append(table_tr);
                            $('#tr_row_heading_' + response[i].id).addClass('row-selected');
                            $('#tr_row_description_' + response[i].id).addClass('row-selected');

                            var checkbox = document.getElementById('item_chk_' + response[i].id);
                            if (checkbox) {
                                checkbox.checked = true;
                            }
                        }
                    }
                }
            });

        }


        function textTableAddRow(data, item_id, item_heading, item_sub_heading, item_price1, item_price2, item_price3, item_price4) {
            var column = column_menu;
            var style_display = "";
            if (data == false) {
                data = [];
                data["item_id"] = "0";
                if (item_id != null) {
                    data["item_id"] = item_id;
                }
                data["heading"] = "Add heading text";
                if (item_heading != null) {
                    data["heading"] = item_heading;
                }
                data["price1"] = "$0.00";
                if (item_price1 != null) {
                    if (item_price1 == 0) {
                        data["price1"] = '-';
                    }
                    else {
                        data["price1"] = item_price1;
                    }
                    
                }
                data["price2"] = "$0.00";
                if (item_price2 != null) {
                    if (item_price2 == 0) {
                        data["price2"] = '-';
                    }
                    else {
                        data["price2"] = item_price2;
                    }
                }
                data["price3"] = "$0.00";
                if (item_price3 != null) {
                    if (item_price3 == 0) {
                        data["price3"] = '-';
                    }
                    else {
                        data["price3"] = item_price3;
                    }
                }
                data["price4"] = "$0.00";
                if (item_price4 != null) {
                    if (item_price4 == 0) {
                        data["price4"] = '-';
                    }
                    else {
                        data["price4"] = item_price4;
                    }
                }
                data["sub_heading"] = "Add description here. This can be multi-line!";
                if (item_sub_heading != null) {
                    data["sub_heading"] = item_sub_heading;
                }
            }
            var element = document.getElementById('drag_div_menu');
            var headingObjs = [],
                bottomLineObjs = [],
                priceObjs = [],
                priceObjs2 = [],
                priceObjs3 = [],
                priceObjs4 = [],
                subHeadingObjs = [],
                menuItemidObjs = [],
                headingStyle = {},
                bottomLineStyle = {},
                priceStyle = {},
                priceStyle2 = {},
                priceStyle3 = {},
                priceStyle4 = {},
                subHeadingStyle = {},
                drag_div_left_width = $("#drag_div_menu").css("left").replace('px', ''),
                drag_div_right_width = $("#drag_div_menu").width(),
                drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width),
                drag_div_price_left_width = $("#drag_div_menu_price").css("left").replace('px', ''),
                drag_div_price_right_width = $("#drag_div_menu_price").width(),
                drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width),
                drag_div_price2_left_width = $("#drag_div_menu_price2").css("left").replace('px', ''),
                drag_div_price2_right_width = $("#drag_div_menu_price2").width(),
                drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width),
                drag_div_price3_left_width = $("#drag_div_menu_price3").css("left").replace('px', ''),
                drag_div_price3_right_width = $("#drag_div_menu_price3").width(),
                drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width),
                drag_div_price4_left_width = $("#drag_div_menu_price4").css("left").replace('px', ''),
                drag_div_price4_right_width = $("#drag_div_menu_price4").width(),
                drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
            //alert(drag_div_width);
            $(".text-menu-item-id").each(function (i, e) {
                menuItemidObjs[i] = e;
            });

            $("textarea.text-heading").each(function (i, e) {
                headingObjs[i] = e;
            });
            $("td.bottom-line .menu-line").each(function (i, e) {
                bottomLineObjs[i] = e;
            });

            $("textarea.price").each(function (i, e) {
                priceObjs[i] = e;
            });

            $("textarea.price2").each(function (i, e) {
                priceObjs2[i] = e;
            });

            $("textarea.price3").each(function (i, e) {
                priceObjs3[i] = e;
            });

            $("textarea.price4").each(function (i, e) {
                priceObjs4[i] = e;
            });

            $("textarea.sub-heading").each(function (i, e) {
                subHeadingObjs[i] = e;
            });

            for (var i = 0; i < headingObjs.length; i++) {
                var menuItemid = menuItemidObjs[i];
                var heading = headingObjs[i];
                var bottomLine = bottomLineObjs[i];
                var price = priceObjs[i];
                var price2 = priceObjs2[i];
                var price3 = priceObjs3[i];
                var price4 = priceObjs4[i];
                var subHeading = subHeadingObjs[i];

                headingStyle = {
                    'fontFamily': $(heading).css('font-family').replace(/("|')/g, ''),
                    'fontSize': $(heading).css('font-size').replace('px', ''),
                    'fontWeight': $(heading).css('font-weight'),
                    'fontStyle': $(heading).css('font-style'),
                    'textDecoration': ($(heading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(heading).css('text-align'),
                    'background': hex2rgb(rgb2hex($(heading).css('color'))),
                    'color': $(heading).css('color'),
                    'width': drag_div_width
                };
                bottomLineStyle = {
                    'background': $(bottomLine).css(style_nemu_line_color),
                };
                priceStyle = {
                    'fontFamily': $(price).css('font-family').replace(/("|')/g, ''),
                    'fontSize': $(price).css('font-size').replace('px', ''),
                    'fontWeight': $(price).css('font-weight'),
                    'fontStyle': $(price).css('font-style'),
                    'textDecoration': ($(price).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(price).css('text-align'),
                    'background': hex2rgb(rgb2hex($(price).css('color'))),
                    'color': $(price).css('color'),
                    'width': drag_div_price_width
                };
                priceStyle2 = {
                    'fontFamily': $(price2).css('font-family').replace(/("|')/g, ''),
                    'fontSize': $(price2).css('font-size').replace('px', ''),
                    'fontWeight': $(price2).css('font-weight'),
                    'fontStyle': $(price2).css('font-style'),
                    'textDecoration': ($(price2).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(price2).css('text-align'),
                    'background': hex2rgb(rgb2hex($(price2).css('color'))),
                    'color': $(price2).css('color'),
                    'width': drag_div_price2_width
                };
                priceStyle3 = {
                    'fontFamily': $(price3).css('font-family').replace(/("|')/g, ''),
                    'fontSize': $(price3).css('font-size').replace('px', ''),
                    'fontWeight': $(price3).css('font-weight'),
                    'fontStyle': $(price3).css('font-style'),
                    'textDecoration': ($(price3).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(price3).css('text-align'),
                    'background': hex2rgb(rgb2hex($(price3).css('color'))),
                    'color': $(price3).css('color'),
                    'width': drag_div_price3_width
                };
                priceStyle4 = {
                    'fontFamily': $(price4).css('font-family').replace(/("|')/g, ''),
                    'fontSize': $(price4).css('font-size').replace('px', ''),
                    'fontWeight': $(price4).css('font-weight'),
                    'fontStyle': $(price4).css('font-style'),
                    'textDecoration': ($(price4).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(price4).css('text-align'),
                    'background': hex2rgb(rgb2hex($(price4).css('color'))),
                    'color': $(price4).css('color'),
                    'width': drag_div_price4_width
                };
                subHeadingStyle = {
                    'fontFamily': ($(subHeading).css('font-family').replace(/("|')/g, '')) ? $(subHeading).css('font-family').replace(/("|')/g, '') : 'Helvetica',
                    'fontSize': $(subHeading).css('font-size').replace('px', ''),
                    'fontWeight': $(subHeading).css('font-weight'),
                    'fontStyle': $(subHeading).css('font-style'),
                    'textDecoration': ($(subHeading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                    'textAlign': $(subHeading).css('text-align'),
                    'background': hex2rgb(rgb2hex($(subHeading).css('color'))),
                    'color': $(subHeading).css('color'),
                    'width': drag_div_width
                };
            }

            var style_display = "";



            //var menu_html = '<tr style="background-color: #FFF;border-top: 2px solid #BDBDBD;" class="hover-color"><td class="drag_menu"><img src="/images/canvasImg/icons/icon-handle.png"/></td><td style="padding:2px 5px;"><textarea class="text-heading text-heading-price" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';height:38px;width:' + headingStyle.width + 'px;color:' + headingStyle.color + ';background:' + headingStyle.background + ';" placeholder="Add heading text here">' + data.heading + '</textarea></br><textarea class="sub-heading" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';color:' + rgb2hex(subHeadingStyle.color) + ';background:' + subHeadingStyle.background + ';width:' + headingStyle.width + 'px;" >' + data.sub_heading + '</textarea></td><td class="bottom-line" valign="top" style="padding-top:22px;padding-right:12px;"><span class="menu-line" style="border-color: ' + bottomLineStyle.background + '"></span></td>';

            //menu_html += '<td valign="top" style="padding-top:2px;" class="td_price_colum_1" ><textarea class="price" style="font-family:' + priceStyle.fontFamily + ';font-size:' + priceStyle.fontSize + 'px;font-weight:' + priceStyle.fontWeight + ';font-style:' + priceStyle.fontStyle + ';text-decoration:' + priceStyle.textDecoration + ';text-align:' + priceStyle.textAlign + ';height:38px;width:' + priceStyle.width + 'px;color:' + priceStyle.color + ';background:' + priceStyle.background + ';">' + data.price1 + '</textarea></td>';

            //style_display = 'style="display:none;padding-top:2px;"';
            //if (column > 1) { style_display = 'style="padding-top:2px;"'; }
            //menu_html += '<td valign="top"  class="td_price_colum_2" ' + style_display + '><textarea class="price2" style="font-family:' + priceStyle2.fontFamily + ';font-size:' + priceStyle2.fontSize + 'px;font-weight:' + priceStyle2.fontWeight + ';font-style:' + priceStyle2.fontStyle + ';text-decoration:' + priceStyle2.textDecoration + ';text-align:' + priceStyle2.textAlign + ';height:38px;width:' + priceStyle2.width + 'px;color:' + priceStyle2.color + ';background:' + priceStyle2.background + ';">' + data.price2 + '</textarea></td>';

            //style_display = 'style="display:none;padding-top:2px;"';
            //if (column > 2) { style_display = 'style="padding-top:2px;"'; }
            //menu_html += '<td valign="top" class="td_price_colum_3" ' + style_display + '><textarea class="price3" style="font-family:' + priceStyle3.fontFamily + ';font-size:' + priceStyle3.fontSize + 'px;font-weight:' + priceStyle3.fontWeight + ';font-style:' + priceStyle3.fontStyle + ';text-decoration:' + priceStyle3.textDecoration + ';text-align:' + priceStyle3.textAlign + ';height:38px;width:' + priceStyle3.width + 'px;color:' + priceStyle3.color + ';background:' + priceStyle3.background + ';">' + data.price3 + '</textarea></td>';

            //style_display = 'style="display:none;padding-top:2px;"';
            //if (column > 3) { style_display = 'style="padding-top:2px;"'; }
            //menu_html += '<td valign="top" class="td_price_colum_4" ' + style_display + '><textarea class="price4" style="font-family:' + priceStyle4.fontFamily + ';font-size:' + priceStyle4.fontSize + 'px;font-weight:' + priceStyle4.fontWeight + ';font-style:' + priceStyle4.fontStyle + ';text-decoration:' + priceStyle4.textDecoration + ';text-align:' + priceStyle4.textAlign + ';height:38px;width:' + priceStyle4.width + 'px;color:' + priceStyle4.color + ';background:' + priceStyle4.background + ';">' + data.price3 + '</textarea></td>';

            //menu_html += '<td valign="top"><a class="text_table_remove_row">✖</a></td>';
            //menu_html += '<tr>';

            //Old Desing
            //var th_containtBox_width = $('.menu-head .text-heading').width() + 20 + 'px';
            //alert(th_containtBox_width);
            //var th_price_heading1_width = $('.menu-head .td_price_heading_colum_1').width() + 20 + 'px';
            //var th_price_heading2_width = $('.menu-head .td_price_heading_colum_2').width() + 20 + 'px';
            //var th_price_heading3_width = $('.menu-head .td_price_heading_colum_3').width() + 20 + 'px';
            //var th_price_heading4_width = $('.menu-head .td_price_heading_colum_4').width() + 20 + 'px';
            //var menu_html = '<tr><td class="drag_menu rowHandle" > <span><img src="/images/canvasImg/icons/icon-handle.svg" alt=""></span></td >' //
            //menu_html += '<td class="containtBox" style ="width:' + th_containtBox_width + ';" ><input type="hidden" class="text-menu-item-id" value="' + data.item_id + '" /><textarea class="text-heading headingText" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + data.heading + '</textarea><textarea class="sub-heading addDescription" name="" id="" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';height:50px;width:100%;box-sizing:border-box;" placeholder="Add description here. This can be multi-line!">' + data.sub_heading + '</textarea></td > ';
            //menu_html += '<td class="bottom-line price-column distainsLine"><span class="menu-line line"></span></td><td class="td_price_colum_1 catagoryBox" style ="width:' + th_price_heading1_width + ';" ><textarea class="price" style="font-family:' + priceStyle.fontFamily + ';font-size:' + priceStyle.fontSize + 'px;font-weight:' + priceStyle.fontWeight + ';font-style:' + priceStyle.fontStyle + ';text-decoration:' + priceStyle.textDecoration + ';text-align:' + priceStyle.textAlign + ';height:30px;width:100%;box-sizing: border-box;">' + data.price1 + '</textarea></td>';
            //style_display = 'style="display:none; width:' + th_price_heading2_width + ';"';
            //if (column > 1) { style_display = 'style="width:' + th_price_heading2_width + ';"'; }

            //menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + ' ><textarea class="price2" style="font-family:' + priceStyle2.fontFamily + ';font-size:' + priceStyle2.fontSize + 'px;font-weight:' + priceStyle2.fontWeight + ';font-style:' + priceStyle2.fontStyle + ';text-decoration:' + priceStyle2.textDecoration + ';text-align:' + priceStyle2.textAlign + ';height:30px;width:100%;box-sizing: border-box;">' + data.price2 + '</textarea></td>';
            //style_display = 'style="display:none;width:' + th_price_heading3_width + ';"';
            //if (column > 2) { style_display = 'style="width:' + th_price_heading3_width + ';"'; }

            //menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + '><textarea class="price3" style="font-family:' + priceStyle3.fontFamily + ';font-size:' + priceStyle3.fontSize + 'px;font-weight:' + priceStyle3.fontWeight + ';font-style:' + priceStyle3.fontStyle + ';text-decoration:' + priceStyle3.textDecoration + ';text-align:' + priceStyle3.textAlign + ';height:30px;width:100%;box-sizing: border-box;">' + data.price3 + '</textarea></td>';
            //style_display = 'style="display:none;width:' + th_price_heading4_width + ';"';
            //if (column > 3) { style_display = 'style="width:' + th_price_heading4_width + ';"'; }

            //menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + '><textarea class="price4" style="font-family:' + priceStyle4.fontFamily + ';font-size:' + priceStyle4.fontSize + 'px;font-weight:' + priceStyle4.fontWeight + ';font-style:' + priceStyle4.fontStyle + ';text-decoration:' + priceStyle4.textDecoration + ';text-align:' + priceStyle4.textAlign + ';height:30px;width:100%;box-sizing: border-box;">' + data.price4 + '</textarea></td>';
            //menu_html += '<td class="actionBox"><a class="text_table_remove_row removeRow">✖</a></td>';
            //menu_html += '</tr>';

            //new design
            var th_containtBox_width = $('#drag_div_menu').width();
            //alert($('#drag_div_menu').width());
            var th_price_heading1_width = $('#drag_div_menu_price1').width();
            var th_price_heading2_width = $('#drag_div_menu_price2').width();
            var th_price_heading3_width = $('#drag_div_menu_price3').width();
            var th_price_heading4_width = $('#drag_div_menu_price4').width();
           /* var menu_html = '<tr class=""><td draggable="true" ondragstart="dragit(event.target.parentNode)" ondragover="dragover(event.target.parentNode)" class="drag_menu rowHandle" style="width:20px;cursor: move;" > <span><img src="/images/canvas/menu-editor/icon-handle.svg" alt=""></span></td >'*/
            var menu_html = '<tr class=""><td draggable="true" ondragstart="dragit(event.target.parentNode)" ondragover="dragover(event.target.parentNode)" class="drag_menu rowHandle" style="width:20px;cursor: move;" > <span> •  •  •</span></td >' //
            menu_html += '<td class="containtBox" style="width:' + th_containtBox_width + 'px;"><input type="hidden" class="text-menu-item-id" value="' + data.item_id + '" /><textarea class="text-heading headingText" style="font-family:' + headingStyle.fontFamily + ';font-size:' + headingStyle.fontSize + 'px;font-weight:' + headingStyle.fontWeight + ';font-style:' + headingStyle.fontStyle + ';text-decoration:' + headingStyle.textDecoration + ';text-align:' + headingStyle.textAlign + ';color:' + headingStyle.color + ';background:' + headingStyle.background + ';height:60px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + data.heading + '</textarea><textarea class="sub-heading addDescription" ondragstart="return false;" name="" id="" style="font-family:' + subHeadingStyle.fontFamily + ';font-size:' + subHeadingStyle.fontSize + 'px;text-align:' + priceStyle.textAlign + ';font-weight:' + subHeadingStyle.fontWeight + ';font-style:' + subHeadingStyle.fontStyle + ';text-decoration:' + subHeadingStyle.textDecoration + ';text-align:' + subHeadingStyle.textAlign + ';color:' + rgb2hex(subHeadingStyle.color) + ';background:' + subHeadingStyle.background + ';height:50px;width:100%;box-sizing:border-box;" placeholder="Add description here. This can be multi-line!" onfocus="this.select()">' + data.sub_heading + '</textarea></td > ';    // sudip changes select text 30-12-2024
            menu_html += '<td class="bottom-line price-column distainsLine" style="width=70px"><span class="menu-line line"></span></td><td class="td_price_colum_1 catagoryBox" style="' + th_price_heading1_width +'px;"><textarea class="price" style="font-family:' + priceStyle.fontFamily + ';font-size:' + priceStyle.fontSize + 'px;font-weight:' + priceStyle.fontWeight + ';font-style:' + priceStyle.fontStyle + ';text-decoration:' + priceStyle.textDecoration + ';text-align:' + priceStyle.textAlign + ';color:' + priceStyle.color + ';background:' + priceStyle.background + ';height:40px;width:100%;box-sizing: border-box;">' + data.price1 + '</textarea></td>';
            style_display = 'style="display:none;width=' + th_price_heading2_width + ';"';
            if (column > 1) { style_display = ''; }

            menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + ' ><textarea class="price2" style="font-family:' + priceStyle2.fontFamily + ';font-size:' + priceStyle2.fontSize + 'px;font-weight:' + priceStyle2.fontWeight + ';font-style:' + priceStyle2.fontStyle + ';text-decoration:' + priceStyle2.textDecoration + ';text-align:' + priceStyle2.textAlign + ';color:' + priceStyle2.color + ';background:' + priceStyle2.background + ';height:40px;width:100%;box-sizing: border-box;">' + data.price2 + '</textarea></td>';
            style_display = 'style="display:none;width=' + th_price_heading3_width + ';"';
            if (column > 2) { style_display = ''; }

            menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + '><textarea class="price3" style="font-family:' + priceStyle3.fontFamily + ';font-size:' + priceStyle3.fontSize + 'px;font-weight:' + priceStyle3.fontWeight + ';font-style:' + priceStyle3.fontStyle + ';text-decoration:' + priceStyle3.textDecoration + ';text-align:' + priceStyle3.textAlign + ';color:' + priceStyle3.color + ';background:' + priceStyle3.background + ';height:40px;width:100%;box-sizing: border-box;">' + data.price3 + '</textarea></td>';
            style_display = 'style="display:none;width=' + th_price_heading4_width + ';"';
            if (column > 3) { style_display = ''; }

            menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + '><textarea class="price4" style="font-family:' + priceStyle4.fontFamily + ';font-size:' + priceStyle4.fontSize + 'px;font-weight:' + priceStyle4.fontWeight + ';font-style:' + priceStyle4.fontStyle + ';text-decoration:' + priceStyle4.textDecoration + ';text-align:' + priceStyle4.textAlign + ';color:' + priceStyle4.color + ';background:' + priceStyle4.background + ';height:40px;width:100%;box-sizing: border-box;">' + data.price4 + '</textarea></td>';
            menu_html += '<td class="actionBox" style="width:60px;"><a class="text_table_remove_row removeRow">&times;</a></td>';
            menu_html += '</tr>';


            $("#text_table tbody").append(menu_html);
            $("a.text_table_remove_row").click(function () {
                textTableDelRow($(this));
            });

            active_edit_menu_count++;
            $(".text_table_remove_row").removeClass("inactive_menu_delete");

            //$('textarea.sub-heading').autosize();
            //$('textarea.text-heading').autosize();
            //$('textarea.text-heading-price').autosize();
            //$('textarea.price').autosize();
            //$('textarea.text-heading-price2').autosize();
            //$('textarea.price2').autosize();
            //$('textarea.text-heading-price3').autosize();
            //$('textarea.price3').autosize();
            //$('textarea.text-heading-price4').autosize();
            //$('textarea.price4').autosize();
            //$(".pop_body").scrollTop(1000);
            $(".pop_body").animate({ scrollTop: $(".pop_body").height() + 3000 }, 'slow');
            //console.log('AA');
        }

        function textTableDelRow(elem) {
            var i = elem.parent().parent().index();
            ++i;

            if (typeof elem.parent().parent().parent().find("tr:nth-child(" + i + ")").html() !== "undefined" && active_edit_menu_count > 1) {
                elem.parent().parent().parent().find("tr:nth-child(" + i + ")").remove()
                active_edit_menu_count--;
            }
            if (active_edit_menu_count == 1) {
                $(".text_table_remove_row").addClass("inactive_menu_delete");
            }

        }

        ////sunil




        ////document.getElementById("map_into_canvas").onclick = function (e) {
        ////    menu_edit_flag = false;
        ////    var text_gr = createMenuObject(column_menu, '');

        ////    $("table#text_table tbody").html("");
        ////    $("table#text_table tbody").html("");
        ////    $("#text_table").hide();
        ////    $("#manage_menu_item").hide();

        ////    // adding the group text_gr to the canvas
        ////    newText_gr.scale(multiplier_ratio * 1.92);
        ////    newText_gr.name = 'template' + column_menu;
        ////    //text_gr.my.name = 'template' + column_menu;
        ////    newText_gr.lockUniScaling = true;
        ////    newText_gr.top = 50;
        ////    newText_gr.left = 200;

        ////    pushUndo();


        ////}





        //canvas.on('selection:created', function (e) {
        //    console.log('Selection created:', e.target);
        //});



        //function addNewMenuWindow(column, data) {
        //    resetAdvencedStyle();
        //    array_advanced_style = new Array();
        //    menu_edit_flag = true;
        //    menu_line_colour_flag = true;
        //    var style_display = "";
        //    if (data == false) {
        //        data = [];
        //        data["item_id"] = "0";
        //        data["heading"] = "Add heading text";
        //        data["price1"] = "$0.00";
        //        data["price2"] = "$0.00";
        //        data["price3"] = "$0.00";
        //        data["price4"] = "$0.00";
        //        data["sub_heading"] = "Add description here. This can be multi-line!";
        //    }

        //    //$(".pop_container").hide();
        //    //$("#pop_settings").css("top", 85);
        //    //$("#pop_settings").css("left", 100);
        //    //$("#pop_settings").show();
        //    //$(".left-list").hide();
        //    //$("#tab_edit").removeClass("active");
        //    //$("#tab_properties").removeClass("active");
        //    //$("#tab_effect").removeClass("active");//sourav
        //    //$("#li_shadow").hide();//sourav
        //    //$("#controls_shadow").hide();//sourav
        //    //$("#controls_shadow_blur").hide();//sourav
        //    //$("#controls_shadow_opacity").hide();//sourav
        //    //$("#tab_edit").show();//sourav

        //    $("#line-setting-cont").hide();
        //    $("#col-count-cont").hide();
        //    $("#font-setting-cont").hide();
        //    $("#menu-style-cont").hide();
        //    $("#manage_advanced_style").hide();
        //    $(".header-tabs li").removeClass('active');

        //    $(".change_price_colum").removeClass('active');
        //    $("#change_price_colum_1").addClass('active');
        //    $("#col-count-item img").attr('src', '/images/canvasImg/icons/icon-handle.svg');
        //    menu_dispaly_style = 'menu_style_1';
        //    menu_layout = 'vartical';
        //    menu_line_type = 'solid';

        //    var menu_html = '<thead>';

        //    //menu_html += '<tr class="menu-head"><td style="min-width: 60px;"></td><td class="text-heading containtBox" style="min-width: 217px;">Heading & description</td><td style="min-width: 34px;" class="containtBox"></td>';
        //    //menu_html += '<td class="td_price_heading_colum_1" style="padding:0px 5px 0px 0px;"><textarea class="text-heading-price" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:33px;width:80px;color:#000000;background:#FFFFFF;" placeholder="Small"></textarea></td>';
        //    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
        //    //if (column > 1) { style_display = 'padding:0px 5px 0px 0px;'; }
        //    //menu_html += '<td class="td_price_heading_colum_2" ' + style_display + '><textarea class="text-heading-price2" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:33px;width:80px;color:#000000;background:#FFFFFF;" placeholder="Midium"></textarea></td>';
        //    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
        //    //if (column > 2) { style_display = 'padding:0px 5px 0px 0px;'; }
        //    //menu_html += '<td class="td_price_heading_colum_3" ' + style_display + '><textarea class="text-heading-price3" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:33px;width:80px;color:#000000;background:#FFFFFF;" placeholder="Large"></textarea></td>';
        //    //style_display = 'style="display:none;padding:0px 5px 0px 0px;"';
        //    //if (column > 3) { style_display = 'padding:0px 5px 0px 0px;'; }
        //    //menu_html += '<td class="td_price_heading_colum_4" ' + style_display + '><textarea class="text-heading-price4" style="padding-top:5px;padding-bottom:0px;margin-bottom:0px;font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:33px;width:80px;color:#000000;background:#FFFFFF;" placeholder="X-Large"></textarea></td>';

        //    //menu_html += '<td></td></tr><tr><td style="min-width: 60px;"></td>';
        //    //menu_html += '<td style="min-width: 217px;"><div id="drag_div_menu" align="right" style="width:200px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td><td style="min-width: 34px;"></td>';
        //    //menu_html += '<td class="td_price_colum_1" ><div id="drag_div_menu_price" align="right" style="width:98px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';
        //    //style_display = 'style="display:none;"';
        //    //if (column > 1) { style_display = ''; }
        //    //menu_html += '<td class="td_price_colum_2" ' + style_display + '><div id="drag_div_menu_price2" align="right" style="width:80px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';
        //    //style_display = 'style="display:none;"';
        //    //if (column > 2) { style_display = ''; }
        //    //menu_html += '<td class="td_price_colum_3" ' + style_display + '><div id="drag_div_menu_price3" align="right" style="width:80px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';
        //    //style_display = 'style="display:none;"';
        //    //if (column > 3) { style_display = '"'; }
        //    //menu_html += '<td class="td_price_colum_4" ' + style_display + '><div id="drag_div_menu_price4" align="right" style="width:80px;" class="drag_div_menu"><img src="/images/canvasImg/icons/icon-width.png"></div></td>';

        //    //menu_html += '</tr></thead><tbody class="wrap-table scrollbar">';
        //    //menu_html += '<tr style="background-color: #FFF;" class="hover-color"><td class="drag_menu"><img src="/images/canvasImg/icons/icon-handle.png"/></td><td style="padding:2px 5px; min-width:217px;"><textarea class="text-heading" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:38px;width:200px;color:#000000;background:#FFFFFF;" placeholder="Add heading text here">' + data.heading + '</textarea></br><textarea class="sub-heading" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:italic;text-decoration:none;text-align:left;color:#555555;background:#FFFFFF;width:200px;height:36px;" >' + data.sub_heading + '</textarea></td>';
        //    //menu_html += '<td class="bottom-line price-column" valign="top" style="padding-top:22px;padding-right:12px;"><span class="menu-line" style="border-color: #F00000;"></span></td><td valign="top" class="td_price_colum_1" style="padding-top:2px;"><textarea class="price" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:38px;width:80px;color:#000000;background:#FFFFFF;">' + data.price1 + '</textarea></td>';
        //    //style_display = 'style="display:none;padding-top:2px;"';
        //    //if (column > 1) { style_display = 'style="padding-top:2px;"'; }
        //    //menu_html += '<td valign="top" class="td_price_colum_2" ' + style_display + '><textarea class="price2" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:38px;width:80px;color:#000000;background:#FFFFFF;">' + data.price2 + '</textarea></td>';
        //    //style_display = 'style="display:none;padding-top:2px;"';
        //    //if (column > 2) { style_display = 'style="padding-top:2px;"'; }
        //    //menu_html += '<td valign="top" class="td_price_colum_3" ' + style_display + '><textarea class="price3" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:38px;width:80px;color:#000000;background:#FFFFFF;">' + data.price3 + '</textarea></td>';
        //    //style_display = 'style="display:none;padding-top:2px;"';
        //    //if (column > 3) { style_display = 'style="padding-top:2px;"'; }
        //    //menu_html += '<td valign="top" class="td_price_colum_4" ' + style_display + '><textarea class="price4" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:38px;width:80px;color:#000000;background:#FFFFFF;">' + data.price4 + '</textarea></td>';
        //    //menu_html += '<td valign="top"><a class="text_table_remove_row">✖</a></td>';
        //    //menu_html += '</tr></tbody>';


        //    menu_html += '<tr class="menu-head"><th class="" ></th ><th class="text-heading containtBox"></th><th class="containtBox distainsLine"></th>';
        //    menu_html += '<th class="td_price_heading_colum_1 catagoryBox" data-type="Catagory 1"><textarea class="text-heading-price" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="Small"></textarea></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 1) { style_display = ''; }

        //    menu_html += '<th class="td_price_heading_colum_2 catagoryBox" ' + style_display + ' data-type="Catagory 2"><textarea type="text" class="text-heading-price2" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="Midium"></textarea></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 2) { style_display = ''; }

        //    menu_html += '<th class="td_price_heading_colum_3 catagoryBox" ' + style_display + ' data-type="Catagory 3"><textarea type="text" class="text-heading-price3" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="Large"></textarea></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 3) { style_display = ''; }

        //    menu_html += '<th class="td_price_heading_colum_4 catagoryBox" ' + style_display + ' data-type="Catagory 4"><textarea type="text" class="text-heading-price4" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="X-Large"></textarea></th>';
        //    menu_html += '<th class="actionBox"></th></tr > '

        //    menu_html += '<tr><th class="" style="padding: 0 .66rem;"></th >';
        //    menu_html += '<th class="containtBox"><div id="drag_div_menu" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th><th class="distainsLine"></th>';
        //    menu_html += '<th class="td_price_colum_1 catagoryBox"><div id="drag_div_menu_price" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 1) { style_display = ''; }

        //    menu_html += '<th class="td_price_colum_2 catagoryBox" ' + style_display + '><div id="drag_div_menu_price2" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 2) { style_display = ''; }

        //    menu_html += '<th class="td_price_colum_3 catagoryBox" ' + style_display + '><div id="drag_div_menu_price3" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
        //    style_display = 'style="display:none;"';
        //    if (column > 3) { style_display = ''; }

        //    menu_html += '<th class="td_price_colum_4 catagoryBox" ' + style_display + '><div id="drag_div_menu_price4" align="right" style="width:100%;box-sizing: border-box;" class="drag_div_menu"><span>&#x2194;</span></div></th>';
        //    menu_html += '</tr ></thead> ';

        //    menu_html += '<tbody>';

        //    //First Row
        //    menu_html += '<tr><td class="drag_menu rowHandle" > <span><img src="/images/canvasImg/icons/icon-handle.svg" alt=""></span></td >' //
        //    menu_html += '<td class="containtBox" ><input type="hidden" class="text-menu-item-id" value="0" /><textarea class="text-heading headingText" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + data.heading + '</textarea><textarea class="sub-heading addDescription" name="" id="" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:italic;text-decoration:none;text-align:left;height:50px;width:100%;box-sizing: border-box;" placeholder="Add description here. This can be multi-line!">' + data.sub_heading + '</textarea></td > ';
        //    menu_html += '<td class="bottom-line price-column distainsLine"><span class="menu-line line"></span></td><td class="td_price_colum_1 catagoryBox"><textarea class="price" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price1 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 1) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + '><textarea class="price2" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price2 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 2) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + '><textarea class="price3" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price3 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 3) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + '><textarea class="price4" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price4 + '</textarea></td>';
        //    menu_html += '<td class="actionBox"><a class="text_table_remove_row removeRow">✖</a></td>';
        //    menu_html += '</tr>';

        //    //Second Row
        //    menu_html += '<tr><td class="drag_menu rowHandle" > <span><img src="/images/canvasImg/icons/icon-handle.svg" alt=""></span></td >' //
        //    menu_html += '<td class="containtBox" ><input type="hidden" class="text-menu-item-id" value="0" /><textarea class="text-heading headingText" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;" placeholder="Add heading text here">' + data.heading + '</textarea><textarea class="sub-heading addDescription" name="" id="" style="font-family:Helvetica;font-size:14px;font-weight:normal;font-style:italic;text-decoration:none;text-align:left;height:50px;width:100%;box-sizing: border-box;" placeholder="Add description here. This can be multi-line!">' + data.sub_heading + '</textarea></td > ';
        //    menu_html += '<td class="bottom-line price-column distainsLine"><span class="menu-line line"></span></td><td class="td_price_colum_1 catagoryBox"><textarea class="price" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price1 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 1) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_2 catagoryBox" ' + style_display + '><textarea class="price2" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price2 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 2) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_3 catagoryBox" ' + style_display + '><textarea class="price3" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price3 + '</textarea></td>';
        //    style_display = 'style="display:none;"';
        //    if (column > 3) { style_display = ''; }

        //    menu_html += '<td class="td_price_colum_4 catagoryBox" ' + style_display + '><textarea class="price4" style="font-family:Helvetica;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;height:30px;width:100%;box-sizing: border-box;">' + data.price4 + '</textarea></td>';
        //    menu_html += '<td class="actionBox"><a class="text_table_remove_row removeRow">✖</a></td>';
        //    menu_html += '</tr>';

        //    menu_html += '</tbody>';









        //    $("#text_table").empty();
        //    $("#text_table").html(menu_html);
        //    $("#text_table").show();
        //    $("#map_into_canvas").show();
        //    $("#modify_into_canvas").hide();
        //    $("#font-setting-cont").show();
        //    $("#font-setting-item").addClass('active');;

        //    active_edit_menu_count = 1;

            //$("#text_table").rowSorter({
            //    handler: ".drag_menu"
            //});



        //    $("a.text_table_remove_row").click(function () {
        //        textTableDelRow($(this));
        //    });

        //    $("#manage_menu_item").show();
        //    $("#tab_edit").addClass("active");

        //    $('#template_line_height').val(1);
        $('#template_line_height').on('change', function () {
            var template_line_height = this.value;
            Menueditorpropertiessettingupdate();
        });




        //    $("#menu_style_1").click(function () {
        //        menu_dispaly_style = "menu_style_1";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_2").click(function () {
        //        menu_dispaly_style = "menu_style_2";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_3").click(function () {
        //        menu_dispaly_style = "menu_style_3";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_4").click(function () {
        //        menu_dispaly_style = "menu_style_4";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_5").click(function () {
        //        menu_dispaly_style = "menu_style_5";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_6").click(function () {
        //        menu_dispaly_style = "menu_style_6";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_7").click(function () {
        //        menu_dispaly_style = "menu_style_7";
        //        menu_layout = "vartical";
        //    });
        //    $("#menu_style_1_h").click(function () {
        //        menu_dispaly_style = "menu_style_1";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_2_h").click(function () {
        //        menu_dispaly_style = "menu_style_2";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_3_h").click(function () {
        //        menu_dispaly_style = "menu_style_3";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_4_h").click(function () {
        //        menu_dispaly_style = "menu_style_4";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_5_h").click(function () {
        //        menu_dispaly_style = "menu_style_5";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_6_h").click(function () {
        //        menu_dispaly_style = "menu_style_6";
        //        menu_layout = "horizontal";
        //    });
        //    $("#menu_style_7_h").click(function () {
        //        menu_dispaly_style = "menu_style_7";
        //        menu_layout = "horizontal";
        //    });

        //    // New
        //    var drag_div_menu = document.getElementById('drag_div_menu');
        //    drag_div_menu.draggable = true;
        //    drag_div_menu.addEventListener('drag', function (e) {
        //        e.axis = 'x';
        //        e.cursor = 'move';
        //        drag_element(e.offsetX + 20);
        //    });
        //    function drag_element(drag_div_width) {
        //        if (drag_div_width < 0) {
        //            drag_div_width = 0;
        //        }
        //        console.log(drag_div_width);
        //        if (drag_div_width > 210) {
        //            ini_drag_div_menu = drag_div_width;
        //            $("#text_table tbody .text-heading").parent('td').css("width", drag_div_width);
        //            $("#text_table thead .menu-head .text-heading").css("width", drag_div_width);
        //            $("#text_table thead .menu-head +tr .containtBox").css("width", drag_div_width);
        //        }
        //        else {
        //            if (drag_div_width != 0) {
        //                ini_drag_div_menu = 210;
        //            }

        //        }
        //    }

        //    var drag_div_menu_price = document.getElementById('drag_div_menu_price');
        //    drag_div_menu_price.draggable = true;
        //    drag_div_menu_price.addEventListener('drag', function (e) {
        //        e.axis = 'x';
        //        e.cursor = 'move';
        //        drag_element_price(e.offsetX + 20);
        //    });
        //    function drag_element_price(drag_div_price_width) {
        //        if (drag_div_price_width < 0) {
        //            drag_div_price_width = 0;
        //        }
        //        console.log(drag_div_price_width);
        //        if (drag_div_price_width > 100) {
        //            ini_drag_div_menu_price = drag_div_price_width;
        //            $("#text_table .price").parent('td').css("width", drag_div_price_width);
        //            $("#text_table .text-heading-price").parent('th').css("width", drag_div_price_width);
        //            $("#text_table thead .menu-head +tr .td_price_colum_1").css("width", drag_div_price_width);
        //        }
        //        else {
        //            if (drag_div_price_width != 0) {
        //                ini_drag_div_menu_price = 100;
        //            }

        //        }
        //    }

        //    var drag_div_menu_price2 = document.getElementById('drag_div_menu_price2');
        //    drag_div_menu_price2.draggable = true;
        //    drag_div_menu_price2.addEventListener('drag', function (e) {
        //        e.axis = 'x';
        //        e.cursor = 'move';
        //        drag_element_price2(e.offsetX + 20);
        //    });
        //    function drag_element_price2(drag_div_price2_width) {
        //        if (drag_div_price2_width < 0) {
        //            drag_div_price2_width = 0;
        //        }
        //        if (drag_div_price2_width > 100) {
        //            ini_drag_div_menu_price2 = drag_div_price2_width;
        //            $("#text_table .price2").parent('td').css("width", drag_div_price2_width);
        //            $("#text_table .text-heading-price2").parent('th').css("width", drag_div_price2_width);

        //            $("#text_table thead .menu-head +tr .td_price_colum_2").css("width", drag_div_price2_width);
        //        }
        //        else {
        //            if (drag_div_price2_width != 0) {
        //                ini_drag_div_menu_price2 = 100;
        //            }

        //        }
        //    }

        //    var drag_div_menu_price3 = document.getElementById('drag_div_menu_price3');
        //    drag_div_menu_price3.draggable = true;
        //    drag_div_menu_price3.addEventListener('drag', function (e) {
        //        e.axis = 'x';
        //        e.cursor = 'move';
        //        drag_element_price3(e.offsetX + 20);
        //    });
        //    function drag_element_price3(drag_div_price3_width) {
        //        if (drag_div_price3_width < 0) {
        //            drag_div_price3_width = 0;
        //        }
        //        if (drag_div_price3_width > 100) {
        //            ini_drag_div_menu_price3 = drag_div_price3_width;
        //            $("#text_table .price3").parent('td').css("width", drag_div_price3_width);
        //            $("#text_table .text-heading-price3").parent('th').css("width", drag_div_price3_width);

        //            $("#text_table thead .menu-head +tr .td_price_colum_3").css("width", drag_div_price3_width);
        //        }
        //        else {
        //            if (drag_div_price3_width != 0) {
        //                ini_drag_div_menu_price3 = 100;
        //            }

        //        }
        //    }

        //    var drag_div_menu_price4 = document.getElementById('drag_div_menu_price4');
        //    drag_div_menu_price4.draggable = true;
        //    drag_div_menu_price4.addEventListener('drag', function (e) {
        //        e.axis = 'x';
        //        e.cursor = 'move';
        //        drag_element_price4(e.offsetX + 20);
        //    });
        //    function drag_element_price4(drag_div_price4_width) {
        //        if (drag_div_price4_width < 0) {
        //            drag_div_price4_width = 0;
        //        }
        //        if (drag_div_price4_width > 100) {
        //            ini_drag_div_menu_price4 = drag_div_price4_width;
        //            $("#text_table .price4").parent('td').css("width", drag_div_price4_width);
        //            $("#text_table .text-heading-price4").parent('th').css("width", drag_div_price4_width);
        //            $("#text_table thead .menu-head +tr .td_price_colum_4").css("width", drag_div_price4_width);
        //        }
        //        else {
        //            if (drag_div_price4_width != 0) {
        //                ini_drag_div_menu_price4 = 100;
        //            }

        //        }
        //    }


        //    //drag_div_menu.addEventListener('stop', function (e) {
        //    //    e.axis = 'x';
        //    //    e.cursor = 'move';
        //    //    drag_element_stop(e.offsetX + 20);
        //    //});

        //    //// end

        //    ////$("#drag_div_menu").draggable({
        //    //    axis: "x",
        //    //    cursor: "move",
        //    //    drag: function () {
        //    //        drag_element();
        //    //    },
        //    //    stop: function () {

        //    //        var drag_div_left_width = $("#drag_div_menu").css("left").replace('px', '');
        //    //        var drag_div_right_width = $("#drag_div_menu").width();
        //    //        var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
        //    //        if (drag_div_width < 250) {
        //    //            $("#drag_div_menu").css({ "left": "0px" });
        //    //            $("#drag_div_menu").css({ "width": "100%" });
        //    //        } else {
        //    //            $("#drag_div_menu").css({ "left": "0px" });

        //    //        }
        //    //    }
        //    //});

        //    //function drag_element(drag_div_width) {
        //    //    //console.log("drage");
        //    //    //var drag_div_left_width = $("#drag_div_menu").css("left").replace('px', '');
        //    //    //var drag_div_right_width = $("#drag_div_menu").width();
        //    //    if (drag_div_width < 0) {
        //    //        drag_div_width = 0;
        //    //    }
        //    //    //var drag_div_width = /*parseInt(drag_div_left_width) + parseInt(drag_div_right_width) +*/ div_w;

        //    //    console.log(drag_div_width);

        //    //    if (drag_div_width > 210) {
        //    //        //$("#text_table .text-heading").css("width", drag_div_width);
        //    //        $("#text_table tbody .text-heading").parent('td').css("width", drag_div_width);

        //    //        //$("#text_table thead .menu-head .text-heading").parent('th').css("width", drag_div_width);
        //    //        $("#text_table thead .menu-head .text-heading").css("width", drag_div_width);
        //    //        $("#text_table thead .menu-head +tr .containtBox").css("width", drag_div_width);


        //    //        //$("#text_table .sub-heading").css("width", drag_div_width);
        //    //    }
        //    //}
        //    //function drag_element_stop(drag_div_width) {
        //    //        //     var drag_div_left_width = $("#drag_div_menu").css("left").replace('px', '');
        //    //        //var drag_div_right_width = $("#drag_div_menu").width();
        //    //        //var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
        //    //        if (drag_div_width < 210) {
        //    //            $("#drag_div_menu").css({ "left": "0px" });
        //    //            $("#drag_div_menu").css({ "width": "100%" });
        //    //        } else {
        //    //            $("#drag_div_menu").css({ "left": "0px" });
        //    //        }
        //    //}

        //    //$("#drag_div_menu_price").draggable({
        //    //    axis: "x",
        //    //    cursor: "move",
        //    //    drag: function () {
        //    //        drag_element_price();
        //    //    },
        //    //    stop: function () {
        //    //        var drag_div_price_left_width = $("#drag_div_menu_price").css("left").replace('px', '');
        //    //        var drag_div_price_right_width = $("#drag_div_menu_price").width();
        //    //        var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
        //    //        if (drag_div_price_width < 100) {
        //    //            $("#drag_div_menu_price").css({
        //    //                "left": "0px",
        //    //                "width": "100px"
        //    //            });
        //    //        } else {
        //    //            $("#drag_div_menu_price").css({ "left": "0px" });
        //    //            //$("#drag_div_menu").css({ "width":( drag_div_width - 20) + "px" });
        //    //        }
        //    //    }
        //    //});

        //    //function drag_element_price() {
        //    //    var drag_div_price_left_width = $("#drag_div_menu_price").css("left").replace('px', '');
        //    //    var drag_div_price_right_width = $("#drag_div_menu_price").width();
        //    //    var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
        //    //    console.log(drag_div_price_width);
        //    //    if (drag_div_price_width > 100) {
        //    //        $("#text_table .price").parent('td').css("width", drag_div_price_width);
        //    //        $("#text_table .text-heading-price").parent('th').css("width", drag_div_price_width);

        //    //        $("#text_table thead .menu-head +tr .td_price_colum_1").css("width", drag_div_price_width);

        //    //    }
        //    //}
        //    //$("#drag_div_menu_price2").draggable({
        //    //    axis: "x",
        //    //    cursor: "move",
        //    //    drag: function () {
        //    //        drag_element_price2();
        //    //    },
        //    //    stop: function () {
        //    //        var drag_div_price2_left_width = $("#drag_div_menu_price2").css("left").replace('px', '');
        //    //        var drag_div_price2_right_width = $("#drag_div_menu_price2").width();
        //    //        var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
        //    //        if (drag_div_price2_width < 100) {
        //    //            $("#drag_div_menu_price2").css({ "left": "0px" });
        //    //            $("#drag_div_menu_price2").css({ "width": "100px" });
        //    //        } else {
        //    //            $("#drag_div_menu_price2").css({ "left": "0px" });
        //    //            //$("#drag_div_menu").css({ "width":( drag_div_width - 20) + "px" });
        //    //        }
        //    //    }
        //    //});
        //    //function drag_element_price2() {
        //    //    var drag_div_price2_left_width = $("#drag_div_menu_price2").css("left").replace('px', '');
        //    //    var drag_div_price2_right_width = $("#drag_div_menu_price2").width();
        //    //    var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
        //    //    if (drag_div_price2_width > 100) {
        //    //        $("#text_table .price2").parent('td').css("width", drag_div_price2_width);
        //    //        $("#text_table .text-heading-price2").parent('th').css("width", drag_div_price2_width);

        //    //        $("#text_table thead .menu-head +tr .td_price_colum_2").css("width", drag_div_price2_width);
        //    //    }
        //    //}
        //    //$("#drag_div_menu_price3").draggable({
        //    //    axis: "x",
        //    //    cursor: "move",
        //    //    drag: function () {
        //    //        drag_element_price3();
        //    //    },
        //    //    stop: function () {
        //    //        var drag_div_price3_left_width = $("#drag_div_menu_price3").css("left").replace('px', '');
        //    //        var drag_div_price3_right_width = $("#drag_div_menu_price3").width();
        //    //        var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
        //    //        if (drag_div_price3_width < 100) {
        //    //            $("#drag_div_menu_price3").css({ "left": "0px" });
        //    //            $("#drag_div_menu_price3").css({ "width": "100px" });
        //    //        } else {
        //    //            $("#drag_div_menu_price3").css({ "left": "0px" });
        //    //            //$("#drag_div_menu").css({ "width":( drag_div_width - 20) + "px" });
        //    //        }
        //    //    }
        //    //});
        //    //function drag_element_price3() {
        //    //    var drag_div_price3_left_width = $("#drag_div_menu_price3").css("left").replace('px', '');
        //    //    var drag_div_price3_right_width = $("#drag_div_menu_price3").width();
        //    //    var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
        //    //    if (drag_div_price3_width > 100) {
        //    //        $("#text_table .price3").parent('td').css("width", drag_div_price3_width);
        //    //        $("#text_table .text-heading-price3").parent('th').css("width", drag_div_price3_width);

        //    //        $("#text_table thead .menu-head +tr .td_price_colum_3").css("width", drag_div_price3_width);
        //    //    }
        //    //}
        //    //$("#drag_div_menu_price4").draggable({
        //    //    axis: "x",
        //    //    cursor: "move",
        //    //    drag: function () {
        //    //        drag_element_price4();
        //    //    },
        //    //    stop: function () {
        //    //        var drag_div_price4_left_width = $("#drag_div_menu_price4").css("left").replace('px', '');
        //    //        var drag_div_price4_right_width = $("#drag_div_menu_price4").width();
        //    //        var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
        //    //        if (drag_div_price4_width < 100) {
        //    //            $("#drag_div_menu_price4").css({ "left": "0px" });
        //    //            $("#drag_div_menu_price4").css({ "width": "100px" });
        //    //        } else {
        //    //            $("#drag_div_menu_price4").css({ "left": "0px" });
        //    //            //$("#drag_div_menu").css({ "width":( drag_div_width - 20) + "px" });
        //    //        }
        //    //    }
        //    //});
        //    //function drag_element_price4() {
        //    //    var drag_div_price4_left_width = $("#drag_div_menu_price4").css("left").replace('px', '');
        //    //    var drag_div_price4_right_width = $("#drag_div_menu_price4").width();
        //    //    var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
        //    //    if (drag_div_price4_width > 100) {
        //    //        $("#text_table .price4").parent('td').css("width", drag_div_price4_width);
        //    //        $("#text_table .text-heading-price4").parent('th').css("width", drag_div_price4_width);

        //    //        $("#text_table thead .menu-head +tr .td_price_colum_4").css("width", drag_div_price4_width);
        //    //    }
        //    //}

        //    document.getElementById("map_into_canvas").onclick = function () {
        //        menu_edit_flag = false;
        //        var text_gr = createMenuObject(column_menu, '');

        //        $("table#text_table tbody").html("");
        //        $("table#text_table tbody").html("");
        //        $("#text_table").hide();
        //        $("#manage_menu_item").hide();

        //        // adding the group text_gr to the canvas
        //        //text_gr.scale(multiplier_ratio * 1.92);
        //        var currentGroupScale = parseInt($('#slider_scale').val(), 10) / 100;
        //        text_gr.scale(currentGroupScale);

        //        text_gr.name = 'template' + column_menu;
        //        text_gr.lockUniScaling = true;
        //        text_gr.top = 50;
        //        text_gr.left = 200;

        //        pushUndo();
        //        canvas.add(text_gr);
        //        canvas.renderAll();
        //        canvas.calcOffset();


        //        $('.pop_container').hide();
        //        //$("#menu_format_edit_box").hide();
        //    }

        document.getElementById("text_table_add_row").onclick = function () {
            textTableAddRow(false);
        }
        $("a.text_table_remove_row").click(function () {
            textTableDelRow($(this));
        });

        document.getElementById("is_menu_line_color").onclick = function () {
            Menueditorpropertiessettingupdate();
        }

        //    //setTimeout(function () {
        //    //    $('textarea.sub-heading').autosize();
        //    //    //autosize($('textarea.sub-heading'));
        //    //$('textarea.text-heading').autosize();
        //    //$('textarea.text-heading-price').autosize();
        //    //$('textarea.price').autosize();
        //    //$('textarea.text-heading-price2').autosize();
        //    //$('textarea.price2').autosize();
        //    //$('textarea.text-heading-price3').autosize();
        //    //$('textarea.price3').autosize();
        //    //$('textarea.text-heading-price4').autosize();
        //    //$('textarea.price4').autosize();
        //    //}, 500);
        //    loadTextGroupFormatModifier(column);
        //}

        window.changePriceColumn = function changePriceColumn(column) {
            $(".change_price_colum").removeClass('btn-active');
            $("#change_price_colum_" + column).addClass('btn-active');
        //    //$("#col-count-item img").attr('src', 'img/canvas/ico-' + column + 'x.png');
            if (column == 1) {
                $('.td_price_heading_colum_2').hide();
                $('.td_price_colum_2').hide();
                $('.td_price_heading_colum_3').hide();
                $('.td_price_colum_3').hide();
                $('.td_price_heading_colum_4').hide();
                $('.td_price_colum_4').hide();
                $('.td_price_heading_colum_1').show();
                $('.td_price_colum_1').show();

                // Advanced
                $("#div_advance_price2").hide();
                $("#div_advance_price3").hide();
                $("#div_advance_price4").hide();

                $("#div_menu_editor_menu_price2").hide();
                $("#div_menu_editor_menu_price3").hide();
                $("#div_menu_editor_menu_price4").hide();
                $("#div_menu_editor_menu_price2_heading").hide();
                $("#div_menu_editor_menu_price3_heading").hide();
                $("#div_menu_editor_menu_price4_heading").hide();
            }
            if (column == 2) {
                $('.td_price_heading_colum_3').hide();
                $('.td_price_colum_3').hide();
                $('.td_price_heading_colum_4').hide();
                $('.td_price_colum_4').hide();
                $('.td_price_heading_colum_1').show();
                $('.td_price_colum_1').show();
                $('.td_price_heading_colum_2').show();
                $('.td_price_colum_2').show();

                // Advanced
                $("#div_advance_price2").show();
                $("#div_advance_price3").hide();
                $("#div_advance_price4").hide();
                $("#div_menu_editor_menu_price2").show();
                $("#div_menu_editor_menu_price3").hide();
                $("#div_menu_editor_menu_price4").hide();
                $("#div_menu_editor_menu_price2_heading").show();
                $("#div_menu_editor_menu_price3_heading").hide();
                $("#div_menu_editor_menu_price4_heading").hide();
            }
            if (column == 3) {
                $('.td_price_heading_colum_4').hide();
                $('.td_price_colum_4').hide();
                $('.td_price_heading_colum_1').show();
                $('.td_price_colum_1').show();
                $('.td_price_heading_colum_2').show();
                $('.td_price_colum_2').show();
                $('.td_price_heading_colum_3').show();
                $('.td_price_colum_3').show();

                // Advanced
                $("#div_advance_price2").show();
                $("#div_advance_price3").show();
                $("#div_advance_price4").hide();
                $("#div_menu_editor_menu_price2").show();
                $("#div_menu_editor_menu_price3").show();
                $("#div_menu_editor_menu_price4").hide();
                $("#div_menu_editor_menu_price2_heading").show();
                $("#div_menu_editor_menu_price3_heading").show();
                $("#div_menu_editor_menu_price4_heading").hide();
            }
            if (column == 4) {
                $('.td_price_heading_colum_1').show();
                $('.td_price_colum_1').show();
                $('.td_price_heading_colum_2').show();
                $('.td_price_colum_2').show();
                $('.td_price_heading_colum_3').show();
                $('.td_price_colum_3').show();
                $('.td_price_heading_colum_4').show();
                $('.td_price_colum_4').show();

                // Advanced
                $("#div_advance_price2").show();
                $("#div_advance_price3").show();
                $("#div_advance_price4").show();
                $("#div_menu_editor_menu_price2").show();
                $("#div_menu_editor_menu_price3").show();
                $("#div_menu_editor_menu_price4").show();
                $("#div_menu_editor_menu_price2_heading").show();
                $("#div_menu_editor_menu_price3_heading").show();
                $("#div_menu_editor_menu_price4_heading").show();
            }
            column_menu = column;
            loadTextGroupFormatModifier(column);
            $('#set_canvas_menu').show();
        }

        function createMenuObject(column, CustomID) { //sunil
            //var drag_div_left_width = 0;// $("#drag_div_menu").css("left").replace('px', '');
            //var drag_div_right_width = $("#drag_div_menu").width();
            //ini_drag_div_menu = drag_div_right_width;
            //var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
            //var drag_div_price_left_width = 0;// $("#drag_div_menu_price").css("left").replace('px', '');
            //var drag_div_price_right_width = $("#drag_div_menu_price").width();
            //ini_drag_div_menu_price = drag_div_price_right_width;//
            //var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
            //var drag_div_price2_left_width = 0;// $("#drag_div_menu_price2").css("left").replace('px', '');
            //var drag_div_price2_right_width = $("#drag_div_menu_price2").width();
            //ini_drag_div_menu_price2 = drag_div_price2_right_width;//
            //var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
            //var drag_div_price3_left_width = 0;// $("#drag_div_menu_price3").css("left").replace('px', '');
            //var drag_div_price3_right_width = $("#drag_div_menu_price3").width();
            //ini_drag_div_menu_price3 = drag_div_price3_right_width;//
            //var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
            //var drag_div_price4_left_width = 0;// $("#drag_div_menu_price4").css("left").replace('px', '');
            //var drag_div_price4_right_width = $("#drag_div_menu_price4").width();
            //ini_drag_div_menu_price4 = drag_div_price4_right_width;//
            //var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);

            var drag_div_left_width = 0;// $("#drag_div_menu").css("left").replace('px', '');
            var drag_div_right_width = ini_drag_div_menu;// $("#drag_div_menu").width();
            var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
            var drag_div_price_left_width = 0;// $("#drag_div_menu_price").css("left").replace('px', '');
            var drag_div_price_right_width = ini_drag_div_menu_price;// $("#drag_div_menu_price").width();
            var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
            var drag_div_price2_left_width = 0;// $("#drag_div_menu_price2").css("left").replace('px', '');
            var drag_div_price2_right_width = ini_drag_div_menu_price2;//$("#drag_div_menu_price2").width();
            var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
            var drag_div_price3_left_width = 0;// $("#drag_div_menu_price3").css("left").replace('px', '');
            var drag_div_price3_right_width = ini_drag_div_menu_price3;//$("#drag_div_menu_price3").width();
            var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
            var drag_div_price4_left_width = 0;// $("#drag_div_menu_price4").css("left").replace('px', '');
            var drag_div_price4_right_width = ini_drag_div_menu_price4;//$("#drag_div_menu_price4").width();
            var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);


            var menu_objects_heading = '';
            var menu_objects_sub_heading = '';
            var menu_objects_item_id = '';
            var menu_token = Math.floor(Math.random() * (999 - 100 + 1) + 100);
            if (!CustomID) {
                CustomID = Date.now() + menu_token;
            }

            var text_gr = new fabric.Group(),
                offset = {
                    top: 10,
                    left: 10
                },
                top = offset.top,
                left = offset.left,
                menuItemidObjs = [],
                headingObjs = [],
                bottomLineObjs = [],
                headingpriceObjs = [],
                headingpriceObjs2 = [],
                headingpriceObjs3 = [],
                headingpriceObjs4 = [],
                priceObjs = [],
                priceObjs2 = [],
                priceObjs3 = [],
                priceObjs4 = [],
                subHeadingObjs = [],
                noChar = '',
                text_width = 5,
                price_width = 5,
                name = 'template1';
            text_orientation = 'left';
            $(".text-menu-item-id").each(function (i, e) {
                menuItemidObjs[i] = e;
            });

            $("textarea.text-heading").each(function (i, e) {
                headingObjs[i] = e;
            });

            $("td.bottom-line .menu-line").each(function (i, e) {
                bottomLineObjs[i] = e;
            });
            $("textarea.text-heading-price").each(function (i, e) {
                headingpriceObjs[i] = e;
            });
            $("textarea.price").each(function (i, e) {
                priceObjs[i] = e;
            });

            $("textarea.text-heading-price2").each(function (i, e) {
                headingpriceObjs2[i] = e;
            });
            $("textarea.price2").each(function (i, e) {
                priceObjs2[i] = e;
            });

            $("textarea.text-heading-price3").each(function (i, e) {
                headingpriceObjs3[i] = e;
            });
            $("textarea.price3").each(function (i, e) {
                priceObjs3[i] = e;
            });

            $("textarea.text-heading-price4").each(function (i, e) {
                headingpriceObjs4[i] = e;
            });
            $("textarea.price4").each(function (i, e) {
                priceObjs4[i] = e;
            });

            $("textarea.sub-heading").each(function (i, e) {
                subHeadingObjs[i] = e;
            });

            menu_layout = $("input[name='menu_layout']:checked").val();
            if (menu_layout != "horizontal") {
                menu_layout = "vartical";
            }

            menu_line_type = $("input[name='menu_line_type']:checked").val();
            if (menu_line_type != "dotted") {
                menu_line_type = "solid";
            }
            //console.log(menu_layout);

            if (menu_dispaly_style == "menu_style_1") {
                var array_menu_style_sequency = ["heading_style1", "line_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "subheading_style1", "new_menu", "menu_item_id"];
            }
            if (menu_dispaly_style == "menu_style_2") {
                var array_menu_style_sequency = ["heading_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "line_style2", "subheading_style1", "new_menu", "menu_item_id"];
            }
            if (menu_dispaly_style == "menu_style_4") {
                var array_menu_style_sequency = ["heading_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "subheading_style1", "line_style4", "new_menu", "menu_item_id"];
            }
            if (menu_dispaly_style == "menu_style_3") {
                var array_menu_style_sequency = ["heading_style1", "subheading_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "line_style3", "new_menu", "menu_item_id"];
                var text_orientation = 'center';
            }
            if (menu_dispaly_style == "menu_style_5") {
                var array_menu_style_sequency = ["heading_style1", "line_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "subheading_style1", "new_menu", "menu_item_id"];
            }
            if (menu_dispaly_style == "menu_style_6") {
                var array_menu_style_sequency = ["heading_style1", "subheading_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "line_style5", "new_menu", "menu_item_id"];
            }
            if (menu_dispaly_style == "menu_style_7") {
                var array_menu_style_sequency = ["heading_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "subheading_style1", "line_style5", "new_menu", "menu_item_id"];
            }


            for (var i = 0; i < headingObjs.length; i++) {
                var menuItemid = menuItemidObjs[i];
                var heading = headingObjs[i];
                var bottomLine = bottomLineObjs[i];
                var headingprice = headingpriceObjs[0];
                var headingprice2 = headingpriceObjs2[0];
                var headingprice3 = headingpriceObjs3[0];
                var headingprice4 = headingpriceObjs4[0];
                var price = priceObjs[i];
                var price2 = priceObjs2[i];
                var price3 = priceObjs3[i];
                var price4 = priceObjs4[i];
                var subHeading = subHeadingObjs[i];

                var d_menuitemid = "";
                var d_heading = "";
                var d_sub_heading = "";
                var d_price_1 = "";
                var d_price_2 = "";
                var d_price_3 = "";
                var d_price_4 = "";
                var price_top = '';
                var price_left = '';
                var price_add_index = 0;
                var empty_heading = 0;
                var menu_heading_last_line_left = 0;
                var menu_heading_last_line_top = 0;

                if ($(heading).val().length <= 0) {
                    $(heading).val(' ');
                    empty_heading = 1;
                }

                var top_heading_pading_fix = 0;
                var top_heading_pading_fix_middle = 0;
                var top_subheading_pading_fix = 0;
                var top_subheading_pading_fix_middle = 0;
                var top_line_pading_fix = 0;
                var left_pricing_padding_fix = 0;
                var left_pricing_heading_padding_fix = 0;

                //Old
                //if ($('#advanced_style_heading .bg_show')[0].checked ||
                //    $('#advanced_style_price1 .bg_show')[0].checked ||
                //    $('#advanced_style_price2 .bg_show')[0].checked ||
                //    $('#advanced_style_price3 .bg_show')[0].checked ||
                //    $('#advanced_style_price4 .bg_show')[0].checked) {

                //    top_heading_pading_fix = 4;
                //    top_heading_pading_fix_middle = 2;
                //    top_line_pading_fix = 3;
                //    left_pricing_padding_fix = 4;
                //    left_pricing_heading_padding_fix = 4;

                //    if (menu_dispaly_style == "menu_style_7") {
                //        top_heading_pading_fix = 0;
                //    }
                //}

                //Added by Sunil new
                if ($('#advance_heading_bg_fill_color').checked ||
                    $('#advance_price1_bg_fill_color').checked) {

                    top_heading_pading_fix = 4;
                    top_heading_pading_fix_middle = 2;
                    top_line_pading_fix = 3;
                    left_pricing_padding_fix = 4;
                    left_pricing_heading_padding_fix = 4;

                    if (menu_dispaly_style == "menu_style_7") {
                        top_heading_pading_fix = 0;
                    }
                }

                //old
                //if ($('#advanced_style_description .bg_show')[0].checked) {
                //    top_subheading_pading_fix = 3;
                //    top_subheading_pading_fix_middle = 0;
                //    top_line_pading_fix = 3;
                //}

                //added by sunil new
                if ($('#advance_description_bg_fill_color').checked) {
                    top_subheading_pading_fix = 3;
                    top_subheading_pading_fix_middle = 0;
                    top_line_pading_fix = 3;
                }

                // Old
                //if ($('#advanced_style_heading .bg_stroke_show')[0].checked ||
                //    $('#advanced_style_price1 .bg_stroke_show')[0].checked ||
                //    $('#advanced_style_price2 .bg_stroke_show')[0].checked ||
                //    $('#advanced_style_price3 .bg_stroke_show')[0].checked ||
                //    $('#advanced_style_price4 .bg_stroke_show')[0].checked) {

                //    top_heading_pading_fix = 6;
                //    top_heading_pading_fix_middle = 6;
                //    top_line_pading_fix = 3;
                //    left_pricing_padding_fix = 4;
                //    left_pricing_heading_padding_fix = 4;

                //    if (menu_dispaly_style == "menu_style_7") {
                //        top_heading_pading_fix = 0;
                //    }
                //}

                //added by sunil new
                if ($('#advance_heading_bg_stroke_show').checked ||
                    $('#advance_price1_bg_stroke_show').checked) {

                    top_heading_pading_fix = 6;
                    top_heading_pading_fix_middle = 6;
                    top_line_pading_fix = 3;
                    left_pricing_padding_fix = 4;
                    left_pricing_heading_padding_fix = 4;

                    if (menu_dispaly_style == "menu_style_7") {
                        top_heading_pading_fix = 0;
                    }
                }

                //old
                //if ($('#advanced_style_description .bg_stroke_show')[0].checked) {
                //    top_subheading_pading_fix = 4;
                //    top_subheading_pading_fix_middle = 3;
                //    top_line_pading_fix = 3;
                //}

                //added by sunil new
                if ($('#advance_description_bg_stroke_show').checked) {
                    top_subheading_pading_fix = 4;
                    top_subheading_pading_fix_middle = 3;
                    top_line_pading_fix = 3;
                }

                var price_height = 0;
                var price_height_falg = true;
                
                for (var si = 0; si < array_menu_style_sequency.length; si++) {
                    var item_action = array_menu_style_sequency[si];
                    //console.log(item_action);
                    switch (item_action) {
                        case "heading_style1": {
                            if (menu_layout == "vartical") {
                                left = offset.left;
                            }
                            else {
                                offset.left = text_gr.width;
                                if (i > 0) {
                                    offset.left = text_gr.width + 5;
                                }
                                left = offset.left;
                                top = offset.top;
                            }

                            if ($(heading).val().length > 0) {
                                d_heading = $(heading).val();
                                menu_objects_heading += d_heading + "*,*";
                                noChar = Math.ceil(drag_div_width / ($(heading).css('font-size').replace('px', '') * array_font[$(heading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                var description = breakLines($(heading).val(), noChar);
                                var description_arr = description.split("\n");
                                for (var j = 0; j < description_arr.length; j++) {
                                    //_menuheaderLine++;
                                    if (empty_heading != 1) {
                                        if (j == 0) {
                                            top += top_heading_pading_fix;
                                        }
                                        else {
                                            top += top_heading_pading_fix_middle;
                                        }
                                    }
                                    //console.log($(heading).css('text-decoration').substring(0, 4));

                                    var tableText = new fabric.Text(description_arr[j], {

                                        name: 'heading',
                                        menuItemid: menuItemid.value,
                                        menutotalLine: description_arr.length,
                                        menuLineno: j + 1 ,
                                        fontFamily: $(heading).css('font-family').replace(/("|')/g, ''),
                                        fontSize: $(heading).css('font-size').replace('px', ''),
                                        angle: 0,
                                        fill: $(heading).css('color'),
                                        fontWeight: $(heading).css('font-weight'),
                                        fontStyle: $(heading).css('font-style'),
                                        textDecoration: ($(heading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                        textAlign: $(heading).css('text-align'),
                                        originX: text_orientation,
                                        cornersize: 10,
                                        top: top,
                                        left: left,
                                        hasBorders: false
                                    });
                                    if (j == 0) {
                                        var lineTop = top;
                                        text_width = tableText.width;
                                    }
                                    text_gr.addWithUpdate(tableText);

                                    menu_heading_last_line_left = tableText.width;
                                    menu_heading_last_line_top = top;

                                    if ((menu_dispaly_style == "menu_style_3" || menu_dispaly_style == "menu_style_6") && empty_heading == 1) {
                                        //
                                    }
                                    else {
                                        top += parseInt($('#template_line_height').val()) + (parseInt($(heading).css('font-size').replace('px', '')) * array_font[$(heading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(heading).css('font-size').replace('px', '')) * array_font[$(heading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;
                                    }
                                }
                                left += drag_div_width;
                                top += 3;
                            }
                        }
                            break;
                        case "subheading_style1": {

                            // insertion of each Sub-Heading / Description text into text_gr group
                            if ($(subHeading).val().length > 0) {
                                d_sub_heading = $(subHeading).val();
                                menu_objects_sub_heading += d_sub_heading + "*,*";
                                if ($(subHeading).css('font-family') == "undefined")
                                    $(subHeading).css('font-family', 'Helvetica');

                                if (menu_dispaly_style == "menu_style_1") {
                                    noChar = Math.ceil((drag_div_width) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_2") {
                                    noChar = Math.ceil((drag_div_width + drag_div_price_width + 28) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_3") {
                                    noChar = Math.ceil((drag_div_width) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_4") {
                                    noChar = Math.ceil((drag_div_width + drag_div_price_width + 28) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_5") {
                                    noChar = Math.ceil((drag_div_width + drag_div_price_width + 28) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_6") {
                                    noChar = Math.ceil((drag_div_width) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }
                                if (menu_dispaly_style == "menu_style_7") {
                                    noChar = Math.ceil((drag_div_width) / ($(subHeading).css('font-size').replace('px', '') * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioWidth"]));
                                }

                                left = offset.left;
                                var description = breakLines($(subHeading).val(), noChar);
                                var description_arr = description.split("\n");
                                for (var j = 0; j < description_arr.length; j++) {
                                    if (j == 0) {
                                        top += top_subheading_pading_fix;
                                    }
                                    else {
                                        top += top_subheading_pading_fix_middle;
                                    }
                                    //_menusubheaderLine++;
                                    text_gr.addWithUpdate(new fabric.Text(description_arr[j], {
                                        name: 'subheading',
                                        menuItemid: menuItemid.value,
                                        menutotalLine: description_arr.length,
                                        menuLineno: j + 1,
                                        fontFamily: $(subHeading).css('font-family').replace(/("|')/g, ''),
                                        fontSize: $(subHeading).css('font-size').replace('px', ''),
                                        angle: 0,
                                        fill: $(subHeading).css('color'),
                                        fontWeight: $(subHeading).css('font-weight'),
                                        fontStyle: $(subHeading).css('font-style'),
                                        textDecoration: ($(subHeading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                        textAlign: $(subHeading).css('text-align'),
                                        originX: text_orientation,
                                        cornersize: 10,
                                        left: left,
                                        top: top,
                                        hasBorders: false
                                    }));
                                    top += parseInt($('#template_line_height').val()) + (parseInt($(subHeading).css('font-size').replace('px', '')) * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(subHeading).css('font-size').replace('px', '')) * array_font[$(subHeading).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;

                                }
                                top += 3;
                                if (menu_dispaly_style == "menu_style_2") {
                                    top += 7;
                                }
                                if (menu_dispaly_style == "menu_style_4") {
                                    top += 7;
                                }
                                //top += top_subheading_pading_fix;
                            }
                            else {
                                left = offset.left;
                                if (menu_dispaly_style == "menu_style_4") {
                                    top += 7;
                                }
                            }
                        }
                            break;
                        case "price_style": {
                            price_add_index++;
                            left += 7;
                            if ((menu_dispaly_style == "menu_style_3")) {
                                if ($(price).val() != "") {
                                    price_top = top;
                                    top += parseInt($('#template_line_height').val()) + (parseInt($(price).css('font-size').replace('px', '')) * array_font[$(price).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(price).css('font-size').replace('px', '')) * array_font[$(price).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;
                                    price_left = offset.left;
                                }
                            }
                            else if (menu_dispaly_style == "menu_style_6") {
                                price_left = offset.left;
                                price_top = top;
                                price_height = parseInt($('#template_line_height').val()) + (parseInt($(price).css('font-size').replace('px', '')) * array_font[$(price).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(price).css('font-size').replace('px', '')) * array_font[$(price).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;

                                if ($(price).val() != "" && menu_dispaly_style == "menu_style_6" && price_height_falg == true) {
                                    price_height_falg = false;
                                    top = price_height + top;
                                }
                            }
                            else if (menu_dispaly_style == "menu_style_7") {
                                price_left = offset.left + menu_heading_last_line_left + left_pricing_padding_fix;
                                if (menu_heading_last_line_left > 0) {
                                    price_left = price_left + 10;
                                }
                                price_top = menu_heading_last_line_top;
                            }
                            else {
                                price_top = lineTop;
                                price_left = left;
                            }

                            // insertion of each heading Price text into text_gr group
                            var table_heading = new fabric.Text($(headingprice).val(), {
                                name: 'headingprice',
                                fontFamily: $(headingprice).css('font-family').replace(/("|')/g, ''),
                                fontSize: $(headingprice).css('font-size').replace('px', ''),
                                angle: 0,
                                fill: $(headingprice).css('color'),
                                fontWeight: $(headingprice).css('font-weight'),
                                fontStyle: $(headingprice).css('font-style'),
                                textDecoration: ($(headingprice).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                textAlign: $(headingprice).css('text-align'),
                                originX: text_orientation,
                                cornersize: 10,
                                opacity: 1,
                                hasBorders: false
                            });
                            var opacity = 100;
                            if (menu_dispaly_style == "menu_style_3") {
                                //var opacity = 0;
                            }
                            else if (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7") {
                                var marge_padding = 0;
                                if ($(price).val() == "") {
                                    table_heading.opacity = 0;
                                }
                                if ($(headingprice).val() != "") {
                                    marge_padding = 5;
                                }
                                table_heading.top = price_top;
                                table_heading.left = price_left;
                                text_gr.addWithUpdate(table_heading);
                                if ($(price).val() != "") {
                                    price_left = price_left + table_heading.width + marge_padding;
                                }
                            }
                            else if (i == 0) {
                                table_heading.top = offset.top - 20 - parseInt($('#template_line_height').val());
                                table_heading.left = left;
                                text_gr.addWithUpdate(table_heading);
                            }

                            if ($(headingprice).val() != "") {
                                price_left += left_pricing_heading_padding_fix;
                            }
                            // insertion of each Price text into text_gr group
                            d_price_1 = $(price).val();
                            var tableText = new fabric.Text($(price).val(), {
                                name: 'price',
                                menuItemid: menuItemid.value,
                                fontFamily: $(price).css('font-family').replace(/("|')/g, ''),
                                fontSize: $(price).css('font-size').replace('px', ''),
                                angle: 0,
                                fill: $(price).css('color'),
                                fontWeight: $(price).css('font-weight'),
                                fontStyle: $(price).css('font-style'),
                                textDecoration: ($(price).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                textAlign: $(price).css('text-align'),
                                originX: text_orientation,
                                cornersize: 10,
                                top: price_top,
                                left: price_left,
                                hasBorders: false
                            });

                            if (menu_dispaly_style == "menu_style_3") {
                                var marge_padding = 0;
                                if ($(price).val() == "") {
                                    table_heading.opacity = 0;
                                }
                                if ($(headingprice).val() != "") {
                                    marge_padding = 10;
                                }
                                var temp_width = (drag_div_width - 30 - (table_heading.width + tableText.width + marge_padding)) / 2;
                                table_heading.top = price_top;
                                table_heading.left = price_left - drag_div_width / 2 + 15 + temp_width;
                                table_heading.originX = "left";
                                text_gr.addWithUpdate(table_heading);

                                tableText.top = price_top;
                                tableText.left = price_left - drag_div_width / 2 + 15 + temp_width + table_heading.width + marge_padding;
                                tableText.originX = "left";
                                text_gr.addWithUpdate(tableText);
                            }
                            else {
                                text_gr.addWithUpdate(tableText);
                            }

                            if ($(price).val() != "" && (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7")) {
                                price_left = price_left + tableText.width + 10;
                            }

                            if (menu_dispaly_style == "menu_style_1" || menu_dispaly_style == "menu_style_2" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_5") {
                                left += drag_div_price_width;
                            }
                            var line_style4_width = left;
                        }
                            break;
                        case "price2_style2": {
                            if (column > 1) {
                                price_add_index++;
                                if ((menu_dispaly_style == "menu_style_3")) {
                                    if ($(price2).val() != "") {
                                        price_top = top;
                                        top += parseInt($('#template_line_height').val()) + (parseInt($(price2).css('font-size').replace('px', '')) * array_font[$(price2).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(price2).css('font-size').replace('px', '')) * array_font[$(price2).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;
                                        price_left = offset.left;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_6") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = price_top;
                                    if ($(price2).val() != "" && menu_dispaly_style == "menu_style_6" && price_height_falg == true) {
                                        price_height_falg = false;
                                        top = price_height + top;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_7") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = menu_heading_last_line_top;
                                }
                                else {
                                    price_top = lineTop;
                                    price_left = left;
                                }

                                // insertion of each heading Price text into text_gr group
                                var table_heading = new fabric.Text($(headingprice2).val(), {
                                    name: 'headingprice2',
                                    fontFamily: $(headingprice2).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(headingprice2).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(headingprice2).css('color'),
                                    fontWeight: $(headingprice2).css('font-weight'),
                                    fontStyle: $(headingprice2).css('font-style'),
                                    textDecoration: ($(headingprice2).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(headingprice2).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    opacity: opacity,
                                    hasBorders: false
                                });
                                var opacity = 100;
                                if (menu_dispaly_style == "menu_style_3") {
                                    //var opacity = 0;
                                }
                                else if (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7") {
                                    var marge_padding = 0;
                                    if ($(price2).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice2).val() != "") {
                                        marge_padding = 5;
                                    }
                                    table_heading.top = price_top;
                                    table_heading.left = price_left;
                                    text_gr.addWithUpdate(table_heading);
                                    if ($(price2).val() != "") {
                                        price_left = price_left + table_heading.width + marge_padding;
                                    }
                                }
                                else if (i == 0) {
                                    table_heading.top = offset.top - 20 - parseInt($('#template_line_height').val());
                                    table_heading.left = left;
                                    text_gr.addWithUpdate(table_heading);
                                }

                                if ($(headingprice).val() != "") {
                                    price_left += left_pricing_heading_padding_fix;
                                }
                                // insertion of each Price text into text_gr group
                                d_price_2 = $(price2).val();
                                var tableText = new fabric.Text($(price2).val(), {
                                    name: 'price2',
                                    menuItemid: menuItemid.value,
                                    fontFamily: $(price2).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(price2).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(price2).css('color'),
                                    fontWeight: $(price2).css('font-weight'),
                                    fontStyle: $(price2).css('font-style'),
                                    textDecoration: ($(price2).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(price2).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    top: price_top,
                                    left: price_left,
                                    hasBorders: false
                                });
                                if (menu_dispaly_style == "menu_style_3") {
                                    var marge_padding = 0;
                                    if ($(price2).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice2).val() != "") {
                                        marge_padding = 10;
                                    }
                                    var temp_width = (drag_div_width - 30 - (table_heading.width + tableText.width + marge_padding)) / 2;
                                    table_heading.top = price_top;
                                    table_heading.left = price_left - drag_div_width / 2 + 15 + temp_width;
                                    table_heading.originX = "left";
                                    text_gr.addWithUpdate(table_heading);

                                    tableText.top = price_top;
                                    tableText.left = price_left - drag_div_width / 2 + 15 + temp_width + table_heading.width + marge_padding;
                                    tableText.originX = "left";
                                    text_gr.addWithUpdate(tableText);
                                }
                                else {
                                    text_gr.addWithUpdate(tableText);
                                }
                                if ($(price2).val() != "" && (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7")) {
                                    price_left = price_left + tableText.width + 10;
                                }

                                if (menu_dispaly_style == "menu_style_1" || menu_dispaly_style == "menu_style_2" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_5") {
                                    left += drag_div_price2_width;
                                }
                            }
                            var line_style4_width = left;
                        }
                            break;
                        case "price3_style3": {
                            if (column > 2) {
                                price_add_index++;
                                if ((menu_dispaly_style == "menu_style_3")) {
                                    if ($(price3).val() != "") {
                                        price_top = top;
                                        top += parseInt($('#template_line_height').val()) + (parseInt($(price3).css('font-size').replace('px', '')) * array_font[$(price3).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(price3).css('font-size').replace('px', '')) * array_font[$(price3).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;
                                        price_left = offset.left;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_6") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = price_top;
                                    if ($(price3).val() != "" && menu_dispaly_style == "menu_style_6" && price_height_falg == true) {
                                        price_height_falg = false;
                                        top = price_height + top;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_7") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = menu_heading_last_line_top;
                                }
                                else {
                                    price_top = lineTop;
                                    price_left = left;
                                }

                                // insertion of each heading Price text into text_gr group
                                var table_heading = new fabric.Text($(headingprice3).val(), {
                                    name: 'headingprice3',
                                    fontFamily: $(headingprice3).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(headingprice3).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(headingprice3).css('color'),
                                    fontWeight: $(headingprice3).css('font-weight'),
                                    fontStyle: $(headingprice3).css('font-style'),
                                    textDecoration: ($(headingprice3).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(headingprice3).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    opacity: opacity,
                                    hasBorders: false
                                });
                                var opacity = 100;
                                if (menu_dispaly_style == "menu_style_3") {
                                    //var opacity = 0;
                                }
                                else if (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7") {
                                    var marge_padding = 0;
                                    if ($(price3).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice3).val() != "") {
                                        marge_padding = 5;
                                    }
                                    table_heading.top = price_top;
                                    table_heading.left = price_left;
                                    text_gr.addWithUpdate(table_heading);
                                    if ($(price3).val() != "") {
                                        price_left = price_left + table_heading.width + marge_padding;
                                    }
                                }
                                else if (i == 0) {
                                    table_heading.top = offset.top - 20 - parseInt($('#template_line_height').val());
                                    table_heading.left = left;
                                    text_gr.addWithUpdate(table_heading);
                                }

                                if ($(headingprice).val() != "") {
                                    price_left += left_pricing_heading_padding_fix;
                                }
                                // insertion of each Price text into text_gr group
                                d_price_3 = $(price3).val();
                                var tableText = new fabric.Text($(price3).val(), {
                                    name: 'price3',
                                    menuItemid: menuItemid.value,
                                    fontFamily: $(price3).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(price3).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(price3).css('color'),
                                    fontWeight: $(price3).css('font-weight'),
                                    fontStyle: $(price3).css('font-style'),
                                    textDecoration: ($(price3).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(price2).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    top: price_top,
                                    left: price_left,
                                    hasBorders: false
                                });
                                if (menu_dispaly_style == "menu_style_3") {
                                    var marge_padding = 0;
                                    if ($(price3).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice3).val() != "") {
                                        marge_padding = 10;
                                    }
                                    var temp_width = (drag_div_width - 30 - (table_heading.width + tableText.width + marge_padding)) / 2;
                                    table_heading.top = price_top;
                                    table_heading.left = price_left - drag_div_width / 2 + 15 + temp_width;
                                    table_heading.originX = "left";
                                    text_gr.addWithUpdate(table_heading);

                                    tableText.top = price_top;
                                    tableText.left = price_left - drag_div_width / 2 + 15 + temp_width + table_heading.width + marge_padding;
                                    tableText.originX = "left";
                                    text_gr.addWithUpdate(tableText);
                                }
                                else {
                                    text_gr.addWithUpdate(tableText);
                                }
                                if ($(price3).val() != "" && (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7")) {
                                    price_left = price_left + tableText.width + 10;
                                }

                                if (menu_dispaly_style == "menu_style_1" || menu_dispaly_style == "menu_style_2" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_5") {
                                    left += drag_div_price3_width;
                                }
                            }
                            var line_style4_width = left;
                        }
                            break;
                        case "price4_style4": {
                            if (column > 3) {
                                price_add_index++;
                                if ((menu_dispaly_style == "menu_style_3")) {
                                    if ($(price4).val() != "") {
                                        price_top = top;
                                        top += parseInt($('#template_line_height').val()) + (parseInt($(price4).css('font-size').replace('px', '')) * array_font[$(price4).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(price4).css('font-size').replace('px', '')) * array_font[$(price4).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;
                                        price_left = offset.left;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_6") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = price_top;
                                    if ($(price4).val() != "" && menu_dispaly_style == "menu_style_6" && price_height_falg == true) {
                                        price_height_falg = false;
                                        top = price_height + top;
                                    }
                                }
                                else if (menu_dispaly_style == "menu_style_7") {
                                    price_left = price_left + left_pricing_padding_fix;
                                    price_top = menu_heading_last_line_top;
                                }
                                else {
                                    price_top = lineTop;
                                    price_left = left;
                                }

                                // insertion of each heading Price text into text_gr group
                                var table_heading = new fabric.Text($(headingprice4).val(), {
                                    name: 'headingprice4',
                                    fontFamily: $(headingprice4).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(headingprice4).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(headingprice4).css('color'),
                                    fontWeight: $(headingprice4).css('font-weight'),
                                    fontStyle: $(headingprice4).css('font-style'),
                                    textDecoration: ($(headingprice4).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(headingprice4).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    opacity: opacity,
                                    hasBorders: false
                                });
                                var opacity = 100;
                                if (menu_dispaly_style == "menu_style_3") {
                                    //var opacity = 0;
                                }
                                else if (menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_7") {
                                    var marge_padding = 0;
                                    if ($(price4).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice3).val() != "") {
                                        marge_padding = 5;
                                    }
                                    table_heading.top = price_top;
                                    table_heading.left = price_left;
                                    text_gr.addWithUpdate(table_heading);
                                    if ($(price4).val() != "") {
                                        price_left = price_left + table_heading.width + marge_padding;
                                    }
                                }
                                else if (i == 0) {
                                    table_heading.top = offset.top - 20 - parseInt($('#template_line_height').val());
                                    table_heading.left = left;
                                    text_gr.addWithUpdate(table_heading);
                                }

                                if ($(headingprice).val() != "") {
                                    price_left += left_pricing_heading_padding_fix;
                                }
                                // insertion of each Price text into text_gr group
                                d_price_4 = $(price4).val();
                                var tableText = new fabric.Text($(price4).val(), {
                                    name: 'price4',
                                    menuItemid: menuItemid.value,
                                    fontFamily: $(price4).css('font-family').replace(/("|')/g, ''),
                                    fontSize: $(price4).css('font-size').replace('px', ''),
                                    angle: 0,
                                    fill: $(price4).css('color'),
                                    fontWeight: $(price4).css('font-weight'),
                                    fontStyle: $(price4).css('font-style'),
                                    textDecoration: ($(price4).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                                    textAlign: $(price4).css('text-align'),
                                    originX: text_orientation,
                                    cornersize: 10,
                                    top: price_top,
                                    left: price_left,
                                    hasBorders: false
                                });
                                if (menu_dispaly_style == "menu_style_3") {
                                    var marge_padding = 0;
                                    if ($(price4).val() == "") {
                                        table_heading.opacity = 0;
                                    }
                                    if ($(headingprice4).val() != "") {
                                        marge_padding = 10;
                                    }
                                    var temp_width = (drag_div_width - 30 - (table_heading.width + tableText.width + marge_padding)) / 2;
                                    table_heading.top = price_top;
                                    table_heading.left = price_left - drag_div_width / 2 + 15 + temp_width;
                                    table_heading.originX = "left";
                                    text_gr.addWithUpdate(table_heading);

                                    tableText.top = price_top;
                                    tableText.left = price_left - drag_div_width / 2 + 15 + temp_width + table_heading.width + marge_padding;
                                    tableText.originX = "left";
                                    text_gr.addWithUpdate(tableText);
                                }
                                else {
                                    text_gr.addWithUpdate(tableText);
                                }

                                if (menu_dispaly_style == "menu_style_1" || menu_dispaly_style == "menu_style_2" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_5") {
                                    left += drag_div_price4_width;
                                }
                            }
                            var line_style4_width = left;
                        }
                            break;
                        case "line_style1": {
                            // insertion of each Line into text_gr group
                            var opacity = 0;
                            if ($('#is_menu_line_color').is(':checked')) {
                                var opacity = 100;
                            }
                            left += 14;
                            var line_left_1 = offset.left + text_width + 7;
                            if (empty_heading) {
                                line_left_1 = offset.left;
                            }
                            var menu_line = new fabric.Line([line_left_1,
                                lineTop + 14,
                                left,
                                lineTop + 14
                            ], {
                                name: 'line',
                                stroke: $(bottomLine).css(style_nemu_line_color),
                                padding: 10,
                                opacity: opacity,
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                        }
                            break;
                        case "line_style2": {
                            // insertion of each Line into text_gr group
                            var opacity = 0;
                            if ($('#is_menu_line_color').is(':checked')) {
                                var opacity = 100;
                            }
                            top += top_line_pading_fix;
                            var menu_line = new fabric.Line([offset.left,
                                top,
                            left - 30,
                                top
                            ], {
                                name: 'line',
                                stroke: $(bottomLine).css(style_nemu_line_color),
                                padding: 10,
                                opacity: opacity,
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                            if ($('#is_menu_line_color').is(':checked')) {
                                top += 3;
                            }
                        }
                            break;
                        case "line_style3": {
                            // insertion of each Line into text_gr group
                            var opacity = 0;
                            if ($('#is_menu_line_color').is(':checked')) {
                                var opacity = 100;
                                if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                                    var opacity = 0;
                                }
                            }
                            top += 3;
                            var menu_line = new fabric.Line([offset.left - drag_div_width / 2 + 15,
                                top,
                            offset.left + drag_div_width / 2 - 15,
                                top
                            ], {
                                name: 'line',
                                stroke: $(bottomLine).css(style_nemu_line_color),
                                padding: 10,
                                opacity: opacity,
                                originX: 'right',
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                            top += 3;
                            if ($('#is_menu_line_color').is(':checked')) {
                                top += 7;
                            }
                        }
                            break;
                        case "line_style4": {
                            var opacity = 0;
                            if ($('#is_menu_line_color').is(':checked')) {
                                var opacity = 100;
                                if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                                    var opacity = 0;
                                }
                            }
                            var menu_line = new fabric.Line([offset.left,
                            top - 5,
                            line_style4_width - 30,
                            top - 5
                            ], {
                                name: 'line',
                                stroke: $(bottomLine).css(style_nemu_line_color),
                                padding: 10,
                                opacity: opacity,
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                            if ($('#is_menu_line_color').is(':checked')) {
                                top += 3;
                            }
                        }
                            break;
                        case "line_style5": {
                            // insertion of each Line into text_gr group
                            var opacity = 0;
                            if ($('#is_menu_line_color').is(':checked')) {
                                var opacity = 100;
                                if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                                    var opacity = 0;
                                }
                            }
                            top += top_line_pading_fix;
                            top += 3;
                            var menu_line = new fabric.Line([offset.left,
                                top,
                            offset.left + drag_div_width,
                                top
                            ], {
                                name: 'line',
                                stroke: $(bottomLine).css(style_nemu_line_color),
                                padding: 10,
                                opacity: opacity,
                                //originX: 'right',
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                            top += 3;
                            if ($('#is_menu_line_color').is(':checked')) {
                                top += 7;
                            }
                        }
                            break;
                        case "new_menu": {
                            text_gr.addWithUpdate(new fabric.Line([offset.left,
                                top,
                            offset.left + 1,
                                top
                            ], {
                                name: 'new_menu',
                                stroke: '#FFFFFF',
                                padding: 10,
                                opacity: 0,
                                hasBorders: false
                            }));
                           
                        }
                            break;
                        //case "menu_item_id": {

                        //    // insertion of each Sub-Heading / Description text into text_gr group
                        //    if ($(menuItemid).val().length > 0) {
                        //        d_menuitemid = $(menuItemid).val();
                        //        menu_objects_item_id += d_menuitemid + "*,*";
                        //        //if ($(subHeading).css('font-family') == "undefined")
                        //            $(menuItemid).css('font-family', 'Helvetica');


                        //        left = offset.left;
                        //        var description = breakLines($(menuItemid).val(), noChar);
                        //        var description_arr = description.split("\n");
                        //        for (var j = 0; j < description_arr.length; j++) {
                        //            if (j == 0) {
                        //                top += top_subheading_pading_fix;
                        //            }
                        //            else {
                        //                top += top_subheading_pading_fix_middle;
                        //            }
                        //            text_gr.addWithUpdate(new fabric.Text(description_arr[j], {
                        //                name: 'menuItemid',
                        //                fontFamily: $(menuItemid).css('font-family').replace(/("|')/g, ''),
                        //                //fontSize: $(subHeading).css('font-size').replace('px', ''),
                        //                //angle: 0,
                        //                //fill: $(subHeading).css('color'),
                        //                //fontWeight: $(subHeading).css('font-weight'),
                        //                //fontStyle: $(subHeading).css('font-style'),
                        //                //textDecoration: ($(subHeading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                        //                //textAlign: $(subHeading).css('text-align'),
                        //                //originX: text_orientation,
                        //                //cornersize: 10,
                        //                display: 'none',
                        //                left: left,
                        //                top: top,
                        //                hasBorders: false
                        //            }));
                        //            top += parseInt($('#template_line_height').val()) + (parseInt($(menuItemid).css('font-size').replace('px', '')) * array_font[$(menuItemid).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(menuItemid).css('font-size').replace('px', '')) * array_font[$(menuItemid).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;

                        //        }
                        //        top += 3;
                        //        if (menu_dispaly_style == "menu_style_2") {
                        //            top += 7;
                        //        }
                        //        if (menu_dispaly_style == "menu_style_4") {
                        //            top += 7;
                        //        }
                        //        //top += top_subheading_pading_fix;
                        //    }
                        //    else {
                        //        left = offset.left;
                        //        if (menu_dispaly_style == "menu_style_4") {
                        //            top += 7;
                        //        }
                        //    }
                        //}
                        //    break;
                        default: {

                        }
                            break;
                    }
                }
            }
            if (menu_layout == "vartical") {
                if (menu_dispaly_style == "menu_style_7" || menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_2") {
                    for (var i = 0; i < text_gr._objects.length; i++) {
                        if (text_gr._objects[i].name == "line") {
                            text_gr._objects[i].set({
                                width: parseInt(text_gr.width - text_gr._objects[i].x1)
                            });
                            text_gr._objects[i].setCoords();
                        }
                    }
                }
            }
            else {
                if (menu_dispaly_style == "menu_style_7" || menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_2") {
                    var object_width = 10;
                    for (var i = text_gr._objects.length - 1; i >= 0; i--) {
                        if (text_gr._objects[i].name == "line") {
                            text_gr._objects[i].set({
                                width: parseInt(text_gr.width - (text_gr._objects[i].x1 + object_width))
                            });
                            text_gr._objects[i].setCoords();
                            object_width = (text_gr.width - text_gr._objects[i].x1) + 22;
                        }
                    }
                }
            }

            // Background manage
            var text_gr_temp = new fabric.Group();
            for (var i = 0; i < text_gr._objects.length; i++) {
                if (text_gr._objects[i].name == "heading" && text_gr._objects[i].text != "") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_heading");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "subheading" && text_gr._objects[i].text != "") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_description");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price1");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price2") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price2");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price3") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price3");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price4") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price4");
                    text_gr_temp.addWithUpdate(rec);
                }
                text_gr_temp.addWithUpdate(text_gr._objects[i]);
            }
            text_gr = text_gr_temp;

            // old 
            //function get_background(obj, tag) {
            //    var left = obj.left - 5;
            //    var top = obj.top - 2;
            //    var height = obj.height + 4;
            //    var width = obj.width + 10;
            //    if (tag == "advanced_style_description") {
            //        top = obj.top - 1;
            //        height = obj.height + 2;
            //    }

            //    var fill = "";
            //    if ($('#' + tag + ' .bg_show')[0].checked) {
            //        fill = $('#' + tag + ' .bg_color')[0].value;
            //    }
            //    var rx = 0;
            //    var ry = 0;
            //    if ($('#' + tag + ' .bg_curvature')[0].value > 0) {
            //        rx = $('#' + tag + ' .bg_curvature')[0].value;
            //        ry = $('#' + tag + ' .bg_curvature')[0].value;
            //    }
            //    var stroke = "";
            //    var strokeWidth = "";
            //    var strokeDashArray = [0, 0];
            //    if ($('#' + tag + ' .bg_stroke_show')[0].checked) {
            //        stroke = $('#' + tag + ' .bg_stroke_color')[0].value;
            //        strokeWidth = $('#' + tag + ' .bg_stroke_width')[0].value;
            //        if ($('#' + tag + ' .bg_stroke_type')[0].value == 'dotted') {
            //            strokeDashArray = [4, 2];
            //        }
            //    }
            //    var originX = "left";
            //    if (menu_dispaly_style == "menu_style_3" && (tag == "advanced_style_heading" || tag == "advanced_style_description")) {
            //        originX = "center";
            //        left = obj.left;
            //    }

            //    var rec = new fabric.Rect({
            //        name: tag,
            //        left: left,
            //        top: top,
            //        fill: fill,
            //        originX: originX,
            //        rx: rx,
            //        ry: ry,
            //        stroke: stroke,
            //        strokeWidth: strokeWidth,
            //        strokeDashArray: strokeDashArray,
            //        width: width,
            //        height: height,
            //        opacity: 1,
            //        padding: 0,
            //        hasBorders: false
            //    });
            //    return rec;
            //}

            function get_background(obj, tag) {
                var left = obj.left - 5;
                var top = obj.top - 2;
                var height = obj.height + 4;
                var width = obj.width + 10;
                if (tag == "advanced_style_description") {
                    top = obj.top - 1;
                    height = obj.height + 2;
                }

                var fill = "";
                //if ($('#' + tag + ' .bg_show')[0].checked) {
                //    fill = $('#' + tag + ' .bg_color')[0].value;
                //}
                var rx = 0;
                var ry = 0;
                //if ($('#' + tag + ' .bg_curvature')[0].value > 0) {
                //    rx = $('#' + tag + ' .bg_curvature')[0].value;
                //    ry = $('#' + tag + ' .bg_curvature')[0].value;
                //}
                var stroke = "";
                var strokeWidth = "";
                var strokeDashArray = [0, 0];
                //if ($('#' + tag + ' .bg_stroke_show')[0].checked) {
                //    stroke = $('#' + tag + ' .bg_stroke_color')[0].value;
                //    strokeWidth = $('#' + tag + ' .bg_stroke_width')[0].value;
                //    if ($('#' + tag + ' .bg_stroke_type')[0].value == 'dotted') {
                //        strokeDashArray = [4, 2];
                //    }
                //}

                if (tag === 'advanced_style_heading') {
                    if ($('#advance_heading_bg_fill_color').prop('checked')==true) {
                        fill = $('#advance_heading_bg_line_color').val();
                    }
                    if ($('#advance_heading_bg_curvature').val() > 0) {
                        rx = $('#advance_heading_bg_curvature').val();
                        ry = $('#advance_heading_bg_curvature').val();
                    }

                    if ($('#advance_heading_bg_stroke_show').prop('checked')==true)  {
                        stroke = $('#advance_heading_bg_stroke_color').val();
                        strokeWidth = $('#advance_heading_bg_stroke_width').val();
                        if ($('#advance_heading_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }
                else if (tag === 'advanced_style_description') {
                    if ($('#advance_description_bg_fill_color').prop('checked')==true) {
                        fill = $('#advance_description_bg_line_color').val();
                    }
                    if ($('#advance_description_bg_curvature').val() > 0) {
                        rx = $('#advance_description_bg_curvature').val();
                        ry = $('#advance_description_bg_curvature').val();
                    }
                    if ($('#advance_description_bg_stroke_show').prop('checked')==true) {
                        stroke = $('#advance_description_bg_stroke_color').val();
                        strokeWidth = $('#advance_description_bg_stroke_width').val();
                        if ($('#advance_description_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }
                else if (tag === 'advanced_style_price1') {
                    if ($('#advance_price1_bg_fill_color').prop('checked')) {
                        fill = $('#advance_price1_bg_line_color').val();
                    }
                    if ($('#advance_price1_bg_curvature').val() > 0) {
                        rx = $('#advance_price1_bg_curvature').val();
                        ry = $('#advance_price1_bg_curvature').val();
                    }
                    if ($('#advance_price1_bg_stroke_show').prop('checked')) {
                        stroke = $('#advance_price1_bg_stroke_color').val();
                        strokeWidth = $('#advance_price1_bg_stroke_width').val();
                        if ($('#advance_price1_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }
                else if (tag === 'advanced_style_price2') {
                    if ($('#advance_price2_bg_fill_color').prop('checked')) {
                        fill = $('#advance_price2_bg_line_color').val();
                    }
                    if ($('#advance_price2_bg_curvature').val() > 0) {
                        rx = $('#advance_price2_bg_curvature').val();
                        ry = $('#advance_price2_bg_curvature').val();
                    }
                    if ($('#advance_price2_bg_stroke_show').prop('checked')) {
                        stroke = $('#advance_price2_bg_stroke_color').val();
                        strokeWidth = $('#advance_price2_bg_stroke_width').val();
                        if ($('#advance_price2_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }
                else if (tag === 'advanced_style_price3') {
                    if ($('#advance_price3_bg_fill_color').prop('checked')) {
                        fill = $('#advance_price3_bg_line_color').val();
                    }
                    if ($('#advance_price3_bg_curvature').val() > 0) {
                        rx = $('#advance_price3_bg_curvature').val();
                        ry = $('#advance_price3_bg_curvature').val();
                    }
                    if ($('#advance_price3_bg_stroke_show').prop('checked')) {
                        stroke = $('#advance_price3_bg_stroke_color').val();
                        strokeWidth = $('#advance_price3_bg_stroke_width').val();
                        if ($('#advance_price3_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }
                else if (tag === 'advanced_style_price4') {
                    if ($('#advance_price4_bg_fill_color').prop('checked')) {
                        fill = $('#advance_price4_bg_line_color').val();
                    }
                    if ($('#advance_price4_bg_curvature').val() > 0) {
                        rx = $('#advance_price4_bg_curvature').val();
                        ry = $('#advance_price4_bg_curvature').val();
                    }
                    if ($('#advance_price4_bg_stroke_show').prop('checked')) {
                        stroke = $('#advance_price4_bg_stroke_color').val();
                        strokeWidth = $('#advance_price4_bg_stroke_width').val();
                        if ($('#advance_price4_bg_stroke_type').val() == 'dotted') {
                            strokeDashArray = [4, 2];
                        }
                    }
                }

                var originX = "left";
                if (menu_dispaly_style == "menu_style_3" && (tag == "advanced_style_heading" || tag == "advanced_style_description")) {
                    originX = "center";
                    left = obj.left;
                }

                var rec = new fabric.Rect({
                    name: tag,
                    left: left,
                    top: top,
                    fill: fill,
                    originX: originX,
                    rx: rx,
                    ry: ry,
                    stroke: stroke,
                    strokeWidth: strokeWidth,
                    strokeDashArray: strokeDashArray,
                    width: width,
                    height: height,
                    opacity: 1,
                    padding: 0,
                    hasBorders: false
                });
                return rec;
            }



            text_gr.tableHeadingWidth = drag_div_width;
            text_gr.tableHeadingPriceWidth = drag_div_price_width;
            text_gr.tablePriceWidth = drag_div_price_width;
            text_gr.tableLineHieght = parseInt($('#template_line_height').val());
            text_gr.tableHeadingPrice2Width = drag_div_price2_width;
            text_gr.tablePrice2Width = drag_div_price2_width;
            text_gr.tableHeadingPrice3Width = drag_div_price3_width;
            text_gr.tablePrice3Width = drag_div_price3_width;
            text_gr.tableHeadingPrice4Width = drag_div_price4_width;
            text_gr.tablePrice4Width = drag_div_price4_width;
            text_gr.lockUniScaling = true;
            text_gr.name = 'template' + column;
            text_gr.menuStyle = menu_dispaly_style;
            text_gr.menuLayout = menu_layout;

            text_gr.top = 0;
            text_gr.left = 0;

            text_gr.objectCustomID = CustomID;

            return text_gr;
        }

        document.getElementById('add-menu').onclick = function () {
            var text_gr = createNewmenu(1, '');

            var currentGroupScale = 1;// parseInt($('#slider_scale').val(), 10) / 100;
            text_gr.scale(currentGroupScale);

            text_gr.name = 'template' + column_menu;
            text_gr.lockUniScaling = true;
            text_gr.top = 50;
            text_gr.left = 200;

            pushUndo();
            canvas.add(text_gr);
            canvas.renderAll();
            canvas.calcOffset();

        };

        //Haraprasad add dt:12.012024
        $("#btn_search").on('click', function () {
            try {
                var categoryId = $("#itemCategory").val();
                var searchItem = $("#search_item").val();
                var locationId = $("#ddl_location").val();
                var price = $("#price").val();
                $.ajax({
                    type: "GET",
                    url: '/MenuItems/MenuItemsList',
                    data: { 'categoryId': categoryId, 'searchItem': searchItem, 'locationId': locationId, 'price': price },
                    success: function (response) {
                        var data = response.itemList;
                        //let html = '';
                        $("#item_table_body").empty();
                        if(data !== null && data.length > 0) {
                            for (let i = 0; i < data.length; i++) {
                                var html = '<tr class="menu-itm-import-itms row-heading" id="tr_row_heading_' + data[i].id + '" onclick="javascript:addItem_list(' + data[i].id + ',`' + data[i].itemName + '`,`' + data[i].itemDescription + '`,' + data[i].price1 + ',' + data[i].price2 + ',' + data[i].price3 + ',' + data[i].price4 + ');">';
                                html += '<td data-th="" style="display:none;">"' + data[i].id + '" </td>';
                                html += '<td data-th=""><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="item_chk_' + data[i].id + '"></div></td >';
                                html += '<td data-th="Name">' + data[i].itemName + '</td>';
                                html += '<td></td>';
                                html += '<td data-th="Price 1">' + data[i].price1.toFixed(2) + '</td>';
                                html += '</tr>';
                                html += '<tr class="menu-itm-import-itms row-description" id="tr_row_description_' + data[i].id + '" onclick="javascript:addItem_list(' + data[i].id + ',`' + data[i].itemName + '`,`' + data[i].itemDescription + '`,' + data[i].price1 + ',' + data[i].price2 + ',' + data[i].price3 + ',' + data[i].price4 + ');">';
                                html += '<td data-th="" style="display:none;"></td>';
                                html += '<td></td>';
                                html += '<td colspan="2" data-th="Description">' + data[i].itemDescription + '</td>';
                                html += '<td></td>';
                                html += '</tr>';
                                html += '<tr class="menu-itm-import-itms-blank"></tr>';
                                $("#item_table_body").append(html);
                            }
                        }
                    }
                });
            }
            catch (e) {
                console.log("catch", e);
            }
            
        });
        $("#search_item").on("keypress", function (e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
                $('#btn_search').trigger("click");
            }
        });

        //Haraprasad end dt:12.012024

        function createNewmenu(column, CustomID) { //sunil
            ini_drag_div_menu = 240;
            ini_drag_div_menu_price = 80;
            ini_drag_div_menu_price2 = 80;
            ini_drag_div_menu_price3 = 80;
            ini_drag_div_menu_price4 = 80;

            var drag_div_left_width = 0;
            var drag_div_right_width = ini_drag_div_menu;
            var drag_div_width = parseInt(drag_div_left_width) + parseInt(drag_div_right_width);
            var drag_div_price_left_width = 0;
            var drag_div_price_right_width = ini_drag_div_menu_price;
            var drag_div_price_width = parseInt(drag_div_price_left_width) + parseInt(drag_div_price_right_width);
            var drag_div_price2_left_width = 0;
            var drag_div_price2_right_width = ini_drag_div_menu_price2;
            var drag_div_price2_width = parseInt(drag_div_price2_left_width) + parseInt(drag_div_price2_right_width);
            var drag_div_price3_left_width = 0;
            var drag_div_price3_right_width = ini_drag_div_menu_price3;
            var drag_div_price3_width = parseInt(drag_div_price3_left_width) + parseInt(drag_div_price3_right_width);
            var drag_div_price4_left_width = 0;
            var drag_div_price4_right_width = ini_drag_div_menu_price4;
            var drag_div_price4_width = parseInt(drag_div_price4_left_width) + parseInt(drag_div_price4_right_width);
            var menu_objects_heading = '';
            var menu_objects_sub_heading = '';
            var menu_objects_item_id = '';
            var template_line_height = 0.5;
            menu_layout = "vartical";
            var menu_token = Math.floor(Math.random() * (999 - 100 + 1) + 100);
            if (!CustomID) {
                CustomID = Date.now() + menu_token;
            }

            var text_gr = new fabric.Group(),
                offset = {
                    top: 10,
                    left: 10
                },
                top = offset.top,
                left = offset.left,
                menuItemidObjs = [],
                headingObjs = [],
                bottomLineObjs = [],
                headingpriceObjs = [],
                headingpriceObjs2 = [],
                headingpriceObjs3 = [],
                headingpriceObjs4 = [],
                priceObjs = [],
                priceObjs2 = [],
                priceObjs3 = [],
                priceObjs4 = [],
                subHeadingObjs = [],
                noChar = '',
                text_width = 5,
                price_width = 5,
                name = 'template1';
            var text_orientation = 'left';
            var no_menu_row = 3;
            for (var i = 0; i < no_menu_row; i++) {
                menuItemidObjs[i] = '';
                headingObjs[i] = 'Add heading text';
                bottomLineObjs[i] = '';
                headingpriceObjs[i] = '';
                priceObjs[i] = '$0.00';
                headingpriceObjs2[i] = '';
                priceObjs2[i] = '';
                headingpriceObjs3[i] = '';
                priceObjs3[i] = '';
                headingpriceObjs4[i] = '';
                priceObjs4[i] = '';
                subHeadingObjs[i] = 'Add description here. This can be multi-line!';
            }
            menu_line_type = "solid";
            menu_dispaly_style = "menu_style_1";
            var array_menu_style_sequency = ["heading_style1", "line_style1", "price_style", "price2_style2", "price3_style3", "price4_style4", "subheading_style1", "new_menu", "menu_item_id"];
            for (var i = 0; i < headingObjs.length; i++) {
                var menuItemid = menuItemidObjs[i];
                var heading = headingObjs[i];
                var bottomLine = bottomLineObjs[i];
                var headingprice = headingpriceObjs[0];
                var headingprice2 = headingpriceObjs2[0];
                var headingprice3 = headingpriceObjs3[0];
                var headingprice4 = headingpriceObjs4[0];
                var price = priceObjs[i];
                var price2 = priceObjs2[i];
                var price3 = priceObjs3[i];
                var price4 = priceObjs4[i];
                var subHeading = subHeadingObjs[i];

                var d_menuitemid = "";
                var d_heading = "";
                var d_sub_heading = "";
                var d_price_1 = "";
                var d_price_2 = "";
                var d_price_3 = "";
                var d_price_4 = "";
                var price_top = '';
                var price_left = '';
                var price_add_index = 0;
                var empty_heading = 0;
                var menu_heading_last_line_left = 0;
                var menu_heading_last_line_top = 0;

                //if ($(heading).val().length <= 0) {
                //    $(heading).val(' ');
                empty_heading = 1;
                //}

                var top_heading_pading_fix = 0;
                var top_heading_pading_fix_middle = 0;
                var top_subheading_pading_fix = 0;
                var top_subheading_pading_fix_middle = 0;
                var top_line_pading_fix = 0;
                var left_pricing_padding_fix = 0;
                var left_pricing_heading_padding_fix = 0;



                var price_height = 0;
                var price_height_falg = true;
                for (var si = 0; si < array_menu_style_sequency.length; si++) {
                    var item_action = array_menu_style_sequency[si];
                    //console.log(item_action);
                    switch (item_action) {
                        case "heading_style1": {
                            if (menu_layout == "vartical") {
                                left = offset.left;
                            }
                            else {
                                offset.left = text_gr.width;
                                if (i > 0) {
                                    offset.left = text_gr.width + 5;
                                }
                                left = offset.left;
                                top = offset.top;
                            }

                            if (heading.length > 0) {
                                d_heading = heading;
                                menu_objects_heading += d_heading + "*,*";
                                noChar = Math.ceil(drag_div_width / (18 * array_font["Helvetica"]["ratioWidth"]));
                                var description = breakLines(heading, noChar);
                                var description_arr = description.split("\n");
                                for (var j = 0; j < description_arr.length; j++) {

                                    if (empty_heading != 1) {
                                        if (j == 0) {
                                            top += top_heading_pading_fix;
                                        }
                                        else {
                                            top += top_heading_pading_fix_middle;
                                        }
                                    }
                                    var tableText = new fabric.Text(description_arr[j], {
                                        name: 'heading',
                                        menuItemid: menuItemid.value,
                                        fontFamily: 'Helvetica',
                                        fontSize: 18,
                                        angle: 0,
                                        fontWeight: 'normal',
                                        fontStyle: 'normal',
                                        textDecoration: 'none',
                                        textAlign: 'left',
                                        originX: text_orientation,
                                        cornersize: 10,
                                        top: top,
                                        left: left,
                                        hasBorders: false
                                    });
                                    if (j == 0) {
                                        var lineTop = top;
                                        text_width = tableText.width;
                                    }
                                    text_gr.addWithUpdate(tableText);

                                    menu_heading_last_line_left = tableText.width;
                                    menu_heading_last_line_top = top;

                                    if ((menu_dispaly_style == "menu_style_3" || menu_dispaly_style == "menu_style_6") && empty_heading == 1) {
                                        //
                                    }
                                    else {
                                        top += parseInt(template_line_height) + (parseInt(18) * array_font["Helvetica"]["ratioHeight"]) + (parseInt(18) * array_font["Helvetica"]["ratioHeight"]) / 3;
                                    }
                                }
                                left += drag_div_width;
                                top += 3;
                            }
                        }
                            break;
                        case "subheading_style1": {

                            // insertion of each Sub-Heading / Description text into text_gr group
                            if (subHeading.length > 0) {
                                d_sub_heading = subHeading;
                                menu_objects_sub_heading += d_sub_heading + "*,*";

                                noChar = Math.ceil((drag_div_width) / (14 * array_font["Helvetica"]["ratioWidth"]));

                                left = offset.left;
                                var description = breakLines(subHeading, noChar);
                                var description_arr = description.split("\n");
                                for (var j = 0; j < description_arr.length; j++) {
                                    if (j == 0) {
                                        top += top_subheading_pading_fix;
                                    }
                                    else {
                                        top += top_subheading_pading_fix_middle;
                                    }
                                    text_gr.addWithUpdate(new fabric.Text(description_arr[j], {
                                        name: 'subheading',
                                        menuItemid: menuItemid.value,
                                        fontFamily: "Helvetica",
                                        fontSize: 14,
                                        angle: 0,
                                        fontWeight: 'normal',
                                        fontStyle: 'italic',
                                        textDecoration: 'none',
                                        textAlign: 'left',
                                        originX: text_orientation,
                                        cornersize: 10,
                                        left: left,
                                        top: top,
                                        hasBorders: false
                                    }));
                                    top += parseInt(template_line_height) + (parseInt(14) * array_font["Helvetica"]["ratioHeight"]) + (parseInt(14) * array_font["Helvetica"]["ratioHeight"]) / 3;

                                }
                                top += 3;

                            }
                            else {
                                left = offset.left;
                                if (menu_dispaly_style == "menu_style_4") {
                                    top += 7;
                                }
                            }
                        }
                            break;
                        case "price_style": {
                            price_add_index++;
                            left += 7;
                            price_top = lineTop;
                            price_left = left;
                            var table_heading = new fabric.Text(headingprice, {
                                name: 'headingprice',
                                fontFamily: "Helvetica",
                                fontSize: 18,
                                angle: 0,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none',
                                textAlign: 'left',
                                originX: text_orientation,
                                cornersize: 10,
                                opacity: 1,
                                hasBorders: false
                            });
                            var opacity = 100;
                            if (i == 0) {
                                table_heading.top = offset.top - 20 - parseInt(template_line_height);
                                table_heading.left = left;
                                text_gr.addWithUpdate(table_heading);
                            }

                            if (headingprice != "") {
                                price_left += left_pricing_heading_padding_fix;
                            }
                            // insertion of each Price text into text_gr group
                            d_price_1 = price;
                            var tableText = new fabric.Text(price, {
                                name: 'price',
                                menuItemid: menuItemid.value,
                                fontFamily: "Helvetica",
                                fontSize: 18,
                                angle: 0,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                textDecoration: 'none',
                                textAlign: 'left',
                                originX: text_orientation,
                                cornersize: 10,
                                top: price_top,
                                left: price_left,
                                hasBorders: false
                            });

                            text_gr.addWithUpdate(tableText);


                            if (menu_dispaly_style == "menu_style_1" || menu_dispaly_style == "menu_style_2" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_5") {
                                left += drag_div_price_width;
                            }
                            var line_style4_width = left;
                        }
                            break;

                        case "line_style1": {

                            var opacity = 100;

                            left += 14;
                            var line_left_1 = parseFloat(offset.left) + parseFloat(text_width) + 7;
                            //if (empty_heading) {
                            //    line_left_1 = offset.left;
                            //}
                            var menu_line = new fabric.Line([line_left_1,
                                lineTop + 14,
                                left,
                                lineTop + 14
                            ], {
                                name: 'line',
                                stroke: 'rgb(33, 37, 41)',
                                padding: 10,
                                opacity: opacity,
                                hasBorders: false
                            });
                            if (menu_line_type == "dotted") {
                                menu_line.strokeDashArray = [4, 3];
                            }
                            text_gr.addWithUpdate(menu_line);
                        }
                            break;
                        //case "line_style2": {
                        //    // insertion of each Line into text_gr group
                        //    var opacity = 0;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        var opacity = 100;
                        //    }
                        //    top += top_line_pading_fix;
                        //    var menu_line = new fabric.Line([offset.left,
                        //        top,
                        //    left - 30,
                        //        top
                        //    ], {
                        //        name: 'line',
                        //        stroke: $(bottomLine).css(style_nemu_line_color),
                        //        padding: 10,
                        //        opacity: opacity,
                        //        hasBorders: false
                        //    });
                        //    if (menu_line_type == "dotted") {
                        //        menu_line.strokeDashArray = [4, 3];
                        //    }
                        //    text_gr.addWithUpdate(menu_line);
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        top += 3;
                        //    }
                        //}
                        //    break;
                        //case "line_style3": {
                        //    // insertion of each Line into text_gr group
                        //    var opacity = 0;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        var opacity = 100;
                        //        if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                        //            var opacity = 0;
                        //        }
                        //    }
                        //    top += 3;
                        //    var menu_line = new fabric.Line([offset.left - drag_div_width / 2 + 15,
                        //        top,
                        //    offset.left + drag_div_width / 2 - 15,
                        //        top
                        //    ], {
                        //        name: 'line',
                        //        stroke: $(bottomLine).css(style_nemu_line_color),
                        //        padding: 10,
                        //        opacity: opacity,
                        //        originX: 'right',
                        //        hasBorders: false
                        //    });
                        //    if (menu_line_type == "dotted") {
                        //        menu_line.strokeDashArray = [4, 3];
                        //    }
                        //    text_gr.addWithUpdate(menu_line);
                        //    top += 3;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        top += 7;
                        //    }
                        //}
                        //    break;
                        //case "line_style4": {
                        //    var opacity = 0;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        var opacity = 100;
                        //        if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                        //            var opacity = 0;
                        //        }
                        //    }
                        //    var menu_line = new fabric.Line([offset.left,
                        //    top - 5,
                        //    line_style4_width - 30,
                        //    top - 5
                        //    ], {
                        //        name: 'line',
                        //        stroke: $(bottomLine).css(style_nemu_line_color),
                        //        padding: 10,
                        //        opacity: opacity,
                        //        hasBorders: false
                        //    });
                        //    if (menu_line_type == "dotted") {
                        //        menu_line.strokeDashArray = [4, 3];
                        //    }
                        //    text_gr.addWithUpdate(menu_line);
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        top += 3;
                        //    }
                        //}
                        //    break;
                        //case "line_style5": {
                        //    // insertion of each Line into text_gr group
                        //    var opacity = 0;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        var opacity = 100;
                        //        if (menu_layout == "vartical" && ((i + 1) == headingObjs.length)) {
                        //            var opacity = 0;
                        //        }
                        //    }
                        //    top += top_line_pading_fix;
                        //    top += 3;
                        //    var menu_line = new fabric.Line([offset.left,
                        //        top,
                        //    offset.left + drag_div_width,
                        //        top
                        //    ], {
                        //        name: 'line',
                        //        stroke: $(bottomLine).css(style_nemu_line_color),
                        //        padding: 10,
                        //        opacity: opacity,
                        //        //originX: 'right',
                        //        hasBorders: false
                        //    });
                        //    if (menu_line_type == "dotted") {
                        //        menu_line.strokeDashArray = [4, 3];
                        //    }
                        //    text_gr.addWithUpdate(menu_line);
                        //    top += 3;
                        //    if ($('#is_menu_line_color').is(':checked')) {
                        //        top += 7;
                        //    }
                        //}
                        //    break;
                        case "new_menu": {
                            text_gr.addWithUpdate(new fabric.Line([offset.left,
                                top,
                            offset.left + 1,
                                top
                            ], {
                                name: 'new_menu',
                                stroke: '#FFFFFF',
                                padding: 10,
                                opacity: 0,
                                hasBorders: false
                            }));
                        }
                            break;
                        //case "menu_item_id": {

                        //    // insertion of each Sub-Heading / Description text into text_gr group
                        //    if ($(menuItemid).val().length > 0) {
                        //        d_menuitemid = $(menuItemid).val();
                        //        menu_objects_item_id += d_menuitemid + "*,*";
                        //        //if ($(subHeading).css('font-family') == "undefined")
                        //            $(menuItemid).css('font-family', 'Helvetica');


                        //        left = offset.left;
                        //        var description = breakLines($(menuItemid).val(), noChar);
                        //        var description_arr = description.split("\n");
                        //        for (var j = 0; j < description_arr.length; j++) {
                        //            if (j == 0) {
                        //                top += top_subheading_pading_fix;
                        //            }
                        //            else {
                        //                top += top_subheading_pading_fix_middle;
                        //            }
                        //            text_gr.addWithUpdate(new fabric.Text(description_arr[j], {
                        //                name: 'menuItemid',
                        //                fontFamily: $(menuItemid).css('font-family').replace(/("|')/g, ''),
                        //                //fontSize: $(subHeading).css('font-size').replace('px', ''),
                        //                //angle: 0,
                        //                //fill: $(subHeading).css('color'),
                        //                //fontWeight: $(subHeading).css('font-weight'),
                        //                //fontStyle: $(subHeading).css('font-style'),
                        //                //textDecoration: ($(subHeading).css('text-decoration').substring(0, 4) == 'none' ? 'none' : 'underline'),
                        //                //textAlign: $(subHeading).css('text-align'),
                        //                //originX: text_orientation,
                        //                //cornersize: 10,
                        //                display: 'none',
                        //                left: left,
                        //                top: top,
                        //                hasBorders: false
                        //            }));
                        //            top += parseInt($('#template_line_height').val()) + (parseInt($(menuItemid).css('font-size').replace('px', '')) * array_font[$(menuItemid).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) + (parseInt($(menuItemid).css('font-size').replace('px', '')) * array_font[$(menuItemid).css('font-family').replace(/("|')/g, '').replace(/\s+/g, '')]["ratioHeight"]) / 3;

                        //        }
                        //        top += 3;
                        //        if (menu_dispaly_style == "menu_style_2") {
                        //            top += 7;
                        //        }
                        //        if (menu_dispaly_style == "menu_style_4") {
                        //            top += 7;
                        //        }
                        //        //top += top_subheading_pading_fix;
                        //    }
                        //    else {
                        //        left = offset.left;
                        //        if (menu_dispaly_style == "menu_style_4") {
                        //            top += 7;
                        //        }
                        //    }
                        //}
                        //    break;
                        default: {

                        }
                            break;
                    }
                }
            }
            //if (menu_layout == "vartical") {
            //    if (menu_dispaly_style == "menu_style_7" || menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_2") {
            //        for (var i = 0; i < text_gr._objects.length; i++) {
            //            if (text_gr._objects[i].name == "line") {
            //                text_gr._objects[i].set({
            //                    width: parseInt(text_gr.width - text_gr._objects[i].x1)
            //                });
            //                text_gr._objects[i].setCoords();
            //            }
            //        }
            //    }
            //}
            //else {
            //    if (menu_dispaly_style == "menu_style_7" || menu_dispaly_style == "menu_style_6" || menu_dispaly_style == "menu_style_4" || menu_dispaly_style == "menu_style_2") {
            //        var object_width = 10;
            //        for (var i = text_gr._objects.length - 1; i >= 0; i--) {
            //            if (text_gr._objects[i].name == "line") {
            //                text_gr._objects[i].set({
            //                    width: parseInt(text_gr.width - (text_gr._objects[i].x1 + object_width))
            //                });
            //                text_gr._objects[i].setCoords();
            //                object_width = (text_gr.width - text_gr._objects[i].x1) + 22;
            //            }
            //        }
            //    }
            //}

            // Background manage
            var text_gr_temp = new fabric.Group();
            for (var i = 0; i < text_gr._objects.length; i++) {
                if (text_gr._objects[i].name == "heading" && text_gr._objects[i].text != "") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_heading");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "subheading" && text_gr._objects[i].text != "") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_description");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price1");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price2") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price2");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price3") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price3");
                    text_gr_temp.addWithUpdate(rec);
                }
                if (text_gr._objects[i].name == "price4") {
                    var rec = get_background(text_gr._objects[i], "advanced_style_price4");
                    text_gr_temp.addWithUpdate(rec);
                }
                text_gr_temp.addWithUpdate(text_gr._objects[i]);
            }
            text_gr = text_gr_temp;

            function get_background(obj, tag) {
                var left = obj.left - 5;
                var top = obj.top - 2;
                var height = obj.height + 4;
                var width = obj.width + 10;
                if (tag == "advanced_style_description") {
                    top = obj.top - 1;
                    height = obj.height + 2;
                }

                var fill = "";
                //if ($('#' + tag + ' .bg_show')[0].checked) {
                //    fill = $('#' + tag + ' .bg_color')[0].value;
                //}
                var rx = 0;
                var ry = 0;
                //if ($('#' + tag + ' .bg_curvature')[0].value > 0) {
                //    rx = $('#' + tag + ' .bg_curvature')[0].value;
                //    ry = $('#' + tag + ' .bg_curvature')[0].value;
                //}
                var stroke = "";
                var strokeWidth = "";
                var strokeDashArray = [0, 0];
                //if ($('#' + tag + ' .bg_stroke_show')[0].checked) {
                //    stroke = $('#' + tag + ' .bg_stroke_color')[0].value;
                //    strokeWidth = $('#' + tag + ' .bg_stroke_width')[0].value;
                //    if ($('#' + tag + ' .bg_stroke_type')[0].value == 'dotted') {
                //        strokeDashArray = [4, 2];
                //    }
                //}
                var originX = "left";
                //if (menu_dispaly_style == "menu_style_3" && (tag == "advanced_style_heading" || tag == "advanced_style_description")) {
                //    originX = "center";
                //    left = obj.left;
                //}

                var rec = new fabric.Rect({
                    name: tag,
                    left: left,
                    top: top,
                    fill: fill,
                    originX: originX,
                    rx: rx,
                    ry: ry,
                    stroke: stroke,
                    strokeWidth: strokeWidth,
                    strokeDashArray: strokeDashArray,
                    width: width,
                    height: height,
                    opacity: 1,
                    padding: 0,
                    hasBorders: false
                });
                return rec;
            }



            text_gr.tableHeadingWidth = drag_div_width;
            text_gr.tableHeadingPriceWidth = drag_div_price_width;
            text_gr.tablePriceWidth = drag_div_price_width;
            text_gr.tableLineHieght = parseInt(template_line_height);
            text_gr.tableHeadingPrice2Width = drag_div_price2_width;
            text_gr.tablePrice2Width = drag_div_price2_width;
            text_gr.tableHeadingPrice3Width = drag_div_price3_width;
            text_gr.tablePrice3Width = drag_div_price3_width;
            text_gr.tableHeadingPrice4Width = drag_div_price4_width;
            text_gr.tablePrice4Width = drag_div_price4_width;
            text_gr.lockUniScaling = true;
            text_gr.name = 'template' + column;
            text_gr.menuStyle = menu_dispaly_style;
            text_gr.menuLayout = menu_layout;

            text_gr.top = 0;
            text_gr.left = 0;

            text_gr.objectCustomID = CustomID;

            return text_gr;
        }

        ///* MENU TABLE MANAGEMENT END*/

        // Menu Item work Started
        document.getElementById("map_items_menu").onclick = function () {
            //$('#import_pos_content').hide();
            //$('#div_canvas_menu_done_button').show();
            const selectedItemlistTable = document.getElementById('selected_item_table');
            if (selectedItemlistTable.rows.length <= 1) {
                $('#import_pos_content').modal('hide');
                return false;
            }
            //hide the item table & go to text editor tab
            //$('.tabBtn').removeClass('active');
            //$('#tab_edit').addClass('active');
            //$("#edit").show();
            //$('#items').hide();

            //delete Existing Rows except 1st row on menu table
            var table = document.getElementById('text_table');
            var rowCount = table.rows.length;
            var priceformat = $('#price_format').val();
            var pricewithcurrency = $("#currency").val();
            // Start from the last row and delete rows except the first one
            for (var i = rowCount - 2; i > 1; i--) {
                table.deleteRow(i);
            }


            // set the value of selected table data into menu details

            //const menueditorTable = document.getElementById('text_table');

            for (let i = 1; i < selectedItemlistTable.rows.length; i++) {

                const tabList = selectedItemlistTable.rows[i];
                console.log(tabList.cells[0].textContent.trim());
                if (tabList.cells[0].textContent.trim() != '') {
                    const item_id = tabList.cells[0].textContent.trim();
                    const item_heading = tabList.cells[1].textContent.trim();
                    var item_price1 = "";
                    var item_price2 = "";
                    var item_price3 = "";
                    var item_price4 = "";
                    if (priceformat == 1) {
                        const raw_price1 = tabList.cells[2].textContent.trim();
                        item_price1 = isNaN(parseFloat(raw_price1)) ? "" : parseFloat(raw_price1).toFixed(2);
                        //const item_price1 = tabList.cells[2].textContent.trim().toFixed(2);
                        const raw_price2 = tabList.cells[3].textContent.trim();
                        item_price2 = isNaN(parseFloat(raw_price2)) ? "" : parseFloat(raw_price2).toFixed(2);
                        //const item_price2 = tabList.cells[3].textContent.trim().toFixed(2);

                        const raw_price3 = tabList.cells[4].textContent.trim();
                        item_price3 = isNaN(parseFloat(raw_price3)) ? "" : parseFloat(raw_price3).toFixed(2);
                        //const item_price3 = tabList.cells[4].textContent.trim().toFixed(2);

                        const raw_price4 = tabList.cells[5].textContent.trim();
                        item_price4 = isNaN(parseFloat(raw_price4)) ? "" : parseFloat(raw_price4).toFixed(2);
                        //const item_price4 = tabList.cells[5].textContent.trim().toFixed(2);
                    }
                    else {
                        
                        item_price1 = tabList.cells[2].textContent.trim();
                        item_price2 = tabList.cells[3].textContent.trim();
                        item_price3 = tabList.cells[4].textContent.trim();
                        item_price4 = tabList.cells[5].textContent.trim();
                    }
                    if (pricewithcurrency != "") {
                        item_price1 = pricewithcurrency + item_price1;
                        item_price2 = pricewithcurrency + item_price2;
                        item_price3 = pricewithcurrency + item_price3;
                        item_price4 = pricewithcurrency + item_price4;
                    }

                    const tabList_desc = selectedItemlistTable.rows[i + 1];
                    const item_sub_heading = tabList_desc.cells[1].textContent.trim();
                    //console.log(tabRow);
                    textTableAddRow(false, item_id, item_heading, item_sub_heading, item_price1, item_price2, item_price3, item_price4);
                }

            }

            table.deleteRow(2);

            // remove pos model 
            //$('#div_main_canvas_body').removeClass('modal-open');
            //$('#div_main_canvas_body').attr('style', '');
            //$('#div_main_canvas_body_end').hide();
            //$('#import_pos_content').hide();
            $('#import_pos_content').modal('hide');
        }

        // sudip work 18-12-2024

        $("#add-qrcode").on("click", function () {
            const canimg = document.querySelector("#qr_code canvas");
            if (canimg != null && canimg != '') {
                const menuqrcodeimg = canimg.toDataURL('image/png');

                fabric.Image.fromURL(menuqrcodeimg, function (Img) {
                    var qrimg = Img.set({ left: 224, top: 90, width: 450, height: 450 });
                    canvas.add(qrimg);
                });
            }
            else {
                messageAlert('Reminder: Please complete your menu board design by adding the necessary menu items, content, and images. Once done, click to add the QR Code.', 'err');
                return false;
            }
            
        });

        // sudip work 18-12-2024 end


        //document.getElementById("tab_menu_item").onclick = function () {
        //    $('#div_canvas_menu_done_button').hide();
        //}
        //document.getElementById("tab_edit").onclick = function () {
        //    $('#div_canvas_menu_done_button').show();
        //}
        //document.getElementById("tab_properties").onclick = function () {
        //    $('#div_canvas_menu_done_button').show();
        //}
        //document.getElementById("tab_effect").onclick = function () {
        //    $('#div_canvas_menu_done_button').show();
        //}
        // Menu Item work End

        //Menueditor Auto update on change of properties

        function Menueditorpropertiessettingupdate() {
            var existingId = $('#hd_current_menu_id').val()
            var group = canvas.getActiveObject();
            if (group != null && existingId==group.objectCustomID) {
                menu_edit_flag = false;
                var text_gr = createMenuObject(column_menu, group.objectCustomID);
                var currentGroupTop = group.top;
                var currentGroupLeft = group.left;
                var currentGroupScale = parseInt($('#slider_scale').val(), 10) / 100;
                text_gr.scale(currentGroupScale);  //sunil
                text_gr.top = currentGroupTop;
                text_gr.left = currentGroupLeft;
                canvas.remove(group);
                canvas.add(text_gr);
                canvas.renderAll();
                canvas.calcOffset();

                canvas.getObjects().forEach(function (o) {
                    if (o.objectCustomID === group.objectCustomID) {
                        canvas.setActiveObject(o);
                    }
                });

            }
        }


    })(this);
});

function showSuccessPopup(message = "✅ Success! Your menubord was saved successfully.") {
    const popup = document.getElementById("successPopup");
    popup.textContent = message;
    popup.style.display = "block";
    $('#div_main_canvas_body_end').show();
    $('#confetti-canvas').show();
    // Auto-hide after 3 seconds
    setTimeout(() => {
        popup.style.display = "none";
        $('#div_main_canvas_body_end').hide();
        $('#confetti-canvas').hide();
    }, 3000);
}