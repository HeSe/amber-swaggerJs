Smalltalk createPackage: 'Swagger-PetStore-Client'!
Object subclass: #Category
	instanceVariableNames: 'name id'
	package: 'Swagger-PetStore-Client'!

Object subclass: #Order
	instanceVariableNames: 'shipDate status name quantity id petId'
	package: 'Swagger-PetStore-Client'!

Object subclass: #Pet
	instanceVariableNames: 'status tags photoUrls name category id status'
	package: 'Swagger-PetStore-Client'!

!Pet methodsFor: 'not yet classified'!

initialize

	photoUrls := OrderedCollection new.
	tags := OrderedCollection new.
! !

Object subclass: #PetStoreApiRequestContext
	instanceVariableNames: 'petId name status'
	package: 'Swagger-PetStore-Client'!

!PetStoreApiRequestContext methodsFor: 'not yet classified'!

initialize

	petId  := 0.
	name  := String new.
	status := ''
! !

SwaggerApi subclass: #SwaggerPetStoreApi
	instanceVariableNames: ''
	package: 'Swagger-PetStore-Client'!

!SwaggerPetStoreApi class methodsFor: 'not yet classified'!

apiDocUrl

	^'http://petstore.swagger.io/api/api-docs'
! !

Object subclass: #Tag
	instanceVariableNames: 'name id'
	package: 'Swagger-PetStore-Client'!

Object subclass: #User
	instanceVariableNames: 'id firstName username lastName email password phone userStatus'
	package: 'Swagger-PetStore-Client'!

