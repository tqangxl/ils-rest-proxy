'use strict';

var server = require('../../server/server');

module.exports = function(soapService) {
  var soapDataSource = server.datasources.soapDS;
  var soapService;

  soapDataSource.once('connected', function () {
    // Create the model
    soapService = soapDataSource.createModel('soapService', {});
  });


  /**
   * AddMroListing
   * @param {AddMroListing} AddMroListing AddMroListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.AddMroListing = function(AddMroListing, callback) {
      soapService.AddMroListing(AddMroListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddPartListing
   * @param {AddPartListing} AddPartListing AddPartListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.AddPartListing = function(AddPartListing, callback) {
      soapService.AddPartListing(AddPartListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangeMroListing
   * @param {ChangeMroListing} ChangeMroListing ChangeMroListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.ChangeMroListing = function(ChangeMroListing, callback) {
      soapService.ChangeMroListing(ChangeMroListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangePartListing
   * @param {ChangePartListing} ChangePartListing ChangePartListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.ChangePartListing = function(ChangePartListing, callback) {
      soapService.ChangePartListing(ChangePartListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CheckInventoryLoad
   * @param {CheckInventoryLoad} CheckInventoryLoad CheckInventoryLoad
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.CheckInventoryLoad = function(CheckInventoryLoad, callback) {
      soapService.CheckInventoryLoad(CheckInventoryLoad, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetAllDataLegacy
   * @param {GetAllDataLegacy} GetAllDataLegacy GetAllDataLegacy
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetAllDataLegacy = function(GetAllDataLegacy, callback) {
      soapService.GetAllDataLegacy(GetAllDataLegacy, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetBatchSearchResults
   * @param {GetBatchSearchResults} GetBatchSearchResults GetBatchSearchResults
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetBatchSearchResults = function(GetBatchSearchResults, callback) {
      soapService.GetBatchSearchResults(GetBatchSearchResults, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCageContact
   * @param {GetCageContact} GetCageContact GetCageContact
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetCageContact = function(GetCageContact, callback) {
      soapService.GetCageContact(GetCageContact, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetGovernmentData
   * @param {GetGovernmentData} GetGovernmentData GetGovernmentData
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetGovernmentData = function(GetGovernmentData, callback) {
      soapService.GetGovernmentData(GetGovernmentData, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMROPartInventorySummary
   * @param {GetMROPartInventorySummary} GetMROPartInventorySummary GetMROPartInventorySummary
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetMROPartInventorySummary = function(GetMROPartInventorySummary, callback) {
      soapService.GetMROPartInventorySummary(GetMROPartInventorySummary, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMrosAvailability
   * @param {GetMrosAvailability} GetMrosAvailability GetMrosAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetMrosAvailability = function(GetMrosAvailability, callback) {
      soapService.GetMrosAvailability(GetMrosAvailability, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNewRfqsReceivedWithSenderInventory
   * @param {GetNewRfqsReceivedWithSenderInventory} GetNewRfqsReceivedWithSenderInventory GetNewRfqsReceivedWithSenderInventory
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetNewRfqsReceivedWithSenderInventory = function(GetNewRfqsReceivedWithSenderInventory, callback) {
      soapService.GetNewRfqsReceivedWithSenderInventory(GetNewRfqsReceivedWithSenderInventory, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNiinsByPart
   * @param {GetNiinsByPart} GetNiinsByPart GetNiinsByPart
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetNiinsByPart = function(GetNiinsByPart, callback) {
      soapService.GetNiinsByPart(GetNiinsByPart, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartInventorySummary
   * @param {GetPartInventorySummary} GetPartInventorySummary GetPartInventorySummary
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartInventorySummary = function(GetPartInventorySummary, callback) {
      soapService.GetPartInventorySummary(GetPartInventorySummary, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DeleteMroListing
   * @param {DeleteMroListing} DeleteMroListing DeleteMroListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.DeleteMroListing = function(DeleteMroListing, callback) {
      soapService.DeleteMroListing(DeleteMroListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DeletePartListing
   * @param {DeletePartListing} DeletePartListing DeletePartListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.DeletePartListing = function(DeletePartListing, callback) {
      soapService.DeletePartListing(DeletePartListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNewPartQuotesReceived
   * @param {GetNewPartQuotesReceived} GetNewPartQuotesReceived GetNewPartQuotesReceived
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetNewPartQuotesReceived = function(GetNewPartQuotesReceived, callback) {
      soapService.GetNewPartQuotesReceived(GetNewPartQuotesReceived, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNewRfqsReceived
   * @param {GetNewRfqsReceived} GetNewRfqsReceived GetNewRfqsReceived
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetNewRfqsReceived = function(GetNewRfqsReceived, callback) {
      soapService.GetNewRfqsReceived(GetNewRfqsReceived, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartInventoryStats
   * @param {GetPartInventoryStats} GetPartInventoryStats GetPartInventoryStats
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartInventoryStats = function(GetPartInventoryStats, callback) {
      soapService.GetPartInventoryStats(GetPartInventoryStats, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartListing
   * @param {GetPartListing} GetPartListing GetPartListing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartListing = function(GetPartListing, callback) {
      soapService.GetPartListing(GetPartListing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartOverhaulStats
   * @param {GetPartOverhaulStats} GetPartOverhaulStats GetPartOverhaulStats
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartOverhaulStats = function(GetPartOverhaulStats, callback) {
      soapService.GetPartOverhaulStats(GetPartOverhaulStats, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartPublishedPricing
   * @param {GetPartPublishedPricing} GetPartPublishedPricing GetPartPublishedPricing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartPublishedPricing = function(GetPartPublishedPricing, callback) {
      soapService.GetPartPublishedPricing(GetPartPublishedPricing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartQuoteHistory
   * @param {GetPartQuoteHistory} GetPartQuoteHistory GetPartQuoteHistory
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartQuoteHistory = function(GetPartQuoteHistory, callback) {
      soapService.GetPartQuoteHistory(GetPartQuoteHistory, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartQuotesByDate
   * @param {GetPartQuotesByDate} GetPartQuotesByDate GetPartQuotesByDate
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartQuotesByDate = function(GetPartQuotesByDate, callback) {
      soapService.GetPartQuotesByDate(GetPartQuotesByDate, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartQuotes
   * @param {GetPartQuotes} GetPartQuotes GetPartQuotes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartQuotes = function(GetPartQuotes, callback) {
      soapService.GetPartQuotes(GetPartQuotes, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartsAvailability
   * @param {GetPartsAvailability} GetPartsAvailability GetPartsAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartsAvailability = function(GetPartsAvailability, callback) {
      soapService.GetPartsAvailability(GetPartsAvailability, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPartStatsAndPricing
   * @param {GetPartStatsAndPricing} GetPartStatsAndPricing GetPartStatsAndPricing
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPartStatsAndPricing = function(GetPartStatsAndPricing, callback) {
      soapService.GetPartStatsAndPricing(GetPartStatsAndPricing, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPreferredVendorGroups
   * @param {GetPreferredVendorGroups} GetPreferredVendorGroups GetPreferredVendorGroups
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetPreferredVendorGroups = function(GetPreferredVendorGroups, callback) {
      soapService.GetPreferredVendorGroups(GetPreferredVendorGroups, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfqAttachedDocuments
   * @param {GetRfqAttachedDocuments} GetRfqAttachedDocuments GetRfqAttachedDocuments
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfqAttachedDocuments = function(GetRfqAttachedDocuments, callback) {
      soapService.GetRfqAttachedDocuments(GetRfqAttachedDocuments, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfqCompanyInformation
   * @param {GetRfqCompanyInformation} GetRfqCompanyInformation GetRfqCompanyInformation
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfqCompanyInformation = function(GetRfqCompanyInformation, callback) {
      soapService.GetRfqCompanyInformation(GetRfqCompanyInformation, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfqsReceivedByDateWithSenderInventory
   * @param {GetRfqsReceivedByDateWithSenderInventory} GetRfqsReceivedByDateWithSenderInventory GetRfqsReceivedByDateWithSenderInventory
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfqsReceivedByDateWithSenderInventory = function(GetRfqsReceivedByDateWithSenderInventory, callback) {
      soapService.GetRfqsReceivedByDateWithSenderInventory(GetRfqsReceivedByDateWithSenderInventory, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfqsReceivedByDate
   * @param {GetRfqsReceivedByDate} GetRfqsReceivedByDate GetRfqsReceivedByDate
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfqsReceivedByDate = function(GetRfqsReceivedByDate, callback) {
      soapService.GetRfqsReceivedByDate(GetRfqsReceivedByDate, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfqsSentByDate
   * @param {GetRfqsSentByDate} GetRfqsSentByDate GetRfqsSentByDate
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfqsSentByDate = function(GetRfqsSentByDate, callback) {
      soapService.GetRfqsSentByDate(GetRfqsSentByDate, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRfq
   * @param {GetRfq} GetRfq GetRfq
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetRfq = function(GetRfq, callback) {
      soapService.GetRfq(GetRfq, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetSupplierDirectory
   * @param {GetSupplierDirectory} GetSupplierDirectory GetSupplierDirectory
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.GetSupplierDirectory = function(GetSupplierDirectory, callback) {
      soapService.GetSupplierDirectory(GetSupplierDirectory, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * IsMROPartAvailable
   * @param {IsMROPartAvailable} IsMROPartAvailable IsMROPartAvailable
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.IsMROPartAvailable = function(IsMROPartAvailable, callback) {
      soapService.IsMROPartAvailable(IsMROPartAvailable, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * IsPartAvailable
   * @param {IsPartAvailable} IsPartAvailable IsPartAvailable
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.IsPartAvailable = function(IsPartAvailable, callback) {
      soapService.IsPartAvailable(IsPartAvailable, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SendPartQuotes
   * @param {SendPartQuotes} SendPartQuotes SendPartQuotes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SendPartQuotes = function(SendPartQuotes, callback) {
      soapService.SendPartQuotes(SendPartQuotes, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SendPartRfq
   * @param {SendPartRfq} SendPartRfq SendPartRfq
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SendPartRfq = function(SendPartRfq, callback) {
      soapService.SendPartRfq(SendPartRfq, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SendQuickRfq
   * @param {SendQuickRfq} SendQuickRfq SendQuickRfq
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SendQuickRfq = function(SendQuickRfq, callback) {
      soapService.SendQuickRfq(SendQuickRfq, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SendSearchlessPartRfq
   * @param {SendSearchlessPartRfq} SendSearchlessPartRfq SendSearchlessPartRfq
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SendSearchlessPartRfq = function(SendSearchlessPartRfq, callback) {
      soapService.SendSearchlessPartRfq(SendSearchlessPartRfq, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SendMessageBroadcast
   * @param {SendMessageBroadcast} SendMessageBroadcast SendMessageBroadcast
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SendMessageBroadcast = function(SendMessageBroadcast, callback) {
      soapService.SendMessageBroadcast(SendMessageBroadcast, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SubmitBatchSearch
   * @param {SubmitBatchSearch} SubmitBatchSearch SubmitBatchSearch
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SubmitBatchSearch = function(SubmitBatchSearch, callback) {
      soapService.SubmitBatchSearch(SubmitBatchSearch, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SubmitInventoryLoad
   * @param {SubmitInventoryLoad} SubmitInventoryLoad SubmitInventoryLoad
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  soapService.SubmitInventoryLoad = function(SubmitInventoryLoad, callback) {
      soapService.SubmitInventoryLoad(SubmitInventoryLoad, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }

  // Map to REST/HTTP
  soapService.remoteMethod('AddMroListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'AddMroListing',
      type: 'AddMroListing',
      description: 'AddMroListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'AddMroListingResponse',
      description: 'AddMroListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/AddMroListing'},
    description: 'AddMroListing'
  });

  soapService.remoteMethod('AddPartListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'AddPartListing',
      type: 'AddPartListing',
      description: 'AddPartListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'AddPartListingResponse',
      description: 'AddPartListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/AddPartListing'},
    description: 'AddPartListing'
  });

  soapService.remoteMethod('ChangeMroListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'ChangeMroListing',
      type: 'ChangeMroListing',
      description: 'ChangeMroListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'ChangeMroListingResponse',
      description: 'ChangeMroListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/ChangeMroListing'},
    description: 'ChangeMroListing'
  });

  soapService.remoteMethod('ChangePartListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'ChangePartListing',
      type: 'ChangePartListing',
      description: 'ChangePartListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'ChangePartListingResponse',
      description: 'ChangePartListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/ChangePartListing'},
    description: 'ChangePartListing'
  });

  soapService.remoteMethod('CheckInventoryLoad', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'CheckInventoryLoad',
      type: 'CheckInventoryLoad',
      description: 'CheckInventoryLoad',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'CheckInventoryLoadResponse',
      description: 'CheckInventoryLoadResponse',
      root: true
    }],
    http: {verb: 'post', path: '/CheckInventoryLoad'},
    description: 'CheckInventoryLoad'
  });

  soapService.remoteMethod('GetAllDataLegacy', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetAllDataLegacy',
      type: 'GetAllDataLegacy',
      description: 'GetAllDataLegacy',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetAllDataLegacyResponse',
      description: 'GetAllDataLegacyResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetAllDataLegacy'},
    description: 'GetAllDataLegacy'
  });

  soapService.remoteMethod('GetBatchSearchResults', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetBatchSearchResults',
      type: 'GetBatchSearchResults',
      description: 'GetBatchSearchResults',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetBatchSearchResultsResponse',
      description: 'GetBatchSearchResultsResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetBatchSearchResults'},
    description: 'GetBatchSearchResults'
  });

  soapService.remoteMethod('GetCageContact', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [ {arg: 'GetCageContact',
      type: 'GetCageContact',
      description: 'GetCageContact',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetCageContactResponse',
      description: 'GetCageContactResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetCageContact'},
    description: 'GetCageContact'
  });

  soapService.remoteMethod('GetGovernmentData', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetGovernmentData',
      type: 'GetGovernmentData',
      description: 'GetGovernmentData',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetGovernmentDataResponse',
      description: 'GetGovernmentDataResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetGovernmentData'},
    description: 'GetGovernmentData'
  });

  soapService.remoteMethod('GetMROPartInventorySummary', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetMROPartInventorySummary',
      type: 'GetMROPartInventorySummary',
      description: 'GetMROPartInventorySummary',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetMROPartInventorySummaryResponse',
      description: 'GetMROPartInventorySummaryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetMROPartInventorySummary'},
    description: 'GetMROPartInventorySummary'
  });

  soapService.remoteMethod('GetMrosAvailability', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetMrosAvailability',
      type: 'GetMrosAvailability',
      description: 'GetMrosAvailability',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetMrosAvailabilityResponse',
      description: 'GetMrosAvailabilityResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetMrosAvailability'},
    description: 'GetMrosAvailability'
  });

  soapService.remoteMethod('GetNewRfqsReceivedWithSenderInventory', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetNewRfqsReceivedWithSenderInventory',
      type: 'GetNewRfqsReceivedWithSenderInventory',
      description: 'GetNewRfqsReceivedWithSenderInventory',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetNewRfqsReceivedWithSenderInventoryResponse',
      description: 'GetNewRfqsReceivedWithSenderInventoryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetNewRfqsReceivedWithSenderInventory'},
    description: 'GetNewRfqsReceivedWithSenderInventory'
  });

  soapService.remoteMethod('GetNiinsByPart', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetNiinsByPart',
      type: 'GetNiinsByPart',
      description: 'GetNiinsByPart',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetNiinsByPartResponse',
      description: 'GetNiinsByPartResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetNiinsByPart'},
    description: 'GetNiinsByPart'
  });

  soapService.remoteMethod('GetPartInventorySummary', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartInventorySummary',
      type: 'GetPartInventorySummary',
      description: 'GetPartInventorySummary',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartInventorySummaryResponse',
      description: 'GetPartInventorySummaryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartInventorySummary'},
    description: 'GetPartInventorySummary'
  });

  soapService.remoteMethod('DeleteMroListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'DeleteMroListing',
      type: 'DeleteMroListing',
      description: 'DeleteMroListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'DeleteMroListingResponse',
      description: 'DeleteMroListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/DeleteMroListing'},
    description: 'DeleteMroListing'
  });

  soapService.remoteMethod('DeletePartListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'DeletePartListing',
      type: 'DeletePartListing',
      description: 'DeletePartListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'DeletePartListingResponse',
      description: 'DeletePartListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/DeletePartListing'},
    description: 'DeletePartListing'
  });

  soapService.remoteMethod('GetNewPartQuotesReceived', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetNewPartQuotesReceived',
      type: 'GetNewPartQuotesReceived',
      description: 'GetNewPartQuotesReceived',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetNewPartQuotesReceivedResponse',
      description: 'GetNewPartQuotesReceivedResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetNewPartQuotesReceived'},
    description: 'GetNewPartQuotesReceived'
  });

  soapService.remoteMethod('GetNewRfqsReceived', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetNewRfqsReceived',
      type: 'GetNewRfqsReceived',
      description: 'GetNewRfqsReceived',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetNewRfqsReceivedResponse',
      description: 'GetNewRfqsReceivedResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetNewRfqsReceived'},
    description: 'GetNewRfqsReceived'
  });

  soapService.remoteMethod('GetPartInventoryStats', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartInventoryStats',
      type: 'GetPartInventoryStats',
      description: 'GetPartInventoryStats',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartInventoryStatsResponse',
      description: 'GetPartInventoryStatsResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartInventoryStats'},
    description: 'GetPartInventoryStats'
  });

  soapService.remoteMethod('GetPartListing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartListing',
      type: 'GetPartListing',
      description: 'GetPartListing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartListingResponse',
      description: 'GetPartListingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartListing'},
    description: 'GetPartListing'
  });

  soapService.remoteMethod('GetPartOverhaulStats', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [ {arg: 'GetPartOverhaulStats',
      type: 'GetPartOverhaulStats',
      description: 'GetPartOverhaulStats',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartOverhaulStatsResponse',
      description: 'GetPartOverhaulStatsResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartOverhaulStats'},
    description: 'GetPartOverhaulStats'
  });

  soapService.remoteMethod('GetPartPublishedPricing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartPublishedPricing',
      type: 'GetPartPublishedPricing',
      description: 'GetPartPublishedPricing',
      required: true,
      http: {source: 'body'}}],
      returns: [{
        arg: 'data',
        type: 'GetPartPublishedPricingResponse',
        description: 'GetPartPublishedPricingResponse',
        root: true
      }],
      http: {verb: 'post', path: '/GetPartPublishedPricing'},
      description: 'GetPartPublishedPricing'
  });

  soapService.remoteMethod('GetPartQuoteHistory', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartQuoteHistory',
      type: 'GetPartQuoteHistory',
      description: 'GetPartQuoteHistory',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartQuoteHistoryResponse',
      description: 'GetPartQuoteHistoryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartQuoteHistory'},
    description: 'GetPartQuoteHistory'
  });

  soapService.remoteMethod('GetPartQuotesByDate', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartQuotesByDate',
      type: 'GetPartQuotesByDate',
      description: 'GetPartQuotesByDate',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartQuotesByDateResponse',
      description: 'GetPartQuotesByDateResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartQuotesByDate'},
    description: 'GetPartQuotesByDate'
  });

  soapService.remoteMethod('GetPartQuotes', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartQuotes',
      type: 'GetPartQuotes',
      description: 'GetPartQuotes',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartQuotesResponse',
      description: 'GetPartQuotesResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartQuotes'},
    description: 'GetPartQuotes'
  });

  soapService.remoteMethod('GetPartsAvailability', {
    isStatic: true,
    produces: [{
      produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartsAvailability',
      type: 'GetPartsAvailability',
      description: 'GetPartsAvailability',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartsAvailabilityResponse',
      description: 'GetPartsAvailabilityResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartsAvailability'},
    description: 'GetPartsAvailability'
  });

  soapService.remoteMethod('GetPartStatsAndPricing', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPartStatsAndPricing',
      type: 'GetPartStatsAndPricing',
      description: 'GetPartStatsAndPricing',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPartStatsAndPricingResponse',
      description: 'GetPartStatsAndPricingResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPartStatsAndPricing'},
    description: 'GetPartStatsAndPricing'
  });

  soapService.remoteMethod('GetPreferredVendorGroups', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetPreferredVendorGroups',
      type: 'GetPreferredVendorGroups',
      description: 'GetPreferredVendorGroups',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetPreferredVendorGroupsResponse',
      description: 'GetPreferredVendorGroupsResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetPreferredVendorGroups'},
    description: 'GetPreferredVendorGroups'
  });

  soapService.remoteMethod('GetRfqAttachedDocuments', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfqAttachedDocuments',
      type: 'GetRfqAttachedDocuments',
      description: 'GetRfqAttachedDocuments',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqAttachedDocumentsResponse',
      description: 'GetRfqAttachedDocumentsResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfqAttachedDocuments'},
    description: 'GetRfqAttachedDocuments'
  });

  soapService.remoteMethod('GetRfqCompanyInformation', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfqCompanyInformation',
      type: 'GetRfqCompanyInformation',
      description: 'GetRfqCompanyInformation',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqCompanyInformationResponse',
      description: 'GetRfqCompanyInformationResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfqCompanyInformation'},
    description: 'GetRfqCompanyInformation'
  });

  soapService.remoteMethod('GetRfqsReceivedByDateWithSenderInventory', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfqsReceivedByDateWithSenderInventory',
      type: 'GetRfqsReceivedByDateWithSenderInventory',
      description: 'GetRfqsReceivedByDateWithSenderInventory',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqsReceivedByDateWithSenderInventoryResponse',
      description: 'GetRfqsReceivedByDateWithSenderInventoryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfqsReceivedByDateWithSenderInventory'},
    description: 'GetRfqsReceivedByDateWithSenderInventory'
  });

  soapService.remoteMethod('GetRfqsReceivedByDate', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfqsReceivedByDate',
      type: 'GetRfqsReceivedByDate',
      description: 'GetRfqsReceivedByDate',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqsReceivedByDateResponse',
      description: 'GetRfqsReceivedByDateResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfqsReceivedByDate'},
    description: 'GetRfqsReceivedByDate'
  });

  soapService.remoteMethod('GetRfqsSentByDate', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfqsSentByDate',
      type: 'GetRfqsSentByDate',
      description: 'GetRfqsSentByDate',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqsSentByDateResponse',
      description: 'GetRfqsSentByDateResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfqsSentByDate'},
    description: 'GetRfqsSentByDate'
  });

  soapService.remoteMethod('GetRfq', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetRfq',
      type: 'GetRfq',
      description: 'GetRfq',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetRfqResponse',
      description: 'GetRfqResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetRfq'},
    description: 'GetRfq'
  });

  soapService.remoteMethod('GetSupplierDirectory', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'GetSupplierDirectory',
      type: 'GetSupplierDirectory',
      description: 'GetSupplierDirectory',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'GetSupplierDirectoryResponse',
      description: 'GetSupplierDirectoryResponse',
      root: true
    }],
    http: {verb: 'post', path: '/GetSupplierDirectory'},
    description: 'GetSupplierDirectory'
  });

  soapService.remoteMethod('IsMROPartAvailable', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'IsMROPartAvailable',
      type: 'IsMROPartAvailable',
      description: 'IsMROPartAvailable',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'IsMROPartAvailableResponse',
      description: 'IsMROPartAvailableResponse',
      root: true
    }],
    http: {verb: 'post', path: '/IsMROPartAvailable'},
    description: 'IsMROPartAvailable'
  });

  soapService.remoteMethod('IsPartAvailable', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'IsPartAvailable',
      type: 'IsPartAvailable',
      description: 'IsPartAvailable',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'IsPartAvailableResponse',
      description: 'IsPartAvailableResponse',
      root: true
    }],
    http: {verb: 'post', path: '/IsPartAvailable'},
    description: 'IsPartAvailable'
  });

  soapService.remoteMethod('SendPartQuotes', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SendPartQuotes',
      type: 'SendPartQuotes',
      description: 'SendPartQuotes',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SendPartQuotesResponse',
      description: 'SendPartQuotesResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SendPartQuotes'},
    description: 'SendPartQuotes'
  });

  soapService.remoteMethod('SendPartRfq', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SendPartRfq',
      type: 'SendPartRfq',
      description: 'SendPartRfq',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SendPartRfqResponse',
      description: 'SendPartRfqResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SendPartRfq'},
    description: 'SendPartRfq'
  });

  soapService.remoteMethod('SendQuickRfq', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SendQuickRfq',
      type: 'SendQuickRfq',
      description: 'SendQuickRfq',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SendQuickRfqResponse',
      description: 'SendQuickRfqResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SendQuickRfq'},
    description: 'SendQuickRfq'
  });

  soapService.remoteMethod('SendSearchlessPartRfq', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SendSearchlessPartRfq',
      type: 'SendSearchlessPartRfq',
      description: 'SendSearchlessPartRfq',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SendSearchlessPartRfqResponse',
      description: 'SendSearchlessPartRfqResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SendSearchlessPartRfq'},
    description: 'SendSearchlessPartRfq'
  });

  soapService.remoteMethod('SendMessageBroadcast', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SendMessageBroadcast',
      type: 'SendMessageBroadcast',
      description: 'SendMessageBroadcast',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SendMessageBroadcastResponse',
      description: 'SendMessageBroadcastResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SendMessageBroadcast'},
    description: 'SendMessageBroadcast'
  });

  soapService.remoteMethod('SubmitBatchSearch', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SubmitBatchSearch',
      type: 'SubmitBatchSearch',
      description: 'SubmitBatchSearch',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SubmitBatchSearchResponse',
      description: 'SubmitBatchSearchResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SubmitBatchSearch'},
    description: 'SubmitBatchSearch'
  });

  soapService.remoteMethod('SubmitInventoryLoad', {
    isStatic: true,
    produces: [
    {produces: 'application/json'},
    {produces: 'application/xml'}
    ],
    accepts: [{
      arg: 'SubmitInventoryLoad',
      type: 'SubmitInventoryLoad',
      description: 'SubmitInventoryLoad',
      required: true,
      http: {source: 'body'}
    }],
    returns: [{
      arg: 'data',
      type: 'SubmitInventoryLoadResponse',
      description: 'SubmitInventoryLoadResponse',
      root: true
    }],
    http: {verb: 'post', path: '/SubmitInventoryLoad'},
    description: 'SubmitInventoryLoad'
  });
}
