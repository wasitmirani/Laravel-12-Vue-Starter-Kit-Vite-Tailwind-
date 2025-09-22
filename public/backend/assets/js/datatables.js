$(function () {

    // Basic datatable
    const $basicTable = $('#datatable-basic').DataTable({
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
        pageLength: 10,
    });

    // Responsive datatable
    const $responsiveTable = $('#responsiveDataTable').DataTable({
        responsive: true,
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
        pageLength: 10,
    });

    // Responsive modal datatable
    const $responsiveModalTable = $('#responsivemodal-DataTable').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function (row) {
                        const data = row.data();
                        return data[0] + ' ' + data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
        pageLength: 10,
    });

    // File export datatable
    const $fileExportTable = $('#file-export').DataTable({
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
    });

    // Delete row datatable
    const $deleteTable = $('#delete-datatable').DataTable({
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        }
    });

    const $deleteTableBody = $('#delete-datatable tbody');
    const $deleteButton = $('#button');

    $deleteTableBody.on('click', 'tr', function () {
        const $row = $(this);
        if ($row.hasClass('selected')) {
            $row.removeClass('selected');
        } else {
            $deleteTable.$('tr.selected').removeClass('selected');
            $row.addClass('selected');
        }
    });

    $deleteButton.on('click', function () {
        $deleteTable.row('.selected').remove().draw(false);
    });

    // Scroll vertical datatable
    const $scrollTable = $('#scroll-vertical').DataTable({
        scrollY: '265px',
        scrollCollapse: true,
        paging: false,
        scrollX: true,
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
    });

    // Hidden columns datatable
    const $hiddenColumnsTable = $('#hidden-columns').DataTable({
        columnDefs: [
            { target: 2, visible: false, searchable: false },
            { target: 3, visible: false }
        ],
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
        pageLength: 10,
    });

    // Add row datatable
    const $addRowTable = $('#add-row').DataTable({
        language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
        },
    });

    let counter = 1;
    $('#addRow').on('click', function () {
        $addRowTable.row.add([
            counter + '.1',
            counter + '.2',
            counter + '.3',
            counter + '.4',
            counter + '.5'
        ]).draw(false);
        counter++;
    });

});
