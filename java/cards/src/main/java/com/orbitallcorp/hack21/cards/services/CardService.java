package com.orbitallcorp.hack21.cards.services;

import com.orbitallcorp.hack21.cards.domains.Card;
import com.orbitallcorp.hack21.cards.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CardService {

    @Autowired
    CardRepository cardRepository;

    //findAll()
    public List<Card> findAll(){

        List<Card> cards = new ArrayList<Card>();

        for (Card card : cardRepository.findAll()) {
            cards.add(card);
        }

        return cards;
    }

    //save()
    public Card save(Card card){
        return cardRepository.save(card);
    }

    /*
    * update or PUT -id-
    * Uses the methods findById() and save() of this class to deliver a result.
    */
    public Card putCard (Long id, Card card) {
        (cardRepository.findById(id)).orElseThrow();
        return cardRepository.save(card);
    }

    //delete -id-
    public void deleteById(Long id){
        (cardRepository.findById(id)).orElseThrow();
        cardRepository.deleteById(id);
    }

    //findById() -id-
    public Card findById(Long id){
        return (cardRepository.findById(id)).orElseThrow();
    }

    //pagination and sorting - TODO



}
