// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

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
        res.redirect('what-you-can-bring');
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
        res.redirect('what-you-can-bring');
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