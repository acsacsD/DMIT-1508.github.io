(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{185:function(t,e,i){"use strict";var a=i(99);i.n(a).a},186:function(t,e,i){t.exports=i.p+"assets/img/Logical-ERD.2053813d.svg"},187:function(t,e,i){t.exports=i.p+"assets/img/SampleForm.9387c4d4.png"},310:function(t,e,i){"use strict";i.r(e);i(185);var a=i(2),r=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"normalization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalization","aria-hidden":"true"}},[t._v("#")]),t._v(" Normalization")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("Draft Content")])]),t._v(" "),a("h2",{attrs:{id:"zero-normal-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zero-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Zero Normal Form")]),t._v(" "),a("p",[t._v("While Zero-Normal Form ("),a("strong",[t._v("0NF")]),t._v(") isn't regarded by most as an official step, it's nonetheless crucial. The whole goal of this phase is to "),a("em",[t._v("identify all the attributes")]),t._v(" of your entity. In the process of doing this, it's vital that you make sure")]),t._v(" "),a("ul",[a("li",[t._v("your attributes are in their "),a("em",[t._v("atomic")]),t._v(" form (the smallest, most meaningful information),")]),t._v(" "),a("li",[t._v("you have clearly identified the "),a("em",[t._v("repeating groups")]),t._v(" somehow (such as putting them inside curly braces),")]),t._v(" "),a("li",[t._v("you have identified what attribute is acting to "),a("em",[t._v("uniquely identify")]),t._v(" the entity as a whole (usually it's a single attribute), and")]),t._v(" "),a("li",[t._v("you have given a name to your entity")])]),t._v(" "),a("h2",{attrs:{id:"first-normal-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" First Normal Form")]),t._v(" "),a("p",[t._v("First Normal Form ("),a("strong",[t._v("1NF")]),t._v(") is all about "),a("em",[t._v("separating out "),a("strong",[t._v("repeating groups")])]),t._v(" of information.")]),t._v(" "),a("p",[t._v("If you found some repeating groups of data in 0NF, then this is the step where you separate out that repeating information into a new entity. If there are no repeating groups of data, then just state "),a("code",[t._v("No Changes")]),t._v(" for this step.")]),t._v(" "),a("p",[t._v("To document the 1NF changes, do the following:")]),t._v(" "),a("ol",[a("li",[t._v("Rewrite your 0NF entity ommiting the repeating data")]),t._v(" "),a("li",[t._v("Make a copy of the Primary Key attribute from the 0NF entity and place it as the first attribute in the new entity that we are creating. This will be our foreign key to the original entity.")]),t._v(" "),a("li",[t._v("List the repeating group's attributes in our new entity.")]),t._v(" "),a("li",[t._v("Identify the attribute(s) of the repeating group which act to uniquely identify that repeating group; pair that attribute with the foreign key to produce a composite primary key for the new entity.")]),t._v(" "),a("li",[t._v("Give the new entity a name.")])]),t._v(" "),a("h2",{attrs:{id:"second-normal-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#second-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Second Normal Form")]),t._v(" "),a("p",[t._v("Second Normal Form ("),a("strong",[t._v("2NF")]),t._v(") is all about "),a("em",[t._v("separating out "),a("strong",[t._v("partial dependencies")])]),t._v(".")]),t._v(" "),a("ol",[a("li",[t._v("Examine an entity with a composity key, and identify which non-primary key attributes have a dependency on only "),a("em",[t._v("part")]),t._v(" of the composite primary key. These are the attributes that will form our new entity.")]),t._v(" "),a("li",[t._v("Re-write the original entity without those partially dependent attributes.")]),t._v(" "),a("li",[a("em",[t._v("Copy")]),t._v(" down the partial primary key attribute to the new entity; make it the new entity's primary key.")]),t._v(" "),a("li",[t._v("Add the partially dependent attributes to the new entity.")]),t._v(" "),a("li",[t._v("Mark the partial primary key attribute in the original entity as a foreign key to our new entity.")])]),t._v(" "),a("h2",{attrs:{id:"third-normal-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#third-normal-form","aria-hidden":"true"}},[t._v("#")]),t._v(" Third Normal Form")]),t._v(" "),a("p",[t._v("Third Normal Form ("),a("strong",[t._v("3NF")]),t._v(") is all about "),a("em",[t._v("separating out "),a("strong",[t._v("transitive dependencies")])]),t._v(".")]),t._v(" "),a("ol",[a("li",[t._v('Examine all previous entities and look for any "hidden" or "embedded" entities inside the non-primary key attributes. At the same time, see if you can find which attribute uniquely identifies the set of embedded attributes inside that entity.')]),t._v(" "),a("li",[t._v("Separate out this set of attributes representing the embedded entity by making it a distinct entity in its own right. Give this entity a name; be sure to identify this new entity's primary key.")]),t._v(" "),a("li",[t._v("Re-write the original entity, and be sure to retain the attribute that identifies the newly generated entity; this will be your foreign key to that new entity.")])]),t._v(" "),a("h2",{attrs:{id:"keeping-it-all-straight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keeping-it-all-straight","aria-hidden":"true"}},[t._v("#")]),t._v(" Keeping it all Straight")]),t._v(" "),a("p",[t._v("A key part of walking through the normalization steps is to "),a("strong",[t._v("be consistent")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("When you give an entity a name, "),a("em",[t._v("keep that same name")]),t._v(" each time you modify the list of attributes in that entity.")]),t._v(" "),a("li",[t._v("When you name your attributes in "),a("strong",[t._v("0NF")]),t._v(", "),a("em",[t._v("key the same names")]),t._v(" for these attributes. If you are placing those attributes in a new entity, "),a("em",[t._v("do "),a("strong",[t._v("not")])]),t._v(" rename the attributes.")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("Never")])]),t._v(" change the primary key from a previously established entity. ("),a("em",[t._v("Note: There are some exceptions to this rule, but as a beginner, changing a primary key is a strong indicator that you're doing it wrong.")]),t._v(")")]),t._v(" "),a("li",[a("em",[t._v("Never")]),t._v(" change the foreign keys from previously established entities when re-writing them as modified entities.")]),t._v(" "),a("li",[t._v("Always self-check the relationship between your entities at each step of the normalization process. Make a quick note of the one-to-many relationships that should form as you create new entities at each step; the cardinal relationship between the entities should make sense.")])]),t._v(" "),a("h2",{attrs:{id:"a-simple-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-example","aria-hidden":"true"}},[t._v("#")]),t._v(" A Simple Example")]),t._v(" "),a("p",[t._v("Imagine a form that looks like this:")]),t._v(" "),a("p",[a("img",{attrs:{src:i(187),alt:"Sample Form"}})]),t._v(" "),a("h3",{attrs:{id:"_0nf-identifying-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0nf-identifying-metadata","aria-hidden":"true"}},[t._v("#")]),t._v(" 0NF - Identifying Metadata")]),t._v(" "),a("p",[a("strong",[t._v("Entity:")]),t._v(" ("),a("b",{staticClass:"pk"},[t._v("OrderNumber")]),t._v(", Date, CustomerNumber, FirstName, LastName, Address, City, Province, PostalCode, Phone, "),a("b",{staticClass:"rg"},[t._v("ItemNumber, Description, Quantity, Price, Amount")]),t._v(")")]),t._v(" "),a("h3",{attrs:{id:"_1nf-repeating-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1nf-repeating-groups","aria-hidden":"true"}},[t._v("#")]),t._v(" 1NF - Repeating Groups")]),t._v(" "),a("h3",{attrs:{id:"_2nf-partial-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2nf-partial-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" 2NF - Partial Dependencies")]),t._v(" "),a("h3",{attrs:{id:"_3nf-transitive-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3nf-transitive-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" 3NF - Transitive Dependencies")]),t._v(" "),a("h3",{attrs:{id:"erd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erd","aria-hidden":"true"}},[t._v("#")]),t._v(" ERD")]),t._v(" "),a("p",[a("img",{attrs:{src:i(186),alt:"Simple ERD"}})]),t._v(" "),a("h2",{attrs:{id:"a-complex-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-complex-example","aria-hidden":"true"}},[t._v("#")]),t._v(" A Complex Example")]),t._v(" "),a("hr")])},[],!1,null,null,null);e.default=r.exports},99:function(t,e,i){}}]);