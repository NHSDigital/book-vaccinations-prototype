// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

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
            res.redirect('../appt-postcode');
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
        res.redirect('cya');
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
    

module.exports = router;
