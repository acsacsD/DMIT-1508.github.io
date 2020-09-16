(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{339:function(e,r,t){e.exports=t.p+"assets/img/ESP-4-Cheque-Register-View.b55c141a.png"},386:function(e,r,t){e.exports=t.p+"assets/img/ESP-4-ERD-Cheque-Register-View.5dce58fc.png"},462:function(e,r,t){"use strict";t.r(r);var a=t(27),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"esp-document-4-payments-to-suppliers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp-document-4-payments-to-suppliers","aria-hidden":"true"}},[e._v("#")]),e._v(" ESP Document 4 - Payments to Suppliers")]),e._v(" "),a("h2",{attrs:{id:"cheque-register"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cheque-register","aria-hidden":"true"}},[e._v("#")]),e._v(" Cheque Register")]),e._v(" "),a("p",[e._v("The Cheque Register and its resulting tables are based on the following form (taken from the original documentation).")]),e._v(" "),a("p",[a("img",{attrs:{src:t(339),alt:""}})]),e._v(" "),a("p",[e._v("This form was analyzed according to the rules of 0NF (Zero-Normal Form), 1NF (First-Normal Form), 2NF (Second-Normal Form), and 3NF (Third-Normal Form).")]),e._v(" "),a("h3",{attrs:{id:"_0nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF")]),e._v(" "),a("p",[e._v("After performing Zero-Normal Form, a single table was generated: "),a("strong",[e._v("ChequeRegister")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("ChequeRegister")]),e._v(" ("),a("b",{staticClass:"rg"},[e._v("Date, ChequeNumber, ChequeAmount, SupplierNumber, SupplierName, "),a("b",{staticClass:"rg"},[e._v("PurchaseOrderNumber, PODate")])]),e._v(")")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that there are two sets of repeating groups - one within the other. Also note that there is nothing outside of both repeating groups. When there is no information outside of all the repeating groups, and there is only one outermost repeating group, you can effectivly ignore that as a repeating group; the outermost curly braces become a lot like extra parenthesis in an arithmetic expression: "),a("code",[e._v("(2 * (3 + 4))")]),e._v(" is the same as writing "),a("code",[e._v("2 * (3 + 4)")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("ChequeRegister")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("ChequeNumber")]),e._v(", Date, ChequeAmount, SupplierNumber, SupplierName, "),a("b",{staticClass:"rg"},[e._v("PurchaseOrderNumber, PODate")]),e._v(")")]),e._v(" "),a("h3",{attrs:{id:"_1nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF")]),e._v(" "),a("p",[e._v("After performing First-Normal Form, a single table was generated: "),a("strong",[e._v("PurchaseOrderPayment")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("ChequeRegister")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("ChequeNumber")]),e._v(", Date, ChequeAmount, SupplierNumber, SupplierName)")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrderPayment")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("ChequeNumber")]),e._v(", PurchaseOrderNumber")]),e._v(", PODate)")]),e._v(" "),a("h3",{attrs:{id:"_2nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF")]),e._v(" "),a("p",[e._v("After performing Second-Normal Form, a single table was generated: "),a("strong",[e._v("PurchaseOrder")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrderPayment")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("ChequeNumber")]),e._v(", "),a("u",{staticClass:"fk"},[e._v("PurchaseOrderNumber")])]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrder")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("PurchaseOrderNumber")]),e._v(", PODate)")]),e._v(" "),a("h3",{attrs:{id:"_3nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF")]),e._v(" "),a("p",[e._v("After performing Third-Normal Form, a single table was generated: "),a("strong",[e._v("Supplier")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("ChequeRegister")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("ChequeNumber")]),e._v(", Date, ChequeAmount, "),a("u",{staticClass:"fk"},[e._v("SupplierNumber")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Supplier")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("SupplierNumber")]),e._v(", SupplierName)")]),e._v(" "),a("h3",{attrs:{id:"erd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erd","aria-hidden":"true"}},[e._v("#")]),e._v(" ERD")]),e._v(" "),a("p",[a("img",{attrs:{src:t(386),alt:""}})])])}),[],!1,null,null,null);r.default=s.exports}}]);