import React from "react";
import jsPDF from "jspdf";

class InvoiceDocument extends React.Component {
  generatePDF = () => {
    const doc = new jsPDF();

    // Add more content here, like customer details, items, totals, etc.
    doc.text("Customer Name: John Doe", 10, 30);
    doc.text("Item 1: Product A - $10", 10, 50);
    doc.text("Item 2: Product B - $20", 10, 70);
    doc.text("Total: $30", 10, 90);

    // Save the PDF
    doc.save("invoiceDocument.pdf");
  };

  render() {
    return (
      <div>
        <button
          onClick={this.generatePDF}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Generate Invoice
        </button>
        <div className="invoice-content">
          <h2 className="text-xl font-bold mb-4">Invoice</h2>
          {/* Add more content here */}
        </div>
        <iframe src="invoiceDocument.pdf" width="100%" height="600px"></iframe>
      </div>
    );
  }
}

export default InvoiceDocument;
