/**
 * @imports
 */
import React, { Component } from 'react';
import DirectionTypes from './DirectionTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from "@expo/vector-icons/Feather";
/**
 * @styles
 */
export const NavigationIconsFont = {
    fontFamily: 'Navigation'
};

/**
 * Arrows
 * @type {{}}
 */
export default {

    /**
     * @common
     */
    watch: <MaterialCommunityIcons name="clock-outline" size={48} color="#7FBB2F" />,
    timer3: <MaterialCommunityIcons name="timer-3" size={48} color="#7FBB2F" />,
    timer10: <MaterialCommunityIcons name="timer-10" size={48} color="#7FBB2F" />,
    timerAv: <MaterialCommunityIcons name="timer-av" size={48} color="#7FBB2F" />,
    timer: <MaterialCommunityIcons name="timer" size={48} color="#7FBB2F" />,
    menu: <MaterialCommunityIcons name="clock-outline" size={48} color="menu" />,
    zoomOutMap: <MaterialCommunityIcons name="map-plus" size={48} color="menu" />,
    zoomOut: <MaterialCommunityIcons name="map-minus" size={48} color="menu" />,
    zoomIn: <MaterialCommunityIcons name="map-plus" size={48} color="menu" />,
    linearScale: <MaterialCommunityIcons name="map-marker-distance" size={48} color="menu" />,
    room: '\ue961',
    place: <MaterialCommunityIcons name="map-marker" size={48} color="#7FBB2F" />,
    zoomOutMap2: '\ue962',
    locationOff: '\ue963',
    locationCity: '\ue964',
    locationDisabled: '\ue965',
    locationSearching: '\ue966',
    myLocation: <MaterialCommunityIcons name="map-marker-radius" size={48} color="#7FBB2F" />,
    editLocation: '\ue968',
    addLocation: '\ue969',
    map: <MaterialCommunityIcons name="google-maps" size={48} color="#7FBB2F" />,
    directionsTransit: '\ue96b',
    directionsWalk: '\ue96c',
    directionsBike: '\ue96d',
    cardTravel: '\ue96e',
    home: <MaterialCommunityIcons name="home" size={48} color="#7FBB2F" />,
    directionsDriving: <MaterialCommunityIcons name="chevron-double-up" size={32} color="#00ABFF" />,
    navigate: <MaterialCommunityIcons name="navigation" size={48} color="white" />,
    target: <MaterialCommunityIcons name="target" size={48} color="#7FBB2F" />,
    location2: <MaterialCommunityIcons name="map-marker-outline" size={48} color="#7FBB2F" />,
    location3: <MaterialCommunityIcons name="map-marker-outline" size={48} color="#7FBB2F" />,
    compassDirection: <MaterialCommunityIcons name="compass" size={48} color="#7FBB2F" />,
    compassDot: null,

    /**
     * @arrows
     * turn-slight-left, turn-sharp-left, uturn-left, turn-left, turn-slight-right, turn-sharp-right,
     * uturn-right, turn-right, straight, ramp-left, ramp-right, merge, fork-left, fork-right, ferry,
     * ferry-train, roundabout-left, roundabout-right
     */
    arriveLeft: <MaterialCommunityIcons name="hand-pointing-right" size={48} color="#7FBB2F" />,
    arriveRight: <MaterialCommunityIcons name="hand-pointing-left" size={48} color="#7FBB2F" />,
    arriveStraight: <MaterialCommunityIcons name="chevron-double-up" size={48} color="#00ABFF" style={{ paddingTop: 30 }} />,
    arrive: <MaterialCommunityIcons name="star" size={48} color="#7FBB2F" />,
    close: <MaterialCommunityIcons name="close" size={48} color="#7FBB2F" />,
    continueLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    continueRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    continueSlightLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    continueSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    continueStraight: <MaterialCommunityIcons name="chevron-double-up" size={48} color="#00ABFF" style={{ paddingTop: 30 }} />,
    continueUturn: '\ue90a',
    continue: <MaterialCommunityIcons name="chevron-double-up" size={48} color="#00ABFF" style={{ paddingTop: 30 }} />,
    keepLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    keepRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    departLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    departRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    departStraight: <MaterialCommunityIcons name="chevron-double-up" size={48} color="#00ABFF" style={{ paddingTop: 30 }} />,
    depart: '\ue90f',
    endOfRoadLeft: <MaterialCommunityIcons name="arrow-collapse-left" size={48} color="#7FBB2F" />,
    endOfRoadRight: <MaterialCommunityIcons name="arrow-collapse-right" size={48} color="#7FBB2F" />,
    flag: <MaterialCommunityIcons name="flag-checkered" size={48} color="black" />,
    forkLeft: <MaterialCommunityIcons name="call-split" size={48} color="#7FBB2F" />,
    forkRight: <MaterialCommunityIcons name="call-split" size={48} color="#7FBB2F" />,
    forkSlightLeft: <MaterialCommunityIcons name="call-split" size={48} color="#7FBB2F" />,
    forkSlightRight: <MaterialCommunityIcons name="call-split" size={48} color="#7FBB2F" />,
    forkStraight: <MaterialCommunityIcons name="directions-fork" size={48} color="#7FBB2F" />,
    fork: <MaterialCommunityIcons name="directions-fork" size={48} color="#7FBB2F" />,
    invalidLeft: <MaterialCommunityIcons name="arrow-collapse-left" size={48} color="#7FBB2F" />,
    invalidRight: <MaterialCommunityIcons name="arrow-collapse-right" size={48} color="#7FBB2F" />,
    invalidSlightLeft: <MaterialCommunityIcons name="arrow-collapse-left" size={48} color="#7FBB2F" />,
    invalidSlightRight: <MaterialCommunityIcons name="arrow-collapse-right" size={48} color="#7FBB2F" />,
    invalidStraight: <MaterialCommunityIcons name="arrow-collapse-up" size={48} color="#7FBB2F" />,
    invalidUturn: <MaterialCommunityIcons name="alert-circle-outline" size={48} color="#7FBB2F" />,
    invalid: <MaterialCommunityIcons name="car-connected" size={48} color="#555" />,
    straight: <MaterialCommunityIcons name="chevron-double-up" size={48} color="#00ABFF" style={{ paddingTop: 30 }} />,
    merge: <MaterialCommunityIcons name="directions-fork" size={48} color="#7FBB2F" />,
    mergeLeft: <MaterialCommunityIcons name="directions-fork" size={48} color="#7FBB2F" />,
    mergeRight: <MaterialCommunityIcons name="directions-fork" size={48} color="#7FBB2F" />,
    mergeSlightLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    mergeSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    mergeStraight: <MaterialCommunityIcons name="arrow-up" size={48} color="#7FBB2F" />,
    newNameLeft: '\ue925',
    newNameRight: '\ue926',
    newNameSharpLeft: '\ue927',
    newNameSharpRight: '\ue928',
    newNameSlightLeft: '\ue929',
    newNameSlightRight: '\ue92a',
    newNameStraight: '\ue92b',
    notificaitonSharpRight: '\ue92c',
    notificationLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    notificationRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    notificationSharpLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    notificationSlightLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    notificationSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    notificationStraight: <MaterialCommunityIcons name="arrow-up" size={48} color="#7FBB2F" />,
    offRampLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    offRampRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    offRampSlightLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    offRampSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    rampLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    rampRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    rampSlightLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    rampSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    onRampLeft: <MaterialCommunityIcons name="arrow-top-left" size={48} color="#7FBB2F" />,
    onRampRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    onRampSharpLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    onRampSharpRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    onRampSlightLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    onRampSlightRight: <MaterialCommunityIcons name="arrow-top-right" size={48} color="#7FBB2F" />,
    onRampStraight: <MaterialCommunityIcons name="arrow-up" size={48} color="#7FBB2F" />,
    rotaryLeft: '\ue93e',
    rotaryRight: '\ue93f',
    rotarySharpLeft: '\ue940',
    rotarySharpRight: '\ue941',
    rotarySlightLeft: '\ue942',
    rotarySlightRight: '\ue943',
    rotaryStraight: '\ue944',
    rotary: <MaterialCommunityIcons name="refresh" size={48} color="#7FBB2F" />,
    roundaboutLeft: '\ue946',
    roundaboutRight: '\ue947',
    roundaboutSharpLeft: '\ue948',
    roundaboutSharpRight: '\ue949',
    roundaboutSlightLeft: '\ue94a',
    roundaboutSlightRight: '\ue94b',
    roundaboutStraight: '\ue94c',
    roundabout: <MaterialCommunityIcons name="refresh" size={48} color="#7FBB2F" />,
    turnLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    turnRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    turnSharpLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    turnSharpRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    turnSlightLeft: <MaterialCommunityIcons name="arrow-left" size={48} color="#7FBB2F" />,
    turnSlightRight: <MaterialCommunityIcons name="arrow-right" size={48} color="#7FBB2F" />,
    turnStraight: <MaterialCommunityIcons name="arrow-up" size={48} color="#7FBB2F" />,
    updown: <MaterialCommunityIcons name="
arrow-up-down-bold-outline" size={48} color="#7FBB2F" />,
};


