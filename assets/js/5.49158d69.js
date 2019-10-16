(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(t,e,a){},226:function(t,e,a){t.exports=a.p+"assets/img/SampleForm.9387c4d4.png"},227:function(t,e,a){t.exports=a.p+"assets/img/Logical-ERD.2053813d.svg"},228:function(t,e,a){"use strict";var i=a(100);a.n(i).a},279:function(t,e,a){"use strict";a.r(e);a(228);var i=a(2),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"normalization"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#normalization","aria-hidden":"true"}},[t._v("#")]),t._v(" Normalization")]),t._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("Draft Content")])]),t._v(" "),i("h2",{attrs:{id:"zero-normal-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#zero-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Zero Normal Form")]),t._v(" "),i("p",[t._v("While Zero-Normal Form ("),i("strong",[t._v("0NF")]),t._v(") isn't regarded by most as an official step, it's nonetheless crucial. The whole goal of this phase is to "),i("em",[t._v("identify all the attributes")]),t._v(" of your entity. In the process of doing this, it's vital that you make sure")]),t._v(" "),i("ul",[i("li",[t._v("your attributes are in their "),i("em",[t._v("atomic")]),t._v(" form (the smallest, most meaningful information),")]),t._v(" "),i("li",[t._v("you have clearly identified the "),i("em",[t._v("repeating groups")]),t._v(" somehow (such as putting them inside curly braces),")]),t._v(" "),i("li",[t._v("you have identified what attribute is acting to "),i("em",[t._v("uniquely identify")]),t._v(" the entity as a whole (usually it's a single attribute), and")]),t._v(" "),i("li",[t._v("you have given a name to your entity")])]),t._v(" "),i("h2",{attrs:{id:"first-normal-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" First Normal Form")]),t._v(" "),i("p",[t._v("First Normal Form ("),i("strong",[t._v("1NF")]),t._v(") is all about "),i("em",[t._v("separating out "),i("strong",[t._v("repeating groups")])]),t._v(" of information.")]),t._v(" "),i("p",[t._v("If you found some repeating groups of data in 0NF, then this is the step where you separate out that repeating information into a new entity. If there are no repeating groups of data, then just state "),i("code",[t._v("No Changes")]),t._v(" for this step.")]),t._v(" "),i("p",[t._v("To document the 1NF changes, do the following:")]),t._v(" "),i("ol",[i("li",[t._v("Rewrite your 0NF entity ommiting the repeating data")]),t._v(" "),i("li",[t._v("Make a copy of the Primary Key attribute from the 0NF entity and place it as the first attribute in the new entity that we are creating. This will be our foreign key to the original entity.")]),t._v(" "),i("li",[t._v("List the repeating group's attributes in our new entity.")]),t._v(" "),i("li",[t._v("Identify the attribute(s) of the repeating group which act to uniquely identify that repeating group; pair that attribute with the foreign key to produce a composite primary key for the new entity.")]),t._v(" "),i("li",[t._v("Give the new entity a name.")])]),t._v(" "),i("h2",{attrs:{id:"second-normal-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#second-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Second Normal Form")]),t._v(" "),i("p",[t._v("Second Normal Form ("),i("strong",[t._v("2NF")]),t._v(") is all about "),i("em",[t._v("separating out "),i("strong",[t._v("partial dependencies")])]),t._v(".")]),t._v(" "),i("ol",[i("li",[t._v("Examine an entity with a composity key, and identify which non-primary key attributes have a dependency on only "),i("em",[t._v("part")]),t._v(" of the composite primary key. These are the attributes that will form our new entity.")]),t._v(" "),i("li",[t._v("Re-write the original entity without those partially dependent attributes.")]),t._v(" "),i("li",[i("em",[t._v("Copy")]),t._v(" down the partial primary key attribute to the new entity; make it the new entity's primary key.")]),t._v(" "),i("li",[t._v("Add the partially dependent attributes to the new entity.")]),t._v(" "),i("li",[t._v("Mark the partial primary key attribute in the original entity as a foreign key to our new entity.")])]),t._v(" "),i("h2",{attrs:{id:"third-normal-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#third-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Third Normal Form")]),t._v(" "),i("p",[t._v("Third Normal Form ("),i("strong",[t._v("3NF")]),t._v(") is all about "),i("em",[t._v("separating out "),i("strong",[t._v("transitive dependencies")])]),t._v(".")]),t._v(" "),i("ol",[i("li",[t._v('Examine all previous entities and look for any "hidden" or "embedded" entities inside the non-primary key attributes. At the same time, see if you can find which attribute uniquely identifies the set of embedded attributes inside that entity.')]),t._v(" "),i("li",[t._v("Separate out this set of attributes representing the embedded entity by making it a distinct entity in its own right. Give this entity a name; be sure to identify this new entity's primary key.")]),t._v(" "),i("li",[t._v("Re-write the original entity, and be sure to retain the attribute that identifies the newly generated entity; this will be your foreign key to that new entity.")])]),t._v(" "),i("h2",{attrs:{id:"keeping-it-all-straight"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#keeping-it-all-straight","aria-hidden":"true"}},[t._v("#")]),t._v(" Keeping it all Straight")]),t._v(" "),i("p",[t._v("A key part of walking through the normalization steps is to "),i("strong",[t._v("be consistent")]),t._v(".")]),t._v(" "),i("ul",[i("li",[t._v("When you give an entity a name, "),i("em",[t._v("keep that same name")]),t._v(" each time you modify the list of attributes in that entity.")]),t._v(" "),i("li",[t._v("When you name your attributes in "),i("strong",[t._v("0NF")]),t._v(", "),i("em",[t._v("key the same names")]),t._v(" for these attributes. If you are placing those attributes in a new entity, "),i("em",[t._v("do "),i("strong",[t._v("not")])]),t._v(" rename the attributes.")]),t._v(" "),i("li",[i("em",[i("strong",[t._v("Never")])]),t._v(" change the primary key from a previously established entity. ("),i("em",[t._v("Note: There are some exceptions to this rule, but as a beginner, changing a primary key is a strong indicator that you're doing it wrong.")]),t._v(")")]),t._v(" "),i("li",[i("em",[t._v("Never")]),t._v(" change the foreign keys from previously established entities when re-writing them as modified entities.")]),t._v(" "),i("li",[t._v("Always self-check the relationship between your entities at each step of the normalization process. Make a quick note of the one-to-many relationships that should form as you create new entities at each step; the cardinal relationship between the entities should make sense.")])]),t._v(" "),i("h2",{attrs:{id:"a-simple-example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-example","aria-hidden":"true"}},[t._v("#")]),t._v(" A Simple Example")]),t._v(" "),i("p",[t._v("Imagine a form that looks like this:")]),t._v(" "),i("p",[i("img",{attrs:{src:a(226),alt:"Sample Form"}})]),t._v(" "),i("h3",{attrs:{id:"_0nf-identifying-metadata"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_0nf-identifying-metadata","aria-hidden":"true"}},[t._v("#")]),t._v(" 0NF - Identifying Metadata")]),t._v(" "),i("p",[i("strong",[t._v("Order:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[t._v("OrderNumber")]),t._v(", Date, CustomerNumber, FirstName, LastName, Address, City, Province, PostalCode, Phone, "),i("b",{staticClass:"rg"},[t._v("ItemNumber, Description, Quantity, Price, Amount")]),t._v(", Subtotal, GST, Total")])]),t._v(" "),i("h3",{attrs:{id:"_1nf-repeating-groups"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1nf-repeating-groups","aria-hidden":"true"}},[t._v("#")]),t._v(" 1NF - Repeating Groups")]),t._v(" "),i("p",[i("strong",[t._v("Order:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[t._v("OrderNumber")]),t._v(", Date, CustomerNumber, FirstName, LastName, Address, City, Province, PostalCode, Phone, Subtotal, GST, Total")])]),t._v(" "),i("p",[i("strong",[t._v("OrderDetails:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[i("i",{staticClass:"fk"},[t._v("OrderNumber")]),t._v(", ItemNumber")]),t._v(", Description, Quantity, Price, Amount")])]),t._v(" "),i("h3",{attrs:{id:"_2nf-partial-dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2nf-partial-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" 2NF - Partial Dependencies")]),t._v(" "),i("p",[i("strong",[t._v("OrderDetails:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[i("i",{staticClass:"fk"},[t._v("OrderNumber")]),t._v(", "),i("i",{staticClass:"fk"},[t._v("ItemNumber")])]),t._v(", Quantity, Price, Amount")])]),t._v(" "),i("p",[i("strong",[t._v("Item:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[i("i",{staticClass:"fk"},[t._v("OrderNumber")]),t._v(", ItemNumber")]),t._v(", Description")])]),t._v(" "),i("h3",{attrs:{id:"_3nf-transitive-dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3nf-transitive-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" 3NF - Transitive Dependencies")]),t._v(" "),i("p",[i("strong",[t._v("Order:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[t._v("OrderNumber")]),t._v(", Date, "),i("i",{staticClass:"fk"},[t._v("CustomerNumber")]),t._v(", Subtotal, GST, Total")])]),t._v(" "),i("p",[i("strong",[t._v("Customer:")]),t._v(" "),i("span",{staticClass:"md"},[i("b",{staticClass:"pk"},[t._v("CustomerNumber")]),t._v(", FirstName, LastName, Address, City, Province, PostalCode, Phone")])]),t._v(" "),i("h3",{attrs:{id:"erd"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#erd","aria-hidden":"true"}},[t._v("#")]),t._v(" ERD")]),t._v(" "),i("p",[i("img",{attrs:{src:a(227),alt:"Simple ERD"}})]),t._v(" "),i("h2",{attrs:{id:"a-complex-example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-complex-example","aria-hidden":"true"}},[t._v("#")]),t._v(" A Complex Example")]),t._v(" "),i("hr")])}),[],!1,null,null,null);e.default=r.exports}}]);