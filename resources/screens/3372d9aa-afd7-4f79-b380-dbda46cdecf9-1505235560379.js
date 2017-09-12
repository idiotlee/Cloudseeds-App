jQuery("#simulation")
  .on("click", ".s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "action": "jimCount",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      } ]
                    },"11" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"13800000001" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "username",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "password",
                    "value": "123456"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/95adc887-3e85-4566-95d6-d7b6077c8c85",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "action": "jimCount",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      } ]
                    },"11" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"13800000002" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_291")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/95adc887-3e85-4566-95d6-d7b6077c8c85",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "action": "jimCount",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    } ]
                  },"11" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1": {
                      "attributes": {
                        "background-color": "#279610",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#279610",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#279610",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#279610",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#279610",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "font-size": "14.0pt",
                        "font-family": "微软雅黑,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(293 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#279610",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#279610",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#279610",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#279610",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "-pie-background": "#279610",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(293 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "font-size": "14.0pt",
                        "font-family": "微软雅黑,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(293 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(293 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(42 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ null,"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Label_1 span": {
                      "attributes": {
                        "color": "#1F720C",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"请输入手机号码" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Input_4 textarea": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3372d9aa-afd7-4f79-b380-dbda46cdecf9 #s-Input_4 textarea": {
                      "attributes": {
                        "color": "#D9D9D9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": "请输入手机号码"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });