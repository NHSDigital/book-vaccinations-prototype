// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/{*splat}', function (req, res, next) {
    // These functions are available on all pages in the prototype.
    // To use call the function inside curly brackets, for example {{ example_function() }}
  
    // Examples of date
    //
    // {{ date() }} shows todays date in the format 5 May 2022
    // {{ date({day: 'numeric', month: 'numeric', year: 'numeric'}) }} shows todays date in the format 05/05/2022
    // {{ date({day: 'numeric'}) }} shows the just the date of date, 5
    // {{ date({day: '2-digit'}) }} shows the date with a leading zero, 05
    // {{ date({day: 'numeric'}, {'day': -1}) }} shows just the date of yesterday
    // {{ date({weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}) }} shows todays date in the format Tuesday, 5 July 2022.
    // {{ date({day: 'numeric', month: 'numeric', year: 'numeric'}, {'day': +2}) }}
    res.locals.date = function (
      format = { day: 'numeric', month: 'long', year: 'numeric' },
      diff = { year: 0, month: 0, day: 0 },
    ) {
      var date = new Date()
      if ('day' in diff) {
        date.setDate(date.getDate() + diff.day)
      }
      if ('month' in diff) {
        date.setMonth(date.getMonth() + diff.month)
      }
      if ('year' in diff) {
        date.setYear(date.getFullYear() + diff.year)
      }
      const formattedDate = new Intl.DateTimeFormat('en-GB', format).format(date)
      return `${formattedDate}`
    }
  
    // Examples of today
    //
    // Useful for pre-populating date fields
    //
    // {{ today().day }} shows just todays day
    // {{ today().month }} shows just todays month as a number
    // {{ today().year }} shows just todays year as a number
    res.locals.today = () => ({
      day: res.locals.date({ day: 'numeric' }),
      month: res.locals.date({ month: 'numeric' }),
      year: res.locals.date({ year: 'numeric' }),
    })
  
    // Examples of yesterday
    //
    // Useful for pre-populating date fields
    //
    // {{ yesterday().day }} shows just todays day
    // {{ yesterday().month }} shows just todays month as a number
    // {{ yesterday().year }} shows just todays year as a number
    res.locals.yesterday = () => ({
      day: res.locals.date({ day: 'numeric' }, (diff = { day: -1 })),
      month: res.locals.date({ month: 'numeric' }, (diff = { day: -1 })),
      year: res.locals.date({ year: 'numeric' }, (diff = { day: -1 })),
    })
  
    next()
  })
  
  // const radioButtonRedirect = require('radio-button-redirect')
  // router.use(radioButtonRedirect)
  
  // Add your routes here
  // Search routes
  
  
  
  
  // STANDARD BRANCHING  
  router.post('/country-answer', function(request, response) {
  
    var country = request.session.data['country']
    if (country == "England"){
        response.redirect("/age")
    } else {
        response.redirect("/ineligible-country")
    }
  })
  
  
  // MULTI QUESTION REDIRECT
  
  router.post('/redirect-test', function(request, response) {
  
    var hso = request.session.data['hso'];//
    var hld = request.session.data['hld'];//
    var hwp = request.session.data['hwp'];//
  
    if (hso === "yes" && hld === "yes" && hwp === "yes"){
      response.redirect("current/all-yes") // Initial redirect
  
    }
    else if (hso === "no" && hld === "no" && hwp === "no"){
      response.redirect("current/all-no") // Initial redirect
  
    }
  
    else if (hso === "yes" && hld === "no" && hwp === "yes"){
      response.redirect("current/all-yes") // Initial redirect
  
    }
    
  })
  // END

// RSV routes //

router.get(/nhsNumberRadio/, function (req, res) {
    if (req.query.radioGroup === "yes" ) {
        res.redirect('nhs-no');
        }
    else {
        res.redirect('name');
        }
    });

    router.get(/confirmationMessages/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('contact-details');
            }
        else {
            res.redirect('contact-no');
            }
        });

        router.get(/areYouSure/, function (req, res) {
            if (req.query.radioGroup === "yes" ) {
                res.redirect('booking-complete');
                }
            else {
                res.redirect('contact-details');
                }
            });

            router.get(/appConfirmationMessages/, function (req, res) {
                if (req.query.radioGroup === "yes" ) {
                    res.redirect('confirm-details');
                    }
                else {
                    res.redirect('contact-no');
                    }
                });

                router.get(/contactDetailsCorrect/, function (req, res) {
                    if (req.query.radioGroup === "yes" ) {
                        res.redirect('booking-complete');
                        }
                    else {
                        res.redirect('contact-details');
                        }
                    });

                    router.get(/manageAppointment/, function (req, res) {
                        if (req.query.radioGroup === "change" ) {
                            res.redirect('appt-postcode');
                            }
                        else if (req.query.radioGroup === "cancel" ) {
                            res.redirect('cancel-sure');
                            }
                        else {
                                res.redirect('index');
                                }
                        });

                        router.get(/cancelAppointment/, function (req, res) {
                            if (req.query.radioGroup === "yes" ) {
                                res.redirect('appt-cancelled');
                                }
                            else {
                                res.redirect('manage-appt');
                                }
                            });

// covid routes //

router.get(/immuneSystem/, function (req, res) {
    if (req.query.radioGroup === "no" ) {
        res.redirect('cannot-book');
        }
    else {
        res.redirect('co-admin');
        }
    });


    router.get(/confirmChange/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('confirmation-messages');
            }
        else {
            res.redirect('manage-appt');
            }
        });
    

// flu routes //

router.get(/eligibleFlu/, function (req, res) {
    if (req.query.radioGroup === "no" ) {
        res.redirect('cannot-book');
        }
    else {
        res.redirect('choose-appt');
        }
    });

    router.get(/coAdmin/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('coadmin/appt-postcode');
            }
        else {
            res.redirect('appt-postcode');
            }
        });

        router.get(/detailsNoMatch/, function (req, res) {
            if (req.query.radioGroup === "nhsnumber" ) {
                res.redirect('book/nhs-no');
                }
            else if (req.query.radioGroup === "name" ) {
                res.redirect('book/name');
                }
            else {
                    res.redirect('book/index');
                    }
            });

// RSV pregnancy SR //

router.get(/rsvPregnant/, function (req, res) {
    if (req.query.radioGroup === "yes" ) {
        res.redirect('choose-appt');
        }
    else {
        res.redirect('../ineligible-pregnancy');
        }
    });

    router.get(/jointPregnant/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('add-person2');
            }
        else {
            res.redirect('../ineligible-pregnancy');
            }
        });


// RSV V-7 - joint booking routes //

router.get(/jointBooking/, function (req, res) {
    if (req.query.radioGroup === "yes" ) {
        res.redirect('joint/nhs-no-radio');
        }
    else {
        res.redirect('nhs-no-radio');
        }
    });

    router.get(/addPerson/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('nhs-no-radio2');
            }
        else {
            res.redirect('../choose-appt');
            }
        });

        
            router.get(/jointAreYouSure/, function (req, res) {
                if (req.query.radioGroup === "yes" ) {
                    res.redirect('booking-complete');
                    }
                else {
                    res.redirect('contact-details');
                    }
                });

        router.get(/jointNhsNumberRadio/, function (req, res) {
            if (req.query.radioGroup === "yes" ) {
                res.redirect('nhs-no2');
                }
            else {
                res.redirect('name2');
                }
            });

            router.get(/pregnantJointBooking/, function (req, res) {
                if (req.query.radioGroup === "yes" ) {
                    res.redirect('nhs-no-radio');
                    }
                else {
                    res.redirect('pregnant/nhs-no-radio');
                    }
                });

                router.get(/rsvJointBookingPregnant/, function (req, res) {
                    if (req.query.radioGroup === "yes" ) {
                        res.redirect('add-person');
                        }
                    else {
                        res.redirect('ineligible-pregnancy');
                        }
                    });

                    router.get(/pregnantCoAdmin/, function (req, res) {
                        if (req.query.radioGroup === "yes" ) {
                            res.redirect('co-admin/appt-postcode');
                            }
                        else {
                            res.redirect('appt-postcode');
                            }
                        });
                        
    

                            router.get(/chooseFirstSlot/, function (req, res) {
                                if (req.query.time === "am" ) {
                                    res.redirect('second-slot-8am');
                                    }
                                else if (req.query.time === ":10am" ) {
                                    res.redirect('second-slot-810am');
                                    }
                                else if (req.query.time === ":20am" ) {
                                    res.redirect('second-slot-820am');
                                    }
                                else if (req.query.time === ":30am" ) {
                                    res.redirect('second-slot-830am');
                                    }
                                else if (req.query.time === ":40am" ) {
                                    res.redirect('second-slot-840am');
                                    }
                                else if (req.query.time === ":50am" ) {
                                    res.redirect('second-slot-850am');
                                    }
                                });

                                router.get(/choosePmSlot/, function (req, res) {
                                    if (req.query.time === "pm" ) {
                                        res.redirect('second-slot-pm');
                                        }
                                    else if (req.query.time === ":10pm" ) {
                                        res.redirect('second-slot-10pm');
                                        }
                                    else if (req.query.time === ":20pm" ) {
                                        res.redirect('second-slot-20pm');
                                        }
                                    else if (req.query.time === ":30pm" ) {
                                        res.redirect('second-slot-30pm');
                                        }
                                    else if (req.query.time === ":40pm" ) {
                                        res.redirect('second-slot-40pm');
                                        }
                                    else if (req.query.time === ":50pm" ) {
                                        res.redirect('second-slot-50pm');
                                        }
                                    });
    
    

                                router.get(/chooseHour/, function (req, res) {
                                    if (req.query.hour === "8" ) {
                                        res.redirect('choose-time-am');
                                        }
                                    else if (req.query.hour === "9" ) {
                                        res.redirect('choose-time-am');
                                        }
                                    else if (req.query.hour === "10" ) {
                                        res.redirect('choose-time-am');
                                        }
                                    else {
                                        res.redirect('choose-time-pm');
                                        }
                                    });

                                    router.get(/manageJointAppointment/, function (req, res) {
                                        if (req.query.radioGroup === "change" ) {
                                            res.redirect('appt-postcode');
                                            }
                                        else if (req.query.radioGroup === "cancel" ) {
                                            res.redirect('cancel-sure');
                                            }
                                        else {
                                                res.redirect('index');
                                                }
                                        });
        
                                        router.get(/confirmJointChange/, function (req, res) {
                                            if (req.query.radioGroup === "yes" ) {
                                                res.redirect('confirmation-messages');
                                                }
                                            else {
                                                res.redirect('../manage-appt');
                                                }
                                            });

                                            router.get(/cancelJointAppointment/, function (req, res) {
                                                if (req.query.radioGroup === "yes" ) {
                                                    res.redirect('appt-cancelled');
                                                    }
                                                else {
                                                    res.redirect('../manage-appt');
                                                    }
                                                });

// Covid v2 - joint booking routes //

router.get(/jointImmuneSystem/, function (req, res) {
    if (req.query.radioGroup === "no" ) {
        res.redirect('cannot-book');
        }
    else {
        res.redirect('add-person');
        }
    });

    router.get(/twoJointImmuneSystem/, function (req, res) {
        if (req.query.radioGroup === "no" ) {
            res.redirect('cannot-book');
            }
        else {
            res.redirect('add-person2');
            }
        });
    
        router.get(/noMatchJointBooking/, function (req, res) {
            if (req.query.radioGroup === "nhsnumber" ) {
                res.redirect('book/joint/nhs-no2');
                }
            else if (req.query.radioGroup === "name" ) {
                res.redirect('book/joint/name2');
                }
            else if (req.query.radioGroup === "single" ) {
                    res.redirect('book/appt-postcode');
                    }
             else {
                    res.redirect('book/index');
                    }
            });

            router.get(/jointIneligible/, function (req, res) {
                if (req.query.radioGroup === "joint" ) {
                    res.redirect('book/joint/nhs-no-radio2');
                    }
                else if (req.query.radioGroup === "single" ) {
                        res.redirect('book/appt-postcode');
                        }
                else {
                    res.redirect('book/index');
                    }
                });
        

 // A/W 25/26 routes //

 router.get(/newAreYouSure/, function (req, res) {
    if (req.query.radioGroup === "yes" ) {
        res.redirect('booking-complete');
        }
    else {
        res.redirect('contact-details');
        }
    });

    router.get(/proxyBooker/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('nhs-no-radio');
            }
        else {
            res.redirect('proxy/nhs-no-radio');
            }
        });
    
        router.get(/springImmuneSystem/, function (req, res) {
            if (req.query.radioGroup === "no" ) {
                res.redirect('cannot-book');
                }
            else {
                res.redirect('choose-appt');
                }
            });

            router.get(/newNhsNumberRadio/, function (req, res) {
                if (req.query.radioGroup === "yes" ) {
                    res.redirect('nhs-no');
                    }
                else {
                    res.redirect('postcode');
                    }
                });

                        router.get(/proxyDetailsNoMatch/, function (req, res) {
            if (req.query.radioGroup === "nhsnumber" ) {
                res.redirect('book/name');
                }
            else {
                    res.redirect('book/index');
                    }
            });

            


// routing for contact method

  router.post('/apply/covid-contact-method', (req, res) => {
    const data = req.session.data
    const checkboxOption = req.session.data.checkboxOption
    let nextPage

    if (req.session.data.checkboxOption.includes('landline')) {
      nextPage = '/autumn-winter25/landline'
    } else {
      nextPage = '/autumn-winter25/cya-contact'
    }

    res.redirect(nextPage)
  })
  
  router.post('/contact-method-rsv', (req, res) => {
    const data = req.session.data
    const checkboxOption = req.session.data.checkboxOption
    let nextPage

    if (req.session.data.checkboxOption.includes('landline')) {
      nextPage = '/autumn-winter25/rsv-aw25/book/landline'
    } else {
      nextPage = '/autumn-winter25/rsv-aw25/book/cya-contact'
    }

    res.redirect(nextPage)
  })

    router.post('/manage-contact-method-rsv', (req, res) => {
    const data = req.session.data
    const checkboxOption = req.session.data.checkboxOption
    let nextPage

    if (req.session.data.checkboxOption.includes('landline')) {
      nextPage = '/autumn-winter25/rsv-aw25/manage/landline'
    } else {
      nextPage = '/autumn-winter25/rsv-aw25/manage/cya-contact'
    }

    res.redirect(nextPage)
  })



    router.get(/confirmPerson/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('flu-v3/book/choose-appt');
            }
        else {
            res.redirect('flu-v3/book/name');
            }
        });


            router.get(/twoDoseFlu/, function (req, res) {
        if (req.query.radioGroup === "yes" ) {
            res.redirect('choose-appt');
            }
        else {
            res.redirect('second-dose-ko');
            }
        });
            


// MYA routes //

router.get(/addSessionType/, function (req, res) {
    if (req.query.radioGroup === "Repeat" ) {
        res.redirect('availability-date-range');
    }
    else {
        res.redirect('session-date');
    }
});


        
module.exports = router;
