// Auto generated by Testing Dashboard
// File        : scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest06.js
// Timestamp   : 2015-11-24 14:31:46
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function HatchFromSelectionTest06() {
    TdbTest.call(this, 'scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest06.js');
}

HatchFromSelectionTest06.prototype = new TdbTest();

HatchFromSelectionTest06.prototype.test00 = function() {
    qDebug('running HatchFromSelectionTest06.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Hatch/HatchFromSelection/Tests/data/hatch_block_lines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::SelectToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::SelectToolsPanel::SelectAllButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::SelectToolsPanel::BackButton');
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Type', 'HatchPattern')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Pattern', 'ANSI31')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Scale', '1.0')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Angle', '0.0')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::HatchFromSelectionButton');
    this.setZoom(15.67382920110193, new RVector(-32.8702, -17.4001, 0, true));
    var p = new RVector(68.98137, 27.033957);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('HatchFromSelectionTest06_000.dxf');
    this.tearDown();
    qDebug('finished HatchFromSelectionTest06.test00()');
};

