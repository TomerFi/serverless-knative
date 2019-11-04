'use strict'

// TODO: make all of these functions configurable from the outside
// the user should be able to manipulate those

function getNamespace(service, stage) {
  return `sls-${service}-${stage}`
}

function getRepository(username, name) {
  return `${username}/${name}`.toLowerCase()
}

function getTag() {
  // TODO: this has to increment / be changed so that Knative picks up the changes
  return 'latest'
}

function getFuncName(service, funcName) {
  return `${service}-${funcName}`.toLowerCase()
}

function getEventName(sinkName, eventName) {
  return `${sinkName}-${eventName}`.toLowerCase()
}

function getFuncUrl(service, funcName, stage) {
  return `${getFuncName(service, funcName)}.${getNamespace(service, stage)}.example.com`
}

module.exports = {
  getNamespace,
  getRepository,
  getTag,
  getFuncName,
  getEventName,
  getFuncUrl
}
