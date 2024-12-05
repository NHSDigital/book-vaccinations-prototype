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
            res.redirect('appt-postcode');
            }
        });

        router.post(/jointConfirmationMessages/, function (req, res) {
            var messages = req.session.data['messages']
            if (messages.includes("jean")) {
                res.redirect('contact-details-1');
                }
            else if (messages.includes("roger")) {
                res.redirect('contact-details-2');
                }
            else {
                res.redirect('contact-no');
                }
            });
        
            router.get(/jointAreYouSure/, function (req, res) {
                if (req.query.radioGroup === "yes" ) {
                    res.redirect('booking-complete');
                    }
                else {
                    res.redirect('confirmation-messages');
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
                        
                        
module.exports = router;
