jQuery("#simulation")
  .on("click", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_291")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dce32422-9eb4-4244-a8e4-7181545f268f",
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
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_4",
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
                    "target": "#s-Panel_9"
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
                    "target": "#s-Dynamic_Panel_4",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_3",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_3",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
                    "pause": 1500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_3",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
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
  .on("pageload", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "current_page",
                    "value": "index"
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
  .on("swipeleft", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_4",
                    "value": "2/9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_4",
                    "value": "3/9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
  .on("swiperight", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_4",
                    "value": "1/9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rectangle_4",
                    "value": "2/9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_4",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
  .on("pinchopen", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .pinchopen", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "large"
                      },"0.5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "large"
                      },"0.5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "large"
                      },"0.5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_4",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },{
                          "datatype": "variable",
                          "element": "large"
                        } ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
  .on("pinchclose", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .pinchclose", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-weight"
                        },"0.5" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },"0.5" ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-weight"
                        },"0.5" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },"0.5" ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-weight"
                        },"0.5" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },"0.5" ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "large",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_4",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "large"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_4",
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-weight"
                        },"0.5" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "img-height"
                        },"0.5" ]
                      }
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_4",
                    "width": {
                      "type": "exprvalue",
                      "value": "375"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "370"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
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
  .on("taphold", ".s-10eede6c-7b7b-4579-ab25-c49a2de2bcfb .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
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