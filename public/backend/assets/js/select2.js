(function () {
  "use strict"
  
  const $basicSingle = $('.js-example-basic-single');
  const $basicMultiple = $('.js-example-basic-multiple');
  const $placeholderSingle = $(".js-example-placeholder-single");
  const $placeholderMultiple = $(".js-example-placeholder-multiple");
  const $templating = $(".js-example-templating");
  const $clientSearch = $(".select2-client-search");
  const $multipleLimitMax = $(".js-example-basic-multiple-limit-max");
  const $disabledSingle = $(".js-example-disabled");
  const $disabledMulti = $(".js-example-disabled-multi");
  const $enableBtn = $(".js-programmatic-enable");
  const $disableBtn = $(".js-programmatic-disable");

    /* basic select2 */
    $basicSingle.select2();

    /* multiple select */
    $basicMultiple.select2();

    /* single select with placeholder */
    $placeholderSingle.select2({
        placeholder: "Select a state",
        allowClear: true,
        // dir: "ltr"
    });

    /* multiple select with placeholder */
    $placeholderMultiple.select2({
        placeholder: "Select a state"
    });

    /* templating */
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        const  baseUrl = "../assets/images/faces/select2";
        const $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" > ' + state.text + '</span>'
        );
        return $state;
    };
    $templating.select2({
        templateResult: formatState,
        templateSelection: formatState, // Use the same format for the selected option,
        placeholder: "Choose Customer"
    });

    /* with images */
    function selectClient(client) {
        if (!client.id) { return client.text; }
        const $client = $(
            '<span><img src="../assets/images/faces/select2/' + client.element.value.toLowerCase() + '.jpg" /> '
            + client.text + '</span>'
        );
        return $client;
    };
    $clientSearch.select2({
        templateResult: selectClient,
        templateSelection: selectClient,
        placeholder: "Choose Client",
        escapeMarkup: function (m) { return m; }
    });

    /* max selections limiting */
        $multipleLimitMax.select2({
            maximumSelectionLength: 3,
            placeholder: "Choose Person"
        });

    /* Disablind select 2 controls */
    $disabledSingle.select2();
    $disabledMulti.select2();

    $enableBtn.on("click", function () {
    $disabledSingle.prop("disabled", false);
    $disabledMulti.prop("disabled", false);
    });
    $disableBtn.on("click", function () {
        $disabledSingle.prop("disabled", true);
        $disabledMulti.prop("disabled", true);
    });

    /*  for rtl */
    document.querySelector("#switcher-rtl").addEventListener("click",()=>{
        $basicSingle.select2();
        $placeholderSingle.select2({
            placeholder: "Select a state",
            allowClear: true,
            dir: "rtl"
        });


        /* basic select2 */
    $basicSingle.select2({
        dir: "rtl"
    });

    /* multiple select */
    $basicMultiple.select2({
        dir: "rtl"
    });

    /* single select with placeholder */
    $placeholderSingle.select2({
        placeholder: "Select a state",
        allowClear: true,
        dir: "rtl"
    });

    /* multiple select with placeholder */
    $placeholderMultiple.select2({
        placeholder: "Select a state",
        dir: "rtl"
    });

    /* templating */
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        const baseUrl = "../assets/images/faces/select2";
        const $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    $templating.select2({
        templateResult: formatState,
        placeholder: "Choose Customer",
        dir: "rtl"
    });

    /* with images */
    function selectClient(client) {
        if (!client.id) { return client.text; }
        const $client = $(
            '<span><img src="../assets/images/faces/select2/' + client.element.value.toLowerCase() + '.jpg" /> '
            + client.text + '</span>'
        );
        return $client;
    };
    $clientSearch.select2({
        templateResult: selectClient,
        templateSelection: selectClient,
        placeholder: "Choose Client",
        dir: "rtl",
        escapeMarkup: function (m) { return m; }
    });

    /* max selections limiting */
    $multipleLimitMax.select2({
        maximumSelectionLength: 3,
        placeholder: "Choose Person",
        dir: "rtl"
    });

    /* Disablind select 2 controls */
    $disabledSingle.select2({
        dir: "rtl"
    });
    $disabledMulti.select2({
        dir: "rtl"
    });

    $enableBtn.on("click", function () {
        $disabledSingle.prop("disabled", false);
        $disabledMulti.prop("disabled", false);
    });
    $disableBtn.on("click", function () {
        $disabledSingle.prop("disabled", true);
        $disabledMulti.prop("disabled", true);
    });
        
    })
  
    /*for ltr */
    document.querySelector("#switcher-ltr").addEventListener("click",()=>{
        /* single select with placeholder */
        $placeholderSingle.select2({
            placeholder: "Select a state",
            allowClear: true,
            dir: "ltr"
        });

        /* multiple select */
        $basicMultiple.select2({
            dir: "ltr"
        });

        /* basic select2 */
        $basicSingle.select2({
            dir: "ltr"
        });

        /* multiple select with placeholder */
        $placeholderMultiple.select2({
            placeholder: "Select a state",
            dir: "ltr"
        });
        /* templating */
        $templating.select2({
            dir: "ltr"
        });
        $clientSearch.select2({
            dir: "ltr",
        });
        /* max selections limiting */
        $multipleLimitMax.select2({
            maximumSelectionLength: 3,
            placeholder: "Choose Person",
            dir: "ltr"
        });
        /* Disablind select 2 controls */
        $disabledSingle.select2({
            dir: "ltr"
        });
        $disabledMulti.select2({
            dir: "ltr"
        });
    })

    /*for Reset */
    document.querySelector("#reset-all").addEventListener("click",()=>{
        /* single select with placeholder */
        $placeholderSingle.select2({
            placeholder: "Select a state",
            allowClear: true,
            dir: "ltr"
        });

        /* multiple select */
        $basicMultiple.select2({
            dir: "ltr"
        });

        /* basic select2 */
        $basicSingle.select2({
            dir: "ltr"
        });

        /* multiple select with placeholder */
        $placeholderMultiple.select2({
            placeholder: "Select a state",
            dir: "ltr"
        });
        /* templating */
        $templating.select2({
            dir: "ltr"
        });
        $clientSearch.select2({
            dir: "ltr",
        });
        /* max selections limiting */
        $multipleLimitMax.select2({
            maximumSelectionLength: 3,
            placeholder: "Choose Person",
            dir: "ltr"
        });
        /* Disablind select 2 controls */
        $disabledSingle.select2({
            dir: "ltr"
        });
        $disabledMulti.select2({
            dir: "ltr"
        });
    })

})();