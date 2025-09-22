(function () {
    "use strcit";

    /* default slider */
    const slider = document.getElementById('slider');
    if(slider) {
        noUiSlider.create(slider, {
            start: [30, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* fit handle slider */
    const slider2 = document.getElementById('slider-fit');
    if(slider2) {
    noUiSlider.create(slider2, {
        start: [50, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 100
        }
    });
}

    /* round slider */
    const slider3 = document.getElementById('slider-round');
    if(slider3) {
        noUiSlider.create(slider3, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* primary colored slider */
    const sliderPrimaryColored = document.getElementById('primary-colored-slider');
    if(sliderPrimaryColored) {
        noUiSlider.create(sliderPrimaryColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* secondary colored slider */
    const sliderSecondaryColored = document.getElementById('secondary-colored-slider');
    if(sliderSecondaryColored) {
        noUiSlider.create(sliderSecondaryColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* warning colored slider */
    const sliderWarningColored = document.getElementById('warning-colored-slider');
    if(sliderWarningColored) {
        noUiSlider.create(sliderWarningColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* info colored slider */
    const sliderInfoColored = document.getElementById('info-colored-slider');
    if(sliderInfoColored) {
        noUiSlider.create(sliderInfoColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* success colored slider */
    const sliderSuccessColored = document.getElementById('success-colored-slider');
    if(sliderSuccessColored) {
        noUiSlider.create(sliderSuccessColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* danger colored slider */
    const sliderDangerColored = document.getElementById('danger-colored-slider');
    if(sliderDangerColored) {
        noUiSlider.create(sliderDangerColored, {
            start: [50],
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* square slider */
    const squareslider = document.getElementById('slider-square');
    if(squareslider) {
        noUiSlider.create(squareslider, {
            start: [40],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* color picker slider */
    const resultElement = document.getElementById('result');
    const sliders = document.querySelectorAll('.sliders');
    const colors = [0, 0, 0];
    if (sliders) {

        sliders.forEach(function (slider, index) {
            noUiSlider.create(slider, {
                start: 127,
                connect: [true, false],
                orientation: "vertical",
                range: {
                    'min': 0,
                    'max': 255
                },
                format: wNumb({
                    decimals: 0
                })
            });
            // Bind the color changing function to the update event.
            slider.noUiSlider.on('update', function () {
                colors[index] = slider.noUiSlider.get();
                const color = 'rgb(' + colors.join(',') + ')';
                if(resultElement) {
                    resultElement.style.background = color;
                    resultElement.style.color = color;
                }
            });
        });
    }

    /* locking sliders */
    let lockedState = false;
    const lockedSlider = false;
    let lockedValues = [60, 80];

    const lockingslider1 = document.getElementById('slider1');
    const lockingslider2 = document.getElementById('slider2');

    const lockButton = document.getElementById('lockbutton');
    const slider1Value = document.getElementById('slider1-span');
    const slider2Value = document.getElementById('slider2-span');
    // When the button is clicked, the locked state is inverted.
    if (lockButton) {
        lockButton.addEventListener('click', function () {
                lockedState = !lockedState;
                this.textContent = lockedState ? 'unlock' : 'lock';
        });
    }
    function crossUpdate(value, lockingslider1) {

        // If the sliders aren't interlocked, don't
        // cross-update.
        if (!lockedState) return;

        // Select whether to increase or decrease
        // the other slider value.
        const a = lockingslider1 === slider ? 0 : 1;

        // Invert a
        const b = a ? 0 : 1;

        // Offset the slider value.
        value -= lockedValues[b] - lockedValues[a];

        // Set the value
        lockingslider1.noUiSlider.set(value);
    }
    if (lockingslider1) {

        noUiSlider.create(lockingslider1, {
            start: 60,
    
            // Disable animation on value-setting,
            // so the sliders respond immediately.
            animate: false,
            range: {
                min: 50,
                max: 100
            }
        });
        lockingslider1.noUiSlider.on('update', function (values, handle) {
            slider1Value.innerHTML = values[handle];
        });
        lockingslider1.noUiSlider.on('change', setLockedValues);
        lockingslider1.noUiSlider.on('slide', function (values, handle) {
            crossUpdate(values[handle], lockingslider2);
        });
    }
    if (lockingslider2) {
        noUiSlider.create(lockingslider2, {
            start: 80,
            animate: false,
            range: {
                min: 50,
                max: 100
            }
        });
        lockingslider2.noUiSlider.on('update', function (values, handle) {
            slider2Value.innerHTML = values[handle];
        });
        lockingslider2.noUiSlider.on('change', setLockedValues);
        lockingslider2.noUiSlider.on('slide', function (values, handle) {
            crossUpdate(values[handle], lockingslider1);
        });
    }
    function setLockedValues() {
        lockedValues = [
            Number(lockingslider1.noUiSlider.get()),
            Number(lockingslider2.noUiSlider.get())
        ];
    }

    //merging tooltips slider
    const mergingTooltipSlider = document.getElementById('merging-tooltips');
    if(mergingTooltipSlider) {
        noUiSlider.create(mergingTooltipSlider, {
            start: [20, 80],
            connect: true,
            tooltips: [true, true],
            range: {
                'min': 0,
                'max': 100
            }
        });
        mergeTooltips(mergingTooltipSlider, 15, ' - ');
    }
    /**
 * @param slider HtmlElement with an initialized slider
 * @param threshold Minimum proximity (in percentages) to merge tooltips
 * @param separator String joining tooltips
 */
    function mergeTooltips(slider, threshold, separator) {
        const textIsRtl = getComputedStyle(slider).direction === 'rtl';
        const isRtl = slider.noUiSlider.options.direction === 'rtl';
        const isVertical = slider.noUiSlider.options.orientation === 'vertical';
        const tooltips = slider.noUiSlider.getTooltips();
        const origins = slider.noUiSlider.getOrigins();

        // Move tooltips into the origin element. The default stylesheet handles this.
        tooltips.forEach(function (tooltip, index) {
            if (tooltip) {
                origins[index].appendChild(tooltip);
            }
        });
        slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {
            const pools = [[]];
            const poolPositions = [[]];
            const poolValues = [[]];
            let atPool = 0;
            // Assign the first tooltip to the first pool, if the tooltip is configured
            if (tooltips[0]) {
                pools[0][0] = 0;
                poolPositions[0][0] = positions[0];
                poolValues[0][0] = values[0];
            }
            for (let i = 1; i < positions.length; i++) {
                if (!tooltips[i] || (positions[i] - positions[i - 1]) > threshold) {
                    atPool++;
                    pools[atPool] = [];
                    poolValues[atPool] = [];
                    poolPositions[atPool] = [];
                }
                if (tooltips[i]) {
                    pools[atPool].push(i);
                    poolValues[atPool].push(values[i]);
                    poolPositions[atPool].push(positions[i]);
                }
            }
            pools.forEach(function (pool, poolIndex) {
                const handlesInPool = pool.length;

                for (let j = 0; j < handlesInPool; j++) {
                    const handleNumber = pool[j];

                    if (j === handlesInPool - 1) {
                        let offset = 0;

                        poolPositions[poolIndex].forEach(function (value) {
                            offset += 1000 - value;
                        });

                        const direction = isVertical ? 'bottom' : 'right';
                        const last = isRtl ? 0 : handlesInPool - 1;
                        const lastOffset = 1000 - poolPositions[poolIndex][last];
                        offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;

                        // Center this tooltip over the affected handles
                        tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
                        tooltips[handleNumber].style.display = 'block';
                        tooltips[handleNumber].style[direction] = offset + '%';
                    } else {
                        // Hide this tooltip
                        tooltips[handleNumber].style.display = 'none';
                    }
                }
            });
        });
    }

    /* non linear slider */
    const nonLinearSlider = document.getElementById('nonlinear');
    if(nonLinearSlider) {

        noUiSlider.create(nonLinearSlider, {
            connect: true,
            behaviour: 'tap',
            start: [500, 4000],
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [0],
                '10%': [500, 500],
                '50%': [4000, 1000],
                'max': [10000]
            }
        });
        const nodes = [
            document.getElementById('lower-value'), // 0
            document.getElementById('upper-value')  // 1
        ];
        // Display the slider value and how far the handle moved
        // from the left edge of the slider.
        nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
            nodes[handle].innerHTML = values[handle] + ', ' + positions[handle].toFixed(2) + '%';
        });
    
    }
    /* sliding handles tooltips */
    const tooltipSlider = document.getElementById('slider-hide');
    if(tooltipSlider) {
        noUiSlider.create(tooltipSlider, {
            start: [30, 80],
            tooltips: true,
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    /* colored connect elements */
    const colorslider = document.getElementById("color-slider");
    if(colorslider) {
        noUiSlider.create(colorslider, {
            start: [20, 150, 220, 270],
            connect: [false, true, true, true, true],
            range: {
                min: [0],
                max: [300]
            }
        });
        const connect = slider.querySelectorAll('.noUi-connect');
        const classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
        for (let i = 0; i < connect.length; i++) {
            connect[i].classList.add(classes[i]);
        }
    }

    /* slider toggle */
    const toggleSlider = document.getElementById('slider-toggle');
    if(toggleSlider) {
        noUiSlider.create(toggleSlider, {
            orientation: "vertical",
            start: 0,
            range: {
                'min': [0, 1],
                'max': 1
            },
            format: wNumb({
                decimals: 0
            })
        });
        toggleSlider.noUiSlider.on('update', function (values, handle) {
            if (values[handle] === '1') {
                toggleSlider.classList.add('off');
            } else {
                toggleSlider.classList.remove('off');
            }
        });
    }

    /* moving slider with clicking pips */
    const pipsSlider = document.getElementById('slider-pips');
    if(pipsSlider) {
        noUiSlider.create(pipsSlider, {
            range: {
                min: 0,
                max: 100
            },
            start: [50],
            pips: { mode: 'count', values: 5 }
        });
        const pips = pipsSlider.querySelectorAll('.noUi-value');
        function clickOnPip() {
            const value = Number(this.getAttribute('data-value'));
            pipsSlider.noUiSlider.set(value);
        }
        for (let i = 0; i < pips.length; i++) {
            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }
    }

    /* slider with soft limits */
    const softSlider = document.getElementById('soft');
    if(softSlider) {
        noUiSlider.create(softSlider, {
            start: 50,
            range: {
                min: 0,
                max: 100
            },
            pips: {
                mode: 'values',
                values: [20, 80],
                density: 4
            }
        });
        softSlider.noUiSlider.on('change', function (values, handle) {
            if (values[handle] < 20) {
                softSlider.noUiSlider.set(20);
            } else if (values[handle] > 80) {
                softSlider.noUiSlider.set(80);
            }
        });
    }
})();