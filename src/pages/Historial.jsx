import React from 'react';
import {
    PdfExport, ExcelExport, GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';

import {customersData, customersGrid} from '../data/dummy';
import {Header} from '../components';

const Historial = () => {
    let grid;
    // const selectionsettings = {persistSelection: true};
    const toolbar = ['PdfExport', 'ExcelExport'];
    const toolbarClick = (args) => {
        if (grid) {
            if (args.item.id === 'grid_pdfexport') {
                grid.showSpinner();
                grid.pdfExport();
            } else if (args.item.id === 'grid_excelexport') {
                grid.showSpinner();
                grid.excelExport();
            }
        }
    };
    const pdfExportComplete = () => {
        if (grid) {
            grid.hideSpinner();
        }
    };
    const excelExportComplete = () => {
        if (grid) {
            grid.hideSpinner();
        }
    };

    return (<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Cuenta: 0987654321" title="Movimiento de cuentas"/>
            <GridComponent
                id='grid'
                dataSource={customersData}
                enableHover={false}
                allowPaging
                pageSettings={{pageCount: 5}}
                // selectionSettings={selectionsettings}
                toolbar={toolbar}
                allowPdfExport={true}
                pdfExportComplete={pdfExportComplete}
                excelExportComplete={excelExportComplete}
                allowExcelExport={true}
                // editSettings={editing}
                allowSorting
                toolbarClick={toolbarClick} ref={g => grid = g}
            >
                <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Sort, Filter, ExcelExport, PdfExport]}/>
            </GridComponent>
        </div>);
};

export default Historial;
